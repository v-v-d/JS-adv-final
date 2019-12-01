<template>
  <article class="product-parameters-items">
    <h3>{{ parameterName }}</h3>
    <vue-slider
        v-model="value"
        :min="0"
        :max="1000"
        :interval="1"
        :tooltip="'none'"
        :contained='true'
        :drag-on-click="true"
        :process-style="{ backgroundColor: '#f16d7f' }"
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
  import VueSlider from 'vue-slider-component'
  import 'vue-slider-component/theme/default.css'

  export default {
    name: "CatalogRangePrice",
    data: function () {
      return {
        parameterName: 'Price',
        filterRule: {
          key: null,
          value: null,
        },
        options: {
          height: 6,
        },
        value: [0, 1000],
      };
    },
    methods: {
      changeRangeHandler() {
        this.filterRule.key = this.parameterName.toLowerCase();
        this.filterRule.value = this.value;
        this.$emit('filter', this.filterRule);
      },
    },
    components: {
      VueSlider,
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
    margin-top: 7px
    font-size: 14px

  .custom-dot
    width: 100%
    height: 100%
    border-radius: 50%
    background-color: #f16d7f
</style>