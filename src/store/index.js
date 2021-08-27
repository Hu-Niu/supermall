import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

//2.创建Store对象
const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCounter(state,payload){
      payload.count++
    },
    addToCart(state,payload){
      state.cartList.push(payload)
    }
  },
  actions:{
    addCart(content, payload) {
      return new Promise((resolve,reject)=>{
        //1查找之前数组中是否有盖上平
      let oldProduct = content.state.cartList.find(item => item.iid === payload.iid)

      //2判断oldProduct是否为空
      if (oldProduct) {
        content.commit('addCounter',oldProduct)
        resolve("加入购物车数量+1!")
      } else {
        payload.count = 1
        // state.cartList.push(payload)
        content.commit('addToCart',payload)
        resolve("加入购物车成功!")
      }
      })
    }
  }
})

//3.挂载Vue实例上
export default store