<template>
  <div id="app">
    <div class="element">
      <CadreComponent />
    </div>   
    <div class="element">
      <TourJoueur />
    </div>
    <CaseComponent />
  </div>
</template>

<script>
import CadreComponent from './components/CadreComponent.vue'
import CaseComponent from './components/CaseComponent.vue';
import TourJoueur from './components/TourJoueur.vue';
import { provide, ref } from 'vue';

export default {
  components: {
    CadreComponent,
    CaseComponent,
    TourJoueur,
  },

  setup() {
    const eventBus = ref(null);
    provide('eventBus', eventBus);
    
    return {
      eventBus
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
