<template>
  <div id="app">
    <h1>
      Hello from App Vue
      <select v-model="size">
        <option value="100">100%</option>
        <option value="75">75%</option>
        <option value="50">50%</option>
        <option value="30">30%</option>
      </select>

    </h1>
    <div :style="{position: 'relative', width: size + '%', left : (100-size)/2 + '%'}">
      <buildersurface
        v-model="schema"
        :externalDataAdapter="dataAdapter"
      ></buildersurface>
    </div>
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
      dataAdapter: require("./datasources.js").customDataAdapter,
      schema: {},// schema,


      size:50
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
