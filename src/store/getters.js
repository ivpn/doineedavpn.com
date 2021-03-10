export const getters = {
    selectedIssues: state => state.result.selectedIssues,
    hasSelectedIssues: state => state.result.selectedIssues.length > 0,
    activeStep: state => state.steps.find(step => step.isActive),
    recommendation: state => state.result.recommendation,
    outcomes: state => state.result.selectedIssues.map(issue => issue.outcome)
};
