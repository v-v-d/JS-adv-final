<template>
  <header>
    <div class="content header-flex">
      <div class="header-l">
        <a class="logo" href="index.html">
          <img class="logo-img" src="../../assets/logo.png" alt="logo">
          <p class="brand-name">BRAN<span class="color-accent">D</span></p>
        </a>

        <div class="header-form">
          <a href="#" class="browse">Browse</a>
          <input class="search" type="search" placeholder="Search for Item...">
          <div class="btn-search">
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
      </div>

      <div class="header-r">
        <div class="cart">
          <a href="shoping-cart.html">
            <img class="shopping-cart" src="../../assets/shopping-cart.svg" alt="shopping-cart">
          </a>
        </div>

        <a class="button" href="#">My Account</a>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
  };
</script>

<style lang="sass">
  $colorAccent: #f16d7f
  $darkColorAccent: #222222
  $lightColorAccent: #ffffff

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

  .logo
    display: flex
    align-items: center

  .logo-img
    margin-right: 15px

  .brand-name
    font-size: 27px
    line-height: 32px
    color: $darkColorAccent
    display: flex
    margin-top: 5px

  .color-accent
    color: $colorAccent

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
    color: $lightColorAccent /* TODO: решить проблему с пропаданием строки WOMAN */
    border-color: $colorAccent

  .browse:hover .mega-menu-btn-box
    display: block

  .search
    border: 1px solid #e6e6e6
    -webkit-box-sizing: border-box
    box-sizing: border-box
    background-color: $lightColorAccent
    width: 279px
    height: 100%
    color: #a4a4a4
    font-size: 14px
    padding: 0 15px

  .search:focus
    outline-color: transparent
    border-color: $colorAccent

  .btn-search
    border-bottom-right-radius: 3px
    border-top-right-radius: 3px
    border: 1px solid #d9d9d9
    border-left-color: transparent
    box-sizing: border-box
    background-color: $lightColorAccent
    height: 100%
    width: 38px
    right: 0
    text-align: center
    line-height: 38px

  .btn-search:hover
    color: $colorAccent

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
</style>