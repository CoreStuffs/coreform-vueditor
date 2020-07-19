<template>
  <draggable 
    :list="elements" 
    group="cfShareGroupForDesignSurface"
    @add="onAdd"
    @end="onEnd"
    swap-Threshold="0.2"
    handle=".moveHandle"
    ghost-class="ghost"
    :component-data="getComponentData()"
    >
        <component v-for="el in elements"
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
import draggable from "vuedraggable";
export default {
  inject:["$formData","$controls","$openControlSettingsByObject"],
  name: "controlset",
  props: ['elements','editMode'],
  components: {
      draggable,
  },
  created:function(){
      var t = this;
       for (let [key, value] of Object.entries(this.$controls)) {
        t.$options.components[key] = value.control.default;
      };
  },
  watch:{
    $controls:function(){
      console.log("updated control list...");
    }
  },
  methods:{
    getComponentData() {
      return {
        attrs:{
          'data-text':'Drag and drop elements here',
          'class': "dropzone"
        },
      }
    },
    getData:function(variable){
      if(!variable) return null;
      return this.$formData[variable];
    },
    onEnd:function(a){
       console.log("End");
            for (let [key, value] of Object.entries( this.$controls)) {
              console.log('END - ' + key + ' - ' + value);
            };
    },
    onClone:function(a){
      console.log("Clone");
    },
    onAdd:function(a){
       console.log("Add");
          //Trick: We try to find an element with isNew (a new one). For whatever reason, it can be at newindex or oldindex (investigation required).
          //If, after all, it has no isNew... it is not a new one
          if(a.pullMode === "clone"){
            var t = this;
            //Moche!
            for (let [key, value] of Object.entries( this.$controls)) {
              console.log('ADD - ' + key + ' - ' + value);
            };
            
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
.ghost{
  opacity: 0.3;
  background: #d0d0d0;
  min-height:50px;
  width: 100%;
  box-shadow: 5px 5px 5px grey;
}

div:empty{
  min-height:25px;
  border:1px dashed silver
}

div:empty:before{
  content:attr(data-text);
  color:#e0e0e0;
  padding:2px;
  font-weight: 100;
}

</style>


