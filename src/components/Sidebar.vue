<script>
import { mapState, mapActions } from "vuex";
import SidebarUser from "./SidebarUser.vue";

export default {
  name: "Sidebar",
  components: { SidebarUser },
  data() {
    return {
      placeholder: "Введите Id или имя ",
      inputValue: null,
      inputTimer: null,
      isDebouncing: null,
    };
  },
  methods: {
    inputHandler() {
      this.isDebouncing = true;
      clearTimeout(this.inputTimer);
      this.inputTimer = setTimeout(() => {
        this.inputValue ? this.getUsers(this.url) : this.clearState();
        this.isDebouncing = false;
      }, 1000);
    },
    ...mapActions(["getUsers", "clearState", "setSelectedUser"]),
  },
  computed: {
    url() {
      return `http://localhost:3001/users?name_like=${this.inputValue}`;
    },
    stubText() {
      return this.textError ? this.textError : this.users.length ? null : "начните поиск";
    },
    ...mapState(["users", "textError", "isFetchingUsers"]),
  },
  watch: {
    inputValue() {
      this.inputHandler();
    },
  },
};
</script>

<template>
  <section class="sidebar">
    <section>
      <h2 class="sidebar__title">Поиск сотрудников</h2>
      <div class="sidebar__input-wrapper">
        <Vinput
          :placeholder="placeholder"
          :type="'text'"
          :maxLength="22"
          v-model.trim="inputValue"
        />
        <div class="sidebar__preloader-wrapper">
          <transition name="fade">
            <Preloader v-if="isDebouncing || isFetchingUsers" />
          </transition>
        </div>
      </div>
    </section>
    <section>
      <h2 class="sidebar__title">Результаты</h2>
      <p class="sidebar__stub">{{ stubText }}</p>
      <ul class="sidebar__user-list">
        <transition-group name="user-list">
          <SidebarUser
            v-for="user in this.users"
            :userName="user.name"
            :userEmail="user.email"
            :id="user.id"
            :key="user.id"
            @clickCard="setSelectedUser"
          />
        </transition-group>
      </ul>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/style.scss";
.sidebar {
  padding: 23px 30px 0 30px;
  border-right: 1px solid $border;
  section + section {
    margin-top: 22px;
  }
  &__title {
    font-size: $fz;
    font-weight: $fw--smbold;
    margin-bottom: 22px;
  }
  &__stub {
    color: $grey-2;
    font-size: $fz-sm;
    font-family: "Montserrat";
  }
  &__input-wrapper {
    position: relative;
  }
  &__preloader-wrapper {
    position: absolute;
    right: 12px;
    top: 10px;
    width: 30px;
    height: 30px;
  }
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.user-list-move {
  transition: transform 1s, -webkit-transform 1s;
}
</style>
