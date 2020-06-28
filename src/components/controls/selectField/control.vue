<template>
  <formControl :schema="schema">
    <label :for="schema.id" class="uk-form-label"
      >{{ schema.label }}
      <div class="required-tag" v-if="$isrequired" />
    </label>
    <div class="uk-form-controls">
      <v-select
        ref="selector"
        label="text"
        auto
        v-model="data"
        :close-on-select="!schema.multiple"
        :filterable="!dataSource.queryable"
        @input="onChange"
        @search="onSearch"
        :multiple="schema.multiple"
        :placeholder="schema.placeholder"
        :options="options"
      >
        <template #open-indicator="{ attributes }">
          <span v-bind="attributes">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              data-svg="chevron-down"
            >
              <polyline
                fill="none"
                stroke="#000"
                stroke-width="1.03"
                points="16 7 10 13 4 7"
              ></polyline>
            </svg>
          </span>
        </template>
      </v-select>
    </div>
  </formControl>
</template>
<script>
import vSelect from "vue-select";
import formControl from "@/components/.infra/formControl.vue";
import controlBase from "@/components/.infra/controlBase.vue";
export default {
  inject: ["$getExternalData", "$externalDataSources"],
  extends: controlBase,
  data: function () {
    return {
      data: this.value,
      options: [],
      dataSource: {},
    };
  },
  props: {
    schema: {
      required: true,
    },
    value: {
      required: false,
      type: [String, Array, Object],
    },
  },
  watch: {
    value: function (newValue) {
      this.data = newValue;
    },
  },
  created: function () {
    var arr = this.$externalDataSources.filter(
      (o) => o.id === this.schema.sourceId
    );
    if (arr.length === 1) this.dataSource = arr[0];

    if (
      this.dataSource &&
      (!this.dataSource.queryable || this.dataSource.initialLoad)
    ) {
      this.$getExternalData(
        this.schema.sourceId,
        (data) => {
          this.options = data.items;
        },
        null
      );
    }
  },
  methods: {
    onChange: function () {
      this.$emit("input", this.data);
      if (this.schema.multiple)
        this.$refs.selector.$el.getElementsByTagName("INPUT")[0].focus();
    },
    onSearch(search, loading) {
      if (!this.dataSource.initialLoad && search == "") return;
      loading(true);
      var vm = this;
      vm.options.splice(0, vm.options.length);
      this.$getExternalData(
        this.schema.sourceId,
        (data) => {
          this.options = data.items;
          loading(false);
        },
        search
      );
    },
  },
  components: {
<<<<<<< HEAD
    'v-select':vSelect,
    formControl
  }
=======
    "v-select": () => import("vue-select"),
    formControl: () => import("@/components/.infra/formControl.vue"),
  },
>>>>>>> cd7377feef2cf2a822deef1e2365253915e8f3d1
};
</script>
<style scoped></style>
