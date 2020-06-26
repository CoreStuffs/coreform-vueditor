<template>
  <formControl :schema="schema">
    <label :for="schema.id" class="uk-form-label"
      >{{ schema.label }}
      <div class="required-tag" v-if="$isrequired"
    /></label>
    <div class="uk-form-controls">
      <VueEditor
        ref="editor"
        v-model="data"
        :placeholder="schema.placeholder"
        @text-change="textChange"
        @selection-change="selectionChange"
      ></VueEditor>
    </div>
  </formControl>
</template>
<script>
import controlBase from "@/components/.infra/controlBase.vue";
import { VueEditor } from "vue2-editor";
export default {
  extends: controlBase,
  components: {
    formControl: () => import("@/components/.infra/formControl.vue"),
    VueEditor,
  },

  data: function () {
    return { data: this.value };
  },
  computed: {
    inputType: function () {
      return "text";
    },
  },
  methods: {
    textChange: function () {
      var quill = this.$refs.editor.quill;
      var c = quill.getContents();
      this.$emit("input", c);
    },
    selectionChange: function (range, oldRange) {
      if (range === null && oldRange !== null) {
        this.$refs.editor.quill.container.parentElement.classList.remove(
          "ql-focus"
        );
      } else if (range !== null && oldRange === null) {
        this.$refs.editor.quill.container.parentElement.classList.add(
          "ql-focus"
        );
      }
    },
  },
  watch: {
    value: function (newValue) {
      // update value
      if (
        JSON.stringify(newValue.ops) !==
        JSON.stringify(this.$refs.editor.quill.getContents().ops)
      ) {
        this.$refs.editor.quill.setContents(newValue, "silent");
      }
    },
  },
  props: ["value"],
};
</script>
<style>
.quillWrapper .ql-snow.ql-toolbar {
  padding-top: 0px !important;
  padding-bottom: 0px !important;
  font-family: inherit !important;
}
.quillWrapper .ql-snow.ql-toolbar .ql-formats {
  margin-bottom: 5px !important;
}

.ql-editor {
  padding: 6px 8px !important;
  min-height: 100px;
  font-size: 14px !important;
  font-family: inherit !important;
}
.quillWrapper .ql-picker-label {
  font-size: 14px !important;
}

.ql-editor.ql-blank::before {
  color: #ccc !important;
  font-style: normal !important;
  font-size: 14px;
  font-weight: 100;
}

.ql-toolbar.ql-snow {
  padding: 2px;
  border-width: 0px !important;
  border-bottom-width: 1px !important;
  border-color: #a0a0a0 !important;
  transition: 0.2s ease-in-out;
  transition-property: color, background-color, border;
}

.ql-toolbar.ql-snow + .ql-container.ql-snow,
.ql-container.ql-snow {
  border: 0px;
  border-color: inherit !important;
}
.quillWrapper {
  border-style: solid;
  border-width: 1px;
  border-color: #a0a0a0 !important;
}

.ql-focus {
  border-color: #1e87f0 !important;
}

.ql-snow .ql-picker {
  font-weight: 400 !important;
}
</style>
