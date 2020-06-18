<template>
  <div id="app">
    <h1>
      Hello from App Vue
    </h1>
    <buildersurface
      v-model="schema"
      :formControls="controls"
      :externalDataAdapter="dataAdapter"
    ></buildersurface>
    <pre><code style="font-size:12px">{{ schema }}</code></pre>
  </div>
</template>
<script>
import buildersurface from "@/components/buildersurface.vue";
var c = function () {
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
          errorMessage: "This field is required",
        },
        {
          type: "minLength",
          minLength: 3,
          errorMessage: "Minimum length of 3 characters",
        },
      ],
    },
    {
      name: "countries",
      type: "listitemarray",
      validations: [
        {
          type: "required",
          errorMessage: "At least one country",
        },
      ],
    },
    {
      name: "Birthday",
      type: "datetime",
      validations: [
        {
          type: "required",
          errorMessage: "At least one country",
        },
        {
          type: "dateTime",
          errorMessage: "Invalid date format",
        },
      ],
    },
  ],
  elements: [
    {
      label: "Nom",
      variable: "name",
      placeholder: "Nom complet",
      type: "textField",
    },
    {
      label: "Date de naissance",
      placeholder: "",
      variable: "Birthday",
      type: "dateTimeField",
    },
    {
      showSeparator: true,
      columns: [
        {
          width: "1-2",
          elements: [
            {
              label: "Rue",
              variable: "street",
              placeholder: "",
              type: "textField",
            },
            {
              label: "Code postal",
              variable: "CP",
              placeholder: "The postal code here ;)",
              type: "textField",
            },
          ],
        },
        {
          width: "1-2",
          elements: [
            {
              label: "N°",
              variable: "number",
              placeholder: "Numéro ou lieu-dit",
              id: "ctrl_4",
              type: "textField",
            },
            {
              label: "Localité",
              variable: "place",
              placeholder: "Ville, village, hameau...",
              id: "ctrl_6",
              type: "textField",
            },
          ],
        },
      ],
      type: "columns",
    },
    {
      label: "Countries where you have already been",
      variable: "countries",
      placeholder: "Multiple countries",
      sourceId: "countries",
      multiple: true,
      type: "selectField",
    },
    {
      label: "New label",
      variable: "nwlbl",
      placeholder: "",
      sourceId: "currencies",
      type: "selectField",
    },
  ],
};

export default {
  methods: {},
  data: function () {
    return {
      controls: {
        columns: {
          label: { default: "Columns" },
          path: "grid",
        },
        textField: {
          label: { default: "Text field" },
          path: "textField",
        },
        selectField: {
          label: { default: "List" },
          path: "selectField",
        },
        dateTimeField: {
          label: { default: "Date/Time field" },
          path: "dateTimeField",
        },
        richTextField: {
          label: { default: "Richtext field" },
          path: "richTextField",
        },
      },
      dataAdapter: require("./datasources.js").customDataAdapter,
      schema: schema,
    };
  },
  mounted: function () {
    document.title = "Demo CoreForm Components";
  },
  components: c(),
  computed: {
    valueString: function () {
      return JSON.stringify(this.data, null, 2);
    },
  },
};
</script>

<style scoped>
#app {
  margin: 10px;
}
</style>
