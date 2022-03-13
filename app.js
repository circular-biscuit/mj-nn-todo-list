const form = document.querySelector('.add');
const list = document.querySelector('.list-group');
const search = document.querySelector('.search input');

//add todos
form.addEventListener('submit', e => {
    e.preventDefault();
    const todo = form.add.value.trim(); //trim removes whitespaces
    //create html template for new todo
    let html = `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span>${todo}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>
    `;
    //append new todo to unordered list if todo isn't blank
    if (todo.length){
        list.innerHTML += html;
        form.reset(); //to clear form for the next entries
    }
});

//delete todos
list.addEventListener('click', e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove();
    }
});

//search for todos
search.addEventListener('keyup', () => {
    const searchTerm = search.value.trim().toLowerCase(); //current user input search term
    //if todo doesn't include search term, hide it
    Array.from(list.children) //convert to do list from html collection into array
        .map(todo => {
            if (!todo.textContent.toLowerCase().includes(searchTerm)){
                todo.classList.add('d-none');
            } else {
                todo.classList.remove('d-none');
            }
        })
});