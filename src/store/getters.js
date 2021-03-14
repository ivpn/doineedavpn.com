const SORTING_ORDER = ['yes', 'maybe', 'no'];

export const getters = {
    selectedIssues: state => state.result.selectedIssues,
    hasSelectedIssues: state => state.result.selectedIssues.length > 0,
    activeStep: state => state.steps.find(step => step.isActive),
    recommendation: state => state.result.recommendation,
    outcomes: state => state.result.selectedIssues.map(issue => issue.outcome),
    groupedExplanations: (state, getters) => {
        const selectedIssues = getters.selectedIssues;
        const explanations = state.explanations;
        const groupedIssues = {};
        const uniqExplanations = Array.from(new Set(selectedIssues.map(issue => issue.explanation)));
        
        uniqExplanations.forEach(explanation => groupedIssues[explanation] = { issues: [], description: '' });
        selectedIssues.forEach(issue => {
            Object.keys(groupedIssues).forEach(group => {
                if (group === issue.explanation) {
                    const explanation = explanations.find(item => item.id === group);

                    groupedIssues[group].issues.push(issue);
                    groupedIssues[group].outcomeType = issue.outcome;
                    groupedIssues[group].description = explanation.description;
                }
            });
        });
    
        return Object.values(groupedIssues).sort((a, b) => {
            return SORTING_ORDER.indexOf(a.outcomeType) - SORTING_ORDER.indexOf(b.outcomeType);
        });
    }
};
