import React from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import Task from './Task';

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
    this.handleToggleCompleted = this.handleToggleCompleted.bind(this);
  }

  handleAdd(text) {
    /**
     * 完了を管理するため、Stringからオブジェクトに変更
     */
    this.setState({
      tasks: this.state.tasks.concat({
        text: text,
        completed: false,
      })
    });
  }

  handleToggleCompleted(e) {
    const newTasks = this.state.tasks.map((task, index) => {
      if (e.id === index) {
        task.completed = e.completed;
      }
      return task;
    });

    this.setState({ tasks: newTasks });
  }

  render() {
    const tasks = this.state.tasks.map((task, index) => {
      return (
        <Task
          id={index}
          onToggleCompleted={this.handleToggleCompleted}
          {...task}
        />
      );
    }, this);

    return (
      <div>
        <h1>Todoアプリ</h1>
        <TaskForm onAdd={this.handleAdd} />
        <TaskList tasks={tasks} />
      </div>
    );
  }
}

export default TodoApp;
