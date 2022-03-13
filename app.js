//adding todos
const form = document.querySelector('.add');
const list = document.querySelector('.list-group');

form.addEventListener('submit', e => {
    e.preventDefault();
    //create html template for new todo
    let html = 
    `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${form.add.value}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;
    //append new todo to unordered list
    list.innerHTML += html;
    
    form.reset(); //to clear form for the next entries
})
