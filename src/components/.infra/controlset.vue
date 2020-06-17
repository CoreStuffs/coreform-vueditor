<template>
  <draggable 
  :list="elements" 
  group="cfShareGroupForDesignSurface"
   @add="onAdd"
    @end="onEnd"
     handle=".moveHandle"
     ghost-class="ghost">
        <component v-for="el in elements"
                    :key="el.id()"
                    :is="el.type"
                    :schema="el"
                    :editMode="editMode"
                    
                    v-model="$formData[el.variable]"
                    :data="JSON.stringify({id:el.id, isNew:false})"
                   
                    >
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
    onEnd:function(a){

    },
    onAdd:function(a){
          //Trick: We try to find an element with isNew (a new one). For whatever reason, it can be at newindex or oldindex (investigation required).
          //If, after all, it has no isNew... it is not a new one
          if(a.pullMode === "clone"){
            var t = this;
            var obj;
            for (var i = 0; i < this.elements.length; i++) {
              var element = this.elements[i];
              if(element && element.isNew){
                  delete element.isNew;
                  obj = element;
                  this.elements.splice(i,1);
                  break;
                }
              }
            var index = a.newIndex;
            this.$openControlSettingsByObject(obj, (o)=>{
              if(t.elements.length>0){
                t.elements.splice(index, 0, o);
              }else{
                t.elements.push(o);
              }
              this.$forceUpdate();
            });
           };
      }
    }
};
</script>
<style scoped>
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

</style>


