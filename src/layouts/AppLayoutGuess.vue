<template>
  <div class="guess-layout">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
</script>

<style scoped lang="scss">
@import "./src/assets/scss/_variables.scss";
.guess-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  background-color: $background-color-base;
  background-image: url("./src/assets/images/guess-layout.svg");
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: 110px;
  background-size: 100%;
  .content {
    padding: 32px 0;
    flex: 1;
    @media (min-width: 768px) {
      padding: 200px 0 24px;
    }
  }
}
</style>