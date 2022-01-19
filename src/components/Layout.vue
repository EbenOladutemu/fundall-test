<template>
  <div>
    <div class="d-flex layout justify-between align-center">
      <div class="text-left">
        <router-link to="/">
          <img src="./../assets/images/fundall.svg" alt="Fundall logo">
        </router-link>
        <slot name="left"></slot>
      </div>
    <slot name="right"></slot>
    </div>
    <slot name="center"></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media screen and (min-width: 991px) {
  .layout {
    padding: 0 4rem;
  }
}
</style>