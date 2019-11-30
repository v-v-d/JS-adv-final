<template>
  <div class="product-category">
    <details>
      <summary class="options-category">{{ menuItem.key }}</summary>
      <ul class="options-category-list"
          v-for="value in menuItem.value"
          :key="value">
        <li><a class="options-category-link"
              @click="filterClickHandler(value, $event)"
              href="#">{{ value }}</a>
        </li>
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
        filterRule: {
          key: null,
          value: null,
          isDisabled: null,
        },
      };
    },
    methods: {
      filterClickHandler(value, event) {
        if (event.target.classList.contains('enabled')) {
          event.target.classList.remove('enabled');
          this.filterRule.isDisabled = true;
        } else {
          event.target.classList.add('enabled');
          this.filterRule.isDisabled = false;
        }
        this.filterRule.key = this.menuItem.key;
        this.filterRule.value = value;

        this.$emit('filter', this.filterRule);
        event.preventDefault();
      },
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

  .options-category-link
      color: #6f6e6e
      font-size: 14px
      line-height: 33px
      display: block

  .options-category-link:hover
      color: $colorAccent

  .enabled
      font-weight: 600

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