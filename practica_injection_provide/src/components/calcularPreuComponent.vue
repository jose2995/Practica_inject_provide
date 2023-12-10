<template>
    <h3>{{ monedaSeleccionada }}</h3>
</template>

<script lang="ts" setup>
    import {inject} from 'vue';

    const monedaSeleccionada = inject<string>('monedaSeleccionada')
</script>

<style scoped>

</style>