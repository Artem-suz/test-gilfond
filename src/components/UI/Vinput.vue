<script>
export default {
  name: "Vinput",
  props: {
    modelValue: [String, Number],
    placeholder: {
      type: String,
      default: "Введите текст",
    },
    type: {
      type: String,
      default: "text",
    },
    maxLength: {
      type: Number,
      default: "",
    },
  },
  methods: {
    updateInput(e) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>
<template>
  <input
    :value="modelValue"
    :placeholder="placeholder"
    :maxlength="maxLength"
    @input="updateInput"
    type="type"
    class="input"
    tabindex="0"
  />
</template>

<style scoped lang="scss">
@import "../../assets/style.scss";
.input {
  padding: 16px 24px;
  border-radius: 8px;
  border: 1px solid $grey;
  outline: none;
  color: $grey-2;
  &:focus {
    border: 1px solid $black;
  }
  &:hover {
    border: 1px solid $black;
  }
  &::placeholder {
    color: $grey-2;
    font-size: $fz-sm;
    font-family: "Montserrat";
  }
}
</style>
