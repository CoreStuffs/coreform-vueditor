<template>
  <draggable :list="elements" :group="{ name: 'cfShareGroupForDesignSurface' }" @add="onAdd">
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
  inject:["formData","$controls"],
  name: "controlset",
  props: ['elements'],
  components: {
      'draggable' : () => import('vuedraggable'),
      // 'grid' : () => import('@/components/controls/grid/control.vue'),
      // 'textField' : () => import('@/components/controls/textField/control.vue'),
      // 'selectField': () => import("@/components/controls/selectField/control.vue")
  },
  created:function(){
      var t = this;
      this.$controls.forEach(element => {
        t.$options.components[element.tag] = element.control;
      });
  },
  methods:{
    onAdd:function(a){
      var t = a.item.attributes["data"].value;
      console.log("Add: " + t);
      this.elements.splice(a.newIndex+1, 0, {type:t, label:'new ' + t});
    }
  }
};
</script>



