<template>
  <div :class="$style.CardDetail">
    <div
      :class="$style.Image"
      :style="`background-image: url(${'https://i.pinimg.com/736x/c2/2e/0d/c22e0d6839a83d3687eb40ed21749371.jpg'})`"
    ></div>
    <div :class="$style.Content">
      <div :class="$style.ActionButtons">
        <ActionButton label="Go Back" @click="$router.go(-1)" />
        <ActionButton label="Edit" @click="$router.push(`/news/${1}/edit`)" />
      </div>
      <h1>[title]</h1>
      <p>
        [content, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Soluta, vitae impedit voluptas cum repudiandae dicta ut at eum dolore
        libero quisquam fugit et ducimus! Est ad labore cupiditate provident
        inventore!]
      </p>
    </div>
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
