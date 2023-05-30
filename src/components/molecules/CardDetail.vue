<template>
  <div :class="$style.CardDetail">
    <div
      :class="$style.Image"
      :style="`background-image: url(${item.urlToImage})`"
    ></div>
    <div :class="$style.Content">
      <div :class="$style.ActionButtons">
        <ActionButton label="Go Back" @click="$router.go(-1)" />
        <ActionButton
          label="Edit"
          @click="$router.push(`/news/${item.id}/edit`)"
        />
      </div>
      <h1>{{ item.title }}</h1>
      <p>
        {{ item.description }}
      </p>
      <a :href="item.url" target="_blank">Read full news</a>
    </div>
  </div>
</template>

<script>
import ActionButton from "@/components/atoms/ActionButton.vue";

export default {
  props: ["item"],
  components: {
    ActionButton,
  },
};
</script>

<style lang="scss" module>
@import "@/scss/variables";
.CardDetail {
  border: 1px solid #f0f0f0;

  .Image {
    width: 100%;
    height: 500px;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }

  .Content {
    padding: 2rem;

    @media (max-width: $mobile-breakpoint) {
      padding: 1rem;
    }

    .ActionButtons {
      display: flex;
      gap: 0.75rem;
    }
  }
}
</style>
