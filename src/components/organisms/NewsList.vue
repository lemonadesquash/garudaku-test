<template>
  <div class="row">
    <CardItem :class="$style.CardWrapper" />
    <CardItem :class="$style.CardWrapper" />
    <CardItem :class="$style.CardWrapper" />
    <CardItem :class="$style.CardWrapper" />
  </div>
</template>

<script>
import CardItem from "@/components/molecules/CardItem.vue";

export default {
  components: {
    CardItem,
  },
};
</script>

<style lang="scss" module>
@import "@/scss/variables";

.CardWrapper {
  width: 30%;

  @media (max-width: $desktop-breakpoint) {
    width: 40%;
  }

  @media (max-width: $mobile-breakpoint) {
    width: 100%;
  }
}
</style>
