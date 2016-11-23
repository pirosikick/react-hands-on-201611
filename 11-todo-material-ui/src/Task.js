import React, { Component, PropTypes } from 'react';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import { red500 } from 'material-ui/styles/colors';

/**
 * Taskコンポーネント
 *
 */
class Task extends Component {
  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
  }

  handleCheck(e) {
    this.props.onToggleCompleted({
      id: this.props.id,
      completed: e.target.checked,
    });
  }

  // 削除リンクが押された時
  handleClickRemove(e) {
    this.props.onRemove({ id: this.props.id });
  }

  render() {
    const { text, completed } = this.props;
    const checkbox = (
      <Checkbox
        checked={completed}
        onCheck={this.handleCheck}
      />
    );
    const removeButton = (
      <IconButton
        iconClassName="material-icons"
        iconStyle={{ color: red500 }}
        onClick={this.handleClickRemove}
      >
        delete_forever
      </IconButton>
    );

    return (
      <ListItem
        leftCheckbox={checkbox}
        primaryText={completed ? <s>{text}</s> : text}
        rightIconButton={removeButton}
      />
    );
  }
}
Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default Task;
