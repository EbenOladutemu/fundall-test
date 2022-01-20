<template>
  <div>
    <Layout class="signup-layout">
      <template v-slot:left>
        <Welcome>
          <template>
            <img src="./../assets/images/login.svg" alt="Signup">
            <h1>
              <span class="text-green">Welcome back!</span> <br>We miss you.
            </h1>
          </template>
        </Welcome>
      </template>
      <template v-slot:right>
        <div class="signup">
          <form @submit.prevent="submitLoginForm">
            <div class="d-flex flex-column-rev">
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                required
                v-model="formData.email"
              />
              <label for="email">Email Address</label>
            </div>
            <div class="d-flex flex-column-rev">
              <input class="checkbox" type="checkbox" @input="togglePassword">
              <input
                :type="password.type"
                id="pass"
                placeholder="Enter Password"
                required
                v-model="formData.password"
              />
              <label for="pass">Password</label>
            </div>
            <div class="text-center text-red" v-if="error">
              {{ error }}
            </div>
            <div class="btn-container">
              <Button :disabled="disabled">
                {{ loading ? 'LOGGING IN...' : 'LOG IN' }}
              </Button>
            </div>
          </form>
          <p class="text-center">
            Don't have an account?
            <router-link to="signup">Register here</router-link>
          </p>
          <p class="text-center terms">
            By clicking on Login, you agree to our <br> 
            <span class="text-green">
              Terms & Conditions and Privacy Policy
            </span>
          </p>
        </div>
      </template>
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Layout from '@/components/Layout.vue';
  import Welcome from '@/components/Welcome.vue';
  import Button from '@/components/Button.vue';
  import './../styles/signup.scss';
  import { mapActions } from 'vuex';

  export default Vue.extend({
    name: 'Home',
    components: {
      Layout,
      Welcome,
      Button,
    },
    data() {
      return {
        disabled: false,
        loading: false,
        error: '',
        password: {
          type: 'password',
        },
        formData: {
          email: '',
          password: '',
        },
      };
    },
    methods: {
      ...mapActions(['login']),
      async submitLoginForm() {
        this.disabled = true;
        this.loading = true;
        this.error = '';
        try {
          await this.login(this.formData);
        } catch (error: any) {
          console.log(error.response);
          this.error = error.response.data.error.message;
        } finally {
          this.disabled = false;
          this.loading = false;
        }
      },
      togglePassword() {
        if (this.password.type === 'password') {
          this.password.type = 'text';
        } else {
          this.password.type = 'password';
        }
      }
    },
    mounted() {
      document.title = 'Login - Fundall';
    }
  });
</script>

<style lang="scss">
</style>
