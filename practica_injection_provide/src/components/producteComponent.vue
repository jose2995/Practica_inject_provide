<template>
    <div class="product-container">
        <h3>{{ props.name }} {{ props.price}} <calcularPreu/> <button @click="addToCart">Add to Cart</button></h3>
    </div>
</template>

<script lang="ts" setup>
    import {nextTick, defineProps, ref, type Ref} from 'vue';
    import calcularPreu from './calcularPreuComponent.vue'
    
    const props = defineProps({
        name:{
            type: String,
            required: true
        },
        price:{
            type: Number,
            required: true
        }
    })

    const emits = defineEmits(['afegir'])
     

    const addToCart = async ()=>{
        emits("afegir",props.name)
       
        await nextTick();
        
    }
    

</script>

<style scoped>
    .product-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
        height: 20px;
    }
    h3 {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: max-content;
    }
    button{
        margin-left: 10px;
        padding: 0;
        height: 20px;

    }


</style>