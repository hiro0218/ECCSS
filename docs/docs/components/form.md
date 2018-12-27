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

### input

<div class="sample-container">
  <input class="c-input" type="text" name="text" placeholder="Placeholder">
  <input class="c-input" type="text" name="text" value="Text">
  <input class="c-input" type="text" name="text" value="Disabled" disabled>
  <input class="c-input" type="text" name="text" value="Readonly" readonly>
</div>

```html
<input class="c-input" type="text" placeholder="Placeholder">
<input class="c-input" type="text" value="Text">
<input class="c-input" type="text" value="Disabled" disabled>
<input class="c-input" type="text" value="Readonly" readonly>
```


### textarea

<div class="sample-container">
  <textarea class="c-textarea" name="textarea" placeholder="Placeholder"></textarea>
  <textarea class="c-textarea" name="textarea">Text</textarea>
  <textarea class="c-textarea" name="textarea" disabled>Disabled</textarea>
  <textarea class="c-textarea" name="textarea" readonly>Readonly</textarea>
</div>

```html
<textarea class="c-textarea" placeholder="Placeholder"></textarea>
<textarea class="c-textarea">Text</textarea>
<textarea class="c-textarea" disabled>Disabled</textarea>
<textarea class="c-textarea" readonly>Readonly</textarea>
```


## select

<div class="sample-container">
  <div class="o-columns is-multiline">
    <div class="column is-full">
      <div class="c-select">
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
        <div class="c-select">
          <select disabled>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
      </div>
    </div>
    <div class="column is-full">
      <div class="c-select is-multiple">
        <select multiple>
          <option selected>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="c-select is-multiple">
        <select multiple disabled>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
  </div>
</div>

```html
<div class="c-select">
  <select>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</div>
<div class="c-select is-multiple">
  <select multiple>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
  </select>
</div>
```

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
