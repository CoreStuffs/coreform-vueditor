<template>
    <div :data-ref="id" ref="container" v-bind:class="'uk-width-'+ preferredWidth" :type="type" class="uk-inline cf_validationError uk-margin-small-bottom cf_field" v-on:mouseleave="hideToolbar" v-on:mouseover="showToolbar">
        <div ref="toolbar" class="coreform_toolbar uk-position-top-right" style="display:none"  :style="cssStyle">
                <toolButton icon="move" cssclass="uk-drag moveHandle" :onclick="()=>{}"/>
                <div class="uk-inline" style="top:-2px">
                    <toolButton icon="info" cssclass="uk-drag moveHandle" :onclick="()=>{}"/>
                    <div uk-drop="pos: top-left; mode:click; offset: 5">
                        <div class="uk-card-body uk-card uk-card-small uk-card-default">
                            <div><label class="uk-text-normal">{{controlType}}</label></div>
                            <div><label class="uk-text-normal" v-if="variableText">Data: {{variableText}}</label></div>
                        </div>
                    </div>
                </div>
                <toolButton icon="settings" :onclick="openSettings"/>
                <toolButton icon="trash" cssclass="deleteHandle" :onclick="removeNode"/>
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
            this.$refs.container.classList.remove("cf-form-focus");
            evt.stopPropagation();
        },
        showToolbar: function(evt){
            this.$root.$el.getElementsByClassName("coreform_toolbar").forEach(el => el.style.display = 'none');
            this.$refs.toolbar.style.display = '';
            this.$refs.container.classList.add("cf-form-focus");
            evt.stopPropagation();
        },
        openSettings: function (evt) {
            this.$openControlSettingsById(this.id);
        },
        removeNode: function (evt) {
            this.$removeControlById(this.id);
        }
    },
    props: { 
            schema: {
                type: Object,
                required: true
            },  validation: {
                type: Object,
                required: false
            }, 
            preferredWidth: {
                type:String,
                default:"1-1"
            },
            "cssStyle":{
                 type:String   
            }
        }
}
</script>
<style scoped>
.cf-form-focus{
    border:2px dotted lightsteelblue !important
}

.cf_field{
    position: relative;
    border: 2px solid transparent;
    padding:3px;
    padding-right:15px;
    margin-right:15px;
    width:100%
}

 .coreform_toolbar {
    z-index: 999;
    /* position: absolute;
    right: 0px;
    top:0px*/
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
