// messageBox.ts

import { createVNode, render, TransitionGroup } from 'vue';

interface MessageBox {
  id: number;
  message: string;
  type: string;
  fadeOut: boolean;
}

let messageId = 0; // 初始消息框的ID
const maxMessageBoxes = 3; // 最大消息框数量
const timeouts: { [id: number]: NodeJS.Timeout } = {}; // 用于存储每个消息框的 setTimeout

export const msg = {
  boxes: [] as MessageBox[],

  create(message: string, type: string) {
    if (msg.boxes.length >= maxMessageBoxes) {
      const idToRemove = msg.boxes[0].id; // 获取最早的消息框的 ID
      msg.remove(idToRemove); // 移除最早的消息框
    }

    const newId = messageId++; // 为新消息框生成唯一ID
    msg.boxes.push({ id: newId, message, type, fadeOut: false });
    msg.render();

    msg.autoDismiss(newId);

    return newId; // 返回新消息框的ID
  },

  remove(id: number) {
    const index = msg.boxes.findIndex(box => box.id === id);
    if (index !== -1) {
      clearTimeout(timeouts[id]); // 清除对应消息框的 setTimeout
      delete timeouts[id]; // 从对象中移除对应的 setTimeout
      msg.boxes.splice(index, 1);
      msg.render();
    }
  },

  autoDismiss(id: number) {
    timeouts[id] = setTimeout(() => {
      msg.fadeOut(id);
    }, 800);
  },

  fadeOut(id: number) {
    const index = msg.boxes.findIndex(box => box.id === id);
    if (index !== -1) {
      msg.boxes[index].fadeOut = true; // 设置 fadeOut 标志为 true
      msg.render();

      setTimeout(() => {
        msg.remove(id);
      }, 100); // Wait for the fade-out animation duration
    }
  },

  render() {
    const messageBoxes = msg.boxes.map(box =>
      createVNode('div', {
        class: ['message_box', `${box.type}_box`, { 'fade_out_box': box.fadeOut }],
        key: box.id,
      }, box.message)
    );

    const container = createVNode('div', { class: 'message_box_container' }, [
      createVNode(TransitionGroup, { name: 'fade' }, {
        default: () => messageBoxes
      })
    ]);

    let msgContainer = document.getElementById('message_container');
    if (!msgContainer) {
      msgContainer = document.createElement('div');
      msgContainer.id = 'message_container';
      document.body.appendChild(msgContainer);
    }

    render(container, msgContainer);
  },
};