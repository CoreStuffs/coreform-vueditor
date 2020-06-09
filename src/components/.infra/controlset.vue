<template>
  <draggable :list="elements" group="cfShareGroupForDesignSurface" @add="onAdd" >
        <component v-for="el in elements"
                    :key="el.id"
                    :is="el.type"
                    :schema="el"
                    :editMode="editMode"
                    handle=".moveHandle"
                    :v-model="getData(el.variable)">
        </component>
  </draggable>
</template>
<script>
export default {
  inject:["$formData","$controls","$openControlSettingsByObject"],
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
      if(!variable) return null;
      return this.$formData[variable];
    },
    onAdd:function(a){
          //Trick: We try to find an element with isNew (a new one). For whatever reason, it can be at newindex or oldindex (investigation required).
          //If, after all, it has no isNew... it is not a new one
          var t = this;
          var index= a.oldIndex;
          var obj = this.elements[a.oldIndex];
          if(!obj || !obj.isNew) { 
            obj=this.elements[a.newIndex];
            index= a.newIndex;
          }
          if(obj.isNew){
            delete obj.isNew;
            this.elements.splice(index,1);
            this.$openControlSettingsByObject(obj, (o)=>{
              if(t.elements.length>0){
                t.elements.splice(a.newIndex, 0, o);
              }else{
                t.elements.push(o);
              }
              this.$forceUpdate();
            });
          }
      }
    }
};
</script>



