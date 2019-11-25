<template>
  <nav class="content">
    <ul class="menu">
      <li><a class="menu-active" href="#">Home</a></li>
      <li>
        <a href="#">Man</a>
        <div class="mega-menu-box">
          <div class="mega-menu-item">
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
          <div class="mega-menu-item">
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
          <div class="mega-menu-item">
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
      </li>
      <li>
        <a href="#">Women</a>
        <div class="mega-menu-box">
          <div class="mega-menu-item">
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
      </li>
      <li><a href="#">Kids</a></li>
      <li><a href="#">Accessories</a></li>
      <li><a href="#">Featured</a></li>
      <li><a href="#">Hot Deals</a></li>
    </ul>
  </nav>
</template>

<script>
  export default {
    name: 'NavBar',
  };
</script>

<style lang="sass">
  .content
    width: 1140px
    margin: 0 auto

  .menu
    display: flex
    justify-content: center

  .menu li
    list-style-type: none
    position: relative

  .menu > li > a
    text-decoration: none
    padding: 19px
    color: $darkColorAccent
    font-size: 14px
    font-weight: 700
    line-height: 23px
    text-align: left
    text-transform: uppercase
    display: block
    border-bottom: 3px solid transparent

  .menu > li > a:hover,
  .menu .menu-active
    border-bottom: 3px solid $colorAccent

  .menu > li:hover .mega-menu-box
    display: flex

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

  .mega-menu-item
    width: 235px
    margin-right: 40px

  .mega-menu-item:last-child
    margin: 0

  .mega-menu-item h3
    color: #232323
    font-size: 14px
    line-height: 32px
    text-transform: uppercase
    border-bottom: 1px solid #e8e8e8
    margin-bottom: 10px

  .mega-menu-item a
    color: #646464
    font-size: 14px
    font-weight: 400
    line-height: 28px
    display: block
</style>