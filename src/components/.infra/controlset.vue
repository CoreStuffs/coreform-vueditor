<template>
  <draggable :list="elements" :group="{ name: 'cfShareGroupForDesignSurface' }" @end="onEnd">
        <component v-for="el in elements"
                    :key="el"
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
  inject:["$formData","$controls","$openControlSettingsById"],
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
    onEnd:function(a,b){
      var t = this;
      this.$openControlSettingsById(a.item.attributes["data"].value, (o)=>{
        this.elements.splice(a.newIndex+1, 0, o);
      });
    }
  }
};
</script>



