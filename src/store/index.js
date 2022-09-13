import { createStore } from 'vuex'
import { state } from './state';
import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';

const store = createStore({
    state,
    actions,
    getters,
    mutations
})

export { ACTION_TYPES } from './action.types';
export { MUTATIONS_TYPES } from './mutation.types';

export default store;
