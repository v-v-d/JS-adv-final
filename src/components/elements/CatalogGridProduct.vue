<template>
  <div class="grid-product content">
    <div class="grid-product-l">
      <CatalogLeftDropdownMenu
          :products="products"
          @filter="filterClickHandler"
      />
    </div>

    <div class="grid-product-r">
      <div class="product-parameters">
        <article class="product-parameters-items trending-now">
          <h3>Trending now</h3>
          <div class="trending-now-box">
            <a href="#">Bohemian</a>
            <h5>&#x7c;</h5>
            <a href="#">Floral</a>
            <h5>&#x7c;</h5>
            <a href="#">Lace</a>
          </div>
          <div class="trending-now-box">
            <a href="#">Floral</a>
            <h5>&#x7c;</h5>
            <a href="#">Lace</a>
            <h5>&#x7c;</h5>
            <a href="#">Bohemian</a>
          </div>
        </article>
        <CatalogSizeMenu @filter="filterClickHandler"/>
        <CatalogRangePrice
            :products="products"
            @filter="filterClickHandler"/>
      </div>
      <div class="product-sort">
        <CatalogSortBy @sort="sortByChangeHandler"/>
        <form class="form-product-sort">
          <p>Show</p>
          <select name="Show">
            <option value="03">03</option>
            <option value="06">06</option>
            <option value="09">09</option>
            <option value="12">12</option>
          </select>
        </form>
      </div>

      <div class="grid-catalogue">
        <ProductCard
            v-for="product in filteredProducts"
            :key="product.id"
            :id="product.id"
            :img="product.img"
            :name="product.name"
            :price="product.price"
            @buy="buyButtonHandler(product)"
        />
      </div>

      <div class="product-nav">
        <ul class="page-nav">
          <li><a href="#">&#10094;</a></li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a href="#">6</a></li>
          <li><a href="#">7</a></li>
          <li><a href="#">&#10095;</a></li>
        </ul>
        <a @click="buttonViewAllHandler" class="btn-view-all" href="#">View All</a>
      </div>

    </div>
  </div>
</template>

<script>
  import ProductCard from '../elements/ProductCard.vue';
  import CatalogLeftDropdownMenu from '../elements/CatalogLeftDropdownMenu.vue';
  import CatalogSizeMenu from '../elements/CatalogSizeMenu.vue';
  import CatalogRangePrice from '../elements/CatalogRangePrice.vue';
  import CatalogSortBy from '../elements/CatalogSortBy.vue';

  let products = [
    {
      id: 1,
      name: "Marina t-shirt",
      price: 150,
      img: "/src/assets/Layer_2.jpg",
      size: ["M", "L", "XL", "XXL"],
      category: "t-shirts",
      brand: "H&M",
      designer: "Binburhan",
      material: "cotton",
      color: "white"
    },
    {
      id: 2,
      name: "Coral top",
      price: 50,
      img: "/src/assets/Layer_3.jpg",
      size: ["XXS", "XS", "S", "M", "L"],
      category: "denim",
      brand: "H&M",
      designer: "Binburhan",
      material: "silk",
      color: "black"
    },
    {
      id: 3,
      name: "Beard jacket",
      price: 350,
      img: "/src/assets/Layer_4.jpg",
      size: ["XXS", "XS", "L", "XL", "XXL"],
      category: "jackets",
      brand: "H&M",
      designer: "Mr. Noname",
      material: "wool",
      color: "white"
    },
    {
      id: 4,
      name: "Flower dress",
      price: 250,
      img: "/src/assets/Layer_5.jpg",
      size: ["XXS", "XS", "S", "XL", "XXL"],
      category: "t-shirts",
      brand: "H&M",
      designer: "Mr. Noname",
      material: "linen",
      color: "black"
    },
    {
      id: 5,
      name: "Stripy top",
      price: 120,
      img: "/src/assets/Layer_6.jpg",
      size: ["XXS", "M", "L", "XL", "XXL"],
      category: "denim",
      brand: "H&M",
      designer: "Mr. Unknown",
      material: "polyester",
      color: "yellow"
    },
    {
      id: 6,
      name: "Grey jacket",
      price: 210,
      img: "/src/assets/Layer_7.jpg",
      size: ["XXS", "XS", "S", "M", "L"],
      category: "jackets",
      brand: "H&M",
      designer: "Mr. Unknown",
      material: "nylon",
      color: "red"
    },
    {
      id: 7,
      name: "Hipster pants",
      price: 80,
      img: "/src/assets/Layer_8.jpg",
      size: ["XXS", "XS", "M", "L", "XL", "XXL"],
      category: "t-shirts",
      brand: "Bershka",
      designer: "Mr. Nameless",
      material: "cotton",
      color: "yellow"
    },
    {
      id: 8,
      name: "Square kangaroo",
      price: 160,
      img: "/src/assets/Layer_9.jpg",
      size: ["XS", "S", "M", "L", "XL", "XXL"],
      category: "denim",
      brand: "Bershka",
      designer: "Mr. Nameless",
      material: "silk",
      color: "red"
    },
    {
      id: 9,
      name: "Long top",
      price: 90,
      img: "/src/assets/2_1.jpg",
      size: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
      category: "jackets",
      brand: "Bershka",
      designer: "Mr. Anon",
      material: "wool",
      color: "grey"
    },
    {
      id: 10,
      name: "Brown coat",
      price: 75,
      img: "/src/assets/2_2.jpg",
      size: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
      category: "t-shirts",
      brand: "Bershka",
      designer: "Mr. Anon",
      material: "linen",
      color: "brown"
    },
    {
      id: 11,
      name: "Beard t-shirt",
      price: 115,
      img: "/src/assets/2_4.jpg",
      size: ["XXS", "XS", "S", "M", "XXL"],
      category: "denim",
      brand: "Bershka",
      designer: "Mr. Strange",
      material: "polyester",
      color: "grey"
    },
    {
      id: 12,
      name: "Beard jacket",
      price: 170,
      img: "/src/assets/2_6.jpg",
      size: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
      category: "jackets",
      brand: "Bershka",
      designer: "Mr. Strange",
      material: "nylon",
      color: "brown"
    },
    {
      id: 13,
      name: "Brown long top",
      price: 85,
      img: "/src/assets/2_8.jpg",
      size: ["XXS", "XS"],
      category: "t-shirts",
      brand: "Stradivarius",
      designer: "Junior designer",
      material: "cotton",
      color: "green"
    },
    {
      id: 14,
      name: "Blue beard t-shirt",
      price: 95,
      img: "/src/assets/2_9.jpg",
      size: ["XXS", "XS", "S"],
      category: "denim",
      brand: "Stradivarius",
      designer: "Junior designer",
      material: "silk",
      color: "blue"
    },
    {
      id: 15,
      name: "Black suit",
      price: 210,
      img: "/src/assets/Layer_44.jpg",
      size: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
      category: "jackets",
      brand: "Stradivarius",
      designer: "Middle designer",
      material: "wool",
      color: "green"
    },
    {
      id: 16,
      name: "Long skirt",
      price: 165,
      img: "/src/assets/Layer_45.jpg",
      size: ["XXS", "XS", "S", "L", "XL", "XXL"],
      category: "t-shirts",
      brand: "Stradivarius",
      designer: "Middle designer",
      material: "linen",
      color: "blue"
    },
    {
      id: 17,
      name: "Yellow long sleeve",
      price: 130,
      img: "/src/assets/Layer_46.jpg",
      size: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
      category: "denim",
      brand: "Stradivarius",
      designer: "Senior designer",
      material: "polyester",
      color: "orange"
    },
    {
      id: 18,
      name: "Black jeans",
      price: 260,
      img: "/src/assets/Layer_47.jpg",
      size: ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
      category: "jackets",
      brand: "Stradivarius",
      designer: "Senior designer",
      material: "nylon",
      color: "orange"
    }
  ]; // TODO: вместо rest-api для проверки в браузере

  export default {
    name: 'CatalogGridProduct',
    props: ['products'],
    data() {
      return {
        filterRules: {
          price: [],
          size: [],
          category: [],
          brand: [],
          designer: [],
          material: [],
          color: [],
        },
        filteredProducts: [],
        isSorted: false,
        sortRule: null,
      };
    },
    methods: {
      filterProducts() {
        let filteredProducts = this.products.slice();
        for (const rule in this.filterRules) {
          if (this.filterRules.hasOwnProperty(rule) && this.isRuleNotEmpty(rule)) {
            filteredProducts = this.filterProductsByRule(filteredProducts, rule);
          }
        }
        this.filteredProducts = filteredProducts;
        if (this.isSorted) {
          this.sortProducts(this.sortRule);
        }
      },
      isRuleNotEmpty(rule) {
        return this.filterRules[rule].length;
      },
      filterProductsByRule(products, rule) {
        let filteredProducts = [];
        products.forEach(product => {
          if (this.isProductMatchTheRule(product, rule)) {
            filteredProducts.push(product);
          }
        });
        return filteredProducts;
      },
      isProductMatchTheRule(product, rule) {
        if (rule === 'price') { // TODO: попробовать реализовать без хардкода
          return this.filterRules[rule][0] <= product[rule] && product[rule] <= this.filterRules[rule][1];
        }
        if (product[rule] instanceof Array) {
          return this.filterRules[rule].every(item => product[rule].includes(item));
        } else {
          return this.filterRules[rule].includes(product[rule]);
        }
      },
      filterClickHandler(filterRule) {
        if (filterRule.key === 'price') { // TODO: попробовать реализовать без хардкода
          this.filterRules[filterRule.key] = filterRule.value;
        } else {
          this.isAlreadyInRules(filterRule) ? this.removeRuleFromRules(filterRule) : this.addRuleToRules(filterRule);
        }
        this.filterProducts();
      },
      isAlreadyInRules(filterRule) {
        return this.filterRules[filterRule.key].includes(filterRule.value);
      },
      removeRuleFromRules(filterRule) {
        let ruleIdx = this.getRuleIdx(filterRule);
        this.filterRules[filterRule.key].splice(ruleIdx, 1);
      },
      getRuleIdx(filterRule) {
        return this.filterRules[filterRule.key].findIndex(rule => rule === filterRule.value);
      },
      addRuleToRules(filterRule) {
        this.filterRules[filterRule.key].push(filterRule.value);
      },
      buyButtonHandler(product) {
        this.$emit('buy', product);
      },
      buttonViewAllHandler(event) {
        this.filteredProducts = this.products;
        event.preventDefault();
      },
      sortByChangeHandler(sortRule) {
        if (!this.isSorted) {
          this.isSorted = true;
        }
        this.sortRule = sortRule;
        this.sortProducts(this.sortRule);
      },
      sortProducts(sortRule) {
        switch (sortRule) {
          case 'in order':
            this.sortInOrder();
            break;
          case 'min first':
            this.sortByPriceFromMinToMax();
            break;
          case 'max first':
            this.sortByPriceFromMaxToMin();
            break;
          case 'name':
            this.sortByName();
            break;
        }
      },
      sortInOrder() {
        this.filteredProducts.sort((product1, product2) => product1.id - product2.id);
      },
      sortByPriceFromMinToMax() {
        this.filteredProducts.sort((product1, product2) => product1.price - product2.price);
      },
      sortByPriceFromMaxToMin() {
        this.filteredProducts.sort((product1, product2) => product2.price - product1.price);
      },
      sortByName() {
        this.filteredProducts.sort((product1, product2) => {
          let productName1 = product1.name.toUpperCase();
          let productName2 = product2.name.toUpperCase();
          if (productName1 < productName2) {
            return -1;
          }
          if (productName1 > productName2) {
            return 1;
          }
          return 0;
        });
      },
    },
    mounted() {
      this.products = products; // TODO: вместо rest-api для проверки в браузере

      this.filterProducts();
    },
    components: {
      ProductCard,
      CatalogLeftDropdownMenu,
      CatalogSizeMenu,
      CatalogRangePrice,
      CatalogSortBy,
    },
  };
</script>

<style lang="sass" scoped>
  .grid-product
    display: flex

  .grid-product-l
    width: 25%

  .grid-product-r
    width: 75%

  .product-parameters
    display: flex
    justify-content: space-between
    margin-bottom: 40px

  .product-parameters-items
    width: calc(100% / 3)
    /*padding: 0 10px*/
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

  .trending-now
    a:hover
      color: $colorAccent

  .trending-now-box
    display: flex
    width: 200px

  .trending-now-box
    h5
      font-size: 14px
      margin: 0 10px

  #rangePrice
    width: 100%

  .product-sort
    background-color: #f3f3f3
    padding: 10px
    margin-bottom: 50px
    display: flex

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

  .outline-color-norm
    outline-color: transparent

  select:focus
    @extend .outline-color-norm

  option:hover
    @extend .outline-color-norm

  option:focus
    @extend .outline-color-norm

  .grid-catalogue
    display: flex
    flex-wrap: wrap
    justify-content: space-between

  .product-nav
    display: flex
    justify-content: space-between
    margin-bottom: 100px

  .page-nav
    display: flex
    align-items: center
    padding: 0
    border-radius: 3px
    border: 1px solid #ebebeb
    box-sizing: border-box
    background-color: $lightColorAccent

  .page-nav a
    color: #c4c4c4
    font-size: 16px
    padding: 10px
    box-sizing: border-box
    display: block

  .page-nav
    a:hover
      color: $colorAccent

  .page-nav
    li
      display: block

  .btn-view-all
    border-radius: 3px
    border: 1px solid #ef5b70
    box-sizing: border-box
    background-color: $lightColorAccent
    padding: 0 50px
    line-height: 44px
    color: $colorAccent
    display: block
    transition: .3s

  .btn-view-all:hover
    color: $lightColorAccent
    background: $colorAccent

  .product-item:nth-child(3n-1):last-child
    margin-right: 34.73%
</style>