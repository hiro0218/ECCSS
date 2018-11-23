<template>
  <main class="o-container">
    <div class="o-columns">
      <aside class="colum one-quarter">
        <TheMenu />
      </aside>
      <section class="column">
        <nuxt/>
      </section>
    </div>
  </main>
</template>

<script>
import TheMenu from '~/components/TheMenu.vue'

export default {
  components: {
    TheMenu
  }
}
</script>

<style>
</style>
