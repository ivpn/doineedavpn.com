import { MUTATIONS_TYPES } from './mutation.types';

export const mutations = {
    [MUTATIONS_TYPES.SET_STEP](state, name) {
        state.steps = state.steps.map(step => {
            step.isActive = step.name === name;

            return step;
        });
    },

    [MUTATIONS_TYPES.SET_SHARE_POPUP_STATE](state, isOpened) {
        state.isSharePopupVisible = isOpened;
    },

    [MUTATIONS_TYPES.SET_TOPLINE](state, topline) {
        state.result.topline = topline;
    },

    [MUTATIONS_TYPES.SET_RECOMMENDATION](state, recommendation) {
        state.result.recommendation = recommendation;
    },

    [MUTATIONS_TYPES.SET_SELECTED_ISSUES](state, issues) {
        state.result.selectedIssues = issues;
    },

    [MUTATIONS_TYPES.SET_SELECTED_ISSUE](state, issue) {
        const isSelected = state.result.selectedIssues.includes(issue);
        
        if (!isSelected) {
            state.result.selectedIssues.push(issue);
            return;
        }
        
        state.result.selectedIssues = state.result.selectedIssues.filter(item => item.title !== issue.title);
    }
};
