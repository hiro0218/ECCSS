# Column

## o-columns

<div class="p-layout">
  <div class="o-columns">
    <div class="column">auto</div>
    <div class="column">auto</div>
    <div class="column">auto</div>
    <div class="column">auto</div>
  </div>

  <div class="o-columns">
    <div class="column is-full">full</div>
  </div>

  <div class="o-columns">
    <div class="column is-half">half</div>
    <div class="column">auto</div>
  </div>

  <div class="o-columns">
    <div class="column is-one-quarter">one-quarter</div>
    <div class="column">auto</div>
    <div class="column">auto</div>
    <div class="column">auto</div>
  </div>
</div>

<style lang="scss">
.p-layout {
  .o-columns {
    margin-bottom: 2rem;
    text-align: center;
  }

  .column {
    background: #eee;
    padding: 1rem;

    &.is-full,
    &.is-half,
    &.is-one-quarter {
      background: #aaa;
    }
  }
}
</style>
