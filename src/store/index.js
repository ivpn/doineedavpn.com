import Vue from 'vue';
import Vuex from 'vuex';
import { state } from './state';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations
});

export { ACTION_TYPES } from './action.types';
export { MUTATIONS_TYPES } from './mutation.types';
