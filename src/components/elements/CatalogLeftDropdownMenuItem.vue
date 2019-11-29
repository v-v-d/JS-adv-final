<template>
  <div class="product-category">
    <details>
      <summary class="options-category">{{ menuItem.key }}</summary>
      <ul
          class="options-category-list"
          v-for="value in menuItem.value"
          :key="value"
      ><li><a @click="filterClickHandler(value, $event)" href="#">{{ value }}</a></li>
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
        removedStatus: false,
      }
    },
    methods: {
      filterClickHandler(value, event) {
        this.$emit('filter', {
          key: this.menuItem.key,
          value: value,
          isRemoved: this.removedStatus,
        });
        this.changeColorAccentClass(event);
        this.removedStatus = !this.removedStatus;
        event.preventDefault();
      },
      changeColorAccentClass(event) {
        if (this.removedStatus) {
          event.target.classList.remove('color-accent')
        } else {
          event.target.classList.add('color-accent');
        }
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

  .color-accent
    color: $colorAccent
</style>