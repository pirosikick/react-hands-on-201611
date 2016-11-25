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
- `import './hoge';`のように書くと、そのファイルから相対パスでJSファイルを読み込みます。読み込むだけです。

`export`については後々登場予定ですので、登場したら解説します。

#### おまけ：npm

https://www.npmjs.com/

Node.js Package Managerの略です。

元々はNode.jsのパッケージを管理するものでしたが、今ではブラウザで動作するJavaScriptライブラリもnpmで管理されている場合がほとんどです。
`npm`コマンドを通して、パッケージのインストール、アップデート、公開などを実行することが可能です。また、パッケージの公開が非常に楽なので、大量のライブラリがnpmのレジストリ上に存在します。（具体数は忘れましたw）

- https://www.npmjs.com/package/react
  - React.jsのコア
- https://www.npmjs.com/package/react-dom
  - ReactのDOMに関する処理

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
