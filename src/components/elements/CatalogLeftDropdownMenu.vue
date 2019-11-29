<template>
  <div class="content">
    <div v-for="menuItem in menuItems" :key="menuItem.key">
      <CatalogLeftDropdownMenuItem
          :menu-item="menuItem"
          @filter="filterClickHandler"
      />
    </div>
  </div>
</template>

<script>
  import CatalogLeftDropdownMenuItem from '../elements/CatalogLeftDropdownMenuItem.vue';

  // вместо rest-api для проверки в браузере
  let products = [
    {
      'id': 1,
      'name': "Marina t-shirt",
      'price': 150,
      'img': "/src/assets/Layer_2.jpg",
      'availableSizes': ["M", "L", "XL", "XXL"],
      'category': "t-shirts",
      'brand': "H&M",
      'designer': "Binburhan",
      'material': "cotton",
      'color': "white"
    },
    {
      'id': 2,
      'name': "Coral top",
      'price': 50,
      'img': "/src/assets/Layer_3.jpg",
      'availableSizes': ["XXS", "XS", "S", "M", "L"],
      'category': "denim",
      'brand': "H&M",
      'designer': "Binburhan",
      'material': "silk",
      'color': "black"
    },
    {
      'id': 3,
      'name': "Beard jacket",
      'price': 350,
      'img': "/src/assets/Layer_4.jpg",
      'availableSizes': ["XXS", "XS", "L", "XL", "XXL"],
      'category': "jackets",
      'brand': "H&M",
      'designer': "Mr. Noname",
      'material': "wool",
      'color': "white"
    },
    {
      'id': 4,
      'name': "Flower dress",
      'price': 250,
      'img': "/src/assets/Layer_5.jpg",
      'availableSizes': ["XXS", "XS", "S", "XL", "XXL"],
      'category': "t-shirts",
      'brand': "H&M",
      'designer': "Mr. Noname",
      'material': "linen",
      'color': "black"
    },
    {
      'id': 5,
      'name': "Stripy top",
      'price': 120,
      'img': "/src/assets/Layer_6.jpg",
      'availableSizes': ["XXS", "M", "L", "XL", "XXL"],
      'category': "denim",
      'brand': "H&M",
      'designer': "Mr. Unknown",
      'material': "polyester",
      'color': "yellow"
    },
    {
      'id': 6,
      'name': "Grey jacket",
      'price': 210,
      'img': "/src/assets/Layer_7.jpg",
      'availableSizes': ["XXS", "XS", "S", "M", "L"],
      'category': "jackets",
      'brand': "H&M",
      'designer': "Mr. Unknown",
      'material': "nylon",
      'color': "red"
    },
    {
      'id': 7,
      'name': "Hipster pants",
      'price': 80,
      'img': "/src/assets/Layer_8.jpg",
      'availableSizes': ["XXS", "XS", "M", "L", "XL", "XXL"],
      'category': "t-shirts",
      'brand': "Bershka",
      'designer': "Mr. Nameless",
      'material': "cotton",
      'color': "yellow"
    },
    {
      'id': 8,
      'name': "Square kangaroo",
      'price': 160,
      'img': "/src/assets/Layer_9.jpg",
      'availableSizes': ["XS", "S", "M", "L", "XL", "XXL"],
      'category': "denim",
      'brand': "Bershka",
      'designer': "Mr. Nameless",
      'material': "silk",
      'color': "red"
    },
    {
      'id': 9,
      'name': "Long top",
      'price': 90,
      'img': "/src/assets/2_1.jpg",
      'availableSizes': ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
      'category': "jackets",
      'brand': "Bershka",
      'designer': "Mr. Anon",
      'material': "wool",
      'color': "grey"
    },
    {
      'id': 10,
      'name': "Brown coat",
      'price': 75,
      'img': "/src/assets/2_2.jpg",
      'availableSizes': ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
      'category': "t-shirts",
      'brand': "Bershka",
      'designer': "Mr. Anon",
      'material': "linen",
      'color': "brown"
    },
    {
      'id': 11,
      'name': "Beard t-shirt",
      'price': 115,
      'img': "/src/assets/2_4.jpg",
      'availableSizes': ["XXS", "XS", "S", "M", "XXL"],
      'category': "denim",
      'brand': "Bershka",
      'designer': "Mr. Strange",
      'material': "polyester",
      'color': "grey"
    },
    {
      'id': 12,
      'name': "Beard jacket",
      'price': 170,
      'img': "/src/assets/2_6.jpg",
      'availableSizes': ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
      'category': "jackets",
      'brand': "Bershka",
      'designer': "Mr. Strange",
      'material': "nylon",
      'color': "brown"
    },
    {
      'id': 13,
      'name': "Brown long top",
      'price': 85,
      'img': "/src/assets/2_8.jpg",
      'availableSizes': ["XXS", "XS"],
      'category': "t-shirts",
      'brand': "Stradivarius",
      'designer': "Junior designer",
      'material': "cotton",
      'color': "green"
    },
    {
      'id': 14,
      'name': "Blue beard t-shirt",
      'price': 95,
      'img': "/src/assets/2_9.jpg",
      'availableSizes': ["XXS", "XS", "S"],
      'category': "denim",
      'brand': "Stradivarius",
      'designer': "Junior designer",
      'material': "silk",
      'color': "blue"
    },
    {
      'id': 15,
      'name': "Black suit",
      'price': 210,
      'img': "/src/assets/Layer_44.jpg",
      'availableSizes': ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
      'category': "jackets",
      'brand': "Stradivarius",
      'designer': "Middle designer",
      'material': "wool",
      'color': "green"
    },
    {
      'id': 16,
      'name': "Long skirt",
      'price': 165,
      'img': "/src/assets/Layer_45.jpg",
      'availableSizes': ["XXS", "XS", "S", "L", "XL", "XXL"],
      'category': "t-shirts",
      'brand': "Stradivarius",
      'designer': "Middle designer",
      'material': "linen",
      'color': "blue"
    },
    {
      'id': 17,
      'name': "Yellow long sleeve",
      'price': 130,
      'img': "/src/assets/Layer_46.jpg",
      'availableSizes': ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
      'category': "denim",
      'brand': "Stradivarius",
      'designer': "Senior designer",
      'material': "polyester",
      'color': "orange"
    },
    {
      'id': 18,
      'name': "Black jeans",
      'price': 260,
      'img': "/src/assets/Layer_47.jpg",
      'availableSizes': ["XXS", "XS", "S", "M", "L", "XL", "XXL"],
      'category': "jackets",
      'brand': "Stradivarius",
      'designer': "Senior designer",
      'material': "nylon",
      'color': "orange"
    }
  ];

  export default {
    name: "CatalogLeftDropdownMenu",
    props: ['products'],
    data() {
      return {
        menuItemsNames: [
          'category',
          'brand',
          'designer',
        ],
        menuItems: [],
      };
    },
    methods: {
      getValuesByProp(objArr, prop) {
        let values = [];
        objArr.forEach(obj => {
          if (obj.hasOwnProperty(prop)) {
            values.push(obj[prop]);
          }
        });
        return [...new Set(values)];
      },
      getMenuItems(objArr, propsArr) {
        let menuItems = [];
        propsArr.forEach(prop => {
          let menuItem = {};
          menuItem['key'] = prop;
          menuItem['value'] = this.getValuesByProp(objArr, prop);
          menuItems.push(menuItem);
        });
        return menuItems;
      },
      filterClickHandler(filterRule) {
        this.$emit('filter', filterRule);
      },
    },
    components: {
      CatalogLeftDropdownMenuItem,
    },
    mounted() {
      // вместо rest-api для проверки в браузере
      this.products = products;

      this.menuItems = this.getMenuItems(this.products, this.menuItemsNames);
    }
  };
</script>

<style scoped>

</style>