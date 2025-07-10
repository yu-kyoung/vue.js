<template>
  <div class="grand-chilld">
    <h3>GrandChildComponent.vue-최하위 injector</h3>
    <p>
      주입받은이름: <strong>{{ providerUsername }}</strong>
    </p>
    <button @click="updateParentName">부모사용자 이름 변경</button>
  </div>
</template>
<script>
export default {
  inject: ["providerUsername", "updateUserName"], //배열형태, 이벤트 메소드
  methods: {
    updateParentName() {
      this.updateUserName("김길동");
    }, //이벤트는 메소드 안에 정의 되어야함
  },
};
</script>
<style scoped>
.grand-chilld {
  border: 1px solid salmon;
}
</style>
