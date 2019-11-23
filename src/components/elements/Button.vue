<template>
  <a class="button" href="#">{{ buttonName }}</a>
</template>

<script>
  export default {
    name: 'Button',
    props: ['buttonName'],
  };
</script>

<style lang="sass">
  $colorAccent: #f16d7f
  $lightColorAccent: #ffffff

  .button
    background: $colorAccent
    color: $lightColorAccent
    font-size: 15px
    line-height: 38px
    padding: 0 19px
    border: 1px solid transparent
    transition: background-color .3s

  .button:hover
    color: $colorAccent
    background: $lightColorAccent
    border: 1px solid $colorAccent
</style>