<script>
import { mapState } from "vuex";

export default {
  name: "DetailInfo",
  methods: {},
  computed: {
    ...mapState(["users", "selectedUserId"]),
    userData() {
      if (!this.users || !this.selectedUserId) return;
      return this.users.find((user) => user.id === this.selectedUserId);
    },
  },
};
</script>

<template>
  <section class="detail-info">
    <div v-if="userData" class="detail-info__img-wrapper">
      <img
        src="../assets/img/avatar-stub-detail.png"
        alt="img"
        type="image/png"
        draggable="false"
        loading="lazy"
        decoding="async"
      />
    </div>

    <div v-if="userData" class="detail-info__content">
      <h3 class="detail-info__name">{{ userData.name }}</h3>
      <div class="detail-info__email">
        <label> email: </label>
        <span>{{ userData.email }}</span>
      </div>
      <div class="detail-info__phone">
        <label> phone: </label>
        <span>{{ userData.phone }}</span>
      </div>
      <div class="detail-info__descroption">
        <label> О себе: </label>
        <p>{{ userData.company.catchPhrase }}</p>
      </div>
    </div>

    <p v-if="!userData" class="detail-info__stub">
      Выберите сотрудника, чтобы посмотреть его профиль
    </p>
  </section>
</template>

<style lang="scss" scoped>
@import "../assets/style.scss";
.detail-info {
  width: 100%;
  padding: 23px 30px 23px 30px;
  position: relative;
  display: flex;
  &__stub {
    display: flex;
    justify-content: center;
    align-self: center;
    color: $grey-2;
    font-size: $fz-sm;
    font-family: "Montserrat";
    width: 100%;
  }
  &__img-wrapper {
    font-size: 0px;
  }
  &__content {
    margin-left: 60px;
  }
  &__name {
    font-size: $fz;
    font-weight: $fw--smbold;
    line-height: 140%;
  }
  &__email,
  .detail-info__phone {
    font-size: $fz-sm;
    line-height: 140%;
    margin-top: 10px;
    label {
      font-weight: $fw--smbold;
    }
    span {
      font-weight: $fw--reg;
      color: $grey-2;
    }
  }
  &__descroption {
    margin-top: 20px;
    label {
      display: inline-block;
      margin-bottom: 20px;
      font-weight: $fw--smbold;
      line-height: 140%;
      font-size: $fz;
    }
    p {
      font-size: $fz-sm;
      line-height: $lh-normal;
    }
  }
}
</style>
