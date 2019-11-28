<template>
  <div class="product-category">
    <details>
      <summary class="options-category">{{ menuItem.key }}</summary>
      <ul
          class="options-category-list"
          v-for="value in menuItem.value"
          :key="value"
      ><li><a href="#">{{ value }}</a></li>
      </ul>
    </details>
  </div>
</template>

<script>
  export default {
    name: "CatalogLeftDropdownMenuItem",
    props: ['menuItem'],
    data() {
      return {

      }
    },
    methods: {

    },
  };
</script>

<style lang="sass" scoped>
  .product-category
    margin-bottom: 20px
    width: 20%

    .options-category
      color: #6f6e6e
      box-sizing: border-box
      text-transform: uppercase
      line-height: 37px
      padding: 0 15px
      font-weight: 700
      border-bottom: 1px solid #ebebeb
      border-left: 5px solid #ef5b70

    summary::-webkit-details-marker
      display: none

    .options-category::before
      content: '▼'
      padding-right: 10px

    details[open] > summary::before
      content: '▲'

    .options-category-list
      a
        color: #6f6e6e
        font-size: 14px
        line-height: 33px
        display: block

    .options-category-list
      a:hover
        color: $colorAccent

    .options-category-list
      padding-left: 20px

    .options-category-list
      li
        list-style-type: none

    .options-category:focus
      outline-color: transparent
      color: $colorAccent

    .options-category:hover
      color: $colorAccent
</style>