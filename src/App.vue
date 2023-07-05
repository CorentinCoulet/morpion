<template>
  <div id="app">
    <div class="element">
      <CadreComponent @nextPlayer="nextPlayer" @choose="choose" :player1Play="player1Play" :matrix="matrix"/>
    </div>   
    <div class="element">
      <TourJoueur :player1Play="player1Play" @boutonReset="boutonReset"/>
    </div>
  </div>
</template>

<script>
import CadreComponent from './components/CadreComponent.vue'
import TourJoueur from './components/TourJoueur.vue';
import { ref, reactive } from 'vue';

export default {
  components: {
    CadreComponent,
    TourJoueur,
  },

  setup() {

    const matrix = reactive([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
    
    const player1Play = ref(true);

    const choose = (x, y) => {
      if(matrix[x][y] === null){
        matrix[x][y] = player1Play.value ? "x": "o";
        player1Play.value = !player1Play.value;
      }
    }

    const boutonReset = () => {
      matrix.splice(0, matrix.length)
    }

    const combinaisons = () => {
      const combinaisonsGagnantes = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6],
      ];

      for(const combinaison of combinaisonsGagnantes){
        const[a, b, c] = combinaison;
        if(
          matrix[a] === player1Play.value &&
          matrix[b] === player1Play.value &&
          matrix[c] === player1Play.value
        ){return true;}
        return false;
      }
    }

    const gagnant = () => {
      for(let row=0; row < matrix.length; row++){
        for(let col=0; col < matrix[row].length; col++){
          if(matrix[row][col] === null){
            return false;
          }
          else {
            if(combinaisons() === true){
              return true;
            }
          }
        }
      }
    }

    return {
      matrix,
      player1Play,
      choose,
      boutonReset,
      gagnant
    };
  }
}
</script>

<style>
#app {
    display: flex;
    flex-direction: column;
}
.element {
  margin-bottom: 20px;
}
</style>