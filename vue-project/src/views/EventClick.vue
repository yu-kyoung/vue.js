<template>
  <h3>event</h3>
  <P :key="i" v-for="(num, i) in list">
    <!--v-bind 생략가능 v-on = @로 대체 가능-->
    <button @:click="ClickFnc(num)">이벤트클릭</button
    ><!--methods가 필요함-->
  </P>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      list: [10, 20, 30],
    };
  },
  methods: {
    ClickFnc(num) {
      alert(num + "클릭");
    },
  },
};
</script>
<style></style>
