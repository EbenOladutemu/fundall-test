<template>
  <div class="welcome">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
    document.title = 'Welcome - Fundall';
  }
}
</script>

<style lang="scss" scoped>
.welcome {
  margin-top: 5rem;
  h1 {
    font-size: 2.5rem;
  }

  h2 {
    font-weight: 100;
    font-size: 2rem;
  }

  p {
    font-size: 1.25rem;
    margin-top: 3rem;
    font-weight: 600;
  }
}
</style>