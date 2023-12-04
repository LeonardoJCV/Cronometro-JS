const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

let segundos = 0;
let timer;

function criaHora(segundos){
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
  });
}

document.addEventListener('click', function(e){
  const el = e.target;
  if (el.classList.contains('zerar')){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
  }
  if (el.classList.contains('pausar')){
    relogio.classList.add('pausado');
    clearInterval(timer);
  }
  else {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
  }
})

function iniciaRelogio(){
  timer = setInterval(function(){
    segundos++;
    relogio.innerHTML = criaHora(segundos);
  }, 1000);
}