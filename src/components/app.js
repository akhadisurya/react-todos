import React from 'react';
import TodosList from './todos-list';

const todos = [
  {
    task: 'make React app',
    isCompleted: false
  },
  {
    task: 'feed Bonzo',
    isCompleted: true
  }
];


export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React Todos App</h1>
        <TodosList />
      </div>
    )
  }
}
