import React, { PropTypes } from 'react';
import { Container } from 'reactstrap';
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
      tasks: props.defaultTasks,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleToggleCompleted = this.handleToggleCompleted.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
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

  handleRemove(e) {
    const { tasks } = this.state;
    const newTasks = tasks.filter((_, index) => (e.id !== index));

    this.setState({ tasks: newTasks });
  }

  render() {
    const tasks = this.state.tasks.map((task, index) => (
      <Task
        id={index}
        onToggleCompleted={this.handleToggleCompleted}
        onRemove={this.handleRemove}
        {...task}
      />
    ));

    return (
      <Container>
        <h1>Todoアプリ</h1>
        <TaskForm onAdd={this.handleAdd} />
        <TaskList tasks={tasks} />
      </Container>
    );
  }

  /**
   * localStorageに保存する時に使う
   */
  getTasks() {
    return this.state.tasks;
  }
}
TodoApp.propTypes = {
  defaultTasks: PropTypes.arrayOf(
      PropTypes.shape({
        text: PropTypes.string,
        completed: PropTypes.bool,
      })
    ).isRequired,
};

export default TodoApp;
