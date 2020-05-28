<template>
  <formControl :schema="schema">
    <label :for="schema.id" class="uk-form-label">{{ schema.label }}
          <div class="required-tag" v-if="$isrequired"/>
      </label>
    <div class="uk-form-controls">
      <v-select ref="selector" label="text" v-model="value" @input="onChange" :multiple="schema.multiple" :placeholder="schema.placeholder" :options="options">
        <template #open-indicator="{ attributes }">
          <span v-bind="attributes">
            <svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-svg="chevron-down"><polyline fill="none" stroke="#000" stroke-width="1.03" points="16 7 10 13 4 7"></polyline></svg>
          </span>
        </template>
      </v-select>
    </div>
  </formControl>
</template>
<script>
export default {
  data: function() {
    
    return {
      options: [{'key':'1', text:"aaa"},{'key':'3', text:"ccc"},{'key':'2', text:"bbb"}]
    };
  },
  props: {
    schema: {
      required: true
    },
    value:{
      required:false
    }
  },
  methods:{
    onChange:function(){
      this.$emit("input", this.value);
    }
  },
  components: {
    'v-select': () => import("vue-select"),
    'formControl': () => import("@/components/.infra/formControl.vue")
  }
};
</script>
<style lang="scss">
@import "vue-select/src/scss/vue-select.scss";
</style>
<style>
.v-select{
  font-size:0.875rem;
  color:#666  !important;
}
.vs__dropdown-toggle
{
  border-radius:0;
  border: 1px solid #e5e5e5;
  padding: 0px 0 0px 0;
}
.vs__dropdown-toggle:focus-within
{
  border-color:#1e87f0
}

.vs__selected-options{
  flex-basis: none;
    margin:0px 0px 0px 0px;
}

.vs__clear svg{
  height:14px;
  width:16px;
}

.vs__selected{
  margin-top:2px;
  margin-right:2px;
  border-radius: 0px;
  max-height: 25px;
  border:0px
}

.vs__dropdown-menu{
  border:1px solid #aaa;
  box-shadow: inherit;
  border-radius: 0px;
  padding:0px;
}

.vs__open-indicator{
    transform-origin: 10px 12px;
    margin-top: -8px;
    width:20px;
    height: 20px;
}

.vs__search, .vs__search:focus{
  line-height: inherit;
  font-size: inherit;
  font:inherit;
  margin:3px 0 3px 0
}

::placeholder{
  color:#cccccc !important
}

</style>