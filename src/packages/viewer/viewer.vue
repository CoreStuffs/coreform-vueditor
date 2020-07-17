<template>
  <div>
    {{ msg }}
    <div>
      <test test="Working!"></test>
    </div>
  </div>
</template>
<script>
import test from "../../components/test";
export default {
  components: {
    test,
  },
  data: function () {
    return {};
  },
  props: ["msg"],
};
</script>
