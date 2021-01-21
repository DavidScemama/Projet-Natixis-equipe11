function carousel(text1_options, text2_options , image_options){

const color_options = ["#e0e0e0"];

var i = 0;
const carousel = document.querySelector("#carousel-wrapper.active");
const currentOptionText1 = carousel.querySelector("#current-option-text1");
const currentOptionText2 = carousel.querySelector("#current-option-text2");
const currentOptionImage = carousel.querySelector("#image");
const mainMenu = carousel.querySelector("#menu");
const optionPrevious = carousel.querySelector("#previous-option");
const optionNext = carousel.querySelector("#next-option");

currentOptionText1.innerText = text1_options[i];
currentOptionText2.innerText = text2_options[i];
currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
mainMenu.style.background = color_options[i];

optionNext.onclick = function () {
  i = i + 1;
  i = i % text1_options.length;
  currentOptionText1.dataset.nextText = text1_options[i];

  currentOptionText2.dataset.nextText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-next");
  
  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-next");
  }, 650);
};

optionPrevious.onclick = function () {
  if (i === 0) {
    i = text1_options.length;
  }
  i = i - 1;
  currentOptionText1.dataset.previousText = text1_options[i];

  currentOptionText2.dataset.previousText = text2_options[i];

  mainMenu.style.background = color_options[i];
  carousel.classList.add("anim-previous");

  setTimeout(() => {
    currentOptionImage.style.backgroundImage = "url(" + image_options[i] + ")";
  }, 455);
  
  setTimeout(() => {
    currentOptionText1.innerText = text1_options[i];
    currentOptionText2.innerText = text2_options[i];
    carousel.classList.remove("anim-previous");
  }, 650);
};
}

const text1_options = {
  "6.1": [ 
  "6.1.1",
  "6.1.2",
  "6.1.3",
  "6.1.4",
  "6.1.5",
  "6.1.6",
], 
  "6.2": [ 
  "6.2.1",
  "6.2.2",
  "6.2.3",
  "6.2.4",
  "6.2.5",
],
  "6.3": [ 
  "6.3.1",
  "6.3.2",
  "6.3.3",
],
  "6.4": [ 
  "6.4.1",
  "6.4.2",
  "6.4.3",
],
  "6.5": [ 
  "6.5.1",
  "6.5.2",
  "6.5.3",
  "6.5.4",
  "6.5.5",
  "6.5.6",
  "6.5.7",
],
  "6.6": [ 
  "6.6.1",
  "6.6.2",
],
  "6.8": [ 
  "6.8.1",
  "6.8.2",
],
};

const text2_options  = {
  "6.1":[
  "Modèle d’affaire p.436 Indicateurs clé de performance p.437",
   "Axes stratégiques RSE p.438",
   "Gouvernance de la RSE p.440",
   "Engagements RSE p.441",
   "Dialogue avec les parties prenantes p.443",
   "Une performance RSE reconnue p.444"
 ],
 "6.2":[
   "Le Code de conduite de Natixis p.445",
   "Protection des clients, sécurité financière et sécurité des données p.446",
   "Représentation d’intérêts responsables p.446",
   "Lutte contre l’évasion fiscale p.446",
   "Dispositif d’alerte p.447",
 ],
 "6.3":[
  "Croissance responsable : financer la transformation de la société p.448",
   "Croissance verte : financer la transition énergétique et lutter contre le changement climatique p.456",
   "Croissance verte : protéger et développer le capital naturel p.463",
 ],
 "6.4":[
  "Intégration de critères ESG dans les financements et investissements p.467",
   "Devoir de vigilance p.470",
   "Risques climatiques p.472",
 ],
 "6.5":[
  "Immobilier durable p.474",
   "Gestion des ressources p.474",
   "Gestion de l’empreinte carbone p.476",
   "Réduction et tri des déchets p.477",
   "Promotion des mobilités durables p.478",
   "Numérique responsable p.479",
   "Développement des espaces végétalisés p.480"
 ],
 "6.6":[
  "Politiques Ressources humaines et diversité p.481",
   "Engagements dans des projets solidaires p.493",
 ],
 "6.8":[
  "Précisions méthodologiques sur les indicateurs p.496",
   "Exclusions p.496",
 ]
};

 const image_options = {
   "6.1" : [
  "Images/6.1.1.png",
  "Images/6.1.2.png",
  "Images/6.1.3.png",
  "Images/6.1.4.png",
  "Images/6.1.5.png",
  "Images/6.1.6.png",
],
  "6.2" : [
  "Images/6.2.1.png",
  "Images/6.2.2.png",
  "Images/6.2.3.png",
  "Images/6.2.4.png",
  "Images/6.2.5.png",
],
  "6.3" : [
  "Images/6.3.1.png",
  "Images/6.3.2.png",
  "Images/6.3.3.png",
],
  "6.4" : [
  "Images/6.4.1.png",
  "Images/6.4.2.png",
  "Images/6.4.3.png",
],
  "6.5" : [
  "Images/6.5.1.png",
  "Images/6.5.2.png",
  "Images/6.5.3.png",
  "Images/6.5.4.gif",
  "Images/6.5.5.png",
  "Images/6.5.6.png",
  "Images/6.5.7.png",
],
  "6.6" : [
  "Images/6.6.1.png",
  "Images/6.6.2.png",
],
  "6.8" : [
  "Images/6.8.1.png",
  "Images/6.8.2.png",
],
};

const titre_options = {
  "6.1" : [
 "6.1 Orientations et organisation de la politique RSE"
],
"6.2" : [
  "6.2 Conduite et éthique des affaires"
 ],
 "6.3" : [
  "6.3 Contribution de nos métiers à une croissance verte et responsable"
 ],
 "6.4" : [
  "6.4 Gestion des risques environnementaux, sociaux et de gouvernance"
 ],
 "6.5" : [
  "6.5 Gestion de nos impacts directs sur l’environnement"
 ],
 "6.6" : [
  "6.6 Mobilisation des collaborateurs"
 ],
 "6.8" : [
  "6.8 Référentiels et méthodologie de reporting"
 ],
};

carousel(text1_options["6.1"], text2_options["6.1"] , image_options["6.1"]);




function test(data) {
  //document.querySelector('#test').textContent = data.value;
  carousel(text1_options[data.value], text2_options[data.value] , image_options[data.value]);
}
var one = lmSelect(document.querySelector('#one'), test);
var two = lmSelect(document.querySelector('#two'), test);

function lmSelect(select, onChange) {
  var selectValue = select.querySelector('.lm-select-value');
  var options = select.querySelector('.lm-select-options');
  var list = select.querySelector('.lm-select-list');
  var items = select.querySelectorAll('.lm-select-item');
  var overflow = select.querySelector('.lm-select-overflow');
  var bodyScroll;
  
  function selectItem(selected, isUpdate) {
    var value = selected.getAttribute('data-value') || selected.textContent;
    selected.classList.add('lm-select-selected');
    selectValue.textContent = selected.textContent;
    selectValue.setAttribute('data-value', value);
    if (onChange && isUpdate) {
      onChange(getData());
    }
  }
  
  function getData() {
    return {text: selectValue.textContent, value: selectValue.getAttribute('data-value')};
  }
  
  function hideSelect() {
    select.classList.remove("lm-select-active");
    removeDScroll ();
    setTimeout(function() {
         select.classList.remove("lm-select-animating");
      }, 400);
  }
  
  function handleChange(event) {
    var old = select.querySelector('.lm-select-selected');
    if (old) {
      old.classList.remove('lm-select-selected');
    }
    
    selectItem(event.target, true);
    hideSelect();
  }
  
  function handleOpen() {
    setDScroll();
    var selected = select.querySelector('.lm-select-selected');
    select.classList.add("lm-select-animating");
    
    setTimeout(function() {
      select.classList.add("lm-select-active");
    }, 10);
  }
  
  function setDScroll() {
    bodyScroll = document.body.scrollTop;
    if (document.documentElement.clientHeight < document.documentElement.offsetHeight) {
      document.documentElement.style.overflowY = "scroll";
    }
    document.body.style.width = "100%";
    document.body.style.top = bodyScroll *-1 + "px";
  }
  function removeDScroll() {
    document.body.style.position = "";
    document.body.style.width = "";
    document.body.style.top = "";
    document.body.scrollTop = bodyScroll;
    document.documentElement.style.overflowY = "";
  }
  
  selectItem(select.querySelector('.lm-select-selected') ||
      select.querySelector('.lm-select-item'));
  
  selectValue.addEventListener('click', handleOpen);
  
  for (var i = 0, l = items.length; i < l; i++) {
    items[i].addEventListener('click', handleChange);
  }
 
  overflow.addEventListener('click', hideSelect);
  
  return {
    get: getData
  }
} 

function OpenClose() {
  var divContenu = document.getElementsByClassName('doc')[0];
  if(divContenu.style.display == 'none') {
      divContenu.style.display = 'block';
  } else {
      divContenu.style.display = 'none';
  }
}

