<template>
  <div :class="$style.CardItem">
    <div
      :class="$style.Image"
      :style="`background-image: url(${item.urlToImage})`"
    ></div>
    <div :class="$style.Content">
      <h1>{{ item.title }}</h1>
      <p>{{ item.description }}</p>
      <ActionButton label="Read More" @click="$router.push(`/news/${id}`)" />
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/atoms/ActionButton.vue";

export default {
  props: ["item", "id"],
  components: {
    ActionButton,
  },
};
</script>

<style lang="scss" module>
@import "@/scss/variables";
.CardItem {
  border: 1px solid #f0f0f0;

  .Image {
    width: 100%;
    height: 300px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .Content {
    padding: 2rem;

    @media (max-width: $mobile-breakpoint) {
      padding: 1rem;
    }
  }
}
</style>
