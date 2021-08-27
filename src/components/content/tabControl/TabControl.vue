<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      :class="{ active: currentIndex === index }"
      @click="itemClick(index)"
      v-for="(item, index) in titles"
      :key="index"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("itemClick", index);
    },
  },
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: #fff;
  z-index: 9;
}

.tab-control-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}

.tab-control-item span {
  padding: 4px;
}

.active{
  color: var(--color-high-text);
}

.active span{
  border-bottom: 2px solid var(--color-high-text);
}

</style>