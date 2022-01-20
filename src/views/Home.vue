<template>
  <div>
    <Layout>
      <template v-slot:right>
        <div>
          <router-link to="login">LOG IN</router-link>
          <router-link to="signup" class="signup">SIGN UP</router-link>
        </div>
      </template>
      <template v-slot:center>
        <Welcome>
          <img src="./../assets/images/signup.svg" alt="Signup">
          <h1>Fundall Expense Tracker</h1>
          <h2>Mini Project Frontend</h2>
          <p>by Ebenezer Oladutemu</p>
        </Welcome>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Layout from '@/components/Layout.vue';
import Welcome from '@/components/Welcome.vue';

export default Vue.extend({
  name: 'Home',
  components: {
    Layout,
    Welcome
  },
});
</script>

<style lang="scss" scoped>
a {
  color: #000000;
  text-decoration: none;
  margin: 1rem;
  font-weight: 600;
  &.signup {
    background-color: #4ce895;
    padding: 0.5rem;
    border-radius: 10px;
    font-weight: bold;
    &:hover {
      background-color: #55f7a0;
    }
  }
}
</style>
