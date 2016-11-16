Hello World その1
=================

## コードの解説

### import

```javascript
import React from 'react';
import { render } from 'react-dom';
```

- npmパッケージや、その他のJSファイルを読み込みます
- 上記の場合、npmパッケージを読み込みます。
  - `import React from 'react';`
    - npmでインストールしたreactを読み込み、index.js内で`React`という変数で参照する
  - `import { render } from 'react-dom';`
    - 同様、`react-dom`というnpmパッケージを読み込み、その中のrender関数のみを使用する
- `import hoge from './hoge';`のように書くと、そのファイルから相対パスでJSファイルを読み込み、hoge変数を通して利用することが可能です。

### ReactDOM.render

```javascript
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
```

- 第1引数で指定したReact Elementを、第2引数で指定したDOM要素に描画します。
− 上記ですと、id属性が`"root"`であるDOM要素に、`<h1>Hello, World!!</h1>`が描画されます。
