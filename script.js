import React from 'react';
import ReactDOM from 'react-dom';

import {Todo} from './components/main';

var tasksList = ["Task1" , "Task2"];

ReactDOM.render(
  <Todo tasks={tasksList}/>,
  document.getElementById('todo')
);
