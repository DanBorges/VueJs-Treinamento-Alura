<template>
	<!-- tag button usa atributos passados pelo props -->
  <button @click="disparaAcao()" :class="estiloDoBotao" :type = "tipo">{{ rotulo }}</button>
</template>

<script>
  export default{
		//Recebe o que foi definido em home pela tag <meu-botao>
  	props:{
    	tipo: {
				//Obrigatório e String
      	required:true,
        type:String
      },
      
			rotulo:{
				//Obrigatório e String
      	required:true,
        type:String
			},
			//Não obrigatório e boolean
			confirmacao:Boolean,
			//Não obrigatório e String
      estilo:String
    },

    methods:{
			//Executa método disparado pelo botao
    	disparaAcao(){
				//Se a transformação for TRUE será mostrado um alerta para o usuário poder confirmar a remoção da foto, passado na tag <meu-botao> de home
      	if(this.confirmacao){
					//Mostra no console do browser o tipo recebido por confirmacao
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
			//Retorna o tipo do botão, retornando a class seu estilo, através do valor, passado na tag <meu-botao> de home
    	estiloDoBotao (){
      	if(this.estilo == "padrao" || this. estilo == "") return 'btn waves-effect waves-teal botao-alterar';
        if(this.estilo == "perigo") return 'btn waves-effect waves-teal botao-deletar';
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

	.botao-alterar{
		margin-top:10px;
		margin-bottom: 10px;
		background-color: rgba(117, 166, 215, 1);
	}

	.botao-deletar{
		margin-top:10px;
		margin-bottom: 10px;
		background-color: rgba(236, 70, 70, 1);
	}


</style>
