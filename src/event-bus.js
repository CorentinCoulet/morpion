import { provide } from 'vue';

const EventBus = {};

provide('eventBus', EventBus);

export default EventBus;