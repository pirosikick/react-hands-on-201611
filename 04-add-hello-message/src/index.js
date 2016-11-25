import React from 'react';
import { render } from 'react-dom';
import App from './App';

/**
 * render関数
 *
 * React ElementをDOM要素に描画する
 */
render(
  <App />,

  /**
   * レンダーターゲット
   * ここで指定したDOM要素の中に描画されます
   */
  document.getElementById('root')
);
