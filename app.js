const input = document.querySelector('#newItem');
const form = document.querySelector('form');
const list = document.querySelector('ul');
const li = document.querySelectorAll('li');
const newLi = document.createElement('li');
const remove = document.createElement('button');
const space = ' ';
let array = [];
let check = '';

//const savedList = JSON.parse(localStorage.getItem("toDoList"));

window.addEventListener('load',function(e){
   if (this.localStorage.length != 0) {
            array = JSON.parse(this.localStorage.getItem('todoList'));
            for (let i=0; i<array.length; i++) {
                const newLi = document.createElement('li')
                const remove = document.createElement('button')
                newLi.innerText = array[i];
                list.appendChild(newLi);
                remove.innerText = 'X';
                newLi.prepend(space);
                newLi.prepend(remove);
            }
   
        }
    })

form.addEventListener('click',function(e){
    if (e.target.tagName === 'BUTTON' && input.value != ''){ 
    e.preventDefault();
    //const newLi = document.createElement('li')
    //const remove = document.createElement('button')
    newLi.innerText = input.value;
    array.push(input.value);
    list.appendChild(newLi);
    remove.innerText = 'X';
    newLi.prepend(space);
    newLi.prepend(remove);
    input.value= '';
    localStorage.setItem('todoList',JSON.stringify(array));
    } else if (e.target.tagName === 'BUTTON' && input.value == ''){
        e.preventDefault();
    }
})

list.addEventListener('click',function(e){
if (e.target.tagName === 'LI'){
    e.target.classList.toggle('complete');
} else if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
    for (let i=2; i<e.target.parentElement.innerText.length; i++) {
        check += e.target.parentElement.innerText[i]
    }
    
    }
})






















