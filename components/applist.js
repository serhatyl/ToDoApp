import React from 'react';

export class ToDoAppList extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    );
  }
}
