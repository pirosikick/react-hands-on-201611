import React, { PropTypes } from 'react';

function Task(props) {
  // 完了したら取り消し線（<s>タグ）で囲う
  const text = props.completed ? <s>{props.text}</s> : props.text;
  const handleChange = e => {
    props.onToggleCompleted({
      id: props.id,
      completed: e.target.checked,
    });
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={props.completed}
        onChange={handleChange}
      /> {text}
    </div>
  );
}
Task.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
};

export default Task;
