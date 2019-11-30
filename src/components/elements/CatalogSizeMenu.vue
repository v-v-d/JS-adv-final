<template>
  <article class="product-parameters-items">
    <h3>{{ parameterName }}</h3>
    <form class="form-size">
      <label
          v-for="size in sizes"
          :key="size.id"
      >
        <input
            type="checkbox"
            name="size"
            :value="size.value"
            @change="filterClickHandler(size.value, $event)"
        >{{ size.value }}
      </label>
    </form>
  </article>
</template>

<script>
  export default {
    name: "CatalogSizeMenu",
    data() {
      return {
        parameterName: 'Size',
        sizes: [
          {id: 1, value: 'XXS'},
          {id: 2, value: 'XS'},
          {id: 3, value: 'S'},
          {id: 4, value: 'M'},
          {id: 5, value: 'L'},
          {id: 6, value: 'XL'},
          {id: 7, value: 'XXL'},
        ],
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
        this.filterRule.key = this.parameterName.toLowerCase();
        this.filterRule.value = value;

        this.$emit('filter', this.filterRule);
        event.preventDefault();
      },
    },
  }
</script>

<style lang="sass" scoped>
  .product-parameters-items
    width: calc(100% / 3)
    padding: 0 10px
    box-sizing: border-box
    color: #6f6e6e
    font-size: 14px
    font-weight: 400
    line-height: 26px

  .product-parameters-items
    h3
      color: #6f6e6e
      font-size: 14px
      font-weight: 700
      line-height: 20px
      text-transform: uppercase
      margin-bottom: 15px

  .form-size
    label
      margin-right: 10px
      min-width: 50px
      display: block

  .form-size
    input
      margin-right: 5px

  .form-size
    display: flex
    flex-wrap: wrap

</style>