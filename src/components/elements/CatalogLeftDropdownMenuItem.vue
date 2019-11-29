<template>
  <div class="product-category">
    <details>
      <summary class="options-category">{{ menuItem.key }}</summary>
      <ul class="options-category-list"
          v-for="value in menuItem.value"
          :key="value">
        <li><a class="options-category-link"
              :is-removed="false"
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
        filterRules: {
          price: [],
          availableSizes: [],
          category: [],
          brand: [],
          designer: [],
          material: [],
          color: []
        },
      };
    },
    methods: {
      filterClickHandler(value, event) {
        if (event.target.isRemoved) {
          this.filterRules[this.menuItem.key] = this.filterRules[this.menuItem.key].filter(item => item !== value);
        } else {
          this.filterRules[this.menuItem.key].push(value);
        }
        this.$emit('filter', this.filterRules);
        // this.$emit('filter', {
        //   key: this.menuItem.key,
        //   value: value,
        //   isRemoved: event.target.isRemoved,
        // });
        this.changeActiveClass(event);
        event.target.isRemoved = !event.target.isRemoved;
        event.preventDefault();
      },
      changeActiveClass(event) {
        if (event.target.isRemoved) {
          event.target.classList.remove('options-category-link-active')
        } else {
          event.target.classList.add('options-category-link-active');
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

  .options-category-link
      color: #6f6e6e
      font-size: 14px
      line-height: 33px
      display: block

  .options-category-link:hover
      color: $colorAccent

  .options-category-link-active
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