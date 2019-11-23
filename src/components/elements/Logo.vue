<template>
  <a class="logo" href="#">
    <img class="logo-img" src="../../assets/logo.png" alt="logo">
    <p class="brand-name">BRAN<span class="color-accent">D</span></p>
  </a>
</template>

<script>
  export default {
    name: 'Logo',
  }
</script>

<style lang="sass">
  $colorAccent: #f16d7f
  $darkColorAccent: #222222

  .logo
    display: flex
    align-items: center

  .logo-img
    margin-right: 15px

  .brand-name
    font-size: 27px
    line-height: 32px
    color: $darkColorAccent
    display: flex
    margin-top: 5px
    font-weight: 100

  .color-accent
    color: $colorAccent
    font-weight: 600
</style>