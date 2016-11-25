import React, { Component, PropTypes } from 'react';
import { Input, Label } from 'reactstrap';
import RemoveButton from './RemoveButton';

/**
 * Taskコンポーネント
 *
 */
class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRemoveButton: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
    this.handleClickRemove = this.handleClickRemove.bind(this);
  }

  handleChange(e) {
    this.props.onToggleCompleted({
      id: this.props.id,
      completed: e.target.checked,
    });
  }

  /**
   * 削除リンクの出し分け
   */
  handleMouseOver() {
    this.setState({ showRemoveButton: true });
  }
  handleMouseOut() {
    this.setState({ showRemoveButton: false });
  }

  // 削除リンクが押された時
  handleClickRemove(e) {
    this.props.onRemove({ id: this.props.id });
  }

  render() {
    const { text, completed } = this.props;
    const { showRemoveButton } = this.state;

    return (
      <div
        onMouseOver={this.handleMouseOver}
        onMouseOut={this.handleMouseOut}
      >
        <Label>
          <Input
            type="checkbox"
            checked={completed}
            onChange={this.handleChange}
          />
          {completed ? <s>{text}</s> : text}
          <RemoveButton
            show={showRemoveButton}
            onClick={this.handleClickRemove}
          />
        </Label>
      </div>
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
