<template>
  <div class="summary">
    <div v-for="n in 3" :key="n">
      <div class="d-flex justify-between header">
        <span>&nbsp;</span>
        <span>Date</span>
        <span>Amount</span>
      </div>
      <div class="d-flex justify-between items">
        <span class="text-green">•</span>
        <span>30, Nov 2022</span>
        <span class="text-green">₦30,000</span>
      </div>
    </div>
    <p class="controls text-center">
      <span>1</span>
      of 5
      <span class="prev-next">&#8249;</span>
      <span class="prev-next">&#8250;</span>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
})
</script>

<style lang="scss" scoped>
.summary {
  width: 50%;
  box-shadow: 0px 0px 6px rgba(77, 232, 151, 0.19);
  border-radius: 10px;
  padding: 2rem;
  margin-top: 2rem;
}
.header {
  margin: 2rem 0;
  margin-top: 1rem;
}

.items {
  padding-bottom: 2rem;
  border-bottom: 0.5px solid #E3ECE5;
}

.controls {
  span:first-child {
    border: 1px solid #A4B0A3;
    padding: 0px 6px;
    border-radius: 4px;
  }
  .prev-next {
    padding: 0px 8px;
    background: $green;
    border-radius: 50%;
    color: #fff;
    margin-right: 0.5rem;
  }
}

hr {
  margin: 2rem 0;
  background-color: red;
}
</style>