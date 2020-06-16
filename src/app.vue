<template>
  <div id="app">
    <h1>
      Hello from App Vue
    </h1>
    <buildersurface v-model="schema" :formControls="controls" :externalDataAdapter="dataAdapter"></buildersurface>
      <pre><code style="font-size:12px">{{ schema }}</code></pre>
  </div>
</template>
<script>


import buildersurface from "@/components/buildersurface.vue";
var c = function() {
  return { buildersurface };
};


var schema = {
        schemaVersion: 1,
        formVersion: 1,
        name: "contactForm",
        title: "Formulaire de contact",
        variables: [
          {
            name: "name",
            type: "text",
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
            type:"listitemarray",
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
            type: "columns",
            width: 12
          },
          {
            label: "Countries where you have already been",
            variable: "countries",
            placeholder: "Multiple countries",
            sourceId: "countries",
            multiple: true,
            id: "ctrl_8",
            type: "selectField",
            width: 12
          },
          {
            label: "New label",
            variable: "nwlbl",
            placeholder: "",
            sourceId: "currencies",
            id: "ctrl_7",
            type: "selectField",
            width: 12
          }
        ]
      };


export default {
  methods:{

  },
  data:function() {
    return {
      controls: {
        columns:{
          label: {default:'Columns'},
          path: 'grid'
        },
        textField:{
          label: {default:'Text field'},
          path: 'textField'
        },
        selectField:{
          label: {default:'List'},
          path: 'selectField'
        }
      },
      dataAdapter:require("./datasources.js").customDataAdapter,
      schema: schema
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

<style scoped>
#app{
  margin:10px
}
</style>
