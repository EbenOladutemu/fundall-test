<template>
  <div>
    <Layout class="signup-layout">
      <template v-slot:left>
        <Welcome>
          <template>
            <div class="d-flex">
              <img class="avatar" :src="avatar" alt="Avatar">
              <div class="profile">
                <h3>{{ firstname }} {{ lastname }}</h3>
                <h4>{{ email }}</h4>
              </div>
            </div>
            <div class="target">
              Target Monthly Expenses
              <h3>N536,000</h3>
              <div class="progress-bar">
                <div></div>
              </div>
            </div>
            <Summary>

            </Summary>
          </template>
        </Welcome>
      </template>
      <template v-slot:right>
        <div class="signup">
          <img class="skate-guy" src="./../assets/images/dashboard.svg" alt="Signup">
          <div class="welcome-back">
            <h2>
              <span class="text-green">Welcome back, </span>{{ firstname }}.
            </h2>
            <span>
              Now, let’s get your expenses for this month
            </span>
          </div>
          <form @submit.prevent="">
            <div class="d-flex flex-column-rev">
              <input
                type="number"
                required
              />
              <span>Target Monthly Expenses</span>
            </div>
            <div class="d-flex flex-column-rev">
              <input
                type="date"
                required
              />
              <span>Date</span>
            </div>
            <span>Today's Expenses</span>
            <Expenses></Expenses>
            <Expenses></Expenses>
            <Expenses></Expenses>
            <Expenses></Expenses>
            <div class="btn-container">
              <Button>
                 {{ loading ? 'Saving...' : 'SAVE TODAY\'S EXPENSES' }}
              </Button>
            </div>
          </form>
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
  import Expenses from '@/components/Expenses.vue';
  import Summary from '@/components/Summary.vue';
  import './../styles/signup.scss';
  import { mapActions, mapState } from 'vuex';

  export default Vue.extend({
    name: 'Home',
    components: {
      Layout,
      Welcome,
      Button,
      Expenses,
      Summary
    },
    data() {
      return {
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
      ...mapState({
        email:(state: any) => state.login.success.user.email,
        firstname:(state: any) => state.login.success.user.firstname,
        lastname:(state: any) => state.login.success.user.lastname,
        avatar:(state: any) => state.login.success.user.avatar
      })
    },
    methods: {
      ...mapActions(['signUp', 'resetSignUp']),
      async submitSignUpForm() {
        this.password.error = '';
        console.log(this.formData);
        this.loading = true;
        this.error = '';
        try {
          await this.signUp(this.formData);
          this.success
        } catch (error: any) {
          console.log(error)
          this.error = error.response.data.error.message;
        } finally {
          this.loading = false;
        }
      },
    },
    mounted() {
      document.title = 'Dashboard - Fundall';
    }
  });
</script>

<style lang="scss" scoped>
h3 {
  font-size: 1.5rem;
  margin: 0;
}

button {
  width: fit-content;
  box-shadow: none;
  border-radius: 1rem;
  font-weight: 600;
}

.signup {
  background-color: #F2F3F7;
}

.welcome-back {
  box-shadow: $box-shadow;
  background: $white;
  border-radius: 5px;
  padding: 1.5rem;
  margin-left: 4rem;
  margin-bottom: 2rem;
  width: 86%;
  h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
}

.avatar {
  background: #C4C4C4;
  padding: 2rem;
  border-radius: 1.25rem;
}

.profile {
  margin-left: 1rem;
  h3 {
    margin-top: 1rem;
  }
  h4 {
    margin-top: 0.5rem;
  }
}

.skate-guy {
  float: right;
  bottom: 3rem;
  position: relative;
}

.target {
  margin-top: 2rem;
}

.progress-bar {
  width: 50%;
  height: 6px;
  background: #EFEFEF;
  border-radius: 5px;
  margin-top: 1rem;
  div {
    background: $green;
    height: 6px;
    width: 20%;
    border-radius: 1rem;
  }
}
</style>
