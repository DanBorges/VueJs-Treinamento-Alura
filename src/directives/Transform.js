import Vue from 'vue';
// Criação de diretiva
Vue.directive('meu-transform',{

  bind(el, binding, vnode){
    let current = 0;
    //ao dar click duplo na foto irá disparar uma ação
    el.addEventListener('dblclick', function() {
      let incremento = binding.value || 90;
      let efeito;
      //Se o argumento de meu-transform for rotate ira rodar um determinado grau em sentido horário ou horário (modificador), depende do parâmetro passado
      if(!binding.arg || binding.arg == 'rotate'){
        if(binding.modifiers.reverse){
        	current -= incremento;
        }
        else{
        	current += incremento;
        }
				efeito = `rotate(${current}deg)`;
      }
      
      //Se o argumento de meu-transform for scale irá expandir a foto
      else if(binding.arg == 'scale'){
      	efeito = `scale(${incremento})`;
      }
      el.style.transform = efeito;
        //Se o modificador animacao for TRUE, irá exibir um atraso de 2 segundos a executar a ação
      	if(binding.modifiers.animacao){
        	el.style.transition = 'transform 2s';
        }
    });
  }
});