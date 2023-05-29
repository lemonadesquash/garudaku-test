<template>
  <div class="container">
    <h1>This is a detail page {{ $route.params.id }}</h1>
    <ActionButton label="Go Back" @click="$router.go(-1)" />
  </div>
</template>

<script>
import ActionButton from "@/components/atoms/ActionButton.vue";

export default {
  components: {
    ActionButton,
  },
};
</script>
