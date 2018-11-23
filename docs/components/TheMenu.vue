<template>
  <div>
    <ul>
      <li><nuxt-link to="/">Top</nuxt-link></li>
      <li>Elements
        <ul>
          <li><nuxt-link to="/typography">Typography</nuxt-link></li>
        </ul>
      </li>
      <li><nuxt-link to="/layout">Layout</nuxt-link></li>
      <li>Components
        <ul>
          <li><nuxt-link to="/table">Table</nuxt-link></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TheMenu'
}
</script>

<style>
</style>
