<template>
  <main>
    <aside>
      <TheMenu />
    </aside>
    <section class="o-container">
      <nuxt/>
    </section>
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
