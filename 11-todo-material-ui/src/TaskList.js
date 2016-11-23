import React, { PropTypes } from 'react';
import {List, ListItem} from 'material-ui/List';

/**
 * TaskListコンポーネント
 */
function TaskList(props) {
  const lists = props.tasks.map(function (task, index) {
    return <ListItem key={`task-${index}`}>{task}</ListItem>;
  });
  return <List>{lists}</List>;
}
TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default TaskList;
