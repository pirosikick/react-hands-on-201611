import React, { Component } from 'react';
import HelloMessage from './HelloMessage';

/**
 * Appコンポーネント
 */
class App extends Component {
  constructor(props) {
    super(props);

    /**
     * state
     * コンポーネントはthis.stateに状態を保持できる
     * 状態が更新されると再描画される
     */
    this.state = { name: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    /**
     * setState
     * stateを更新する関数
     */
    this.setState({ name: event.target.value });
  }

  /**
   * render
   * 描画するコンポーネントを返す関数
   */
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <HelloMessage name={this.state.name} />
      </div>
    );
  }
}

export default App;
