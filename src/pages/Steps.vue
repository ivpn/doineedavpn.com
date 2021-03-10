<template>
    <div class="steps-container">
        <Sidebar />
        <div class="steps">
            <QuestionStep v-if="isActiveStep($options.Steps.Question)" />
            <SelectionStep v-if="isActiveStep($options.Steps.Selection)" />
            <AnswerStep v-if="isActiveStep($options.Steps.Answer)" />
            <SharePopup :is-visible="isSharePopupVisible" />
        </div>
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import { Steps } from '@/shared';
import { Sidebar, AnswerStep, SelectionStep, QuestionStep, SharePopup } from '@/components';

export default {
    name: 'Steps',

    Steps,

    components: {
        QuestionStep,
        SelectionStep,
        AnswerStep,
        SharePopup,
        Sidebar
    },

    watch: {
        activeStep() {
            window.scrollTo(0, 0);
        }
    },

    computed: {
        ...mapState(['steps', 'isSharePopupVisible']),
        ...mapGetters(['activeStep'])
    },

    methods: {
        isActiveStep(name) {
            return this.activeStep.name === name;
        }
    }
}
</script>

<style lang="scss" scoped>
.steps-container {
  height: 100%;

  @media screen and (max-width: $tablet-portrait) {
    padding: 0 30px;
  }
}

.steps {
    height: 100%;
    margin-left: 590px;

    @media screen and (max-width: $laptop) {
        margin-left: 500px;
    }

    @media screen and (max-width: $tablet-landscape) {
        margin-left: 420px;
    }

    @media screen and (max-width: $tablet) {
        margin-left: 0;
    }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>