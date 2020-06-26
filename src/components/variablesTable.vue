<template>
  <div>
    <div uk-overflow-auto>
      <table class="uk-table uk-table-middle uk-table-divider uk-table-small">
        <thead>
          <tr>
            <th class="uk-table-small">Name</th>
            <th>Type</th>
            <th>Required</th>
            <th class="uk-table-shrink">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="variable.name" v-for="variable in variables">
            <td class="uk-text-nowrap uk-text-small">
              <a @click="editVariable(variable)">{{ variable.name }}</a>
            </td>
            <td class="uk-text-nowrap uk-text-small">
              {{ variable.type }}
            </td>
            <td class="uk-text-nowrap uk-text-small">
              <span v-if="isRequired(variable)" uk-icon="check"></span>
            </td>
            <td class="uk-text-nowrap uk-text-small">
              <a @click="editVariable(variable)" uk-icon="icon: pencil"></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="uk-modal-footer uk-text-left">
      <button
        class="uk-button uk-button-default uk-button-small"
        @click="addVariable()"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["$openVariableProperties"],
  data: function () {
    return {};
  },
  methods: {
    isRequired: function (variable) {
      return (
        variable.validations.filter(
          (o) => o.type.toLowerCase() === "required" && o.enabled
        ).length > 0
      );
    },
    addVariable: function () {
      this.$openVariableProperties();
    },
    editVariable: function (variable) {
      this.$openVariableProperties(variable, null, function () {});
    },
    changeRequired: function (e, v) {
      if (e.srcElement.checked) {
        v.validations.push({ type: "required" });
      } else {
        v.validations = v.validations.filter(
          (o) => o.type.toLowerCase() !== "required"
        );
      }
    },
  },
  props: ["variables"],
};
</script>
