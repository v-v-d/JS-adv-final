<template>
  <header>
    <div class="content header-flex">
      <div class="header-l">
        <Logo/>

        <div class="header-form">
          <a href="#" class="browse">Browse
            <i class="fas fa-caret-down"></i>
            <div class="mega-menu-btn-box">
              <div class="mega-menu-btn-item">
                <h3>Women</h3>
                <ul>
                  <li><a href="#">Dresses</a></li>
                  <li><a href="#">Tops</a></li>
                  <li><a href="#">Sweaters/Knits</a></li>
                  <li><a href="#">Jackets/Coats</a></li>
                  <li><a href="#">Blazers</a></li>
                  <li><a href="#">Denim</a></li>
                  <li><a href="#">Leggings/Pants</a></li>
                  <li><a href="#">Skirts/Shorts</a></li>
                  <li><a href="#">Accessories</a></li>
                </ul>
              </div>
              <div class="mega-menu-btn-item">
                <h3>Women</h3>
                <ul>
                  <li><a href="#">Dresses</a></li>
                  <li><a href="#">Tops</a></li>
                  <li><a href="#">Sweaters/Knits</a></li>
                  <li><a href="#">Jackets/Coats</a></li>
                  <li><a href="#">Blazers</a></li>
                  <li><a href="#">Denim</a></li>
                  <li><a href="#">Leggings/Pants</a></li>
                  <li><a href="#">Skirts/Shorts</a></li>
                  <li><a href="#">Accessories</a></li>
                </ul>
              </div>
            </div>
          </a>
          <SearchLine/>
        </div>
      </div>

      <div class="header-r">
        <div class="cart">
          <a href="#">
            <img class="shopping-cart" src="../../assets/shopping-cart.svg" alt="shopping-cart">
          </a>
          <div class="cart-mini-box">
            <a href="#" class="cart-mini-item">
              <div class="img">
                <img src="../../assets/Layer_2.jpg" alt="img">
              </div>
              <div class="box">
                <h3>Rebox Zane</h3>
                <p class="star-product">
                  <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star"
                                                                  aria-hidden="true"></i><i
                    class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star"
                                                                 aria-hidden="true"></i><i
                    class="fa fa-star-o" aria-hidden="true"></i>
                </p>
                <p class="color-accent">1 x $250</p>
              </div>

              <button class="delete-product" type="button">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
              </button>
            </a>
            <a href="#" class="cart-mini-item">
              <div class="img">
                <img src="../../assets/Layer_4.jpg" alt="img">
              </div>
              <div class="box">
                <h3>Rebox Zane</h3>
                <p class="star-product">
                  <i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star"
                                                                  aria-hidden="true"></i><i
                    class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star"
                                                                 aria-hidden="true"></i><i
                    class="fa fa-star" aria-hidden="true"></i>
                </p>
                <p class="color-accent">1 x $250</p>
              </div>
              <button class="delete-product" type="button">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
              </button>
            </a>
            <div class="cart-mini-cost">
              <p>TOTAL</p>
              <p>$500.00</p>
            </div>
            <div class="cart-mini-btn">
              <form>
                <a class="btn-checkout" href="#">Checkout</a>
                <a class="btn-go-to-cart" href="#">Go to cart</a>
              </form>
            </div>
          </div>
        </div>

        <Button :button-name="buttonName"/>
      </div>
    </div>
  </header>
</template>

<script>
  import Logo from '../elements/Logo.vue';
  import SearchLine from '../elements/SearchLine.vue';
  import Button from '../elements/Button.vue';

  export default {
    name: 'Header',
    data() {
      return {
        buttonName: 'My Account', // TODO: убрать хардкод
      };
    },
    components: {
      Logo,
      SearchLine,
      Button,
    },
  };
</script>

<style lang="sass">
  .content
    width: 1140px
    margin: 0 auto

  header
    border: 1px solid #ececec
    box-sizing: border-box
    background-color: $lightColorAccent
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.17)
    height: 100px

  .header-flex
    display: flex
    justify-content: space-between
    height: 100%
    align-items: center

  .header-l
    display: flex
    align-items: center
    height: 100%

  .color-accent
    color: $colorAccent
    font-weight: 600

  .header-form
    display: flex
    height: 38px
    position: relative
    margin-left: 35px

  .browse
    position: relative
    color: $darkColorAccent
    font-size: 14px
    line-height: 38px
    padding: 0 15px
    border-bottom-left-radius: 3px
    border-top-left-radius: 3px
    border: 1px solid #e6e6e6
    border-right-color: transparent
    box-sizing: border-box
    background: -webkit-linear-gradient(-90deg, #f9f9f9 0%, #f5f5f5 100%)
    background: -moz-linear-gradient(-90deg, #f9f9f9 0%, #f5f5f5 100%)
    background: -o-linear-gradient(-90deg, #f9f9f9 0%, #f5f5f5 100%)
    background: -ms-linear-gradient(-90deg, #f9f9f9 0%, #f5f5f5 100%)
    background: linear-gradient(180deg, #f9f9f9 0%, #f5f5f5 100%)
    transition: .3s

  .browse:hover
    background: $colorAccent
    color: $lightColorAccent
    border-color: $colorAccent

  .browse:hover .mega-menu-btn-box
    display: block

  .header-r
    @extend .header-l

  .cart
    position: relative
    height: 100%
    display: flex
    align-items: center

  .cart:hover
    .cart-mini-box
      display: block

  .shopping-cart
    margin: 0 25px 0 0

  .shopping-cart:hover
    opacity: 0.5

  .button
    background: $colorAccent
    color: $lightColorAccent
    font-size: 15px
    line-height: 38px
    padding: 0 19px
    border: 1px solid transparent
    transition: background-color .3s

  .button:hover
    color: $colorAccent
    background: $lightColorAccent
    border: 1px solid $colorAccent

  .mega-menu-btn-box
    position: absolute
    padding: 13px
    box-sizing: border-box
    border-radius: 5px
    border: #e8e8e8 1px solid
    background: $lightColorAccent
    z-index: 1
    display: none

  .mega-menu-btn-box a
    color: #646464
    font-size: 14px
    font-weight: 400
    line-height: 28px
    display: block
    text-align: left

  .mega-menu-btn-box a:hover
    color: $colorAccent

  .mega-menu-btn-box:before,
  .cart-mini-box:before
    @extend .mega-menu-box:before

  .mega-menu-box
    display: none
    padding: 20px
    box-sizing: border-box
    border-radius: 5px
    background-color: $lightColorAccent
    position: absolute
    border: #e8e8e8 1px solid
    margin-top: -10px
    z-index: 1

  .mega-menu-box:before
    position: absolute
    content: ''
    width: 15px
    height: 15px
    border-left: 1px solid #e8e8e8
    border-top: 1px solid #e8e8e8
    top: -9px
    left: 60px
    transform: rotate(45deg)
    background: $lightColorAccent

  .mega-menu-btn-item
    margin-bottom: 10px
    width: 260px
    color: #222

  .mega-menu-btn-item ul
    list-style: none

  .mega-menu-btn-item h3
    font-size: 14px
    line-height: 32px
    text-transform: uppercase
    border-bottom: 1px solid #e8e8e8
    margin-bottom: 10px
    text-align: left

  .cart-mini-box
    position: absolute
    background: $lightColorAccent
    width: 262px
    border-radius: 5px
    z-index: 1
    border: #e8e8e8 1px solid
    padding: 15px
    text-transform: uppercase
    display: none
    top: 80px
    left: -50px

  .cart-mini-item
    display: flex
    margin-top: 15px
    padding-bottom: 15px
    box-sizing: border-box
    border-bottom: 1px solid #ededed
    transition: .3s

  .cart-mini-item:hover
    border-bottom: 1px solid $colorAccent
    img
      transform: scale(1.1) rotate(-5deg)

  .cart-mini-item
    .box
      padding-left: 10px
      box-sizing: border-box
      width: 100%

  .cart-mini-item
    .img
      width: 120px
      height: 85px
      overflow: hidden

  .cart-mini-item
    h3
      font-size: 12px
      margin: 5px 0
      font-weight: 700
      color: $darkColorAccent

  .cart-mini-item
    img
      height: 100%

  .star-product
    color: #e4af48
    font-size: 12px
    line-height: 25px

  .delete-product
    border: none
    background: $lightColorAccent
    color: #c0c0c0
    font-size: 16px

  .delete-product:hover
    color: $colorAccent

  .cart-mini-cost
    display: flex
    justify-content: space-between
    line-height: 16px
    color: $darkColorAccent
    font-size: 16px
    font-weight: 700
    margin: 15px 0

  .cart-mini-btn
    a
      display: block
      text-align: center
      font-size: 14px
      font-weight: 700
      width: 100%
      margin-top: 15px
      line-height: 50px
      background: $lightColorAccent

  .btn-checkout
    border: 1px solid $colorAccent
    color: $colorAccent
    transition: .3s

  .btn-checkout:hover
    background: $colorAccent
    color: $lightColorAccent

  .btn-go-to-cart
    border: 1px solid #eaeaea
    background-color: $lightColorAccent
    color: $darkColorAccent
    transition: .3s

  .btn-go-to-cart:hover
    @extend .btn-checkout:hover
</style>