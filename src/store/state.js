import { sections } from '@/content/issues.json';
import { explanations } from '@/content/explanations.json';
import { recommendations } from '@/content/recommendations.json';
import { Steps } from '../shared';

export const state = {
    explanations,
    isSharePopupVisible: false,
    issueSections: sections,
    recommendations,
    steps: [
        { id: 1, name: Steps.Question, isActive: true },
        { id: 2, name: Steps.Selection, isActive: false },
        { id: 3, name: Steps.Answer, isActive: false }
    ],
    result: {
        topline: null,
        selectedIssues: [],
        recommendation: null,
        tips: null
    }
};
