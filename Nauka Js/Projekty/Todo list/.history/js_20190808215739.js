const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
// const li = document.querySelectorAll('li');
const generateTemplate = todo => {
    const html = `
    <li class="list-group-item d-flex justify-content-between align-items-center">
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
</li>`
    list.innerHTML += html
    // list.append(html)
};

addForm.addEventListener('submit',e =>{
    e.preventDefault();
    const todo = addForm.add.value.trim();
    clg
    if(todo.length){
        generateTemplate(todo)
        addForm.reset()
    }
})