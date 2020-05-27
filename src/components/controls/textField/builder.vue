<template>
    <div>{{label}}
    <input :value="getVariable(schema.variable).name"/>       
    </div>
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
    },
  methods: {
    getVariable: function(name) {
      var n = this.$parent.getVariable(name);
      return n;
    }
  }
}
</script>