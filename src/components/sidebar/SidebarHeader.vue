<template>
    <div class="sidebar-header">
        <div class="sidebar__step-indicator">
            {{ formattedStepValue }}
        </div>

        <button class="mobile-menu__button" :class="activeButtonClass" @click="onToggleMenu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

const STEPS = 3;

export default {
    name: 'SidebarHeader',

    props: {
        step: {
            type: Number,
            required: false,
            default: 1
        }
    },

    data: () => ({ isMenuOpened: false }),

    computed: {
        ...mapGetters(['activeStep']),

        formattedStepValue() {
            return `${this.activeStep.id}/${STEPS}`;
        },

        activeButtonClass() {
            return {
                'mobile-menu__button--active': this.isMenuOpened
            };
        }
    },

    methods: {
        onToggleMenu() {
            this.isMenuOpened = !this.isMenuOpened;
            this.$emit('toggle-menu', this.isMenuOpened);
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar-header {
    @media screen and (max-width: $tablet) {
        padding: 45px 30px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
}

.sidebar__step-indicator {
    color: $white-color;
    opacity: 0.8;
    font-size: 48px;
    margin-left: 95px;
    margin-top: 53px;
    font-family: sans-serif;
    font-weight: lighter;
    letter-spacing: 4px;

    @media screen and (max-width: $laptop) {
        margin-left: 45px;
    }

    @media screen and (max-width: $tablet-landscape) {
        margin-left: 25px;
    }

    @media screen and (max-width: $tablet) {
        margin: 0;
        opacity: 0.6;
        font-size: 24px;
    }

    @media screen and (max-width: $tablet-portrait) {
        font-size: 16px;
    }
}

.mobile-menu__button {
    display: none;
    z-index: 99;
    cursor: pointer;
    border: none;
    outline: none;
    box-shadow: none;
    background: transparent;
    
    @media screen and (max-width: $tablet) {
        display: block;
    }
}

.mobile-menu__button span {
    display: block;
    width: 18px;
    height: 1px;
    opacity: 0.5;
    background-color: $white-color;
    transition: transform 0.2s cubic-bezier(0.77, 0.2, 0.05, 1.0), opacity 0.2s ease;

    &:not(:last-child) {
        margin-bottom: 5px;
    }
}

.mobile-menu__button--active span:first-child {
    transform: rotate(45deg) translate(3px, 3px);;
}

.mobile-menu__button--active span:nth-child(2) {
  transform: rotate(-45deg) translate(1px, -1px);
}

.mobile-menu__button--active span:last-child {
    opacity: 0;
    transform: rotate(0deg);
}
</style>