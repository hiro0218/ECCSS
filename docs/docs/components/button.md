# Button

## default

デフォルトのボタン

<div class="sample-container">
  <button type="button" class="c-button plain">Default</button>
  <button type="button" class="c-button primary">Primary</button>
  <button type="button" class="c-button success">Success</button>
  <button type="button" class="c-button danger">Danger</button>
  <button type="button" class="c-button warning">Warning</button>
  <button type="button" class="c-button info">Info</button>
  <button type="button" class="c-button primary" disabled>Primary disabled</button>
</div>

```html
<button type="button" class="c-button plain">Default</button>
<button type="button" class="c-button primary">Primary</button>
<button type="button" class="c-button success">Success</button>
<button type="button" class="c-button danger">Danger</button>
<button type="button" class="c-button warning">Warning</button>
<button type="button" class="c-button info">Info</button>
<button type="button" class="c-button primary" disabled>Primary disabled</button>
```

## outline

アウトラインのボタン

<div class="sample-container">
  <button type="button" class="c-button plain outline">Default</button>
  <button type="button" class="c-button primary outline">Primary</button>
  <button type="button" class="c-button success outline">Success</button>
  <button type="button" class="c-button danger outline">Danger</button>
  <button type="button" class="c-button warning outline">Warning</button>
  <button type="button" class="c-button info outline">Info</button>
  <button type="button" class="c-button primary outline" disabled>Primary disabled</button>
</div>

```html
<button type="button" class="c-button plain outline">Default</button>
<button type="button" class="c-button primary outline">Primary</button>
<button type="button" class="c-button success outline">Success</button>
<button type="button" class="c-button danger outline">Danger</button>
<button type="button" class="c-button warning outline">Warning</button>
<button type="button" class="c-button info outline">Info</button>
<button type="button" class="c-button primary outline" disabled>Primary disabled</button>
```

## size

サイズ

<div class="sample-container">
  <button type="button" class="c-button primary size-xs">Primary</button>
  <button type="button" class="c-button primary size-sm">Primary</button>
  <button type="button" class="c-button primary">Primary</button>
  <button type="button" class="c-button primary size-lg">Primary</button>
</div>

```html
<button type="button" class="c-button primary size-xs">Primary</button>
<button type="button" class="c-button primary size-sm">Primary</button>
<button type="button" class="c-button primary">Primary</button> <!-- size-md -->
<button type="button" class="c-button primary size-lg">Primary</button>
```


<style lang="scss" scoped>
.sample-container {
  display: flex;
  flex-wrap: wrap;
  .c-button {
    margin-bottom: 0.5rem;
  }
}
</style>
