<template>
  <div class="d-flex">
    <div class="d-flex flex-column-rev w-50">
      <input
        type="text"
        required
        v-model="formData.firstName"
      />
    </div>
    <div class="d-flex flex-column-rev w-50">
      <input
        type="number"
        required
        v-model="formData.lastName"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
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
})
</script>

<style>

</style>