<template>
    <div class="answer-step screen">
        <div class="answer-heading" v-if="result.topline">
            <h2 class="answer-heading__title">{{ result.topline.title }}</h2>
            <p class="answer-heading__subtitle" v-html="result.topline.subtitle"></p>
        </div>

        <div class="explanation-container" v-if="hasSelectedIssues">
            <p class="section-title">You selected</p>
            <Explanation 
                v-for="explanation of groupedExplanation" 
                :key="explanation.description" 
                :text="explanation.description" 
                :issues="explanation.issues"
            />
        </div>

        <div v-if="recommendation" class="recommendation-container">
            <p class="section-title">Which VPN service should you use?</p>
            <Recommendation :recommendation="recommendation" />
        </div>
        <StepFooter :is-static="false" :has-button="false" :is-static-mobile="true" />
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import StepFooter from '../../StepFooter';
import Recommendation from './Recommendation';
import Explanation from './Explanation';

const SORTING_ORDER = ['yes', 'maybe', 'no'];

export default {
    name: 'AnswerStep',

    components: { StepFooter, Recommendation, Explanation },

    computed: {
        ...mapState(['explanations', 'result']),
        ...mapGetters(['selectedIssues', 'hasSelectedIssues', 'recommendation']),

        groupedExplanation() {
            const groupedIssues = {};
            const explanations = Array.from(new Set(this.selectedIssues.map(issue => issue.explanation)));
            
            explanations.forEach(explanation => groupedIssues[explanation] = { issues: [], description: '' });
            this.selectedIssues.forEach(issue => {
                Object.keys(groupedIssues).forEach(group => {
                    if (group === issue.explanation) {
                        const explanation = this.explanations.find(item => item.id === group);

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
    }
}
</script>

<style lang="scss" scoped>
.answer-step {
    padding-top: 100px;
    width: auto;
    height: auto;
    max-width: 670px;
    padding-bottom: 80px;
    margin: 0 auto;

    @media screen and (max-width: $tablet-landscape) {
        max-width: 520px;
    }

    @media screen and (max-width: $tablet) {
        max-width: 100%;
        padding: 281px 30px 60px;
    }

    @media screen and (max-width: $tablet-portrait) {
        padding: 271px 0 60px;
    }

    @media screen and (max-width: $mobile-portrait) {
        padding: 271px 0 120px;
    }
}

.answer-heading__title {
    font-size: 40px;
    line-height: 52px;
    color: $white-color;
    font-weight: bold;
    margin-bottom: 10px;
}

.answer-heading__subtitle {
    font-size: 20px;
    line-height: 32px;
    color: $white-color;
}

.explanation-container,
.recommendation-container {
    margin-top: 48px;
}

.recommendation-container {
    margin-bottom: 48px;
}
</style>
