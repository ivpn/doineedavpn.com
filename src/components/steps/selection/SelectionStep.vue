<template>
    <div class="selection-step screen" id="selection">
        <h3 class="title-sm">Select all issues to solve and benefits you look for:</h3>
        <IssueSection 
            v-for="section of issueSections" 
            :key="section.title"
            :title="section.title"
            :issues="section.issues"
        />
        <StepFooter 
            has-button 
            is-static-mobile 
            :has-mobile-nav="false" 
            :is-disabled="!hasSelectedIssues" 
        />
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import StepFooter from '../../StepFooter';
import IssueSection from './IssueSection';

export default {
    name: 'SelectionStep',

    components: { IssueSection, StepFooter },

    computed: {
        ...mapState(['issueSections']),
        ...mapGetters(['hasSelectedIssues'])
    }
}
</script>

<style lang="scss" scoped>
.selection-step {
    height: auto;
    padding-top: 90px;
    padding-bottom: 173px;
    
    @media screen and (max-width: $tablet) {
        padding-top: 220px;
        padding-bottom: 151px;
    }

    @media screen and (max-width: $mobile-portrait) {
        padding-bottom: 115px;
    }
}
</style>
