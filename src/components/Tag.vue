<template>
    <button class="tag" :class="selectedClass" @click="onSelect">
        <span class="tag__content">
            {{ title }}
            <span v-if="hasOutcome" class="tag__status" :class="statusClass"></span>
        </span>
    </button>
</template>

<script>
import { OutcomeTypes } from '@/shared';

export default {
    name: 'TagComponent',

    props: {
        title: {
            type: String,
            required: true
        },

        value: {
            type: Object,
            required: false,
            default: null
        },

        isSelected: {
            type: Boolean,
            required: false,
            default: false
        },

        outcome: {
            type: String,
            required: false,
            default: null,
            validator: value => Object.values(OutcomeTypes).includes(value)
        }
    },

    computed: {
        selectedClass() {
            return { 'tag--selected': this.isSelected };
        },

        statusClass() {
            return {
                'tag__status--red': this.outcome === OutcomeTypes.No,
                'tag__status--green': this.outcome === OutcomeTypes.Yes,
                'tag__status--yellow': this.outcome === OutcomeTypes.Maybe
            };
        },

        hasOutcome() {
            return Object.values(OutcomeTypes).includes(this.outcome);
        },
    },

    methods: {
        onSelect() {
            this.$emit('select', this.value);
        }
    }
}
</script>

<style lang="scss" scoped>
.tag {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    padding: 0;
    margin: 4px 2px;
    height: 41px;
    outline: none;
    border: none;
    box-shadow: none;
    cursor: pointer;
    text-align: left;
    background: $tag-background;
    transition: all .2s linear;

    &:active,
    &:focus {
        outline: none;
    }

    &:hover {
        color: $white-color;
        background: darken($tag-background, 20%);
    }

    @media screen and (max-width: $tablet-portrait) {
        height: auto;
        margin: 2px 0;
        min-height: 35px;
    }
}

.tag__content {
    display: flex;
    align-items: center;
    padding: 0 16px;
    font-size: 13px;
    color: $white-color;

    @media screen and (max-width: $tablet-portrait) {
        font-size: 12px;
        line-height: 1.6;
        height: auto;
        padding: 5px 10px;
    }
}

.tag--selected {
    color: $white-color;
    background: $blue-color !important;
}

.tag__status {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-left: 10px;
}

.tag__status--red {
    background-color: $red-color;
}

.tag__status--green {
    background-color: $green-color;
}

.tag__status--yellow {
    background-color: $yellow-color;
}
</style>