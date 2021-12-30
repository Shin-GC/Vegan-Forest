//베지테리안 종류 탭
const vegetarian = document.querySelector('.type#vege');
const ovoVegetarian = document.querySelector('.type#ovo');
const loctoVegetarian = document.querySelector('.type#locto');
const loctoOvoVegetarian = document.querySelector('.type#locto-ovo');
const pescoVegetarian = document.querySelector('.type#pesco');
const polloVegetarian = document.querySelector('.type#pollo');
const strictVegetarian = document.querySelector('.type#strict');
const flexiVegetarian = document.querySelector('.type#flexi');
const fruitiVegetarian = document.querySelector('.type#fruiti');
const rawVegetarian = document.querySelector('.type#raw');
//베지테리안 종류 설명 탭~
const vegeExplain = document.querySelector('.explain#explain-vege');
const ovoExplain = document.querySelector('.explain#explain-ovo');
const loctoExplain = document.querySelector('.explain#explain-locto');
const loctoOvoExplain = document.querySelector('.explain#explain-loctoOvo');
const pescoExplain = document.querySelector('.explain#explain-pesco');
const polloExplain = document.querySelector('.explain#explain-pollo');
const strictExplain = document.querySelector('.explain#explain-strict');
const flexiExplain = document.querySelector('.explain#explain-flexi');
const fruitiExplain = document.querySelector('.explain#explain-fruiti');
const rawExplain = document.querySelector('.explain#explain-raw');
//테스트지롱
const sleepyTest = document.querySelector('.sleepy#hungry');

function vegeClick() {
  vegeExplain.style.display = vegeExplain.style.display == 'none' ? 'block' : 'none';
  ovoExplain.style.display = 'none';
  loctoExplain.style.display = 'none';
  loctoOvoExplain.style.display = 'none';
  pescoExplain.style.display = 'none';
  polloExplain.style.display = 'none';
  strictExplain.style.display = 'none';
  flexiExplain.style.display = 'none';
  fruitiExplain.style.display = 'none';
  rawExplain.style.display = 'none';
}
function ovoClick() {
  ovoExplain.style.display = ovoExplain.style.display == 'none' ? 'block' : 'none';
  vegeExplain.style.display = 'none';

  loctoExplain.style.display = 'none';
  loctoOvoExplain.style.display = 'none';
  pescoExplain.style.display = 'none';
  polloExplain.style.display = 'none';
  strictExplain.style.display = 'none';
  flexiExplain.style.display = 'none';
  fruitiExplain.style.display = 'none';
  rawExplain.style.display = 'none';
}
function loctoClick() {
  loctoExplain.style.display = loctoExplain.style.display == 'none' ? 'block' : 'none';
  vegeExplain.style.display = 'none';
  ovoExplain.style.display = 'none';

  loctoOvoExplain.style.display = 'none';
  pescoExplain.style.display = 'none';
  polloExplain.style.display = 'none';
  strictExplain.style.display = 'none';
  flexiExplain.style.display = 'none';
  fruitiExplain.style.display = 'none';
  rawExplain.style.display = 'none';
}
function loctoOvoClick() {
  loctoOvoExplain.style.display = loctoOvoExplain.style.display == 'none' ? 'block' : 'none';
  vegeExplain.style.display = 'none';
  ovoExplain.style.display = 'none';
  loctoExplain.style.display = 'none';

  pescoExplain.style.display = 'none';
  polloExplain.style.display = 'none';
  strictExplain.style.display = 'none';
  flexiExplain.style.display = 'none';
  fruitiExplain.style.display = 'none';
  rawExplain.style.display = 'none';
}
function pescoClick() {
  pescoExplain.style.display = pescoExplain.style.display == 'none' ? 'block' : 'none';
  vegeExplain.style.display = 'none';
  ovoExplain.style.display = 'none';
  loctoExplain.style.display = 'none';
  loctoOvoExplain.style.display = 'none';

  polloExplain.style.display = 'none';
  strictExplain.style.display = 'none';
  flexiExplain.style.display = 'none';
  fruitiExplain.style.display = 'none';
  rawExplain.style.display = 'none';
}
function polloClick() {
  polloExplain.style.display = polloExplain.style.display == 'none' ? 'block' : 'none';
  vegeExplain.style.display = 'none';
  ovoExplain.style.display = 'none';
  loctoExplain.style.display = 'none';
  loctoOvoExplain.style.display = 'none';
  pescoExplain.style.display = 'none';

  strictExplain.style.display = 'none';
  flexiExplain.style.display = 'none';
  fruitiExplain.style.display = 'none';
  rawExplain.style.display = 'none';
}
function strictClick() {
  strictExplain.style.display = strictExplain.style.display == 'none' ? 'block' : 'none';
  vegeExplain.style.display = 'none';
  ovoExplain.style.display = 'none';
  loctoExplain.style.display = 'none';
  loctoOvoExplain.style.display = 'none';
  pescoExplain.style.display = 'none';
  polloExplain.style.display = 'none';

  flexiExplain.style.display = 'none';
  fruitiExplain.style.display = 'none';
  rawExplain.style.display = 'none';
}
function flexiClick() {
  flexiExplain.style.display = flexiExplain.style.display == 'none' ? 'block' : 'none';
  vegeExplain.style.display = 'none';
  ovoExplain.style.display = 'none';
  loctoExplain.style.display = 'none';
  loctoOvoExplain.style.display = 'none';
  pescoExplain.style.display = 'none';
  polloExplain.style.display = 'none';
  strictExplain.style.display = 'none';

  fruitiExplain.style.display = 'none';
  rawExplain.style.display = 'none';
}
function fruitiClick() {
  fruitiExplain.style.display = fruitiExplain.style.display == 'none' ? 'block' : 'none';
  vegeExplain.style.display = 'none';
  ovoExplain.style.display = 'none';
  loctoExplain.style.display = 'none';
  loctoOvoExplain.style.display = 'none';
  pescoExplain.style.display = 'none';
  polloExplain.style.display = 'none';
  strictExplain.style.display = 'none';
  flexiExplain.style.display = 'none';

  rawExplain.style.display = 'none';
}
function rawClick() {
  rawExplain.style.display = rawExplain.style.display == 'none' ? 'block' : 'none';
  vegeExplain.style.display = 'none';
  ovoExplain.style.display = 'none';
  loctoExplain.style.display = 'none';
  loctoOvoExplain.style.display = 'none';
  pescoExplain.style.display = 'none';
  polloExplain.style.display = 'none';
  strictExplain.style.display = 'none';
  flexiExplain.style.display = 'none';
  fruitiExplain.style.display = 'none';
}

vegetarian.addEventListener('click', vegeClick);
ovoVegetarian.addEventListener('click', ovoClick);
loctoVegetarian.addEventListener('click', loctoClick);
loctoOvoVegetarian.addEventListener('click', loctoOvoClick);
pescoVegetarian.addEventListener('click', pescoClick);
polloVegetarian.addEventListener('click', polloClick);
strictVegetarian.addEventListener('click', strictClick);
flexiVegetarian.addEventListener('click', flexiClick);
fruitiVegetarian.addEventListener('click', fruitiClick);
rawVegetarian.addEventListener('click', rawClick);

$('.type').click(function () {
  if ($(this).hasClass('active')) {
    $('.type').removeClass('active');
  } else {
    $('.type').removeClass('active');
    $(this).addClass('active');
  }
});
