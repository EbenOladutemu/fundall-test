<template>
  <div class="home">
    <Layout>
      <div>
        <button>LOGIN</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from '@/components/Layout.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'Home',
  components: {
    Layout,
  },
});
</script>

<style lang="scss" scoped>

</style>
