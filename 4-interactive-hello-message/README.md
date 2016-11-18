Hello World その2
=================

## コードの解説

### JSX

ソースコードの中にHTMLを書けるように、JavaScriptのシンタックス拡張。FacebookはReactでコードを書く時にJSXを使うことを[推奨している](https://facebook.github.io/react/docs/introducing-jsx.html)。

#### 変数への代入

```javascript
const title = <h1>Hello, World</h1>;
```

### 変数の展開

```javascript
const name = 'pirosikick';
const className = 'title';
const title = <h1 title={className}>Hello, {name}</h1>;
```
