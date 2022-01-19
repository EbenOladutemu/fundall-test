<template>
  <div>
    <Layout class="signup-layout">
      <template v-slot:left>
        <Welcome>
          <template>
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
          <form @submit.prevent="signUp">
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
                @input="upperCaseCheck"
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
            <div class="btn-container">
              <Button :disabled="disabled"> SIGN UP </Button>
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
    methods: {
      signUp() {
        this.password.error = '';
        if (this.formData.password !== this.formData.confirmPassword) {
          this.password.error = 'Passwords do not match';
        } else if (!this.formData.password.match(this.password.pattern) ||
          !this.formData.confirmPassword.match(this.password.pattern)) {
          this.password.error = 'Passwords must contain an uppercase letter, a number and a special character'
        }
      },
      upperCaseCheck() {
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
  });
</script>

<style lang="scss">
  a {
    color: $green;
    text-decoration: none;
  }

  input {
    outline: none;
    border: 1px solid #cad0c9;
    padding: 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    margin-top: 0.25rem;
    color: $grey-light;
    &:focus {
      border-color: $green;
      + label {
        color: $green;
      }
    }
  }

  form {
    margin: auto;
    width: 80%;
    small {
      color: red;
      padding-left: 1rem;
    }
  }

  ::placeholder {
    color: $grey-light;
    font-style: italic;
    letter-spacing: $spacing;
  }

  .checkbox {
    position: relative;
    right: -91%;
    top: -2rem;
  }

  .signup-layout .layout {
    flex-direction: column;
    div.text-left {
      flex-grow: 1;
    }
  }

  .flex-column-rev {
    padding: 1rem;
  }

  .signup {
    background-color: $white;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.082937);
    border-radius: 6px;
    padding: 1rem;
    margin: 2rem 0;
    flex-grow: 1;
    text-align: left;
    p {
      margin-top: 3rem;
    }
  }

  .btn-container {
    text-align: center;
    padding: 1rem;
  }

  @media screen and (min-width: 991px) {
    .checkbox {
      right: -95%;
    }
    .signup-layout .layout {
      flex-direction: row;
      align-items: flex-start;
    }

    .signup {
      padding: 3rem;
      margin: 0;
    }
  }
</style>
