<template>
    <div class="emoticons-container">
        <div class="select" @click="seleccionarEmoticon('frown')" :class="{ selected: emoticonSeleccionado === 'frown' }">
            <font-awesome-icon :icon="['fas', 'fa-face-frown']" />
        </div>
        <div class="select" @click="seleccionarEmoticon('smile')" :class="{ selected: emoticonSeleccionado === 'smile' }">
            <font-awesome-icon :icon="['fas', 'fa-face-smile']" />
        </div>
        <div class="select" @click="seleccionarEmoticon('angry')" :class="{ selected: emoticonSeleccionado === 'angry' }">
            <font-awesome-icon :icon="['fas', 'face-angry']" />
        </div>
        <div class="select" @click="seleccionarEmoticon('surprise')" :class="{ selected: emoticonSeleccionado === 'surprise' }">
            <font-awesome-icon :icon="['fas', 'face-surprise']" />
        </div>
        <div class="select" @click="seleccionarEmoticon('sad-cry')" :class="{ selected: emoticonSeleccionado === 'sad-cry' }">
            <font-awesome-icon :icon="['fas', 'face-sad-cry']" />
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref,defineEmits } from 'vue';

    const emoticonSeleccionado = ref('');

    const emits = defineEmits(["selectedEmoticon"])

    const seleccionarEmoticon = (emoticon:string) => {
        emoticonSeleccionado.value = emoticon;
        emits("selectedEmoticon",emoticon)
    };
</script>

<style scoped>
.emoticons-container {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  }
    .selected {
        color: green;
        
    }
    .select{
        cursor: pointer;
        margin-right: 10px;
    }
</style>