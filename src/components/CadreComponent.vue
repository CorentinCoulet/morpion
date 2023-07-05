<template>
  <table class="grid-container">
    <tr v-for="(row, rowIndex) in props.matrix" :key="rowIndex">
      <CaseComponent v-for="(cell, columnIndex) in row" :key="columnIndex" :value="cell" @click="choose(rowIndex, columnIndex)"/>
    </tr>
  </table>  
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import CaseComponent from './CaseComponent.vue';

 const props = defineProps({
  matrix: Array
});

const emits = defineEmits(["nextPlayer"])

const choose = (x, y) => {
  emits("choose", x, y)
  emits("nextPlayer")
}
</script>

<style scoped>
.grid-container {
  border-collapse: collapse;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.5);
  margin: 0 auto;

}  
</style>
