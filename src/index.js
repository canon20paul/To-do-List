import _ from 'lodash';
import './index.css';

const tasksArr=[
  {
    description: 'Going to the Market',
    completed: false,
    index: 1
  },
  {
    description: 'Going to the Market',
    completed: false,
    index:1
  },
  {
    description: 'Going to the Market',
    completed: true,
    index: 1
  }
];

function check(status) {
  if (status === true) { return "checked" } else { return null }
}

// alert(check(tasksArr[0].completed))


const taskList = document.getElementById('task-list');
function display() {
  taskList.innerHTML = ''
  // Books.timeDisplay()
  tasksArr.forEach((task, i) => {
    
    taskList.innerHTML += `<div class="taskR"><input type="checkbox"   ${check(tasksArr[i].completed)} class="box">
    <p class="task">${tasksArr[i].description}</p><div class="img"></div></div>`;
  }  );
  taskList.innerHTML += `<button type="submit">Clear all completed</button>`
}

// 
display();




// function component() {
//   const element = document.createElement('div');

//    // Lodash, now imported by this script
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    

//   return element;


// document.body.appendChild(component());