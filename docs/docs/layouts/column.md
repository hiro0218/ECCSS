# Column

## column pattern

<div class="sample-container">
  <div class="o-columns">
    <div class="column">auto</div>
    <div class="column">auto</div>
    <div class="column">auto</div>
    <div class="column">auto</div>
    <div class="column">auto</div>
  </div>

  <div class="o-columns">
    <div class="column is-full">full</div>
  </div>

  <div class="o-columns">
    <div class="column is-four-fifths">four-fifths</div>
    <div class="column">auto</div>
  </div>

  <div class="o-columns">
    <div class="column is-three-quarters">three-quarters</div>
    <div class="column">auto</div>
  </div>

  <div class="o-columns">
    <div class="column is-two-thirds">two-thirds</div>
    <div class="column">auto</div>
  </div>

  <div class="o-columns">
    <div class="column is-three-fifths">three-fifths</div>
    <div class="column">auto</div>
  </div>

  <div class="o-columns">
    <div class="column is-half">half</div>
    <div class="column">auto</div>
  </div>

  <div class="o-columns">
    <div class="column is-two-fifths">two-fifths</div>
    <div class="column">auto</div>
  </div>

  <div class="o-columns">
    <div class="column is-one-third">one-third</div>
    <div class="column">auto</div>
  </div>

  <div class="o-columns">
    <div class="column is-one-quarter">one-quarter</div>
    <div class="column">auto</div>
  </div>

  <div class="o-columns">
    <div class="column is-one-fifth">one-fifth</div>
    <div class="column">auto</div>
  </div>
</div>

```html
<div class="o-columns">
  <div class="column">auto</div>
  <div class="column">auto</div>
  <div class="column">auto</div>
  <div class="column">auto</div>
  <div class="column">auto</div>
</div>

<div class="o-columns">
  <div class="column is-full">full</div>
</div>

<div class="o-columns">
  <div class="column is-four-fifths">four-fifths</div>
  <div class="column">auto</div>
</div>

<div class="o-columns">
  <div class="column is-three-quarters">three-quarters</div>
  <div class="column">auto</div>
</div>

<div class="o-columns">
  <div class="column is-two-thirds">two-thirds</div>
  <div class="column">auto</div>
</div>

<div class="o-columns">
  <div class="column is-three-fifths">three-fifths</div>
  <div class="column">auto</div>
</div>

<div class="o-columns">
  <div class="column is-half">half</div>
  <div class="column">auto</div>
</div>

<div class="o-columns">
  <div class="column is-two-fifths">two-fifths</div>
  <div class="column">auto</div>
</div>

<div class="o-columns">
  <div class="column is-one-third">one-third</div>
  <div class="column">auto</div>
</div>

<div class="o-columns">
  <div class="column is-one-quarter">one-quarter</div>
  <div class="column">auto</div>
</div>

<div class="o-columns">
  <div class="column is-one-fifth">one-fifth</div>
  <div class="column">auto</div>
</div>
```

## modifiers

### centered

<div class="sample-container">
  <div class="o-columns is-centered">
    <div class="column is-half">half</div>
  </div>
</div>

```html
<div class="o-columns is-centered">
  <div class="column is-half">half</div>
</div>
```

### vcentered

<div class="sample-container">
  <div class="o-columns is-vcentered">
    <div class="column">auto</div>
    <div class="column">auto<br>column</div>
  </div>
</div>

```html
<div class="o-columns is-vcentered">
  <div class="column">auto</div>
  <div class="column">auto<br>column</div>
</div>
```

### multiline

<div class="sample-container">
  <div class="o-columns is-multiline">
    <div class="column is-full">1</div>
    <div class="column is-four-fifths">2</div>
    <div class="column">auto</div>
    <div class="column is-three-quarters">3</div>
    <div class="column is-is-two-thirds">4</div>
    <div class="column is-three-fifths">5</div>
    <div class="column">auto</div>
  </div>
</div>

```html
<div class="o-columns is-multiline">
  <div class="column is-full">1</div>
  <div class="column is-four-fifths">2</div>
  <div class="column">auto</div>
  <div class="column is-three-quarters">3</div>
  <div class="column is-is-two-thirds">4</div>
  <div class="column is-three-fifths">5</div>
  <div class="column">auto</div>
</div>
```


<style lang="scss" scoped>
.o-columns {
  margin-bottom: 2rem;
  text-align: center;
  &:last-child {
    margin-bottom: 0;
  }
}

.column {
  color: #495057;
  background: #e9ecef;
  padding: 1rem;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.6;
  }

  &[class*="is-"] {
    background: #ced4da;
  }
}
</style>
