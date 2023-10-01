<script>
export default {
  name: "SidebarUser",
  emits: ["clickCard"],
  props: {
    userName: {
      type: String,
      default: "",
    },
    userEmail: {
      type: String,
      default: "",
    },
    id: {
      type: [String, Number],
      default: "",
    },
  },
  methods: {
    clickCardHandler() {
      this.$emit("clickCard", this.id);
    },
  },
  mounted() {
    this.userCard = this.$refs.userCard;
    this.userCard.addEventListener("click", this.clickCardHandler);
  },
  unmounted() {
    this.userCard.removeEventListener("click", this.clickCardHandler);
  },
};
</script>

<template>
  <li class="sidebar-user" ref="userCard">
    <div class="sidebar-user__img-wrapper">
      <img
        src="../assets/img/avatar-stub.png"
        alt="img"
        type="image/png"
        draggable="false"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="sidebar-user__content">
      <p class="sidebar-user__name">{{ userName }}</p>
      <p class="sidebar-user__email">{{ userEmail }}</p>
    </div>
  </li>
</template>

<style scoped lang="scss">
@import "../assets/style.scss";
.sidebar-user {
  border-radius: 10px;
  background-color: $white;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  cursor: pointer;
  &:hover .sidebar-user__content {
    background-color: $grey-3;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  & + li {
    margin-top: 18px;
  }

  &__content {
    padding: 15px;
    width: 100%;
  }

  &__img-wrapper {
    font-size: 0px;
    img {
      width: 70px;
      height: 70px;
    }
  }
  &__name {
    font-size: $fz-sm;
    font-weight: $fw--smbold;
    margin-bottom: 5px;
  }
  &__email {
    color: $grey-2;
    font-size: $fz-sm;
    font-weight: $fw--reg;
  }
}
</style>
