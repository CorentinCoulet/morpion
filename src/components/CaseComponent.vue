<template>
  <div @click="handleClick" class="grid-cell">
    {{ cell }}
  </div>
</template>

<script>
import { inject, ref } from 'vue';

export default {
  props: {
    rowIndex: Number,
    columnIndex: Number
  },

  setup(props) {
    const updateCell = inject('updateCell');

    if (!updateCell) {
      throw new Error('updateCell non injecté. Assurez-vous de le fournir dans le composant parent.');
    }

    const cell = ref(null);

    const handleClick = () => {
      if (cell.value === null) {
        updateCell({
          rowIndex: props.rowIndex,
          columnIndex: props.columnIndex,
          value: 'X'
        });
      }
    };

    return {
      cell,
      handleClick
    };
  }
};
</script>

<style scoped>
.grid-cell {
  border: 1px solid #ccc;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
</style>
