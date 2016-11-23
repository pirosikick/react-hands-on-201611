import React, { PropTypes } from 'react';

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
  tasks: PropTypes.array.isRequired,
};

export default TaskList;
