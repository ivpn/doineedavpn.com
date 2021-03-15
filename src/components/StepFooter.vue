<template>
    <footer class="footer" :class="footerClasses">
        <button class="button footer__button"
                :class="isDisabled ? 'disabled': ''"
                v-if="hasButton"
                @click="onClick"
                data-footer-button
        >
            Find out if you need a VPN
            <span class="footer_tooltip" :class="isTooltipVisible ? '' : 'hidden'">Select at least one issue to proceed</span>
        </button>
        <ul class="footer-nav">
            <li class="footer-nav__item">
                <a role="button" href="#" @click="onShare">Share DoIneedAVPN.com</a>
            </li>
            <li class="footer-nav__item">
                <router-link to="outcomes">Review the decision tree</router-link>
            </li>
            <li class="footer-nav__item">
                <a href="https://github.com/ivpn/doineedavpn.com/issues" target="_blank">Suggest an edit or improvement on GitHub</a>
            </li>
        </ul>
    </footer>
</template>

<script>
import { ACTION_TYPES } from '@/store';

export default {
    name: 'StepFooter',

    props: {
        hasGradient: {
            type: Boolean,
            required: false,
            default: true
        },

        hasButton: {
            type: Boolean,
            required: false,
            default: true
        },

        isStatic: {
            type: Boolean,
            required: false,
            default: false
        },

        isDisabled: {
            type: Boolean,
            required: false,
            default: true
        },

        isStaticMobile: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    data: () => ({
        isTooltipVisible: false
    }),

    computed: {
        footerClasses() {
            return {
                'footer--gradient': this.hasGradient,
                'footer--static': this.isStatic,
                'footer--static-mobile': this.isStaticMobile
            };
        }
    },

    methods: {
        onClick() {
            if (this.isDisabled) {
                this.isTooltipVisible = true;
                return;
            }

            this.$store.dispatch(ACTION_TYPES.ACTIVATE_STEP, 'answer');
        },

        onShare() {
            this.$store.dispatch(ACTION_TYPES.TOGGLE_SHARE_POPUP, true);
        },

        listenOutClick({ target }) {
            if (!target.hasAttribute('data-footer-button')) {
                this.isTooltipVisible = false;
            }
        }
    },

    mounted() {
        window.addEventListener('click', this.listenOutClick);
    },

    beforeDestroy() {
        window.removeEventListener('click', this.listenOutClick);
    }
}
</script>

<style lang="scss" scoped>
.footer__button {
    position: relative;
}

.footer_tooltip {
    position: absolute;
    top: -100%;
    font-size: 14px;
    color: white;
    background-color: $yellow-color;
    box-shadow: 0px 5px 20px 0px #00000082;
    border-radius: 8px;
    width: 300px;
    padding: 6px;
    left: 50%;
    transform: translateX(-50%);
    font-weight: normal;

    &:after {
        border-left: solid transparent 10px;
        border-right: solid transparent 10px;
        border-top: solid $yellow-color 10px;
        bottom: -10px;
        content: "";
        height: 0;
        left: 50%;
        margin-left: -13px;
        position: absolute;
        width: 0;
    }
}
</style>