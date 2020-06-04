<template>
    <vk-modal :show.sync="show" overflow-auto>
        <vk-modal-close @click="show = false"></vk-modal-close>
            <div class="uk-modal-body uk-form-stacked" id="editFormBody">
                <div>
                    <ul uk-tab>
                        <li><a href="#">Basic</a></li>
                        <li><a href="#">Debug</a></li>
                    </ul>
                    <ul class="uk-switcher uk-margin" uk-overflow-auto>
                        <li>
                            <div v-if="isDataField" class="uk-margin-small-bottom">
                                <label for="txtValue" class="uk-form-label">Variable name</label>
                                <!--<input id="txtValue" type="text" class="uk-input uk-form-small" v-model="field.variable" v-bind:class="{'uk-form-danger': $v.field.variable.$error}"/>-->
                                <div class="uk-grid-column-collapse" uk-grid>
                                    <select class="uk-select uk-form-small uk-width-expand@m" v-model="field.variable" v-bind:class="{'uk-form-danger': $v.field.variable.$error}">
                                        <option :key="option.name" v-for="option in acceptedVariables" v-bind:value="option.name">
                                            {{ option.name }} ({{variableType(option.type)}})
                                        </option>
                                    </select>
                                    <a href="#" @click="addVariable()" class="uk-width-auto@m" style="margin-left:5px;margin-top:5px" uk-icon="icon: plus-circle"></a>
                                </div>
                            </div>
                            <component :key="editformFieldId" :is="(field ? fieldType(field) : null)" v-bind="field" v-model="field"></component>
                        </li>
                        <li>
                            <pre><code>{{field}}</code></pre>
                        </li>
                    </ul>
                </div>
            </div>
        <div slot="footer" class="uk-text-right">
            <vk-button class="uk-margin-small-right" @click="show = false">Cancel</vk-button>
            <vk-button class="uk-margin-small-right uk-button-primary" type="primary" @click="applyEdit()">Apply</vk-button>
        </div>
    </vk-modal>
</template>
<script>
import Vue from 'vue'
import Vuikit from 'vuikit'
Vue.use(Vuikit)
export default {
    methods: {
        showModal: function(){
            this.show=true;
        }
    },
    data:function(){
        return{show:false}
    }
}
</script>