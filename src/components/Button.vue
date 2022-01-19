<template>
  <button type="submit">
    <slot></slot>
  </button>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
button {
  padding: 1rem;
  width: 100%;
  background: $green;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 4px 10px rgba(118, 212, 45, 30%);
  letter-spacing: $spacing;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
}
</style>