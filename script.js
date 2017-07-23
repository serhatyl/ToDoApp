import React from 'react';
import ReactDOM from 'react-dom';

import {Todo} from './components/main';

var tasksList = ["Task1" , "Task2"];
var tasks = localStorage.getItem('storedTasks');
if (tasks) {
  tasksList=JSON.parse(tasks);
}
//localStorage sadece string saklar ilk parametresi key ikinci parametresi ise value'dur Kullanımı:
//localStorage.setItem(key,"value");

ReactDOM.render(
  <Todo tasks={tasksList}/>,
  document.getElementById('todo')
);
