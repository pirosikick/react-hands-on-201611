import React, { PropTypes } from 'react';
import Task from './Task';

/**
 * TaskListコンポーネント
 */
function TaskList(props) {
  const lists = props.tasks.map(function (task, index) {
    return <li key={`task-${index}`}>{task}</li>;
  });
  return <ul>{lists}</ul>;
}
TaskList.propTypes = {
  // array => arrayOf(Task)に変更
  tasks: PropTypes.arrayOf(Task).isRequired,
};

export default TaskList;
