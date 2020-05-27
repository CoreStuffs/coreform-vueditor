<template>
    <div>{{label}}</div>
</template>
<script>
export default {
    data:function(){
        return this.schema;
    },
    props:{
        schema:{
            type:Object,
            required: true
        }
    }
}
</script>