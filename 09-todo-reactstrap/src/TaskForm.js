import React, { PropTypes } from 'react';
import { Form, Input } from 'reactstrap';

/**
 * TaskFormコンポーネント
 */
class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleSubmit(e) {
    // preventDefaultしないとリロードしてしまう
    e.preventDefault();

    if (this.state.input) {
      /**
       * onAddでタスクの追加を通知後、フォームをリセット
       */
      this.props.onAdd(this.state.input);
      this.setState({ input: '' });
    }
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          size="lg"
          value={this.state.input}
          onChange={this.handleChange}
        />
      </Form>
    );
  }
}
TaskForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default TaskForm;
