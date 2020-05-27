<template>
  <draggable class="dragArea" tag="ul" :list="elements" :group="{ name: 'g1' }">
        <component v-for="el in elements"
                    :key="el.id"
                    :is="el.type"
                    :schema="el"
                    v-bind="el"
                    v-model="getVariable[el.variable]">
        </component>
  </draggable>
</template>
<script>
export default {
  name: "controlset",
  props: {
    elements: {
      required: true,
      type: Array
    }
  },
  components: {
      'draggable' : () => import('vuedraggable'),
      'grid' : () => import('@/components/controls/grid/builder'),
      'textField' : () => import('@/components/controls/textField/builder'),
      'selectField': () => import("@/components/controls/selectField/builder")
  },
  methods:{
      getVariable:function(name){
          return this.$parent ?? this.$parent.getVariable(name);
      }
  }
};
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style>