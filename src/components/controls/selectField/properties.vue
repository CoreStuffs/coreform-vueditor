<template>
  <div>
    <div class="uk-margin-small-bottom">
      <label for="txtPlaceholder" class="uk-form-label">Label text</label>
      <input
        id="txtLabel"
        type="text"
        class="uk-input uk-form-small"
        v-model="label"
      />
    </div>
    <div class="uk-margin-small-bottom">
      <label for="txtPlaceholder" class="uk-form-label">Placeholder text</label>
      <input
        id="txtPlaceholder"
        type="text"
        class="uk-input uk-form-small"
        v-model="placeholder"
      />
    </div>
    <div class="uk-margin-small-bottom">
      <label for="drpDataSource" class="uk-form-label">Data source</label>
      <select
        class="uk-select uk-form-small"
        id="drpDataSource"
        v-model="sourceId"
      >
        <option
          :key="option.id"
          v-for="option in dataSources"
          v-bind:value="option.id"
        >
          {{ option.text }}
        </option>
      </select>
    </div>
    <div class="uk-margin-small-bottom">
      <label for="chkMultiple" class="uk-form-label"
        ><input
          id="chkMultiple"
          class="uk-checkbox"
          type="checkbox"
          v-model="multiple"
        />
        Allow multiple selection</label
      >
    </div>
  </div>
</template>
<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  inject: ["$externalDataSources"],
  validations: {
    label: {
      required: required,
      minLength: minLength(3),
    },
  },
  computed: {
    dataSources: function () {
      return this.$externalDataSources;
    },
  },
  data: function () {
    return this.value;
  },

  props: ["value"],
};
</script>
