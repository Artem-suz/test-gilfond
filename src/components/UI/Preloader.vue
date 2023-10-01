<script>
export default {
  name: "Preloader",
};
</script>

<template>
  <span class="preloader">
    <img
      src="../../assets/img/loader.svg"
      draggable="false"
      loading="lazy"
      decoding="async"
      alt="preloader"
    />
  </span>
</template>

<style scoped lang="scss">
.preloader {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  img {
    width: 100%;
    height: 100%;
    animation: rotate 1s infinite linear;
  }
}
</style>
