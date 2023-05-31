<template>
  <button :type="type" :class="$style.ActionButton" @click="$emit('click')">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ["label", "type"],
};
</script>

<style lang="scss" module>
.ActionButton {
  border: none;
  background-color: #333333;
  padding: 0.5rem 1rem;
  color: #ffffff;
  border-radius: 3px;
}
</style>
