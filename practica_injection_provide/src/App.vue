<template>
  <div class="app-container">
    <div class="currency">
      <h1>{{ message}}</h1>
      <input type="text" v-model="message">
      <button @click="showAlert">Place Order</button>
      <h3>Currency: <select id="moneda" v-model="monedaSeleccionada">
                      <option value="$">Dollars($)</option>
                      <option value="€">Euros(€)</option>
                    </select>
      </h3>
    </div>
    <div class="product-list">
      <producteComponent v-for="producte in productes" :key="producte.name" :name="producte.name" :price="producte.price" @afegir="afegir">
      </producteComponent>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {ref, type Ref, provide, onMounted} from 'vue';
  import producteComponent from './components/producteComponent.vue'

  const message:Ref<string> = ref('')
  const showAlert = () => {
    window.alert(`Your order has been placed! ${message.value}`)
  }
  const monedaSeleccionada:Ref<string> = ref('')


  interface food {
    name: string,
    price: number
  }

  const productes:Array<food> = [
    {name: "Hamburguer",price: 5.00},
    {name: "Cheeseburguer",price: 6.00},
    {name: "Impossible Burguer",price: 7.00},
    {name: "Fries",price: 5.00}
  ] 

  provide('monedaSeleccionada',monedaSeleccionada)
  
  const cistella:Ref<Array<string>> = ref<string[]>([]);

  const afegir = (msg:string) => {
    console.log(msg)
    cistella.value.push(msg)

    console.log(cistella.value)
    let llistatProductes = cistella.value.join (', ')
    alert(`Has afegit ${msg} a la cistella \nLa teva llista és: ${llistatProductes}`)

  }  


  onMounted(()=>{
    monedaSeleccionada.value = '$'
  });
</script>

<style scoped>
  .app-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .currency{
    text-align: center;
    margin-bottom: 20px;
  }
  
</style>
