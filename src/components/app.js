import React from 'react';
import CreateTodo from './create-todo';
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
  constructor(props) {
    super(props);

    this.state = {
      todos
    };
  }
  render() {
    return (
      <div>
        <h1>React Todos App</h1>
        <CreateTodo />
        <TodosList todos={this.state.todos} />
      </div>
    )
  }
}
