<template>
  <formControl :schema="schema">
    <label :for="schema.id" class="uk-form-label"
      >{{ schema.label }}
      <div class="required-tag" v-if="$isrequired"
    /></label>
    <div class="uk-form-controls">
    <VueEditor ref="editor" v-model="data" :placeholder="schema.placeholder" @text-change="textChange"></VueEditor>
    </div>
  </formControl>
</template>
<script>
import controlBase from "@/components/.infra/controlBase.vue";
import { VueEditor } from 'vue2-editor'
export default {
  extends:controlBase,
  components: {
    formControl: () => import("@/components/.infra/formControl.vue"),
    VueEditor
  },
 
  data:function(){
    return {data: this.value ?? ""};
  },
  computed: {
    inputType: function() {
      return "text";
    }
  },
  methods: {
    updateInput: function() {
      this.$emit("input", this.$el.getElementsByTagName("input")[0].value);
      if(this.$validation) this.$validation.$touch();
    },
    textChange:function(delta, oldDelta, source){
        var quill = this.$refs.editor.quill;
        var c = quill.getContents();
        this.$emit('input', c);
    }
  },
  props: ["value"]
};
</script>
