<template>
  <draggable :list="elements" :group="{ name: 'g1' }">
        <component v-for="el in elements"
                    :key="el.id"
                    :is="el.type"
                    :schema="el"
                    handle=".moveHandle"
                    v-model="formData[el.variable]">
        </component>
  </draggable>
</template>
<script>
export default {
  inject:["formData"],
  name: "controlset",
  props: {
    elements: {
      required: true,
      type: Array
    }
  },
  components: {
      'draggable' : () => import('vuedraggable'),
      'grid' : () => import('@/components/controls/grid/builder.vue'),
      'textField' : () => import('@/components/controls/textField/textField'),
      'selectField': () => import("@/components/controls/selectField/selectField")
  }
};
</script>
