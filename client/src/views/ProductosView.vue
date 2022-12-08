<template>
    <Productos></Productos>
  </template>
  
  <script>
  // @ is an alias to /src
  import Productos from '@/components/Productos.vue'
  
  export default {
    name: 'ProductosView',
    components: {
        Productos
    }
  }
  </script>