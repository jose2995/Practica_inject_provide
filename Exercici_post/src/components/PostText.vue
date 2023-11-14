<template>
    <div class="postContainer">
        <textarea class="textarea" rows="10" cols="50" 
        v-model="text" @input="limitCharacters"></textarea>
        <Emoticons @selectedEmoticon="receiveEmoticon"/>
        <p>{{ numberCharacters }}/{{ maxCharacters }}</p>
        <button type="submit" @click="share(emoticonRecived,text)">Remember</button>
    </div>
</template>

<script lang="ts" setup>
    import Emoticons from './Emoticons.vue'
    import {type Ref, ref, computed, defineEmits} from 'vue'

    const text:Ref<string> = ref('')
    const maxCharacters:number = 280
    let emoticonRecived:string = ""
    const emits = defineEmits(['selectedEmoticonFromFather',"selectedTextFromFather"])

    const limitCharacters = ()=>{
        if(numberCharacters.value>=maxCharacters){
            text.value = text.value.substring(0,maxCharacters)
        }

    }

    const numberCharacters:Ref<number> = computed(()=>{return text.value.length})

    const receiveEmoticon = (emoticon:string)=>{
        emoticonRecived = "" + emoticon
    }

    const share = (emoticon:string,text:string)=>{
        // Se emiten 2 emits diferentes seleccionando cada uno de 
        // manera individual
        emits("selectedEmoticonFromFather",emoticon)
        emits("selectedTextFromFather",text)
    }

</script>

<style scoped>
    .postContainer {
    max-width: 600px;
    margin: 0 auto;
  }

  .textarea {
    width: 100%;
    margin-bottom: 10px;
  }
</style>