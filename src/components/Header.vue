<script>
export default {
  name: "Header",
};
</script>

<template>
  <header class="header">
    <label class="header__label">
      <a href="javascript:void(0)">Жилфонд</a>
    </label>
    <span>Пользователь</span>
  </header>
</template>

<style scoped lang="scss">
@import "../assets/style.scss";
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 46px 0px 30px 0px;
}
.header__label a {
  color: $red;
  font-size: $fz-lg;
  line-height: $lh-normal;
  font-weight: $fw--bold;
  text-decoration: none;
  &:hover {
    color: $red-hover;
  }
}
</style>
