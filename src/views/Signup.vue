<template>
  <div>
    <Layout class="signup-layout">
      <template v-slot:left>
        <Welcome>
          <template>
            <h1>
              <span class="text-green">Welcome!</span> Let’s get to know you.
            </h1>
            <p>Your first step toward a better financial lifestyle starts here.</p>
          </template>
        </Welcome>
      </template>
      <template v-slot:right>
        <div class="signup">
          <form action="">
            <div class="d-flex">
              <div class="d-flex flex-column-rev w-50">
                <input type="text" id="fname" placeholder="Enter First Name" required>
                <label for="fname">First Name</label>
              </div>
              <div class="d-flex flex-column-rev w-50">
                <input type="text" id="lname" placeholder="Enter Last Name" required>
                <label for="lname">Last Name</label>
              </div>
            </div>
            <div class="d-flex flex-column-rev">
              <input type="email" id="email" placeholder="Enter Email" required>
              <label for="email">Email Address</label>
            </div>
            <div class="d-flex flex-column-rev">
              <input type="password" id="pass" placeholder="Enter Password" required>
              <label for="pass">Password</label>
            </div>
            <div class="d-flex flex-column-rev">
              <input type="password" id="cpass" placeholder="Confirm Password" required>
              <label for="cpass">Confirm Password</label>
            </div>
            <div class="btn-container">
              <Button>

              </Button>   
            </div>
          </form>
          <p class="text-center">
            Already have an account? <router-link to="login">Login here</router-link>
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
    Button
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
  border: 1px solid #CAD0C9;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  margin-top: 0.25rem;
  color: $grey-light;
  &:focus {
    border-color: $green;
    + label{
      color: $green;
    }
  }
}

form {
  margin: auto;
  width: 80%;
}

::placeholder {
  color: $grey-light;
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