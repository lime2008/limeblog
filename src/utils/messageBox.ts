// messageBox.ts

import { createVNode, render, TransitionGroup } from 'vue';

interface MessageBox {
  id: number;
  message: string;
  type: string;
  fadeOut: boolean;
}

let messageId = 0; // 初始消息框的ID

export const msg = {
  boxes: [] as MessageBox[],

  create(message: string, type: string) {
    const newId = messageId++; // 为新消息框生成唯一ID
    msg.boxes.push({ id: newId, message, type, fadeOut: false });
    msg.render();

    msg.autoDismiss(newId);
  },

  remove(id: number) {
    const index = msg.boxes.findIndex(box => box.id === id);
    if (index !== -1) {
      msg.boxes.splice(index, 1);
      msg.render();
    }
  },

  autoDismiss(id: number) {
    setTimeout(() => {
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