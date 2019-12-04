<template>
  <article class="product-parameters-items">
    <h3>{{ parameterName }}</h3>
    <vue-slider
        v-model="value"
        v-bind="options"
        @change="changeRangeHandler"
    >
      <template v-slot:dot="{ value, focus }">
        <div :class="['custom-dot', { focus }]"></div>
      </template>
    </vue-slider>
    <div class="range-values">
      <div>${{ value[0] }}</div>
      <div>${{ value[1] }}</div>
    </div>
  </article>
</template>

<script>
  'use strict';

  import VueSlider from 'vue-slider-component'
  import 'vue-slider-component/theme/default.css'

  export default {
    name: "CatalogRangePrice",
    props: ['products'],
    data: function () {
      return {
        parameterName: 'Price',
        filterRule: {
          key: null,
          value: null,
        },
        // priceRange: this.getPriceRange,
        options: {
          height: 6,
          // min: this.getPriceRange.min,
          // max: this.getPriceRange.max,
          min: 50, // TODO: разобраться
          max: 350, // TODO: разобраться
          interval: 1,
          lazy: true,
          tooltipPlacement: 'bottom',
          dragOnClick: true,
          processStyle: {backgroundColor: '#f16d7f'},
          railStyle: {backgroundColor: '#f0f0f0'},
          tooltipStyle: {
            backgroundColor: '#f16d7f',
            borderColor: '#f16d7f'
          },
        },
        // value: [this.priceRange.min, this.priceRange.max],
        value: [50, 350], // TODO: разобраться
      };
    },
    methods: {
      changeRangeHandler() {
        this.filterRule.key = this.parameterName.toLowerCase();
        this.filterRule.value = this.value;
        this.$emit('filter', this.filterRule);
      },
    },
    computed: {
      getPriceRange() { // TODO: пока диапазон цен захардкожен этот метод не применяется
        let prices = [];
        this.products.forEach(product => {
          prices.push(product.price);
        });
        return {min: Math.min(...prices), max: Math.max(...prices)}
      },
    },
    components: {
      VueSlider, //asd
    },
  };
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

  .product-parameters-items
    a
      color: #6f6e6e
      font-size: 14px
      font-weight: 400
      line-height: 26px

  .range-values
    display: flex
    justify-content: space-between
    margin-top: 5px
    font-size: 14px

  .custom-dot
    width: 100%
    height: 100%
    border-radius: 50%
    background-color: #f16d7f
</style>