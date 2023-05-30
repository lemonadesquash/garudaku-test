<template>
  <div :class="$style.CardItem">
    <div
      :class="$style.Image"
      :style="`background-image: url(${'https://i.pinimg.com/736x/c2/2e/0d/c22e0d6839a83d3687eb40ed21749371.jpg'})`"
    ></div>
    <div :class="$style.Content">
      <h1>[title]</h1>
      <p>
        [description, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Soluta, vitae impedit voluptas cum repudiandae dicta ut at eum dolore
        libero quisquam fugit et ducimus! Est ad labore cupiditate provident
        inventore!]
      </p>
      <ActionButton label="Read More" @click="$router.push('/news/1')" />
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
