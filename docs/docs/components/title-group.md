# Title group

## default

<div class="sample-container">
  <div class="c-title-group">
    <div class="title">Shopping Guide</div>
    <div class="sub-title">ショッピングガイド</div>
  </div>
</div>

```html
<div class="c-title-group">
  <div class="title">Shopping Guide</div>
  <div class="sub-title">ショッピングガイド</div>
</div>
```

## left

<div class="sample-container">
  <div class="c-title-group is-left">
    <div class="title">Shopping Guide</div>
    <div class="sub-title">ショッピングガイド</div>
  </div>
</div>

```html
<div class="c-title-group is-left">
  <div class="title">Shopping Guide</div>
  <div class="sub-title">ショッピングガイド</div>
</div>
```

## right

<div class="sample-container">
  <div class="c-title-group is-right">
    <div class="title">Shopping Guide</div>
    <div class="sub-title">ショッピングガイド</div>
  </div>
</div>

```html
<div class="c-title-group is-right">
  <div class="title">Shopping Guide</div>
  <div class="sub-title">ショッピングガイド</div>
</div>
```

## horizontal

<div class="sample-container">
  <div class="c-title-group is-horizontal">
    <div class="title">Shopping Guide</div>
    <div class="sub-title">ショッピングガイド</div>
  </div>
</div>

```html
<div class="c-title-group is-horizontal">
  <div class="title">Shopping Guide</div>
  <div class="sub-title">ショッピングガイド</div>
</div>
```

## lowercase

<div class="sample-container">
  <div class="c-title-group is-lowercase">
    <div class="title">SHOPPING GUIDE</div>
    <div class="sub-title">ショッピングガイド</div>
  </div>
</div>

```html
<div class="c-title-group is-lowercase">
  <div class="title">SHOPPING GUIDE</div>
  <div class="sub-title">ショッピングガイド</div>
</div>
```

## default

<div class="sample-container">
  <div class="c-title-group">
    <div class="title">Shopping Guide</div>
    <div class="sub-title">ショッピングガイド</div>
  </div>
</div>

```html
<div class="c-title-group">
  <div class="title">Shopping Guide</div>
  <div class="sub-title">ショッピングガイド</div>
</div>
```

## disable sub-title

`$enable-title-group-sub-title`を`false`に設定するとサブタイトルが非表示になります。

<div class="sample-container">
  <div class="c-title-group is-lowercase">
    <div class="title">Shopping Guide</div>
    <div class="sub-title" style="display:none">ショッピングガイド</div>
  </div>
</div>

```scss
$enable-title-group-sub-title: false;
```

```html
<div class="c-title-group is-lowercase">
  <div class="title">Shopping Guide</div>
  <div class="sub-title">ショッピングガイド</div>
</div>
```

## lead text

タイトルの説明、リード文を`.lead`要素内に記述できます。

<div class="sample-container">
  <div class="c-title-group">
    <div class="title">Shopping Guide</div>
    <div class="sub-title">ショッピングガイド</div>
    <p class="lead">当オンラインショップの使い方、購入方法をご案内します</p>
  </div>
</div>

```html
<div class="c-title-group">
  <div class="title">Shopping Guide</div>
  <div class="sub-title">ショッピングガイド</div>
  <p class="lead">当オンラインショップの使い方、購入方法をご案内します</p>
</div>
```
