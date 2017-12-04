<template>

  <div class="painel">
    <div class="card horizontal">  
      <div class="card-stacked">
        <button  @click="disparaAcaoJanela()" :title ="titleBotao" type="button" class="btn btn-default btn-xs minimiza-maximiza "> <center>{{ minimizaOuMaximiza }}</center> </button> 
        <div class="card-content">
          <b><p>{{ titulo }}</p></b>
        </div>
      </div>
    </div>

    <transition name="painel-fade">
      <!-- Usa a diretiva v-show, mostrando o conteúdo do painel só se o atributo visivel, definido em data, seja TRUE -->
      <div calss="painel-conteudo" v-show = "visivel">
        <slot></slot>
      </div>
    </transition>
  </div>

</template>

<script>
  export default{
    props:{
      //Recebe o que foi definido na tag <meu-painel> em home
      titulo:{
        //Parâmetro obrigatório e do tipo String
        required:true,
        type: String
      }
    }, 
    data(){
      return{
        //Define atributos que serão retornados nesse componente
        visivel:true,
        minimizaOuMaximiza: '-',
        titleBotao: 'minimizar'
      }
    },

    methods:{
      //Método para fazer a lógica de exibir ou minimizar a imagem e altera o label do botão maximizar ou minimizar
      disparaAcaoJanela(){
        //Caso o botao minimizar ou maximizar for acionado irá inverter o valor de visivel e trocado o valor de minimizaOuMaximiza e titleBotao
        if(this.visivel == true){
          this.visivel = false;
          this.minimizaOuMaximiza = '+';
          this.titleBotao = 'maximizar';
        }
        else if(this.visivel ==false){
            this.visivel = true;
            this.minimizaOuMaximiza = '-';
            this.titleBotao = 'minimizar';
        }
      }
    },
  }

</script>

<style scoped>
   .painel {
    padding: 0 auto;
    border: solid 2px grey;
    display: inline-block;
    margin: 25px;
    box-shadow: 5px 5px 10px grey;
    width: 200px;
    height: 100%;
    vertical-align: top;
    text-align: center;
  }


  .minimiza-maximiza{
    width: 30px;
    margin-top:5px;
    margin-left: 120px;
    float: right;
    
  }

  .painel.painel-conteudo {
    height: 200px;
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

</style>


