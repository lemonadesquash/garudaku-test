<template>
  <div class="container">
    <div class="row">
      <div
        v-for="index in 4"
        :class="[$style.Card, $style.CardWrapper]"
        :key="index"
      >
        <div
          :class="$style.Image"
          :style="`background-image: url(${'https://i.pinimg.com/736x/c2/2e/0d/c22e0d6839a83d3687eb40ed21749371.jpg'})`"
        ></div>
        <div :class="$style.Content">
          <h1>[title]</h1>
          <p>
            [content, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Soluta, vitae impedit voluptas cum repudiandae dicta ut at eum
            dolore libero quisquam fugit et ducimus! Est ad labore cupiditate
            provident inventore!]
          </p>
          <button :class="$style.Button" @click="$router.push('/news/1')">
            Read more
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import "../scss/variables";

.CardWrapper {
  width: 30%;

  @media (max-width: $desktop-breakpoint) {
    width: 40%;
  }

  @media (max-width: $mobile-breakpoint) {
    width: 100%;
  }
}
.Card {
  border: 1px solid #f0f0f0;

  .Image {
    width: 100%;
    height: 300px;
    background-position: center center;
  }

  .Content {
    padding: 2rem;

    @media (max-width: $mobile-breakpoint) {
      padding: 1rem;
    }
  }
}

.Button {
  border: none;
  background-color: #333333;
  padding: 0.5rem 1rem;
  color: #ffffff;
}
</style>
