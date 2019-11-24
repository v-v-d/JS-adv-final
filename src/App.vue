<template>
  <div class="main-content">
    <div class="top-site">
      <router-view/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
  };
</script>

<style lang="sass">
  $colorAccent: #f16d7f
  $darkColorAccent: #222222
  $lightColorAccent: #ffffff

  .outline-color-norm
    outline-color: transparent

  *
    margin: 0

  a
    text-decoration: none

  ul
    padding-left: 0

  body,
  html
    font-family: «Lato», sans-serif
    height: 100%

  .main-content
    display: flex
    flex-direction: column
    min-height: 100%

  .top-site
    flex: 1

  .content
    width: 1140px
    margin: 0 auto

  button
    transition: .3s

  img
    transition: .5s

  .color-accent
    color: $colorAccent
</style>