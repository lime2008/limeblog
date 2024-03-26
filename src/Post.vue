<script setup lang="ts">
import { useRoute , useRouter } from 'vue-router'
import * as config from './config';
import generator from './utils/markdown_generate'
import { ref } from 'vue'
const route = useRoute();
interface Item {
    pid: string;
    file: string;
}
const findFileByPid = (al: Item[], currentPid: string): string | undefined => {
    let foundFile: string | undefined;

    al.forEach(item => {
        console.log(item.pid,currentPid)
        if (item.pid === currentPid) {
            foundFile = item.file;
        }
    });

    return foundFile;
}

const getPostfile = () => {
    const file = findFileByPid(config.posts , String(route.params.pid));
    if(file == ''){
        console.log('not found')
        useRouter().push({name : '404'})
    }
    return file
}
const loadMarkdownFile = async (file : string) => {
    const response = await fetch(file);
    const markdownContent = await response.text();
    return markdownContent
}

const translateFile = (markdownContent : string) => {
    return generator.markdownToHtml(markdownContent);
}

const setup = async () => {
    const file = getPostfile();
    if(file == undefined){
        console.log('not found')
        useRouter().push({name : '404'})
        return
    }

    content.value = translateFile(await loadMarkdownFile(file));
    console.log(1)

}
const content = ref('')
setup()
</script>

<template>
    <div v-html="content"></div>



</template>

<style scoped>

</style> 
