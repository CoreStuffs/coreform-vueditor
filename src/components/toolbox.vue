<template>
    <draggable :list="elements" :group="{ name: 'cfShareGroupForDesignSurface', pull: 'clone', put: false  }">
        <span :key="ctrl.label" v-for="ctrl in elements" :data="ctrl.id">
            <slot v-bind="ctrl">
                <div>{{ctrl.label}}</div>
            </slot>
        </span>  
    </draggable>
</template>
<script>
export default {
    data:function(){
        return{}
    },
    props:["formControls"],
    components: {
      'draggable' : () => import('vuedraggable')
    },
    computed:{
        
        elements:function(){
            var arr = new Array();
            for (let [key, value] of Object.entries(this.formControls)) {
                var obj={};
                Object.assign(obj, value);
                obj.id = key;
                arr.push(obj);
            }
            return arr;
        }
    }

}
</script>

