import React, { Component } from 'react';
import HelloMessage from './HelloMessage';

/**
 * Appコンポーネント
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      names: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      input: '',
      names: this.state.names.concat(this.state.input),
    });
  }

  /**
   * render
   * 描画するコンポーネントを返す関数
   */
  render() {
    const lists = this.state.names.map((name, index) => (
      <li key={index}>
        <HelloMessage name={name} />
      </li>
    ));

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <HelloMessage name={this.state.input} />
          </div>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
          />
        </form>
        <ul>{lists}</ul>
      </div>
    );
  }
}

export default App;
