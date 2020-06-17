<template>
    <div :data-ref="id" v-bind:class="'uk-width-'+ width" :type="type" class="cf_validationError uk-margin-small-bottom cf_field" v-on:mouseleave="hideToolbar" v-on:mouseover="showToolbar">
        <div ref="toolbar" class="coreform_toolbar" style="display:none">
            <div>
                <label class="uk-text-normal">{{controlType}}</label>
            <label class="uk-text-normal" v-if="variableText">Data: {{variableText}}</label>
            </div>
            <div>
            <toolButton icon="move" cssclass="uk-drag moveHandle"/>
            <toolButton icon="settings" :onclick="openSettings"/>
            <toolButton icon="trash" cssclass="deleteHandle" :onclick="removeNode"/>
            </div>
        </div>
        <slot></slot>
    </div>
</template>
<script>
import toolButton from '@/components/.infra/toolButton';
export default {
    inject: ["$getControlLabel", "$openControlSettingsById"],
    data: function () {
        return this.schema
    },
    components:{
        toolButton
    },
    computed: {
        variableText: function () {
            if (this.variable) {
                return this.variable;
            }
            else {
                return "";
            }
        },
        controlType: function () {
            var l = this.$getControlLabel(this.type)
            if (l) {
                return l;
            }
            else {
                return "Unknown";
            }
        }
    },
    methods: {
        hideToolbar: function(evt){
            this.$root.$el.getElementsByClassName("coreform_toolbar").forEach(el => el.style.display = 'none');
            evt.stopPropagation();
        },
        showToolbar: function(evt){
            this.$root.$el.getElementsByClassName("coreform_toolbar").forEach(el => el.style.display = 'none');
            this.$refs.toolbar.style.display = '';
            evt.stopPropagation();
        },
        openSettings: function (evt) {
            this.$openControlSettingsById(this.id());
        },
        removeNode: function (evt) {
            this.$removeControlById(this.id());
        }
    },
    props: { 
        schema: {
            type: Object,
            required: true
        },  validation: {
            type: Object,
            required: true
        }, 
        width: {
            type:String,
            default:"1-1"
        }}
}
</script>
<style scoped>
.cf_field{
    position: relative;
    border: 1px solid transparent;
    padding-right:15px
}


.coreform_toolbar {
    z-index: 999;
    position: absolute;
    right: 0px;
    top: -1em;

}

    .coreform_toolbar  label {
        background-color: #fcfcfc;      
        margin-right: 7px;
        position:relative;
        padding:1px;
        top:-3px;
        display: inline-block;
        cursor: pointer;
        font-size:13px
    }

    .coreform_toolbar img {
        display: block;
        height: 100%;
        width: 100%;
    }

div.deleteHandle {
    background-color: darkred !important;
}

    div.deleteHandle:hover {
        background-color: orangered !important;
    }
</style>
