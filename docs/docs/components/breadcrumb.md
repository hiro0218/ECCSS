# Breadcrumb

<div class="sample-container">
  <nav>
    <ol class="c-breadcrumb">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item"><a href="#">Item List</a></li>
      <li class="breadcrumb-item active">Item Detail</li>
    </ol>
  </nav>
</div>

```html
<ol class="c-breadcrumb">
  <li class="breadcrumb-item"><a href="#">Home</a></li>
  <li class="breadcrumb-item"><a href="#">Item List</a></li>
  <li class="breadcrumb-item active">Item Detail</li>
</ol>
```

## 区切りの変更

区切り文字は下記の変数で定義されています。

```scss
$breadcrumb-divider: quote('/') !default;
```

たとえば、`quote('>')`などを指定することで区切り文字を変更できます。

### 非表示にする

値として`false`を指定すると、区切り文字を非表示にできます。

```scss
$breadcrumb-divider: false;
```
