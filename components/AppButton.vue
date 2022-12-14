<template>
  <button
    class="w-full bg-purple-900 p-4 rounded text-white antialiased hover:bg-purple-800"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",

  data() {
    return {};
  },

  methods: {},
};
</script>
