const addForm = document.querySelector(".add");
const list = document.querySelector('.todos');
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
