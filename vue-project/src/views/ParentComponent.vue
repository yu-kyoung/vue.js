<template>
  <h3>부모컴포넌트(parentComponent)</h3>
  <ChildComponent v-on:send-message="sendMessage" ref="child_comp" />
</template>
<script>
import ChildComponent from "./ChildComponent.vue";

export default {
  data() {
    return {
      msg: "",
    };
  },
  components: { ChildComponent },
  methods: {
    sendMessages(data) {
      console.log("전달데이터" + data);
    },
  },
};
</script>
