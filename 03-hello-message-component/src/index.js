import React from 'react';
import { render } from 'react-dom';
import HelloMessage from './HelloMessage';

/**
 * render関数
 *
 * React ElementをDOM要素に描画する
 */
render(
  <div>
    <HelloMessage />
    <HelloMessage name="everyone" />
  </div>,

  /**
   * レンダーターゲット
   * ここで指定したDOM要素の中に描画されます
   */
  document.getElementById('root')
);
