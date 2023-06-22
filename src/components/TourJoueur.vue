<template>
    <div>
        <p>{{ currentPlayer }}</p>
    </div>
</template>

<script>
import {inject, ref} from 'vue';
export default{
    setup() {
        const eventBus = inject('eventBus');

        if (!eventBus) {
            throw new Error('eventBus non injecté. Assurez-vous de le fournir dans le composant parent.');
        }

        const players = ['Joueur 1', 'Joueur 2'];
        let activePlayer = 0;

        function nextPlayer() {
            activePlayer = (activePlayer + 1) % players.length;
        }

        const currentPlayer = ref(players[activePlayer]);

        eventBus.$on('cellClicked', () => {
            nextPlayer();
            currentPlayer.value = players[activePlayer];
        });

        return {
            currentPlayer
        };
    },
}
</script>

<style scoped>
    div {
        border: 1px solid #D3D3D3;
        border-radius: 10px;
        margin: 0 auto;
        max-width: 15%;
        background-color: #D3D3D3;
        box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.5);
    }
    p {
        text-align: center;
        color: #000;
    }
</style>