<template>
  <section class="box-order-registration content">
    <article class="order-registration-item">
      <form>
        <h2>Shipping Adress</h2>
        <select>
          <option>Bangladesh</option>
          <option>var 2</option>
          <option>var 3</option>
        </select>
        <input type="text" placeholder="State">
        <input type="text" placeholder="Postcode / Zip">
        <button type="button">get a quote</button>
      </form>
    </article>

    <article class="order-registration-item">
      <form>
        <h2>coupon discount</h2>
        <label><p>Enter your coupon code if you have one</p>
          <input type="text" placeholder="State">
        </label>
        <button type="button">Apply coupon</button>
      </form>
    </article>

    <article class="order-registration-item box-cost">
      <p>Sub total <span>$900</span></p>
      <p class="total-cost">GRAND TOTAL <span class="color-accent">$900</span></p>
      <hr>
      <form>
        <button type="button"><a href="#">proceed to checkout</a></button>
      </form>
    </article>

  </section>
</template>

<script>
  export default {
    name: 'CartOrderRegistration',
  };
</script>

<style lang="sass">
  .box-order-registration
    display: flex
    justify-content: space-between
    align-items: flex-start
    color: #222222
    margin-bottom: 50px

  .order-registration-item
    width: 30%
    margin: 0 17px

  .order-registration-item
    h2
      text-transform: uppercase
      font-size: 16px
      margin-bottom: 20px

  .order-registration-item p
    margin-bottom: 20px

  .order-registration-item
    button
      text-transform: uppercase
      font-size: 11px
      border: 1px solid #eaeaea
      box-sizing: border-box
      background-color: $lightColorAccent
      line-height: 35px
      padding: 0 15px
      font-weight: 700

  .order-registration-item
    button:hover
      color: $lightColorAccent
      background: $colorAccent
      border-color: transparent

  .order-registration-item input,
  .order-registration-item select
    outline-color: $colorAccent
    border: 1px #eaeaea solid
    box-sizing: border-box
    background-color: $lightColorAccent
    line-height: 45px
    height: 45px
    width: 100%
    padding: 0 15px
    color: #b1b1b1
    font-size: 13px
    margin-bottom: 20px

  .order-registration-item:last-of-type
    margin: 0 0 0 17px

  .order-registration-item:first-of-type
    margin: 0 17px 0 0

  .box-cost
    background-color: #f5f3f3
    padding: 40px
    box-sizing: border-box
    text-align: end
    text-transform: uppercase
    font-size: 11px
    font-weight: 400

  .box-cost hr
    margin-bottom: 15px

  .box-cost button
    display: block
    background-color: $colorAccent
    width: 100%
    line-height: 50px
    border: 1px solid $colorAccent

  .box-cost a
    display: block
    color: $lightColorAccent

  .box-cost a:hover
    color: $colorAccent

  .box-cost button:hover
    background: $lightColorAccent
    color: $colorAccent
    border: 1px solid $colorAccent

  .box-cost span
    margin-left: 10px

  .total-cost
    color: $darkColorAccent
    font-size: 16px
    font-weight: 700
</style>