document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let priority = document.createElement('select')
  let option = document.createElement('option')
  option.textContent = 'select priority'
  priority.add(new Option('low')),
  priority.add(new Option('medium')),
  priority.add(new Option('high'))

  // function priorityColors(priority) {
  //   if (option.value === 'low') {
  //     console.log('red')
  //   }
  // }
  // priorityColors();

  createTaskForm.appendChild(priority)
  priority.appendChild(option)
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    createToDo(e.target.newTask.value);
    form.reset();
  });
});

function createToDo(newTask){
  let ul = document.getElementById('tasks')
  let btn = document.createElement('button')
  let li = document.createElement('li');
  btn.addEventListener('click', markComplete)
  li.textContent = `${newTask} `
  btn.textContent = "X"
  ul.appendChild(li)
  li.appendChild(btn)
}

function markComplete(e){
  e.target.parentNode.remove()
}
