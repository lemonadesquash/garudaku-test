<template>
  <div class="row">
    <CardItem
      v-for="(newsItem, index) in news"
      :item="newsItem"
      :id="index + 1"
      :key="newsItem.url"
      :class="$style.CardWrapper"
    />
  </div>
</template>

<script>
import CardItem from "@/components/molecules/CardItem.vue";
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["news"]),
  },
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
