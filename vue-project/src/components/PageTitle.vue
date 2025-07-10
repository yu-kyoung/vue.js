<template>
  <slot name="header"></slot>
  <h3>하위 PageTitle</h3>
  <p>{{ title }}</p>
  <p>{{ likes }}</p>
  <p v-bind:class="{ 'red-font': isOK }">환영합니다.</p>
  <slot></slot>
  <ul>
    <li v-bind:key="i" v-for="(member, i) in members">
      이름 {{ member.name }}, 나이 {{ member.age }}
    </li>
  </ul>
  <slot name="footer"></slot>
</template>
<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  props: {
    //상위 요소 에서 하위 요소로
    title: { type: String, default: "페이지 제목" },
    likes: { type: Number, default: 0 },
    isOK: { type: Boolean, default: false },
    members: {
      type: Array,
      default: function () {
        return [{ name: "삼촌", age: 30 }]; // 배열 안에 객체
      },
    },
  },
};
</script>
<style>
.red-font {
  color: red;
}
</style>
