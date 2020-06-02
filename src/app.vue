<template>
  <div id="app">
    <h1>
      Hello from App Vue
    </h1>
    <toolbox :formControls="controls">
      <template scope="props">
          <button>{{props.label}}</button>
      </template>
    </toolbox>
    <builder :schema="schema" v-model="data" :formControls="controls"></builder>
     <ul uk-accordion="multiple: true">
          <li>
              <a class="uk-accordion-title" href="#">Schema</a>
              <div class="uk-accordion-content"><pre><code style="font-size:12px">{{ schema }}</code></pre></div>
          </li>
          <li class="uk-open">
              <a class="uk-accordion-title" href="#">Data</a>
              <div class="uk-accordion-content"><pre><code style="font-size:12px">{{ data }}</code></pre></div>
          </li>
      </ul>
  </div>
</template>
<script>
//import UIkit from 'uikit';

import builder from "@/components/builder.vue";
import toolbox from "@/components/toolbox.vue";
var c = function() {
  return { builder, toolbox };
};
export default {
  data:function() {
    return {
      data:{},
      controls: {
        columns:{
          label: 'Columns',
          path: 'grid'
        },
        textField:{
          label: 'Text field',
          path: 'textField'
        },
        selectField:{
          label: 'List',
          path: 'selectField'
        }
      },
      schema: {
        schemaVersion: 1,
        formVersion: 1,
        name: "contactForm",
        title: "Formulaire de contact",
        variables: [
          {
            name: "name",
            validations: [
              {
                type: "required",
                errorMessage: "This field is required"
              },
              {
                type: "minLength",
                minLength: 3,
                errorMessage: "Minimum length of 3 characters"
              }
            ]
          },
          {
            name: "countries",
            validations: [
              {
                type: "required",
                errorMessage: "At least one country"
              }
            ]
          }
        ],
        elements: [
          {
            label: "Nom",
            variable: "name",
            placeholder: "Nom complet",
            id: "ctrl_2",
            type: "textField",
            width: 12
          },
          {
            showSeparator: true,
            columns: [
              {
                id: "col_undefined_1",
                width: "1-2",
                elements: [
                  {
                    label: "Rue",
                    variable: "street",
                    placeholder: "",
                    id: "ctrl_3",
                    type: "textField",
                    width: 12
                  },
                  {
                    label: "Code postal",
                    variable: "CP",
                    placeholder: "The postal code here ;)",
                    id: "ctrl_5",
                    type: "textField",
                    width: 12
                  }
                ]
              },
              {
                id: "col_undefined_2",
                width: "1-2",
                elements: [
                  {
                    label: "N°",
                    variable: "number",
                    placeholder: "Numéro ou lieu-dit",
                    id: "ctrl_4",
                    type: "textField",
                    width: 12
                  },
                  {
                    label: "Localité",
                    variable: "place",
                    placeholder: "Ville, village, hameau...",
                    id: "ctrl_6",
                    type: "textField",
                    width: 12
                  }
                ]
              }
            ],
            id: "ctrl_1",
            type: "grid",
            width: 12
          },
          {
            label: "Countries where you have already been",
            variable: "countries",
            placeholder: "Multiple countries",
            source: "",
            multiple: true,
            id: "ctrl_8",
            type: "selectField",
            width: 12
          },
          {
            label: "New label",
            variable: "nwlbl",
            placeholder: "",
            source: "",
            id: "ctrl_7",
            type: "selectField",
            width: 12
          }
        ]
      }
    };
  },
  components: c(),
  computed: {
    valueString: function() {
      return JSON.stringify(this.data, null, 2);
    }
  }
};
</script>

<style lang="scss">
@import "../node_modules/uikit/src/scss/variables-theme.scss";
@import "../node_modules/uikit/src/scss/mixins-theme.scss";
@import "../node_modules/uikit/src/scss/uikit-theme.scss";
</style>
<style scoped>
#app{
  margin:10px
}
</style>
