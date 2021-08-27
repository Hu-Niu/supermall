<template>
  <div class="cart">
    <!-- 1. -->
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <!--  -->
    <scroll class="content" ref="scroll">
      <div>
        <cart-list />
      </div>
    </scroll>
    <!--  -->
    <cart-bottom-bar />
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll.vue";
import NavBar from "components/common/navbar/NavBar.vue";

import CartList from "./childComps/CartList.vue";
import CartBottomBar from "./childComps/CartBottomBar.vue"

export default {
  name: "Cart",
  components: {
    Scroll,
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    cartLength() {
      return this.$store.state.cartList.length;
    },
  },
  activated(){
    this.$refs.scroll.refresh()
  }
};
</script>

<style scoped>
.cart {
  height: 100vh;
}

.nav-bar {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>