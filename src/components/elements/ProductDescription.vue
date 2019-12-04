<template>
  <section class="product-description content negative-margin">
    <div class="box-product-description">
      <div class="product-name-description">
        <div class="box-custom-border">
          <h3>WOMEN COLLECTION</h3>
          <div class="custom-border">
            <div></div>
            <div class="accent"></div>
            <div></div>
          </div>
        </div>

        <h2>Moschino Cheap And Chic</h2>
      </div>
      <p class="product-description-text">
        Compellingly actualize fully researched processes before proactive outsourcing. Progressively
        syndicate
        collaborative architectures before cutting-edge services. Completely visualize parallel core
        competencies
        rather than exceptional portals.
      </p>
      <div class="product-characteristics">
        <div>MATERIAL: <span>COTTON</span></div>
        <div>DESIGNER: <span>BINBURHAN</span></div>
        <div class="price">$561</div>
      </div>
      <hr>
      <form class="form-add-to-cart">
        <div class="add-to-cart-item">
          <label><p>CHOOSE COLOR</p>
            <select>
              <option class="red">Red</option>
              <option class="yellow">Yellow</option>
            </select>
          </label>
        </div>

        <div class="add-to-cart-item">
          <label><p>CHOOSE SIZE</p>
            <select>
              <option>XXS</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </label>
        </div>

        <div class="add-to-cart-item">
          <label><p>QUANTITY</p>
            <input type="number">
          </label>
        </div>
        <button class="btn-add-to-cart" type="submit">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          Add to Cart
        </button>
      </form>

    </div>

  </section>
</template>

<script>
  export default {
    name: 'ProductDescription',
  };
</script>

<style lang="sass">
  .negative-margin
    margin-top: -85px

  .product-description
    padding: 7px 20px

  .box-product-description
    border: 1px solid #eaeaea
    box-sizing: border-box
    background-color: $lightColorAccent
    padding: 70px 260px
    position: relative

  .product-name-description
    display: flex
    flex-direction: column
    align-items: center

  .product-name-description h3
    color: $colorAccent
    font-size: 14px
    font-weight: 700
    line-height: 34px
    display: inline-block

  .product-name-description h2
    color: #4d4d4d
    font-size: 18px
    font-weight: 900
    line-height: 45px
    text-align: center

  .box-custom-border
    display: flex
    flex-wrap: wrap

  .custom-border
    display: flex
    width: 100%

  .custom-border
    div
      border-bottom: 1px solid #eaeaea
      flex: 1

  div.accent
    border-bottom: 3px solid $colorAccent

  .product-description-text
    color: #5e5e5e
    font-size: 14px
    line-height: 24px
    text-align: center
    margin-top: 50px
    margin-bottom: 30px

  .product-characteristics span
    color: #2f2f2f

  .product-characteristics
    display: flex
    flex-wrap: wrap
    color: #b9b9b9
    font-size: 14px
    font-weight: 700
    line-height: 24px

  .product-characteristics div
    display: flex
    justify-content: center
    width: 50%
    padding: 0 10px
    box-sizing: border-box

  div.price
    width: 100%
    color: #ef5b70
    font-size: 24px
    font-weight: 700
    line-height: 24px
    margin: 35px 0

  .form-add-to-cart
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    color: #2f2f2f
    font-size: 14px
    font-weight: 700
    line-height: 24px

  .add-to-cart-item
    width: 30%
    margin-bottom: 25px

  .add-to-cart-item p
    margin-bottom: 15px

  .add-to-cart-item input,
  .add-to-cart-item select
    width: 100%
    padding: 0 10px
    box-sizing: border-box
    border: 1px solid #eaeaea
    background-color: $lightColorAccent
    line-height: 35px
    height: 35px
    outline-color: #ef5b70
    color: #bcbcbc
    font-size: 13px
    font-weight: 400

  .add-to-cart-item input:hover,
  .add-to-cart-item select:hover
    border: 1px solid #ef5b70

  .btn-add-to-cart
    display: flex
    justify-content: center
    align-items: center
    border: 1px solid #ef5b70
    box-sizing: border-box
    background-color: $lightColorAccent
    margin: 0 auto
    line-height: 55px
    width: 100%
    font-weight: 700
    color: #ef5b70
    font-size: 16px
    transition: background-color .3s

  .btn-add-to-cart
    img
      margin: 0 10px
      filter: brightness(0.5) sepia(1) hue-rotate(-70deg) saturate(5)

  .btn-add-to-cart:hover
    background: $colorAccent
    color: $lightColorAccent

  .btn-add-to-cart
    .fa-shopping-cart
      font-size: 30px
      margin-right: 10px
</style>