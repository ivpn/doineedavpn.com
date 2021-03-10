<template>
    <div class="section">
        <p class="section__title">{{ title }}</p>
        <div class="section__issues">
            <Tag 
                v-for="issue of issues" 
                :key="issue.title" 
                :title="issue.alt" 
                :value="issue"
                :is-selected="isSelected(issue)"
                @select="onSelect"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { ACTION_TYPES } from '@/store';
import Tag from '@/components/Tag';

export default {
    name: 'IssueSection',

    components: { Tag },

    props: {
        title: {
            type: String,
            required: true
        },

        issues: {
            type: Array,
            required: true
        }
    },

    computed: mapGetters(['selectedIssues']),

    methods: {
        onSelect(issue) {
            this.$store.dispatch(ACTION_TYPES.SELECT_ISSUE, issue);
        },

        isSelected(issue) {
            return this.selectedIssues.includes(issue);
        }
    }
}
</script>

<style lang="scss" scoped>
.section {
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.section__title {
    color: $white-color;
    opacity: 0.5;
    text-align: center;
    font-size: 13px;
    margin: 18px 0;
    text-transform: uppercase;

    @media screen and (max-width: $tablet-portrait) {
        font-size: 10px;
        text-align: left;
    }
}

.section__issues {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: $tablet-portrait) {
        align-items: flex-start;
        flex-direction: column;
    }
}
</style>
