<template>
   <div id="app">
    <header>
      <img src="@/img/myJournal.png" alt="My Journal Logo">
      <h1>My Journal</h1>
    </header>
    <main>
      <PostText @selectedEmoticonFromFather="printEmoticon" @selectedTextFromFather="printText"/>
      <div v-for="(message, index) in messages" :key="index" class="post-container">
        <div class="post">
          <div class="emoticon">
            <font-awesome-icon :icon="['fas', 'fa-face-' + message.emoji]" class="emoji-icon" />
          </div>
          <div class="message-content">
            <p class="message-text">{{ message.text }}</p>
            <p class="post-time">{{ formatPostTime(message.time) }}</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
  import PostText from './components/PostText.vue';
  import {ref, type Ref} from 'vue'

  interface message {
    emoji:string,
    text: string,
    time: string,
  }

  const messages: Ref<Array<message>> = ref([]);

  const printEmoticon = (emoticon:string)=>{
    const newMessage = {emoji:emoticon, text: "",time:getCurrentTime()}
    messages.value.push(newMessage)
  }

  const printText = (text:string)=>{
    const lastMessage = messages.value[messages.value.length - 1];
    if (lastMessage) {
      lastMessage.text = text;
    }
  }

  const getCurrentTime = (): string => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const formatPostTime = (time: string): string => {
    return `Posted at ${time}`;
  };
</script>
  
<style scoped>
 #app {
    text-align: center;
    padding: 20px;
  }

  header {
    margin-bottom: 20px;
  }

  img {
    width: 50px;
  }

  main {
    max-width: 600px;
    margin: 0 auto;
  }

  .post-container {
    margin-top: 20px;
  }


  .emoticon {
    margin-right: 10px;
  }

  .emoji-icon {
    font-size: 24px;
  }

  .post {
    display: flex;
    align-items: flex-start;
    background-color: #f0f0f0;
    border-radius: 5px;
    padding: 10px;
    overflow: hidden; 
    flex-wrap: wrap;
  }

  .message-content {
    flex: 1;
    flex-basis: 0;
    width: 60%;
  }

  .message-text {
    margin: 0;
    word-wrap: break-word;
    max-width: 100%;
    white-space: pre-wrap;
    overflow: hidden;
    max-height: 200px;
  }

  .post-time {
    color: #888;
    font-size: 12px;
  }

</style>
