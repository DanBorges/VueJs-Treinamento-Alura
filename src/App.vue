<template>
  <div class = "corpo">    
    <meu-menu :rotas="routes"/>
    <transition name = "pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  //Importando componente Menu, onde vai ser passado para ele um array de rotas através do bind(:)
  import Menu from './components/shared/menu/Menu.vue';
  import { routes } from './routes';

  export default{
    components:{
      //Definindo componente Menu
      'meu-menu' : Menu
    },
    data(){
      return{
        routes: routes.filter(route => route.menu)
      }
    }
  }
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

.pagina-fade-enter, .pagina-leave-active{
  opacity:0;
}

  .pagina-enter-active, .pagina-leave-active{
    transition: opacity 0.7s;
  }
</style>
