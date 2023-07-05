<template>
  <td class="grid-cell">
    {{ value }}
    <!-- <div v-if="value">
      <img :src="value == 'o' ? '../assets/circle.svg' : '../assets/cross.svg'">
    </div> -->
  </td>
</template>

<script>

export default {
  props: {
    value: null || String,
  },
  setup() {

  }
};
</script>

<style scoped>
  .grid-cell {
    border: 1px solid #ccc;
    width: 50px;
    height: 50px;
  }
</style>