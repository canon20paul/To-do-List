import _ from 'lodash';
import './index.css';
import {TaskList} from './TasklistFile.js';

const textInputAdd = document.getElementById('addTT');
const taskList = document.getElementById('task-list');
// const tasksArr=[
//   {
//     description: 'Going to the Market',
//     completed: false,
//     index: 1
//   },
//   {
//     description: 'Going to the Market',
//     completed: false,
//     index:1
//   },
//   {
//     description: 'Going to the Market',
//     completed: true,
//     index: 1
//   }
// ];

// TaskList.taskArray = tasksArr;

function check(status) {
  if (status === true) { return "checked" } else { return null }
}
TaskList.taskArray = JSON.parse(localStorage.getItem('coward')) || [];

function display() {
  taskList.innerHTML = ''
  
  TaskList.taskArray.forEach((task, i) => {
    
    taskList.innerHTML += `<div class="taskR"><input type="checkbox"   ${check(TaskList.taskArray[i].completed)} class="box">
    <input  type="text" class="task" value="${TaskList.taskArray[i].description}"/><div class="img"></div></div>`;
  }  );
  taskList.innerHTML += `<button type="submit" id="btnAdd">Clear all completed</button>`
  
}

display();

textInputAdd.addEventListener('keypress',  (e) => {
  let ddd = textInputAdd.value
  if (e.key === 'Enter') { TaskList.addTask(ddd);}
  alert(TaskList.taskArray.length);
   display();
})
