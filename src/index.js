import _, { indexOf } from 'lodash';
import './index.css';
import {TaskList} from './TasklistFile.js';

const textInputAdd = document.getElementById('addTT');
const taskList = document.getElementById('task-list');

function check(status) {
  if (status === true) { return "checked" } else { return "unchecked" }
}

function display() {
  TaskList.taskArray = JSON.parse(localStorage.getItem('coward')) || [];
  taskList.innerHTML = ''
  TaskList.taskArray.forEach((task, i) => {
  taskList.innerHTML += `<div class="taskR"><input type="checkbox" ${check(TaskList.taskArray[i].completed)} class="box">
   <p id=${i} class="task" title="Double Click to Edit & Enter to Save">${TaskList.taskArray[i].description}</p><div class="img" id="deleteBtn ${i}" title="${i}"></div></div>`;
  }  );
}

display();
//Add Task Event Listner
textInputAdd.addEventListener('keypress',  (e) => {
    if (e.key === 'Enter') { TaskList.addTask(textInputAdd.value);}
   location.reload();
 })

  //Delete Task Event Listner
  const deleteBtn = document.querySelectorAll('.img');
   deleteBtn.forEach((Btn) => {
          Btn.addEventListener('click', (e) => {
                TaskList.delete(Btn.title);
         location.reload();
    });
  });

//EditTask Event Listner
const taskArray = document.querySelectorAll('.task');
taskArray.forEach((task) => {
  task.addEventListener('dblclick', (e) => {
    task.contentEditable=true;
  });
  task.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') { task.contentEditable = false;
      for(let i=0; i < TaskList.taskArray.length; i=1+i){
        
                if(TaskList.taskArray[i].index==task.id){
    TaskList.taskArray[i].description=e.target.innerHTML;
        }
      }
      localStorage.setItem('coward', JSON.stringify(TaskList.taskArray));
  }
});

});



