<template>
  <draggable class="dragArea" tag="ul" :list="schema.elements" :group="{ name: 'g1' }">
        <component v-for="el in schema.elements"
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
  props: {
    schema: {
      required: true,
      type: Object
    }
  },
  methods:{
      getVariable:function(name){
          return name;
      }
  },
  components: {
      'draggable' : () => import('vuedraggable'),
      'grid' : () => import('../controls/grid/builder'),
      'textField' : () => import('../controls/textField/builder')
    },
  name: "controlset"
};
</script>
<style scoped>
.dragArea {
  min-height: 50px;
  outline: 1px dashed;
}
</style>