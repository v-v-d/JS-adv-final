<template>
  <div>
    <section class="blok-subscribe">
      <img class="subscribe-img" src="../../assets/Subscribe.jpg" alt="">
      <div class="content subscribe-box">
        <div class="blok-subscribe-l">
          <div class="box">
            <img src="../../assets/Layer_40.jpg" alt="img">
            <div class="blok-subscribe-text">
              <p class="stimuli">“Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”</p>
              <h3>Bin Burhan</h3>
              <h4>Dhaka, Bd</h4>
            </div>
          </div>

        </div>
        <div class="blok-subscribe-r">
          <div class="box">
            <h2>Subscribe</h2>
            <p>FOR OUR NEWLETTER AND PROMOTION</p>
            <form>
              <input type="email" placeholder="Enter Your Email">
              <button type="submit">Subscribe</button>
            </form>
          </div>

        </div>
      </div>
    </section>
    <div class="bottom-site">
      <footer class="content footer-flex">
        <div class="footer-content-text">
          <Logo/>
          <p> Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate
            multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of
            processes
            and cross-unit partnerships.
          </p>
          <p>Efficiently plagiarize 24/365 action items and focused infomediaries.
            <br>
            Objectively strategize seamless relationships via resource sucking testing procedures. Proactively
            cultivate
            <br>
            Objectively facilitate progressive.
          </p>
        </div>
        <div class="menu-item">
          <h3>COMPANY</h3>
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">How It Works</a>
          <a href="#">Contact</a>
        </div>
        <div class="menu-item">
          <h3>INFORMATION</h3>
          <a href="#">Tearms & Condition</a>
          <a href="#">Privacy Policy</a>
          <a href="#">How to Buy</a>
          <a href="#">How to Sell</a>
          <a href="#">Promotion</a>
        </div>
        <div class="menu-item">
          <h3>SHOP CATEGORY</h3>
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Child</a>
          <a href="#">Apparel</a>
          <a href="#">Brows All</a>
        </div>
      </footer>
      <div class="copyright">
        <div class="content copyright-flex">
          <div class="copyright-l">
            <p>&copy; 2017 Brand All Rights Reserved.</p>
          </div>
          <div class="copyright-r">
            <a href="#"><i class="social fab fa-facebook-f" aria-hidden="true"></i></a>
            <a href="#"><i class="social fab fa-twitter" aria-hidden="true"></i></a>
            <a href="#"><i class="social fab fa-linkedin-in" aria-hidden="true"></i></a>
            <a href="#"><i class="social fab fa-pinterest" aria-hidden="true"></i></a>
            <a href="#"><i class="social fab fa-google-plus-g" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '../elements/Logo.vue';

  export default {
    name: 'Footer',
    components: {
      Logo,
    },
  }
</script>

<style lang="sass">
  $colorAccent: #f16d7f
  $darkColorAccent: #222222
  $lightColorAccent: #ffffff

  .blok-subscribe
    position: relative
    height: 438px
    background-size: cover
    display: flex
    justify-content: space-between
    background-color: #ECECEC
    z-index: 1
    overflow: hidden

  .subscribe-img
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    z-index: -1

  .blok-subscribe
    .blok-subscribe-l
      img
        width: 83px
        height: 83px
        border-radius: 50px

  .blok-subscribe-l
    .stimuli
      color: rgba(34, 34, 36, 0.67)
      font-size: 16px
      font-style: italic
      line-height: 26px
      margin-bottom: 10px

  .blok-subscribe-l
    h3
      color: $colorAccent
      font-size: 16px
      font-weight: 700
      line-height: 26px

  .blok-subscribe-l
    h4
      color: $darkColorAccent
      font-size: 12px
      font-weight: 300
      line-height: 14px

  .blok-subscribe-l
    display: flex
    align-items: center
    height: 100%
    width: 50%

  .blok-subscribe-text
    margin: 0 30px

  .subscribe-box
    display: flex

  .blok-subscribe-l
    .box
      @extend .subscribe-box

  .blok-subscribe-r
    input[type = 'email']
      transition: .3s

  .blok-subscribe-r
    display: flex
    justify-content: center
    align-items: center
    height: 100%
    width: 50%

  .blok-subscribe-r
    h2
      color: rgba(34, 34, 36, 0.67)
      font-size: 24px
      line-height: 54px
      text-align: center
      text-transform: uppercase

  .blok-subscribe-r
    p
      font-size: 14px
      line-height: 24px
      text-align: center

  .blok-subscribe-r
    form
      position: relative
      margin: 35px 0

  .blok-subscribe-r
    form
      input[type = 'email']:focus
        outline-color: transparent
        border: 2px solid $colorAccent

  .blok-subscribe-r
    form
      input[type = 'email']
        background: #e1e1e1
        width: 334px
        line-height: 46px
        border-radius: 25px
        padding: 0 140px 0 20px
        box-sizing: border-box
        border: 2px solid transparent

  .blok-subscribe-r
    form
      button
        background: $colorAccent
        color: $lightColorAccent
        padding: 0 20px
        line-height: 46px
        border-radius: 0 25px 25px 0
        box-sizing: border-box
        position: absolute
        border: 2px solid transparent
        top: 0
        right: 0

  .blok-subscribe-r
    form:hover input[type = 'email']
      outline-color: transparent
      border: 2px solid $colorAccent

  footer
    padding: 100px 0

  .footer-flex
    display: flex
    justify-content: space-between

  .footer-content-text
    width: 427px

  .footer-content-text
    p
      color: #898989
      font-size: 14px
      line-height: 24px
      margin: 10px 0

  .menu-item
    h3
      color: $colorAccent
      font-size: 18px
      line-height: 26px
      margin-bottom: 20px

  .menu-item
    a
      color: #898989
      font-size: 16px
      line-height: 40px
      text-decoration: none
      display: block

  .menu-item
    a:hover
      color: $colorAccent

  .copyright
    background: #e6e6e6
    height: 79px

  .copyright p
    color: #7a7a7a
    font-size: 16px
    line-height: 79px

  .copyright-flex
    display: flex
    justify-content: space-between
    align-items: center

  .social
    background: $lightColorAccent
    width: 32px
    height: 32px
    color: #b2b2b2
    margin: 4px
    text-align: center
    line-height: 32px
    transition: all .3s

  .social:hover
    background: $colorAccent
    color: $lightColorAccent
    transform: scale(1.2)
</style>