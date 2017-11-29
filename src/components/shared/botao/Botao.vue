<template>
    <button @click="disparaAcao()" :class="estiloDoBotao" :type = "tipo">{{ rotulo }}</button>
</template>


<script>
    export default{

      props:{
          tipo: {
              required:true,
              type:String

          },
          rotulo:{
              required:true,
              type:String
          },
          confirmacao:Boolean,
          estilo:String
      },
        
        methods:{
            disparaAcao(){
                if(this.confirmacao){
                    console.log(typeof(this.confirmacao));
                    if(confirm('Confirma operação?')){
                        this.$emit('botaoAtivado', new Date());
                    }
                    return;
                }
                this.$emit('botaoAtivado', new Date());
            }
        },

        computed:{
            estiloDoBotao (){
                if(this.estilo == "padrao" || this. estilo == "") return 'btn btn-outline-primary';
                if(this.estilo == "perigo") return 'btn btn-outline-danger';
            }
        }
    }

</script>


<style scoped>

    .botao {
        display: inline-block;
        padding: 10px;
        border-radius: 3px;
        margin: 10px;
        font-size: 1.2em;
    }


    .btn-outline-primary{
        margin-top:10px;
        margin-bottom: 10px
    }

    .btn-outline-danger{
        margin-top:10px;
        margin-bottom: 10px;
    }

</style>
