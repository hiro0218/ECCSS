# Card

## default

<div class="sample-container">
  <div class="o-columns">
    <div class="column is-half">
      <section class="c-card">
        <header class="card-header">
          <h3 class="card-title">Pangram</h3>
        </header>
        <div class="card-body">The quick brown fox jumps over the lazy dog.</div>
        <footer class="card-footer"><a href="https://ja.wikipedia.org/wiki/The_quick_brown_fox_jumps_over_the_lazy_dog" target="_blank">Wikipedia</a></footer>
      </section>
    </div>
  </div>
</div>

```html
<section class="c-card">
  <header class="card-header">
    <h3 class="card-title">Pangram</h3>
  </header>
  <div class="card-body">The quick brown fox jumps over the lazy dog.</div>
  <footer class="card-footer"><a href="https://ja.wikipedia.org/wiki/The_quick_brown_fox_jumps_over_the_lazy_dog" target="_blank">Wikipedia</a></footer>
</section>
```

## border

<div class="sample-container">
  <div class="o-columns">
    <div class="column is-half">
      <section class="c-card border">
        <header class="card-header">
          <h3 class="card-title">Pangram</h3>
        </header>
        <div class="card-body">The quick brown fox jumps over the lazy dog.</div>
        <footer class="card-footer"><a href="https://ja.wikipedia.org/wiki/The_quick_brown_fox_jumps_over_the_lazy_dog" target="_blank">Wikipedia</a></footer>
      </section>
    </div>
  </div>
</div>

```html
<section class="c-card border">
  <header class="card-header">
    <h3 class="card-title">Pangram</h3>
  </header>
  <div class="card-body">The quick brown fox jumps over the lazy dog.</div>
  <footer class="card-footer"><a href="https://ja.wikipedia.org/wiki/The_quick_brown_fox_jumps_over_the_lazy_dog" target="_blank">Wikipedia</a></footer>
</section>
```

### image

<div class="sample-container">
  <div class="o-columns">
    <div class="column is-half">
      <section class="c-card border">
        <div class="card-image">
          <img src="https://source.unsplash.com/320x200/?fox" alt="fox">
        </div>
        <header class="card-header">
          <h3 class="card-title">Pangram</h3>
        </header>
        <div class="card-body">The quick brown fox jumps over the lazy dog.</div>
        <footer class="card-footer"><a href="https://ja.wikipedia.org/wiki/The_quick_brown_fox_jumps_over_the_lazy_dog">Wikipedia</a></footer>
      </section>
    </div>
  </div>
  <div class="o-columns">
    <div class="column is-half">
      <section class="c-card border">
        <div class="card-image">
          <img src="https://source.unsplash.com/320x200/?fox" alt="fox">
        </div>
        <div class="card-body">The quick brown fox jumps over the lazy dog.</div>
      </section>
    </div>
  </div>
</div>

```html
<section class="c-card border">
  <div class="card-image">
    <img src="https://source.unsplash.com/320x200/?fox" alt="fox">
  </div>
  <header class="card-header">
    <h3 class="card-title">Pangram</h3>
  </header>
  <div class="card-body">The quick brown fox jumps over the lazy dog.</div>
  <footer class="card-footer"><a href="https://ja.wikipedia.org/wiki/The_quick_brown_fox_jumps_over_the_lazy_dog">Wikipedia</a></footer>
</section>

<section class="c-card border">
  <div class="card-image">
    <img src="https://source.unsplash.com/320x200/?fox" alt="fox">
  </div>
  <div class="card-body">The quick brown fox jumps over the lazy dog.</div>
</section>
```

<style lang="scss" scoped>
.sample-container {
  .column {
    margin: auto;
  }
  .o-columns + .o-columns {
    margin-top: 1rem;
  }
}
</style>
