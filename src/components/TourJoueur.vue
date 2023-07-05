<template>
    <template class="joueurs">
        <p v-if="gagnant">Félicitation au {{ player1Play }} pour cette victoire</p>
        <p v-else>{{ player1Play ? "Joueur 1": "Joueur 2" }}</p>
    </template>
    <button @click="boutonReset"><p>Rejouer</p></button>
</template>

<script>
import { ref } from 'vue';

    export default{
    props:{
        player1Play: Boolean,
    },  

   

    setup() {
        const players = ['Joueur 1', 'Joueur 2'];
        let activePlayer = 0;

        const currentPlayer = ref(players[activePlayer]);

        return {
            currentPlayer
        };
    },

}
</script>

<style scoped>
    .joueurs, button {
        display: flex;
        flex-direction: row;
        border: 1px solid #D3D3D3;
        border-radius: 10px;
        margin: 0 auto;
        max-width: 15%;
        background-color: #D3D3D3;
        box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.5);
    }
    .joueurs {
        justify-content: center;
        margin-bottom: 15px;
        text-align: center;  
        color: #000;
    }

    button:active {
        transform: scale(0.95);
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    }
</style>