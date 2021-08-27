<template>
  <div class="bottom-menu">
    <div class="select-all">
      <check-button 
      :is-checked="isSelectAll" 
      class="check-button"
      @click.native="stlectAllClick" 
      />
      <span>全选</span>
    </div>
    <div class="price">合计:¥{{ totalPrice }}</div>
    <div class="calculate" @click="calcClick">去计算({{ checkLength }})</div>
  </div>
</template>

<script>
import CheckButton from "./CheckButton.vue";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton,
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter((item) => {
          return item.checked;
        })
        .reduce((preValue, item) => {
          return preValue + item.newPrice * item.count;
        }, 0);
    },
    checkLength() {
      return this.$store.state.cartList.filter((item) => {
        return item.checked;
      }).length;
    },
    isSelectAll(){
      if(this.$store.state.cartList.length===0){
        return false
      }
      return !(this.$store.state.cartList.find(item=>!item.checked))
    }
  },
  methods:{
    stlectAllClick(){
      if(this.isSelectAll){
        this.$store.state.cartList.forEach(item=>item.checked=false)
      }else{
        this.$store.state.cartList.forEach(item=>item.checked=true)
      }
    },

    calcClick(){
      if(!this.isSelectAll){
this.$toast.show("请选择购买的商品",1500)
      }
    }
  }
};
</script>

<style scoped>
.bottom-menu {
  display: flex;
  height: 40px;
  position: relative;
  background-color: #eee;
}

.select-all {
  display: flex;
  align-items: center;
  margin-left: 10px;
}

.check-button {
  height: 20px;
  width: 20px;
  line-height: 20px;
  margin-right: 5px;
}

.price {
  margin-left: 30px;
  line-height: 40px;
  flex:1
}

.calculate {
  background-color: var(--color-tint);
  width: 90px;
  line-height: 40px;
  text-align: center;
  color: #fff;
}
</style>