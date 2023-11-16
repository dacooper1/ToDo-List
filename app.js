const input = document.querySelector('#newItem');
const form = document.querySelector('form');
const list = document.querySelector('ul');
const li = document.querySelectorAll('li');
const newLi = document.createElement('li');
const remove = document.createElement('button');
let localStorageLength = JSON.parse(localStorage.getItem('toDoList')).length
const space = ' ';
let data = [];
let check = '';


// If there is data in Local Storage, this will add it to the list. Otherwise the list will be blank. 
window.addEventListener('load',function(e){
    console.log(localStorageLength)
   if (this.localStorage.length != 0) {
            data = JSON.parse(this.localStorage.getItem('toDoList'));
            for (let i=0; i<data.length; i++) {
                const newLi = document.createElement('li')
                const remove = document.createElement('button')
                newLi.innerText = data[i];
                list.appendChild(newLi);
                remove.innerText = 'X';
                newLi.prepend(space);
                newLi.prepend(remove);
            }
   
        }
    })

form.addEventListener('click',function(e){
    // Creates new list items with the removable button and strikeout, using the input from the text box.
    if (e.target.tagName === 'BUTTON' && input.value != ''){ 
    e.preventDefault();
    const newLi = document.createElement('li')
    const remove = document.createElement('button')
    newLi.innerText = input.value;
    data.push(input.value);
    list.appendChild(newLi);
    remove.innerText = 'X';
    newLi.prepend(space);
    newLi.prepend(remove);
    input.value= '';
    // Adds imput value, now in [data], to local storage
    localStorage.setItem('toDoList',JSON.stringify(data));
    // If the input field is empty it will not add an empty item to the list.
    } else if (e.target.tagName === 'BUTTON' && input.value == ''){
        e.preventDefault();
    }
})

list.addEventListener('click',function(e){
// When you click on the list item, it will strikeout and change colour
if (e.target.tagName === 'LI'){
    e.target.classList.toggle('complete');
// When you click on the button, it will remove the button and list item from the list.
} else if (e.target.tagName === 'BUTTON') {
    e.target.parentElement.remove();
    for (let j=2; j<e.target.parentElement.innerText.length; j++) {
        check += e.target.parentElement.innerText[j]
        }
    }
    let localStorageLength = JSON.parse(localStorage.getItem('toDoList')).length
    //console.log(JSON.parse(localStorage.getItem('toDoList')));
    //console.log(localStorageLength)
    for (let k=0; k<localStorageLength; k++) {

        //stops working after the first button
        // updates local storage
   
        if (((JSON.parse(localStorage.getItem('toDoList'))[k]) === check)) {
            let updated = data.indexOf((JSON.parse(localStorage.getItem('toDoList'))[k]))
            data.splice(updated)
            localStorage.setItem('toDoList',JSON.stringify(data))
            console.log(localStorageLength);
            console.log(data)
            console.log(localStorage)    
        }
    }
})



