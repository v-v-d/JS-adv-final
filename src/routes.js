import Vue from 'vue';
import VueRouter from 'vue-router';

const HomePage = () => import(/* webpack-chunk-name: "HomePage" */ './components/pages/HomePage.vue');
const CatalogPage = () => import(/* webpack-chunk-name: "CatalogPage" */ './components/pages/CatalogPage.vue');
const ProductPage = () => import(/* webpack-chunk-name: "ProductPage" */ './components/pages/ProductPage.vue');
const CartPage = () => import(/* webpack-chunk-name: "CartPage" */ './components/pages/CartPage.vue');
const CheckoutPage = () => import(/* webpack-chunk-name: "CheckoutPage" */ './components/pages/CheckoutPage.vue');

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomePage,
    },
    {
      name: 'catalog',
      path: '/catalog',
      component: CatalogPage,
    },
    {
      name: 'product',
      path: '/catalog/:id',
      component: ProductPage,
    },
    {
      name: 'cart',
      path: '/cart',
      component: CartPage,
    },
    {
      name: 'checkout',
      path: '/checkout',
      component: CheckoutPage,
    },
  ],
  mode: 'history',
});