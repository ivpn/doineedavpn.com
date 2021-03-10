<template>
    <div class="screen question-step" id="question">
        <h3 class="question__title title-sm" v-html="$options.question.title" />
        <div class="question__options">
            <button 
                class="button question__button"
                v-for="option of $options.question.options"
                :key="option.title"
                @click="onAnswer(option)"
            >
                {{ option.title }}
            </button>
        </div>
        <StepFooter :has-button="false" :is-static="true" />
    </div>
</template>

<script>
import { ACTION_TYPES } from '@/store';
import StepFooter from '../StepFooter';
import { question } from '@/content/key-question.json';

export default {
    name: 'FirstQuestion',

    components: { StepFooter },

    question,

    methods: {
        onAnswer(result) {
            this.$store.dispatch(ACTION_TYPES.ANSWER_QUESTION, result);
        }
    }
}
</script>

<style lang="scss" scoped>
.question-step {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: $mobile-landscape) and (orientation: landscape) {
        height: 100vw;
    }
}

.question__title {
    margin-bottom: 40px;

    @media screen and (max-width: $tablet-portrait) {
        width: 100%;
    }    

    @media screen and (max-width: $tablet-portrait) and (orientation: landscape) {
        padding-top: 65px;
    }

    @media screen and (max-width: $mobile-portrait) {
        padding-top: 50%;
    }
}

.question__options {
    display: flex;
    flex-direction: row;

    @media screen and (max-width: $mobile-portrait) {
        width: 100%;
        align-items: flex-start;
    }

    @media screen and (max-width: $mobile-portrait) {
        align-items: center;
    }
}

.question__options .button:not(:last-child) {
    margin-right: 8px;
}

.question__button {
    width: 142px;
}
</style>