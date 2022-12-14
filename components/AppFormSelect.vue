<template>
  <select
    class="w-full border border-gray-300 rounded p-2 outline-none"
    @change="onChange"
  >
    <option value="">Selecione</option>
    <option
      v-for="option in options"
      :key="option.name"
      :value="option.name"
      :selected="value === option.name"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "AppFormSelect",

  props: {
    value: {
      type: [String, Number, Object, Boolean],
      default: undefined,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      localValue: this.value,
    };
  },

  watch: {
    value(value) {
      this.localValue = value;
    },
  },

  methods: {
    onChange($evt) {
      this.$emit("input", $evt.target.value);
    },
  },
};
</script>
