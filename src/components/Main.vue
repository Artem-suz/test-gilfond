<script>
import Sidebar from "./Sidebar.vue";
import DetailInfo from "./DetailInfo.vue";

export default {
  name: "Main",
  components: { Sidebar, DetailInfo },
};
</script>

<template>
  <main class="search-colleagues">
    <h1 class="h-hidden">Поиск сотрудников</h1>
    <Sidebar />
    <DetailInfo />
  </main>
</template>

<style scoped lang="scss">
@import "../assets/style.scss";
.search-colleagues {
  display: flex;
  background-color: $white-2;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  min-height: 600px;
}
</style>
