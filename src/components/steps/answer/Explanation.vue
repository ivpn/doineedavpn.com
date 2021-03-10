<template>
    <div class="explanation">
        <Tag 
            v-for="issue of issues" 
            :key="issue.title" 
            :title="issue.title" 
            :outcome="issue.outcome" 
            class="explanation__tag" 
        />
        <p class="text-sm" v-html="text"></p>
    </div>
</template>

<script>
import Tag from '@/components/Tag';

export default {
    name: 'Explanation',

    components: { Tag },

    props: {
        text: {
            type: String,
            required: true
        },

        issues: {
            type: Array,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.explanation {
    &:not(:last-child) {
        margin-bottom: 40px;
    }
}

.explanation__tag {
    margin: 0 0 10px;
    cursor: default;

    &:not(:last-child) {
        margin-right: 8px;
    }

    &:hover {
        background-color: $tag-background;
    }
}
</style>
