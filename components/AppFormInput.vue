<template>
  <input
    class="w-full border border-gray-300 rounded p-2 outline-none"
    :type="type"
    :placeholder="placeholder"
    :value="value"
    v-on="inputListeners"
  />
</template>

<script>
export default {
  name: "AppFormInput",

  props: {
    value: {
      type: [String, Number],
      default: undefined,
    },
    placeholder: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: "text",
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

  computed: {
    inputListeners() {
      const vm = this;
      return {
        ...this.$listeners,
        input(event) {
          vm.$emit("input", event.target.value);
        },
      };
    },
  },
};
</script>
