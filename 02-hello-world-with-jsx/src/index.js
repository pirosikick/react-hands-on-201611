import React from 'react';
import { render } from 'react-dom';

const name = 'your name';
const className = 'title';

/**
 * render関数
 *
 * React ElementをDOM要素に描画する
 */
render(
  /**
   * JSX
   *
   * JavaScriptの中にHTMLタグが書けるように拡張された言語
   *
   * 下記と同じ
   * ```
   * React.createElement('h1', { className: 'title' }, 'Hello, World!')
   * ```
   */
  <h1 className={className}>Hello, {name}!</h1>,

  /**
   * レンダーターゲット
   * ここで指定したDOM要素の中に描画されます
   */
  document.getElementById('root')
);
