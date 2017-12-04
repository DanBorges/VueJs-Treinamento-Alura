<template>
  <img class = "imagem-responsiva" :src = "url" :alt = "titulo">
</template>

<script>
  export default{
    //Recebe o que foi definido em home pela tag <imagem-responsiva>
    props:{
      url:{
        //Tipo String e obrigatória
        type: String,
        Required: true
      },

      titulo:{
        //Tipo String e obrigatória
        type: String,
        Required: true
      }
    },
  }
</script>

<style scoped>
  .imagem-responsiva{
    width:100%;
    height: 150px;
    
  }
</style>