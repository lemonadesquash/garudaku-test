<template>
  <div class="container">
    <ActionButton label="Go Back" @click="$router.go(-1)" />
    <h1>This is a detail page {{ $route.params.id }}</h1>
    <CardDetail />
  </div>
</template>

<script>
import ActionButton from "@/components/atoms/ActionButton.vue";
import CardDetail from "@/components/molecules/CardDetail.vue";

export default {
  components: {
    ActionButton,
    CardDetail,
  },
};
</script>
