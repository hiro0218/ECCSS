# Form

## layout

`.c-form-group`を使い、form系の要素をまとめることができます。`.c-form-group`は横方向に並びますが、`.vertical`をマルチクラスで指定すると縦方向に並ばせることができます。

<div class="sample-container">
  <div class="c-form-group">
    <div class="c-radio">
      <input type="radio" name="group-sample1" id="sample1-male" checked />
      <label for="sample1-male">男性</label>
    </div>
    <div class="c-radio">
      <input type="radio" name="group-sample1" id="sample1-female" />
      <label for="sample1-female">女性</label>
    </div>
    <div class="c-radio">
      <input type="radio" name="group-sample1" id="sample1-other" disabled />
      <label for="sample1-other">その他</label>
    </div>
  </div>
  <hr>
  <div class="c-form-group vertical">
    <div class="c-radio">
      <input type="radio" name="group-sample2" id="sample2-male" checked />
      <label for="sample2-male">男性</label>
    </div>
    <div class="c-radio">
      <input type="radio" name="group-sample2" id="sample2-female" />
      <label for="sample2-female">女性</label>
    </div>
    <div class="c-radio">
      <input type="radio" name="group-sample2" id="sample2-other" disabled />
      <label for="sample2-other">その他</label>
    </div>
  </div>
</div>

```html
<div class="c-form-group">
  <div class="c-radio">
    <input type="radio" name="group-sample1" id="sample1-male" checked />
    <label for="sample1-male">男性</label>
  </div>
  <div class="c-radio">
    <input type="radio" name="group-sample1" id="sample1-female" />
    <label for="sample1-female">女性</label>
  </div>
  <div class="c-radio">
    <input type="radio" name="group-sample1" id="sample1-other" disabled />
    <label for="sample1-other">その他</label>
  </div>
</div>
<hr>
<div class="c-form-group vertical">
  <div class="c-radio">
    <input type="radio" name="group-sample2" id="sample2-male" checked />
    <label for="sample2-male">男性</label>
  </div>
  <div class="c-radio">
    <input type="radio" name="group-sample2" id="sample2-female" />
    <label for="sample2-female">女性</label>
  </div>
  <div class="c-radio">
    <input type="radio" name="group-sample2" id="sample2-other" disabled />
    <label for="sample2-other">その他</label>
  </div>
</div>
```

## input

## checkbox

<div class="sample-container">
  <div class="c-form-group">
    <div class="c-checkbox">
      <input type="checkbox" name="check-agree" id="check-agree" />
      <label for="check-agree">同意する</label>
    </div>
  </div>
</div>

```html
<div class="c-checkbox">
  <input type="checkbox" name="check-agree" id="check-agree" />
  <label for="check-agree">同意する</label>
</div>
```

## radio

<div class="sample-container">
  <div class="c-form-group">
    <div class="c-radio">
      <input type="radio" name="radio-sex" id="radio-male" checked />
      <label for="radio-male">男性</label>
    </div>
    <div class="c-radio">
      <input type="radio" name="radio-sex" id="radio-female" />
      <label for="radio-female">女性</label>
    </div>
    <div class="c-radio">
      <input type="radio" name="radio-sex" id="radio-other" disabled />
      <label for="radio-other">その他</label>
    </div>
  </div>
</div>

```html
<div class="c-radio">
  <label for="radio-male">男性</label>
  <input type="radio" name="radio-sex" id="radio-male" checked />
</div>
<div class="c-radio">
  <input type="radio" name="radio-sex" id="radio-female" />
  <label for="radio-female">女性</label>
</div>
<div class="c-radio">
  <input type="radio" name="radio-sex" id="radio-other" disabled />
  <label for="radio-other">その他</label>
</div>
```
