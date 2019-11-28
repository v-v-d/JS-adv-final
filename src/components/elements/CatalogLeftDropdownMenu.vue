<template>
  <div class="content">
    <div v-for="menuItem in menuItems" :key="menuItem.key">
      <CatalogLeftDropdownMenuItem
          :menu-item="menuItem"
      />
    </div>
  </div>
</template>

<script>
  import CatalogLeftDropdownMenuItem from '../elements/CatalogLeftDropdownMenuItem.vue';

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
    },
    components: {
      CatalogLeftDropdownMenuItem,
    },
    mounted() {
      this.menuItems = this.getMenuItems(this.products, this.menuItemsNames);
    }
  };
</script>

<style scoped>

</style>