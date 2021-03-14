import { Steps } from '@/shared';
import { ACTION_TYPES } from './action.types';
import { MUTATIONS_TYPES } from './mutation.types';
import { getTopline, getRecommendation } from '../utils';

export const actions = {
    [ACTION_TYPES.ANSWER_QUESTION]({ state, commit }, result) {
        const payload = result.proceed.payload;
    
        commit(MUTATIONS_TYPES.SET_STEP, result.proceed.step);

        if (!payload) return;

        const recommendation = state.recommendations.find(item => item.id === payload.recommendation.id);

        commit(MUTATIONS_TYPES.SET_TOPLINE, payload.topline);
        commit(MUTATIONS_TYPES.SET_RECOMMENDATION, recommendation);
    },

    [ACTION_TYPES.RESET_STEP]({ commit }) {
        commit(MUTATIONS_TYPES.SET_SELECTED_ISSUES, []);
        commit(MUTATIONS_TYPES.SET_STEP, Steps.Question);
    },

    [ACTION_TYPES.TOGGLE_SHARE_POPUP]({ commit }, isOpened) {
        commit(MUTATIONS_TYPES.SET_SHARE_POPUP_STATE, isOpened);
    },

    [ACTION_TYPES.ACTIVATE_STEP]({ commit }, value) {
        commit(MUTATIONS_TYPES.SET_STEP, value);
    },

    [ACTION_TYPES.SELECT_ISSUE]({ commit, state, getters }, issue) {
        commit(MUTATIONS_TYPES.SET_SELECTED_ISSUE, issue);
        commit(MUTATIONS_TYPES.SET_TOPLINE, getTopline(getters.outcomes));
        
        const recommendationId = getRecommendation(getters.selectedIssues);
        const recommendation = state.recommendations.find(item => item.id === recommendationId);

        commit(MUTATIONS_TYPES.SET_RECOMMENDATION, recommendation);
    }
};
