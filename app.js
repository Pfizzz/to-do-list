const addForm = document.querySelector(".add");
const list = document.querySelector('.todos');
// need a reference to the input field, not the form, because we are listening for a keyup event on the input.
const search = document.querySelector('.search input');
const generateTemplate = (todo) => {
  const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li> 
    `;
    // must add to the html, not append
    list.innerHTML += html;
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const todo = addForm.add.value.trim();
    // validation that form has an item, then resets the form.
  if(todo.length){
    generateTemplate(todo);
    addForm.reset();
  } else {
      alert("You must enter a to-do item!");
  }
});

// delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')){
        // traverse dom with parentElement
        e.target.parentElement.remove();
    }
})

const filterTodos = (term) => {
    //use the Array.from() method to turn html collection into array
    Array.from(list.children)
    // negate the boolean
        .filter((todo) => !todo.textContent.toLowerCase().includes(term))
        .forEach((todo) => todo.classList.add('filtered'))

    // to reverse the process and remove the class (and thus display it again)
    Array.from(list.children)
    // replace the boolean
        .filter((todo) => todo.textContent.toLowerCase().includes(term))
        // remove filtered class
        .forEach((todo) => todo.classList.remove('filtered'))
};

// keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
})