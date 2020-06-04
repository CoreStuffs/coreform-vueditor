<script>
export default {
    inject: ["$getControlValidator"],
    data:function(){
        return {};
    },
    props:{
        editMode: {
            type: Boolean,
            default: false
        },
        schema: {
            type: Object,
            required: true
        }
    },
    computed:{
        $validation: function(){
            var v = this.schema.variable;
            var val = this.$getControlValidator(v);
            return val;
        },
        $errorMessage : function () {
            if (this.$validation && this.$validation.$error && this.schema.variable) {
                for (const valid in this.$validation) {
                    if (!String(this.$validation[valid]).startsWith("$") && this.$validation[valid] === false) {
                        for (const varid in this.$root.$form.schema.variables) {
                            var variable = this.$root.$form.schema.variables[varid];
                            if (variable.name === this.schema.variable) {
                                for (const vali in variable.validations) {
                                    var validation = variable.validations[vali];
                                    if (validation.type === this.$validation.$params[valid].type) {
                                        return validation.errorMessage;
                                    }
                                }
                            }
                        }

                    }
                }
            }
            return "";
        },
        $error : function () {
            return (this.$validation ? this.$validation.$error : false);
        },
        $isrequired: function () {
            if (this.$validation) {
                for (const param in this.$validation.$params) {
                    if (this.$validation.$params[param].type === "required") return true;
                }
            }
        }
    }
}
</script>