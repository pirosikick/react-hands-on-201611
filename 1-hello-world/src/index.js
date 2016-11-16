import React from 'react';
import { render } from 'react-dom';

/**
 * render関数
 *
 * React ElementをDOM要素に描画する
 */
render(
  /**
   * React Elementを生成する関数
   *
   * 第1引数: HTMLタグ名、またはReact Component（後で解説します）
   * 第2引数: props（後で解説します）第1引数がHTMLタグの場合はの属性値
   * 第3引数: 子要素
   */
  React.createElement('h1', {}, "Hello, World!!"),

  /**
   * レンダーターゲット
   * ここで指定したDOM要素の中に描画されます
   */
  document.getElementById('root')
);
