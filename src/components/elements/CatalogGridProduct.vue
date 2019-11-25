<template>
  <div class="grid-product content">
    <div class="grid-product-l">
      <div class="box-kategorii content">
        <div class="product-category">
          <details>
            <summary class="options-category">Category</summary>
            <ul class="options-category-list">
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Bags</a></li>
              <li><a href="#">Denim</a></li>
              <li><a href="#">Hoodies & Sweatshirts</a></li>
              <li><a href="#">Jackets & Coats</a></li>
              <li><a href="#">Pants</a></li>
              <li><a href="#">Polos</a></li>
              <li><a href="#">Shirts</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Shorts</a></li>
              <li><a href="#">Sweaters & Knits</a></li>
              <li><a href="#">T-Shirts</a></li>
              <li><a href="#">Tanks</a></li>
            </ul>
          </details>
        </div>
        <div class="product-category">
          <details>
            <summary class="options-category">BRAND</summary>
            <ul class="options-category-list">
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Bags</a></li>
              <li><a href="#">Denim</a></li>
              <li><a href="#">Hoodies & Sweatshirts</a></li>
              <li><a href="#">Jackets & Coats</a></li>
              <li><a href="#">Pants</a></li>
              <li><a href="#">Polos</a></li>
              <li><a href="#">Shirts</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Shorts</a></li>
              <li><a href="#">Sweaters & Knits</a></li>
              <li><a href="#">T-Shirts</a></li>
              <li><a href="#">Tanks</a></li>
            </ul>
          </details>
        </div>
        <div class="product-category">
          <details>
            <summary class="options-category">designer</summary>
            <ul class="options-category-list">
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Bags</a></li>
              <li><a href="#">Denim</a></li>
              <li><a href="#">Hoodies & Sweatshirts</a></li>
              <li><a href="#">Jackets & Coats</a></li>
              <li><a href="#">Pants</a></li>
              <li><a href="#">Polos</a></li>
              <li><a href="#">Shirts</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Shorts</a></li>
              <li><a href="#">Sweaters & Knits</a></li>
              <li><a href="#">T-Shirts</a></li>
              <li><a href="#">Tanks</a></li>
            </ul>
          </details>
        </div>
      </div>
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
        <article class="product-parameters-items">
          <h3>Size</h3>
          <form class="form-size">
            <label>
              <input type="checkbox" name="XXS" value="size-1">XXS
            </label>
            <label>
              <input type="checkbox" name="XS" value="size-2">XS
            </label>
            <label>
              <input type="checkbox" name="S" value="size-3">S
            </label>
            <label>
              <input type="checkbox" name="M" value="size-4">M
            </label>
            <label>
              <input type="checkbox" name="L" value="size-5">L
            </label>
            <label>
              <input type="checkbox" name="XL" value="size-6">XL
            </label>
            <label>
              <input type="checkbox" name="XXSL" value="size-7">XXL
            </label>
          </form>
        </article>
        <article class="product-parameters-items">
          <h3>Price</h3>
          <form oninput="result.value=rangePrice.value">
            <input name="range" id="rangePrice" type="range" value="100" step="1" min="10" max="1000">
            <br>
            $
            <output name="result" for="rangePrice">0</output>
          </form>

        </article>
      </div>
      <div class="product-sort">
        <form class="form-product-sort">
          <p>Sort By</p>
          <select name="sortBy">
            <option value="name">name</option>
            <option value="var-1">var 1</option>
            <option value="var-2">var 2</option>
            <option value="var-3">var 3</option>
          </select>
        </form>
        <form class="form-product-sort">
          <p>Show</p>
          <select name="Show">
            <option value="09">09</option>
            <option value="var-1">10</option>
            <option value="var-2">11</option>
            <option value="var-3">12</option>
          </select>
        </form>
      </div>

      <div class="grid-catalogue">
        <article class="product-item">
          <a href="#">
            <div class="img-product">

              <img src="../../assets/2_1.jpg" alt="product">
            </div>

            <div class="product-description">
              <h3 class="product-name">Mango People T-shirt</h3>
              <p class="product-price">$52.00</p>
            </div>
          </a>
          <div class="flex-center">
            <a href="#" class="button-add-to-cart">
              <img class="button-add-to-cart-img" src="../../assets/add-to-cart.svg" alt="">
              <span>Add to Cart</span>
            </a>
          </div>
        </article>
        <article class="product-item">
          <a href="#">
            <div class="img-product">

              <img src="../../assets/2_2.jpg" alt="product">
            </div>

            <div class="product-description">
              <h3 class="product-name">Mango People T-shirt</h3>
              <p class="product-price">$52.00</p>
            </div>
          </a>
          <div class="flex-center">
            <a href="#" class="button-add-to-cart">
              <img class="button-add-to-cart-img" src="../../assets/add-to-cart.svg" alt="">
              <span>Add to Cart</span>
            </a>
          </div>
        </article>
        <article class="product-item">
          <a href="#">
            <div class="img-product">
              <img src="../../assets/2_3.jpg" alt="product">
            </div>
            <div class="product-description">
              <h3 class="product-name">Mango People T-shirt</h3>
              <p class="product-price">$52.00</p>
            </div>
          </a>
          <div class="flex-center">
            <a href="#" class="button-add-to-cart">
              <img class="button-add-to-cart-img" src="../../assets/add-to-cart.svg" alt="">
              <span>Add to Cart</span>
            </a>
          </div>
        </article>
        <article class="product-item">
          <a href="#">
            <div class="img-product">
              <img src="../../assets/2_4.jpg" alt="product">
            </div>

            <div class="product-description">
              <h3 class="product-name">Mango People T-shirt</h3>
              <p class="product-price">$52.00</p>
            </div>
          </a>
          <div class="flex-center">
            <a href="#" class="button-add-to-cart">
              <img class="button-add-to-cart-img" src="../../assets/add-to-cart.svg" alt="">
              <span>Add to Cart</span>
            </a>
          </div>
        </article>
        <article class="product-item">
          <a href="#">
            <div class="img-product">
              <img src="../../assets/2_5.jpg" alt="product">
            </div>

            <div class="product-description">
              <h3 class="product-name">Mango People T-shirt</h3>
              <p class="product-price">$52.00</p>
            </div>
          </a>
          <div class="flex-center">
            <a href="#" class="button-add-to-cart">
              <img class="button-add-to-cart-img" src="../../assets/add-to-cart.svg" alt="">
              <span>Add to Cart</span>
            </a>
          </div>
        </article>
        <article class="product-item">
          <a href="#">
            <div class="img-product">
              <img src="../../assets/2_6.jpg" alt="product">
            </div>

            <div class="product-description">
              <h3 class="product-name">Mango People T-shirt</h3>
              <p class="product-price">$52.00</p>
            </div>
          </a>
          <div class="flex-center">
            <a href="#" class="button-add-to-cart">
              <img class="button-add-to-cart-img" src="../../assets/add-to-cart.svg" alt="">
              <span>Add to Cart</span>
            </a>
          </div>
        </article>
        <article class="product-item">
          <a href="#">
            <div class="img-product">
              <img src="../../assets/2_7.jpg" alt="product">
            </div>

            <div class="product-description">
              <h3 class="product-name">Mango People T-shirt</h3>
              <p class="product-price">$52.00</p>
            </div>
          </a>
          <div class="flex-center">
            <a href="#" class="button-add-to-cart">
              <img class="button-add-to-cart-img" src="../../assets/add-to-cart.svg" alt="">
              <span>Add to Cart</span>
            </a>
          </div>
        </article>
        <article class="product-item">
          <a href="#">
            <div class="img-product">
              <img src="../../assets/2_8.jpg" alt="product">
            </div>

            <div class="product-description">
              <h3 class="product-name">Mango People T-shirt</h3>
              <p class="product-price">$52.00</p>
            </div>
          </a>
          <div class="flex-center">
            <a href="#" class="button-add-to-cart">
              <img class="button-add-to-cart-img" src="../../assets/add-to-cart.svg" alt="">
              <span>Add to Cart</span>
            </a>
          </div>
        </article>
        <article class="product-item">
          <a href="#">
            <div class="img-product">
              <img src="../../assets/2_9.jpg" alt="product">
            </div>

            <div class="product-description">
              <h3 class="product-name">Mango People T-shirt</h3>
              <p class="product-price">$52.00</p>
            </div>
          </a>
          <div class="flex-center">
            <a href="#" class="button-add-to-cart">
              <img class="button-add-to-cart-img" src="../../assets/add-to-cart.svg" alt="">
              <span>Add to Cart</span>
            </a>
          </div>
        </article>
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
        <a class="btn-view-all" href="#">View All</a>
      </div>


    </div>
  </div>
</template>

<script>
  export default {
    name: 'CatalogGridProduct',
  };
</script>

<style lang="sass">
  .grid-product
    display: flex

  .grid-product-l
    width: 25%

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

  .product-parameters
    display: flex
    justify-content: space-between
    margin-bottom: 40px

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

  .product-item
    width: 261px
    position: relative
    margin-bottom: 40px

  .img-product
    overflow: hidden
    width: 261px
    height: 279px
    position: relative
    transition: .3s

  .product-item:hover
    img
      transform: scale(1.1) rotate(2deg)

  .product-description
    padding: 7px 20px

  .product-name
    color: $darkColorAccent
    font-size: 13px
    text-transform: uppercase
    padding: 7px 0

  .product-price
    color: $colorAccent
    font-size: 16px
    font-weight: 700
    padding: 7px 0

  .flex-center
    width: 261px
    display: flex
    justify-content: center

  .button-add-to-cart
    border: 1px solid $lightColorAccent
    box-sizing: border-box
    line-height: 39px
    color: $lightColorAccent
    padding: 0 13px 0 13px
    position: absolute
    top: 89px
    display: none
    @extend .flip-in-ver-left
    transition: .2s

  .button-add-to-cart-img
    width: 20px
    margin-right: 3px
    transform: none !important

  .product-item:hover
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.16)

  .product-item:hover
    .button-add-to-cart
      display: flex

  .product-item:hover .img-product
    filter: brightness(50%)

  .button-add-to-cart:hover
    background: $colorAccent

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
</style>