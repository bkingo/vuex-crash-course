import VueX from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

// Load Vuex
Vue.use(VueX);

// Create Store
export default new VueX.Store({
    modules: {
        todos
    }
});