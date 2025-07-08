<template>
  <h1>hello,{{ msg }}</h1>
  <h1 v-text="msg"></h1>
  <h2 v-html="htmlStr"></h2>
  <!--바인딩 양방향-->
  <p><input type="text" v-model="valueModel" /></p>
  <p><input type="number" v-model.number="numberModel" /></p>
  <p>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="042">대전</option>
      <option value="052">부산</option>
    </select>
  </p>
  <p>
    <label>{{ checking }}</label>
    <input
      type="checkbox"
      true-value="yes"
      false-value="no"
      v-model="checking"
    />
  </p>

  <p>{{ valueModel }}, {{ numberModel }}, {{ city }}</p>
</template>

<script>
// import { values } from "core-js/core/array";
//view--model 의 바인딩
export default {
  data() {
    return {
      msg: "world",
      htmlStr: '<span style="color:red;">red text</span>',
      valueModel: "홍길동",
      numberModel: 10,
      city: "042",
      checking: "yes",
    };
  },
};
</script>

<style>
h1 {
  color: green;
}
</style>
