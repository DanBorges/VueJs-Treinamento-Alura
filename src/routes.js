//Importando componentes que vão ser rotas na aplicação
import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

export const routes = [
    //Definindo rotas
    {path: '', component: Home, titulo:'Home'},
    {path: '/cadastro', component: Cadastro, titulo:'Cadastro'}

];