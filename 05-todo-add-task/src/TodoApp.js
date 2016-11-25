import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

/**
 * TodoAppコンポーネント
 */
class TodoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(task) {
    this.setState({
      tasks: this.state.tasks.concat(task)
    });
  }

  render() {
    return (
      <div>
        <h1>Todoアプリ</h1>
        <TaskForm onAdd={this.handleAdd} />
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default TodoApp;
