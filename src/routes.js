import Home from './components/home/Home.vue';
import Cadastro from './components/cadastro/Cadastro.vue';

//const Cadastro = () => System.import('./components/cadastro/Cadastro.vue');
console.log("CADASTROOOO:"+ Cadastro);

export const routes = [
    //Definindo rotas
    {path: '', name:'home', component: Home, titulo:'Home', menu: true},
    {path: '/cadastro', name:'cadastro', component: Cadastro, titulo:'Cadastro', menu: true},
    {path: '/cadastro/:id', name:'alterar', component: Cadastro, titulo:'Cadastro', menu: false},
    {path: '*', component: Home, menu: false}
];
