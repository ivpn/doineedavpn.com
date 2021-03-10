<template>
    <div>
        <div class="recommendation offset-bottom-md">
            <p class="text-sm offset-bottom-sm" v-html="recommendation.title"></p>
            <p class="text-sm" v-html="recommendation.recommended.title"></p>

            <ul class="recommendation__sources">
                <li class="recommendation__sources__item" v-for="source of recommendation.recommended.sources" :key="source.link">
                    <a class="link-sm" :href="source.link" target="_blank">{{ source.title }}</a>
                </li>
            </ul>
        </div>

        <div class="tips">
            <p class="text-sm offset-bottom-sm" v-html="recommendation.tips.title"></p>
            <ol class="tips__list">
                <li class="tips__list__item" v-for="tip of recommendation.tips.list" :key="tip.title">
                    <a v-if="tip.link" class="link-sm" :href="tip.link" target="_blank">{{ tip.title }}</a>
                    <span class="text-sm" v-else>{{ tip.title }}</span>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Recommendation',

    props: {
        recommendation: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.recommendation__sources {
    margin-top: 15px;
}

.recommendation__sources__item,
.tips__list__item {
    margin-bottom: 4px;
}

.tips__list {
    padding: 0;
    margin: 0;
    list-style-type: decimal;
    list-style-position: inside;

    & > li::marker {
        color: $list-marker-color
    }
}
</style>