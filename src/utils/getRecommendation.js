import { OutcomeTypes } from '@/shared';

const recommendations = {
    useTor: 'tor-plus-reco',
    rollOwn: 'own-plus-reco',
    basic: 'basic',
    dontUse: 'dont-use'
};

export function getRecommendation(issues) {
    if (!issues.length) return;

    let outcomes = new Set();
    let outcomeIds = new Set();

    issues.forEach(i => {
        if ([2, 3, 8, 9, 11, 12].includes(i.id)) {
            return outcomeIds.add(i.id);
        }

        outcomes.add(i.outcome);
    });

    outcomes = Array.from(outcomes);
    outcomeIds = Array.from(outcomeIds);

    if (outcomeIds.some(i => [2, 3, 8].includes(i))) {
        return recommendations.useTor;
    }

    if (outcomeIds.some(i => [9, 11, 12].includes(i)) && !outcomes.length) {
        return recommendations.rollOwn;
    }

    if (outcomeIds.some(i => [9, 11, 12].includes(i)) && outcomes[0] === OutcomeTypes.No) {
        return recommendations.rollOwn;
    }

    if (outcomes.includes(OutcomeTypes.Yes) || outcomes.includes(OutcomeTypes.Maybe)) {
        return recommendations.basic;
    }

    return recommendations.dontUse;
}
