<template>
  <form class="form-product-sort">
    <p>Sort By</p>
    <select @change="sortByChangeHandler($event)" name="sortBy">
      <option value="in order">in order</option>
      <option value="name">name</option>
      <option value="min first">price: min first</option>
      <option value="max first">price: max first</option>
    </select>
  </form>
</template>

<script>
  export default {
    name: "CatalogSortBy",
    methods: {
      sortByChangeHandler(event) {
        this.$emit('sort', event.target.value);
      }
    },
  };
</script>

<style lang="sass" scoped>
  .form-product-sort
    display: flex
    margin-right: 10px

  .form-product-sort
    option
      display: block
      color: #6f6e6e
      font-size: 14px
      font-weight: 400
      border: 1px solid #ebebeb
      box-sizing: border-box
      background-color: $lightColorAccent
      line-height: 30px
      padding: 0 10px

  .form-product-sort
    p
      display: block
      color: #6f6e6e
      font-size: 14px
      font-weight: 400
      border: 1px solid #ebebeb
      box-sizing: border-box
      background-color: $lightColorAccent
      line-height: 30px
      padding: 0 10px

  .form-product-sort
    select
      display: block
      color: #6f6e6e
      font-size: 14px
      font-weight: 400
      border: 1px solid #ebebeb
      box-sizing: border-box
      background-color: $lightColorAccent
      line-height: 30px
      padding: 0 10px

  .form-product-sort
    select:hover
      background: $colorAccent
      color: $lightColorAccent
</style>