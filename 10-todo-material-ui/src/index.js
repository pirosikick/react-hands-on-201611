import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TodoApp from './TodoApp';

injectTapEventPlugin();

/**
 * localStorage.taskがあれば、JSON.parseして状態を復元
 */
let defaultTasks = [];
if (typeof localStorage.tasks !== 'undefined') {
  defaultTasks = JSON.parse(localStorage.tasks);
}

/**
 * render関数
 *
 * React ElementをDOM要素に描画する
 */
const app = render(
  <MuiThemeProvider>
    <TodoApp defaultTasks={defaultTasks}/>
  </MuiThemeProvider>,

  /**
   * レンダーターゲット
   * ここで指定したDOM要素の中に描画されます
   */
  document.getElementById('root')
);

/**
 * リロード時などにlocalStorageに状態を保存する
 */
window.addEventListener('beforeunload', function () {
  localStorage.tasks = JSON.stringify(app.getTasks());
});
