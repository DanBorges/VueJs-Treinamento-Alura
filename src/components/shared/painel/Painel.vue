<template>
  <div class ="painel">
    <div class="panel panel-default">
        <div class="panel-heading">
          <button  @click="disparaAcaoJanela()" :title ="title" type="button" class="btn btn-default btn-xs"style="float:right;width:10%;height:30px;margin-right:8px;">{{ minimizaOuMaximiza }}</button>

            <h2>{{ titulo }}</h2>  
        </div>
        <div class="panel-body">
          <transition name = "painel-fade">
            <div calss = "painel-conteudo" v-show = "visivel">
              <slot></slot><!-- fim painel-corpo -->
            </div>
          </transition>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:{
      titulo:{
        required:true,
        type: String
      }
    }, 
    data(){
      return{
        visivel:true,
        minimizaOuMaximiza: '-',
        title: 'minimizar'
      }
    },

    methods:{
      disparaAcaoJanela(){
        if(this.visivel == true){
          this.visivel = false;
          this.minimizaOuMaximiza = '+';
          this.title = 'maximizar';
        }
        else if(this.visivel ==false){
            this.visivel = true;
            this.minimizaOuMaximiza = '-';
            this.title = 'minimizar';
        }
      }
  },

  }

</script>

<style scoped>

  /* estilo do painel */ 

   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 5px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }

  .painel .painel-titulo {
    text-align: center;
    border: solid 2px;
    background: lightblue;
    margin: 0 0 15px 0;
    padding: 10px;
    text-transform: uppercase;
  }

  *{
    box-shadow:5px 5px 5px
  }

.painel-fade-enter, .painel-fade-leave-active{
  opacity:0;
}

.painel-fade-enter-active, .painel-fade-leave-active{
  transition: opacity 0.7s;
}


.painel-conteudo {
    overflow: hidden;
  }


</style>


