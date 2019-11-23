<template>
  <header>
    <div class="content header-flex">
      <div class="header-l">
        <Logo />

        <div class="header-form">
          <a href="#" class="browse">Browse</a>
          <SearchLine />
        </div>
      </div>

      <div class="header-r">
        <div class="cart">
          <a href="#">
            <img class="shopping-cart" src="../../assets/shopping-cart.svg" alt="shopping-cart">
          </a>
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
    /* TODO: решить проблему с пропаданием строки WOMAN */
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
</style>