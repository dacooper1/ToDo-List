const input = document.querySelector('#newItem');
const form = document.querySelector('form');
const list = document.querySelector('ul');
const li = document.querySelectorAll('li');
const space = ' ';
let array = [];
//const savedList = JSON.parse(localStorage.getItem("toDoList"));


form.addEventListener('click',function(e){
    if (e.target.tagName === 'BUTTON' && input.value != ''){ 
    e.preventDefault();
    const newLi = document.createElement('li')
    const remove = document.createElement('button')
    newLi.innerText = input.value;
    array.push(input.value);
    list.appendChild(newLi);
    remove.innerText = 'X';
    newLi.prepend(space);
    newLi.prepend(remove);
    input.value= '';
    //console.log(newLi)
    //window.localStorage.setItem('toDoList', newLi)
    } else if (e.target.tagName === 'BUTTON' && input.value == ''){
        e.preventDefault();
    }
   
})

list.addEventListener('click',function(e){
if (e.target.tagName === 'LI'){
    e.target.classList.toggle('complete');
} else if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
    //console.log(e)
    }
})

console.log(array)
















