import React from 'react';

import {AddNewTask} from './addtask';
import {ToDoAppList} from './applist';

export class Todo extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <h1>ToDo App</h1>
        <AddNewTask/>
        <ToDoAppList/>
      </div>
    );
  }
}
