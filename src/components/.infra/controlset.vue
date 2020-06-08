<template>
  <draggable :list="elements" :group="{ name: 'cfShareGroupForDesignSurface' }" @add="onAdd">
        <component v-for="el in elements"
                    :key="el.id"
                    :is="el.type"
                    :schema="el"
                    :editMode="editMode"
                    handle=".moveHandle"
                    v-model="$formData[el.variable]">
        </component>
  </draggable>
</template>
<script>
export default {
  inject:["$formData","$controls","$createControl"],
  name: "controlset",
  props: ['elements','editMode'],
  components: {
      'draggable' : () => import('vuedraggable'),
  },
  created:function(){
      var t = this;
       for (let [key, value] of Object.entries(this.$controls)) {
        t.$options.components[key] = value.control.default;
      };
  },
  methods:{
    getData:function(variable){
      return this.$getFormData(variable);
    },
    onAdd:function(a){
      var t = a.item.attributes["data"].value;
      this.$createControl(t, this.elements, a.newIndex+1 );
    }
  }
};
</script>



