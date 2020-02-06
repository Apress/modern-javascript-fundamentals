console.dir(document);
const ele = document.getElementById('ele');
const ele1 =document.querySelector('#ele');
const ele2 =document.querySelector('.red');
const ele3 =document.querySelector('div');

const ele4 = document.querySelectorAll('li');
ele4.forEach(function(el,ind){
   console.log(el.textContent); 
})