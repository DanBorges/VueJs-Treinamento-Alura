<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-14">
          <!-- Exibe a interpolação de titulo recebido da função data() -->
          <h1 class = "titulo">{{ titulo }}</h1>
          <p v-show = "mensagem" class= "titulo">{{ mensagem }}</p>
         <!-- Envia para o computed o que for digitado instântaneamnete no input, atraves do target  -->
         <input type = "text" class = "form-control form-control-sm" @input="filtro=$event.target.value" placeholder="procure por..."/>
          <ul class = "lista-fotos">
            <!-- Através da diretiva v-for pervorre todas as fotos -->
            <li class = "lista-fotos-item" v-for="foto in fotosComFiltro">
              <!-- Utiliza o componente meu-painel -->
              <meu-painel :titulo = "foto.titulo"><!-- criação de componente meu-painel -->
                <!-- Utiliza o componente imagem-responsiva, foi criada uma diretiva criada em Transform.js -->
                <imagem-responsiva v-meu-transform:rotate.animacao.reverse = "15" :url = "foto.url" :titulo="foto.titulo"/><!-- Criação de componente imagem-responsiva -->
                <!-- Utiliza o componente meu-botao, passa os atributos que será usado no componente Botao -->
                <meu-botao 
                  tipo="button" 
                  rotulo="REMOVER"
                  @botaoAtivado="remove($event,foto)"
                  :confirmacao = "true"
                  estilo = "perigo" />
              </meu-painel>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  //Importa os Componentes, que será utilizado nesse componente
  import Painel from '../shared/painel/Painel.vue'
  import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
  import Botao from '../shared/botao/Botao.vue'
  
  export default{
    //Define componentes para serem usados como tag
    components:{
      'meu-painel': Painel,
      'imagem-responsiva': ImagemResponsiva,
      'meu-botao': Botao
    },

    data(){
      return{
        //Define atributos que serão retornados nesse componente
        titulo: 'Vue.js Prática',
          fotos: [],
          filtro: '',
          mensagem: '',
      }
    },

    computed:{
      // Função para retornar fotos ao digitar no input (em tempo real)
      fotosComFiltro(){
        if(this.filtro){
          let exp = new RegExp(this.filtro.trim(),'i');
          return this.fotos.filter(foto => exp.test(foto.titulo));
        }
        else{
          return this.fotos;
        }
      }
    },

    methods:{
      //Método remove disparado no click do botão Remover
      remove($event,foto){
        //Exibe alerta de confirmação de exclusão da foto concatenada com seu titulo
        alert($event + "Remover foto " + foto.titulo);
        //Chama REST para deletar foto
        this.$http
        .delete(`http://localhost:3000/v1/fotos/${foto._id}`)
        //Caso não haja erros, será removida do array a foro
        .then(() => {
          let indice = this.fotos.indexOf(foto);
          this.fotos.splice(indice,1);
          //Atribui ao atributo mensagem da tela, que a imagem foi removida com sucesso
          this.mensagem = 'Foto removida com sucesso'
        }, 
        err => {
          //Caso aconteça algum erro durante a exclusão será impresso no console o erro
          console.log(err);
          //Atribui ao atributo mensagem da tela, que não foi possível remover a foto
          this.mensagem = 'Não foi possível remover a foto';
        });
      }
    },

    created(){
      //Dispara função ao criar o componente, buscando na API as fotos armazenadas no endereço http://localhost:3000/v1/fotos
      let promisse = this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
    }
  }
</script>

<style>
  .titulo {
    text-align: center;
  }
  .lista-fotos {
    list-style: none;
  }
  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }
  .filtro{
    width:100%;
    display:block;
  }
</style>
