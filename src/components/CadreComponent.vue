<template>
    <table class="grid-container">
      <tr v-for="(row, rowIndex) in matrix" :key="rowIndex">
        <td v-for="(cell, columnIndex) in row" :key="columnIndex" class="grid-cell">{{ cell }}</td>
      </tr>
    </table>  
</template>
  
<script>
import { provide, inject, ref, onMounted } from 'vue';

export default {
  setup() {
    const eventBus = inject('eventBus', ref(null));

    if (!eventBus.value) {
      throw new Error('eventBus non injecté. Assurez-vous de le fournir dans le composant parent.');
    }

    const matrix = ref([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);

    const updateCell = (data) => {
      eventBus.value.$emit('updateCell', data);
    };

    onMounted(() => {
      eventBus.value.$on('updateCell', ({ rowIndex, columnIndex, value }) => {
        matrix.value[rowIndex][columnIndex] = value;
      });
    });

    provide('updateCell', updateCell);

    return {
      matrix
    };
  }
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .grid-container {
    border-collapse: collapse;
    box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.5);
    margin: 0 auto;
  }
  .grid-cell {
    border: 1px solid #ccc;
    width: 50px;
    height: 50px;
  }
  
</style>
  