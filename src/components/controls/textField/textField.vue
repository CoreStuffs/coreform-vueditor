<template>
    <div>{{schema.label}}
    <input :type="inputType" :placeholder="schema.placeholder" class="uk-input uk-form-small" :id="schema.id" :value="value" @input="updateInput"/>       
    </div>
</template>
<script>
export default {
  inject: ["getVariable"],
        data: function () {
            return {}
        },
        computed: {
            inputType: function () { return 'text'; }
        },
        methods: {
            updateInput: function () {
                this.$emit('input', this.$el.getElementsByTagName("input")[0].value);
                //this.$touch(); //vuelidate
            }
        },
      props:{
        schema:{
            type:Object,
            required: true
        },
        value:{
            type:String,
            required: false
        }
    }
}
</script>