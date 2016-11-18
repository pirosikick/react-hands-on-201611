import React, { PropTypes } from 'react';

/**
 * HelloMessageコンポーネント
 */
function HelloMessage(props) {
  return <p>Hello, {props.name}!</p>;
}

/**
 * defaultProps
 *
 * propsが指定されなかった場合のデフォルト値を指定できる
 * ```javascript
 * <HelloMessage /> // <p>Hello, World!</p>
 * ```
 */
HelloMessage.defaultProps = {
  name: 'World',
};

/**
 * propTypes
 *
 * HelloMessageのpropsの型を指定できる
 * 指定しなくても動作するが、
 * 指定していると間違った型の値が入ったり、
 * 必須なのに指定していない場合に警告が出力されるので、
 * バグの発見が早くなって良いので、余裕があれば指定しよう
 * （開発モードの場合）
 */
HelloMessage.propTypes = {
  name: PropTypes.string,
};

export default HelloMessage;
