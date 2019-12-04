<template>
  <div class="search-line">
    <input v-model="query" type="text" class="search" placeholder="Search for Item..."/>
    <div @click="searchButtonHandler" class="btn-search">
      <i class="fa fa-search" aria-hidden="true"></i>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'SearchLine',
    data() {
      return {
        query: '',
      }
    },
    methods: {
      searchButtonHandler() {
        this.$emit('search', this.query);
      },
    },
  }
</script>

<style lang="sass">
  .search-line
    display: flex

  .search
    border: 1px solid #e6e6e6
    -webkit-box-sizing: border-box
    box-sizing: border-box
    background-color: $lightColorAccent
    width: 279px
    height: 100%
    color: #a4a4a4
    font-size: 14px
    padding: 0 15px

  .search:focus
    outline-color: transparent
    border-color: $colorAccent

  .btn-search
    border-bottom-right-radius: 3px
    border-top-right-radius: 3px
    border: 1px solid #d9d9d9
    border-left-color: transparent
    box-sizing: border-box
    background-color: $lightColorAccent
    height: 100%
    width: 38px
    right: 0
    text-align: center
    line-height: 38px

  .btn-search:hover
    color: $colorAccent
</style>