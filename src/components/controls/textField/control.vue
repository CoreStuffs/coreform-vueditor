<template>
  <formControl :schema="schema">
    <div>
      <QInput
        :label="schema.label"
       :placeholder="schema.placeholder"
        :hint="schema.placeholder"
        v-bind:class="{ 'uk-form-danger': $error }"
        :id="schema.id"
        v-model="value"
        @input="updateInput"
      />
    </div>
  </formControl>
</template>
<script>
import {
  QInput
} from 'quasar'
import controlBase from "@/components/.infra/controlBase.vue";
export default {
  extends: controlBase,
  components: {
    formControl: () => import("@/components/.infra/formControl.vue"),
    QInput
  },
  computed: {
    inputType: function () {
      return "text";
    },
  },
  methods: {
    updateInput: function () {
      this.$emit("input", this.$el.getElementsByTagName("input")[0].value);
      if (this.$validation) this.$validation.$touch();
    },
  },
  props: {
    value: {
      type: String,
      required: false,
    },
  },
};
</script>
