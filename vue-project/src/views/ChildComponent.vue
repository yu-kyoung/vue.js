<template>
  <h3>자식 컴포넌트, ChildComponent.vue</h3>
  <p><input type="text" v-model="msg" /></p>
  <button v-on:click="sendMessage" ref="sendBtn">메세지보내기</button>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    sendMessage() {
      this.$emit("send-message", this.msg); //하위에서 상위로 정보전달
      // this.$parent.msg = this.msg;
      // this.$root.msg = this.msg;
    },
  },
  mounted() {
    console.log(this.$refs);
  },
};
</script>
