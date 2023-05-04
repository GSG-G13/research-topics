const input = document.getElementById("task-input")
const addBtn = document.getElementById("add-task")
const taskList =document.querySelector("#task-list")
const clear = document.getElementById("clear")

function editTaskName(div){
  let val = div.firstElementChild.innerHTML;
  div.textContent = ''
  const pInput = document.createElement('input')
  pInput.className = 'edit-Content';
  pInput.value = val;
  const button = document.createElement('button');
  button.className = 'save-Btn';
  button.textContent = 'Save';
  div.appendChild(pInput);
  div.appendChild(button);
  if (pInput.value.trim() !== ''){
  button.addEventListener('click', () => {
      fetch(`/task/edit/${div.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({
          task: pInput.value
        })
      }).then((data) => data.json())
      .then((data) => {
        if(!data.error){
          div.textContent = '';
          const taskP = document.createElement('p');
          taskP.textContent = pInput.value;
          div.appendChild(taskP);
          const editIco = document.createElement('i');
          editIco.classList = 'edit-task ri-edit-2-fill';
          editIco.id = 'edit-task';
          const deleteIco = document.createElement('i');
          deleteIco.classList = 'delete-task ri-delete-bin-6-fill';
          deleteIco.id = 'delete-task';
          div.appendChild(editIco);
          div.appendChild(deleteIco);
        }else{
          throw new Error(data.message);
      }
      }).catch((error) => window.alert(error.message))
  })}
  
}

    
function addElementsToPageFrom(tasksArray){
  taskList.textContent = ""
  
  tasksArray.forEach(task => {
    let div = document.createElement("div");
    div.id = task._id;
    div.setAttribute("dataId", task.id);
    div.className = "task";
    const taskP = document.createElement('p');
    taskP.textContent = task.task;
    taskP.id = task._id;
    div.appendChild(taskP);
    const editIco = document.createElement('i');
    editIco.classList = 'edit-task ri-edit-2-fill';
    editIco.id = 'edit-task';
    const deleteIco = document.createElement('i');
    deleteIco.classList = 'delete-task ri-delete-bin-6-fill';
    deleteIco.id = task._id;
    div.appendChild(editIco);
    div.appendChild(deleteIco);
    taskList.appendChild(div)
    deleteIco.addEventListener('click', () => {
      fetch(`/task/remove/${deleteIco.id}`, {
        method: 'delete'
      })
      .then((data) => data.json())
      .then((data) => {
        if(!data.error){
          deleteIco.parentElement.remove()
        }
        else{
          console.log(data.message);
        }
      }).catch(console.log)
    });
    editIco.addEventListener('click', () => {
      const p = document.getElementById(editIco.id)
      editTaskName(editIco.parentElement)

    })
  });


}


fetch('/task')
  .then((data) => data.json())
  .then((data) => data.tasks)
  .then(addElementsToPageFrom)
  .catch(console.log);

addBtn.addEventListener('click', () => {
  if (input.value.trim() !== ''){
    fetch('/task', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({task: input.value}),
    }).then((data) => data.json())
    .then((result) => {
      let div = document.createElement("div");
      div.id = result.task._id;
      div.setAttribute("dataId", result.task._id);
      div.className = "task";
      const taskP = document.createElement('p');
      taskP.textContent = input.value;
      div.appendChild(taskP);
      const editIco = document.createElement('i');
      editIco.classList = 'edit-task ri-edit-2-fill';
      editIco.id = 'edit-task';
      const deleteIco = document.createElement('i');
      deleteIco.classList = 'delete-task ri-delete-bin-6-fill';
      deleteIco.id = 'delete-task';
      div.appendChild(editIco);
      div.appendChild(deleteIco);
      taskList.appendChild(div)
      if (!result.error) {
        input.value = '';
      }
      editIco.addEventListener('click', () => {
        const p = document.getElementById(editIco.id)
        editTaskName(editIco.parentElement)
  
      })
    })
    .catch(console.log);
  };
});

clear.addEventListener('click', () => {
  fetch('/task/clear', {
    method: 'delete'
  })
  .then((data) => data.json())
  .then((data) => {
    if(!data.error) {
      taskList.textContent = '';
    }
  })
  .catch(console.log);
});