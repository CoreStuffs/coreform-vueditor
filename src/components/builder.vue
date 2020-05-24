<template>
<div>Form
<draggable v-model="myArray" group="people" @start="drag=true" @end="drag=false">
   <div v-for="element in myArray" :key="element.id">{{element.name}}</div>
</draggable>
</div>
</template>
<script>
import draggable from 'vuedraggable'
module.export = {
        name: 'builder',
        data: function() {
            return {
                    myArray:[
                        {id:1, name:"aaa"},
                         {id:2, name:"bbb"},
                          {id:3, name:"ccc"},
                           {id:4, name:"ddd"},
                            {id:5, name:"ee"}
                    ]


            };
        },
        components:{draggable}
 }
</script>
<style scoped>
    div{color:blue}
</style>