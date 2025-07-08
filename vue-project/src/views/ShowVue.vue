<template>
  <h2>v-if/v-show 차이</h2>
  <button v-on:click="toggle">if보이기/숨기기 토글</button>
  <button v-on:click="toggle2">show보이기/숨기기 토글</button>
  <p v-if="isVisible">html 생성 / 삭제 가끔씩 쓸때 좋음</p>
  <p v-show="isVisible2">
    v-show css로 숨김고 나타남(항상 있음) 토글로 쓸때 좋음
  </p>
</template>

<script>
export default {
  data() {
    return {
      isVisible: true,
      isVisible2: true,
    };
  },
  methods: {
    toggle() {
      this.isVisible = !this.isVisible;
    },
    toggle2() {
      this.isVisible2 = !this.isVisible2;
    },
  },
};
</script>

<style>
p {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
