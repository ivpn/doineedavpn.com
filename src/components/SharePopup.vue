<template>
    <div class="popup-container popup-overlay" :class="popupClass">
        <div class="popup">
            <button class="popup__close" @click="onClose">
                <svg viewBox="0 0 32 32">
                    <g fill="none">
                        <line x1="30.9" x2="1" y1="31" y2="1.1" />
                        <line x1="1.1" x2="31" y1="30.9" y2="1" />
                    </g>
                </svg>
            </button>
            <div class="popup__header">
                <h3 class="popup__title">Do they need a VPN?</h3>
                <p class="popup__subtitle">Help others decide by sharing this page.</p>
            </div>
            <div class="share">
                <div class="share-field">
                    <input class="share-field__input" type="text" :value="$options.address" readonly>
                    <button class="share-field__button" @click="onCopy">
                        <svg class="share-field__icon" viewBox="0 0 32 32">
                            <g fill="none">
                                <path d="M15 13h9c1.1 0 2 .9 2 2v9c0 1.1-.9 2-2 2h-9c-1.1 0-2-.9-2-2v-9c0-1.1.9-2 2-2z" />
                                <path d="M9 19H8c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h9c1.1 0 2 .9 2 2v1" />
                            </g>
                        </svg>
                    </button>
                </div>
                <p class="share__status" v-if="isCopied">URL copied to clipboard</p>
            </div>
            <p class="share__text text-sm">We recommend sharing via email through <a href="https://tutanota.com" target="_blank">Tutanota</a> or messaging through <a href="https://signal.org" target="_blank">Signal</a>.</p>
        </div>
    </div>
</template>

<script>
import clipboardCopy from 'clipboard-copy';
import { ACTION_TYPES } from '@/store';

export default {
    name: 'SharePopup',

    props: {
        isVisible: {
            type: Boolean,
            required: true
        }
    },

    address: 'http://doineedavpn.com/',

    data: () => ({ isCopied: false }),

    computed: {
        popupClass() {
            return {
                'popup-container--opened': this.isVisible
            }
        }
    },

    methods: {
        onCopy() {
            this.isCopied = true;
            clipboardCopy(this.$options.address);
        },

        onClose() {
            this.isCopied = false;
            this.$store.dispatch(ACTION_TYPES.TOGGLE_SHARE_POPUP, false);
        },

        togglePageScroll() {
            document.body.style.overflow = this.isVisible ? 'hidden': 'auto';
        }
    },

    mounted() {
        this.togglePageScroll();
    },

    updated() {
        this.togglePageScroll();
    }
}
</script>

<style lang="scss" scoped>
.popup-container {
    opacity: 0;
    display: none;
    transition: opacity 0.2s linear;
}

.popup-container--opened {
    display: block;
    opacity: 1;
}

.popup-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 999;
    background: rgba(0, 0, 0, .5);
}

.popup {
    position: absolute;
    padding: 20px;
    left: 50%;
    text-align: center;
    top: 50%;
    z-index: 9999;
    max-width: 450px;
    border-radius: 4px;
    transform: translate(-50%, -50%);
    background-color: $background-color;
    box-shadow: 0px 5px 20px 0px #00000082;

    @media screen and (max-width: $mobile-portrait) {
        width: 80%;
    }
}

.popup__subtitle {
    color: $white-color;
    line-height: 24px;
}

.popup__header {
    margin-bottom: 15px;
}

.popup__close {
    position: absolute;
    right: 0;
    top: -32px;
    outline: none;
    border: none;
    width: 32px;
    height: 32px;
    box-shadow: none;
    cursor: pointer;
    background: transparent;

    svg {
        width: 100%;
        height: 100%;
        fill: none;
        stroke: $white-color;
        stroke-width: 2px;
        transition: opacity .2s linear;
    }

    &:hover svg {
        opacity: 0.8;
    }
}

.popup__title {
    font-size: 24px;
    line-height: 32px;
    color: $white-color;
    font-weight: 600;
    margin-bottom: 12px;
}

.share {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.share-field {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 240px;
    border-bottom: 1px solid #A4A6AB;
    margin-bottom: 8px;
}

.share-field__input {
    outline: none;
    border: none;
    width: 100%;
    color: $white-color;
    opacity: 0.6;
    font-size: 14px;
    background: transparent;
}

.share__status {
    color: $white-color;
    opacity: 0.5;
    font-size: 10px;
}

.share-field__button {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    width: 36px;
    height: 32px;
    box-shadow: none;
    cursor: pointer;
    background: transparent;
    z-index: 1;
}

.share-field__icon {
    stroke: $white-color;
    stroke-width: 2px;
    width: 36px;
    height: 32px;
}

</style>