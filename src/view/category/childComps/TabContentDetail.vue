<template>
  <div class="detail">
    <goods-list-item
      v-for="(item, index) in categoryDetail"
      :key="index"
      :goods="item"
    >
    </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "components/content/goods/GoodsListItem.vue";

export default {
  name: "TabContentDetail",
  components: {
    GoodsListItem,
  },
  props: {
    categoryDetail: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.detail{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    z-index: -1;
  }
</style>
