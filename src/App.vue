<template>
  <main>
    <router-view />
  </main>
</template>

<style lang="scss">
@import "./scss/utilities";
@import "./scss/variables";

main {
  padding: 2rem 0;

  @media (max-width: $mobile-breakpoint) {
    padding: 0;
  }
}
</style>
