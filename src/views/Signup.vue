<template>
  <div>
    <Layout class="signup-layout">
      <template v-slot:left>
        <Welcome>
          <template>
            <img src="./../assets/images/signup.svg" alt="Welcome">
            <h1>
              <span class="text-green">Welcome!</span> Let’s get to know you.
            </h1>
            <p>
              Your first step toward a better financial lifestyle starts here.
            </p>
          </template>
        </Welcome>
      </template>
      <template v-slot:right>
        <div class="signup">
          <form @submit.prevent="passwordMatchCheck">
            <div class="d-flex">
              <div class="d-flex flex-column-rev w-50">
                <input
                  type="text"
                  id="fname"
                  placeholder="Enter First Name"
                  required
                  v-model="formData.firstName"
                />
                <label for="fname">First Name</label>
              </div>
              <div class="d-flex flex-column-rev w-50">
                <input
                  type="text"
                  id="lname"
                  placeholder="Enter Last Name"
                  required
                v-model="formData.lastName"
                />
                <label for="lname">Last Name</label>
              </div>
            </div>
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
                @input="passwordLengthCheck"
              />
              <label for="pass">Password</label>
            </div>
            <div class="d-flex flex-column-rev">
              <input
                :type="password.type"
                id="cpass"
                placeholder="Confirm Password"
                required
                v-model="formData.confirmPassword"
              />
              <label for="cpass">Confirm Password</label>
            </div>
            <small>{{ password.error }}</small>
            <div class="text-center">
              <span class="text-red" v-if="error">
                {{ error }}
              </span>
              <span v-if="signUpData.success">
                {{ signUpData.success.message }}. Please <router-link to="/login">LOGIN</router-link>
              </span>
            </div>
            <div class="btn-container">
              <Button :disabled="disabled">
                 {{ loading ? 'SIGNING UP...' : 'SIGN UP' }}
              </Button>
            </div>
          </form>
          <p class="text-center">
            Already have an account?
            <router-link to="login">Login here</router-link>
          </p>
          <p class="text-center terms">
            By clicking on Signup, you agree to our <br> 
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
  import { mapActions, mapState } from 'vuex';

  export default Vue.extend({
    name: 'Home',
    components: {
      Layout,
      Welcome,
      Button,
    },
    data() {
      return {
        disabled: true,
        loading: false,
        error: '',
        success: '',
        password: {
          error: '',
          type: 'password',
          pattern: '((?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\\W]))',
        },
        formData: {
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
      };
    },
    computed: {
      ...mapState(['signUpData'])
    },
    methods: {
      ...mapActions(['signUp', 'resetSignUp']),
      async submitSignUpForm() {
        this.password.error = '';
        console.log(this.formData);
        this.disabled = true;
        this.loading = true;
        this.error = '';
        try {
          await this.signUp(this.formData);
          this.success
        } catch (error: any) {
          console.log(error)
          this.error = error.response.data.error.message;
        } finally {
          this.disabled = false;
          this.loading = false;
        }
      },
      passwordMatchCheck() {
        if (this.formData.password !== this.formData.confirmPassword) {
          this.password.error = 'Passwords do not match';
        } else if (!this.formData.password.match(this.password.pattern) ||
          !this.formData.confirmPassword.match(this.password.pattern)) {
          this.password.error = 'Passwords must contain an uppercase letter, a number and a special character'
        } else {
          this.submitSignUpForm();
        }
      },
      passwordLengthCheck() {
        if (this.formData.password.length <= 8) {
          this.password.error = 'Password must be 8 or more characters'
          this.disabled = true;
        } else {
          this.password.error = '';
          this.disabled = false;
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
      document.title = 'Signup - Fundall';
    },
    beforeDestroy() {
      this.resetSignUp();
    }
  });
</script>

<style lang="scss" scoped>
</style>
