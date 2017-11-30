<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-14">
          <h1 class = "titulo">{{ titulo }}</h1>
          <p v-show = "mensagem" class= "titulo">{{ mensagem }}</p>
          <input type = "text" class = "form-control form-control-sm" @input="filtro=$event.target.value" placeholder="procure por..."/>
          <ul class = "lista-fotos">
            <li class = "lista-fotos-item" v-for="foto in fotosComFiltro">
              <meu-painel :titulo = "foto.titulo"><!-- criação de componente meu-painel -->
                <imagem-responsiva v-meu-transform:rotate.animacao.reverse = "15" :url = "foto.url" :titulo="foto.titulo"/><!-- Criação de componente imagem-responsiva -->
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
  import Painel from '../shared/painel/Painel.vue'
  import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
  import Botao from '../shared/botao/Botao.vue'
  
  export default{
    components:{
      'meu-painel': Painel,
      'imagem-responsiva': ImagemResponsiva,
      'meu-botao': Botao
    },

    data(){
      return{
        titulo: 'Vue.js Prática',
          fotos: [],
          filtro: '',
          mensagem: '',
      }
    },

    computed:{
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
        remove($event,foto){
            alert($event + "Remover foto " + foto.titulo);
            this.$http
              .delete(`http://localhost:3000/v1/fotos/${foto._id}`)
              .then(() => 
              {
                let indice = this.fotos.indexOf(foto);
                this.fotos.splice(indice,1);
                this.mensagem = 'Foto removida com sucesso'
              }, err => {
                console.log(err);
                this.mensagem = 'Não foi possível remover a foto';
              });
        }
    },


    created(){
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
