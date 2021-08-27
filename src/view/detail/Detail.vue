<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="navbar" />
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      :probe-type="3"
    >
      <detail-swiper :top-images="topImages" ref="base" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info :detail-info="detailInfo" />
      <detail-param-info :param-info="paramInfo" ref="params" />
      <detail-comment-info :comment-info="commentInfo" ref="comment" />
      <goods-list :goodsList="recommends" ref="recommend" />
    </scroll>

    <detail-bottom-bar @addCart="addToCart" />
    <back-top @click.native="backClick" v-show="isShow" />
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";
import DetailBaseInfo from "./childComps/DetailBaseInfo.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailParamInfo from "./childComps/DetailParamInfo.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";

import Scroll from "components/common/scroll/Scroll.vue";
import GoodsList from "components/content/goods/GoodsList.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import { debounce } from "../../common/utils";

import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail.js";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottomBar,
    Scroll,
    GoodsList,
    BackTop,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      themeTopYs: [],
      getTgemeTopY: null,
      currentIndex: 0,
      isShow: false,
      tabOffsetTop: 0,
      isTabFixed: false,
    };
  },
  created() {
    //1.保存传入的iid
    this.iid = this.$route.params.iid;

    //2.根据iid请求详情数据
    getDetail(this.iid).then((res) => {
      //1.获取数据
      const result = res.result;

      //1.获取顶部的轮播图数据
      this.topImages = result.itemInfo.topImages;

      //2.创建商品信息的对象
      this.goods = new Goods(
        result.itemInfo,
        result.columns,
        result.shopInfo.services
      );

      //3.创建店铺信息的对象
      this.shop = new Shop(result.shopInfo);

      //4.保存商品详情信息
      this.detailInfo = result.detailInfo;

      //5.创建参数信息的对象
      this.paramInfo = new GoodsParam(
        result.itemParams.info,
        result.itemParams.rule
      );

      //6.获取评论信息
      if (result.rate.list) {
        this.commentInfo = result.rate.list[0];
      }

      //7.给getTgemeTopY赋值（对给this.getTgemeTopY赋值的操作进行防抖）
      this.getTgemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(this.$refs.base.$el.offsetTop - 44);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop - 44);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop - 44);
        this.themeTopYs.push(this.$refs.recommend.$el.offsetTop - 44);
        this.themeTopYs.push(Number.MAX_VALUE);
      }, 100);

      //获取tabbar内四个分区的位置（-scrollY）
      this.$bus.$on("detailItemImageLoad", () => {
        this.getTgemeTopY();
      });
    });

    //3.请求推荐数据
    getRecommend().then((res) => {
      this.recommends = res.data.list;
    });
  },

  methods: {
    //点击标题滚动到对应内容
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100);
    },

    //监听滚动事件
    contentScroll(position) {
      //1.滚动内容滚动到对应标题
      //1.1获取y值
      const positionY = -position.y;

      //2.1positionY和主题中值进行对比
      let length = this.themeTopYs.length;
      for (let i = 0; i < length; i++) {
        if (
          this.currentIndex !== i &&
          positionY > this.themeTopYs[i] &&
          positionY < this.themeTopYs[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex;
        }
      }

      //2.显示返回顶部按钮
      //2.1判断BackTop是否显示
      this.isShow = -position.y > 1000;
      //2.2决定tabControl是否吸顶（position：fixed）
      this.isTabFixed = -position.y > this.tabOffsetTop;
    },

    //返回顶部
    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    //商品加入购物车
    addToCart() {
      // 1.创建对象
      const product = {};
      // 2.获取购物车需要展示的商品信息
      product.iid = this.iid;
      product.imgURL = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.newPrice = this.goods.nowPrice;
      product.checked = true;
      //3.将商品添加到购物车里
      this.$store.dispatch("addCart", product).then((res) => {
        this.$toast.show(res,1500)
      });
    },
  },
};
</script>

<style scoped>
#detail {
  /* position: relative;
  z-index: 9;
  background-color: #fff; */
  height: 100vh;
}

.detail-nav {
  position: relative;
  width: 100%;
  z-index: 9;
  background-color: #fff;
}

.content {
  height: calc(100% - 44px - 49px);
  z-index: 9;
  overflow: hidden;
}
</style>