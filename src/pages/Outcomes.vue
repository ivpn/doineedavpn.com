<template>
    <div class="screen outcomes">
        <div class="outcomes-header">
            <router-link class="outcomes-header__button" to="/">Back</router-link>
            <h1 class="outcomes-header__title">Do I need a VPN</h1>
            <h3 class="outcomes-header__subtitle">Recommendations decision tree and end states</h3>
        </div>

        <div class="outcomes-content">
            <div class="offset-bottom-lg">
                <ol class="list list--numeric offset-bottom-md">
                    <li class="list__item">
                        <p class="text-sm display-inline offset-bottom-sm">First question - Are you a journalist, an oppressed minority, or someone whom state actors might target online?</p>
                        <ul class="list list--alphabetical offset-left-md">
                            <li class="text-sm">Yes - recommendations are "Journalist or oppressed minority" and "Tor might be a better solution" (see below)</li>
                            <li class="text-sm">No - continue to Step 2.</li>
                        </ul>
                    </li>
                    <li class="list__item">
                        <p class="text-sm display-inline offset-bottom-sm">All selections are evaluated for one of three outcomes:</p>
                        <ul class="list list--disc offset-left-md">
                            <li class="text-sm">Yes - This problem can be solved by a commercial VPN (most of the time)</li>
                            <li class="text-sm">Maybe - In some cases a commercial VPN might solve this problem, or a limited part of it</li>
                            <li class="text-sm">No - In most cases commercial VPNs are not useful for these issues</li>
                        </ul>
                    </li>
                </ol>

                <p class="text-sm offset-bottom-sm">The selections are fed into the decision trees below, then assessed and grouped for a result page.</p>
                <p class="text-sm offset-bottom-sm">We display the following:</p>
                <ul class="list list--disc offset-left-md">
                    <li class="text-sm">One of Topline recommendations b-f. evaluated based on selections</li>
                    <li class="text-sm">All explanations corresponding to selection groupings</li>
                    <li class="text-sm">One of VPN recommendations 1-4. evaluated based on selections</li>
                </ul>
            </div>

            <p class="section-title">Topline recommendations</p>
            <div class="table-container">
                <table class="table offset-bottom-lg">
                    <thead>
                        <tr>
                            <th class="table-col-4">Selection outcomes</th>
                            <th class="table-col-8">Topline recommendation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-col-4">
                                <p class="text-sm">Journalist or oppressed minority</p>
                            </td>
                            <td class="table-col-8">
                                <p class="text-sm">
                                    A VPN may be useful as part of your privacy and security toolkit, but you need more. Start at <a href="https://freedom.press/training/" target="_blank">Freedom.press</a>, go through <a href="https://ssd.eff.org" target="_blank">EFF’s Surveillance Self Defense</a> collection and visit <a href="https://www.privacyguides.org" target="_blank">privacyguides.org</a> to learn about threats and solutions.
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-col-4">
                                <p class="text-sm">Yes outcomes only</p>
                            </td>
                            <td class="table-col-8">
                                <p class="text-sm">Yes, you need a VPN. Based on your selections, it’s a suitable solution for your needs.</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-col-4">
                                <p class="text-sm">Yes + No/Maybe outcomes mixed</p>
                            </td>
                            <td class="table-col-8">
                                <p class="text-sm">Yes, you need a VPN, but they do not solve some issues you want to address. Review the explanations below.</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-col-4">
                                <p class="text-sm">Maybe outcomes only</p>
                            </td>
                            <td class="table-col-8">
                                <p class="text-sm">You might benefit from using a VPN. They help mitigate issues, but they are not complete solutions for your needs.</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-col-4">
                                <p class="text-sm">Maybe + No outcomes mixed</p>
                            </td>
                            <td class="table-col-8">
                                <p class="text-sm">You might benefit from using a VPN. While they mitigate some issues, they are not fit for some of your selections.</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-col-4">
                                <p class="text-sm">No outcomes only</p>
                            </td>
                            <td class="table-col-8">
                                <p class="text-sm">You don't need a VPN. Your choices show VPNs won't help to solve your needs.</p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p class="section-title">Selection explanations</p>
            <div class="table-container">
                <table class="table offset-bottom-lg">
                    <thead>
                        <tr>
                            <th class="table-col-3">Issue selected </th>
                            <th class="table-col-2">VPN solution</th>
                            <th class="table-col-6">Explanation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-col-3">
                                <p class="text-sm offset-bottom-sm">[Prevent your ISP from monitoring and/or recording your activity]</p>
                                <p class="text-sm">[Protect your data from hackers on WiFi you don't trust]</p>
                            </td>
                            <td class="table-col-2">
                                <p class="text-sm">Green / Yes</p>
                            </td>
                            <td class="table-col-6">
                                <p class="text-sm" v-html="getExplanation('TUNNEL/SECURITY')"></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-col-3">
                                <p class="text-sm offset-bottom-sm">[Protect against government snooping]</p>
                                <p class="text-sm offset-bottom-sm">[Prevent websites from profiling you]</p>
                                <p class="text-sm offset-bottom-sm">[Achieve anonymity online]</p>
                            </td>
                            <td class="table-col-2">
                                <p class="text-sm">Yellow / Maybe</p>
                            </td>
                            <td class="table-col-6">
                                <p class="text-sm" v-html="getExplanation('NOT SUFFICIENT, OTHER WAYS TO ID')"></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-col-3">
                                <p class="text-sm offset-bottom-sm">[Stop social media companies (Google, Facebook etc.) profiling you]</p>
                                <p class="text-sm offset-bottom-sm">[Protect from data leaks from services you use]</p>
                            </td>
                            <td class="table-col-2">
                                <p class="text-sm">Red / No</p>
                            </td>
                            <td class="table-col-6">
                                <p class="text-sm" v-html="getExplanation('SERVICE PROVIDER SPECIFIC')"></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-col-3">
                                <p class="text-sm offset-bottom-sm">[Protect your passwords]</p>
                                <p class="text-sm offset-bottom-sm">[Protect from identity theft]</p>
                            </td>
                            <td class="table-col-2">
                                <p class="text-sm">Yellow / Maybe</p>
                            </td>
                            <td class="table-col-6">
                                <p class="text-sm" v-html="getExplanation('NOT SUFFICIENT, OTHER WAYS TO HACK')"></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-col-3">
                                <p class="text-sm offset-bottom-sm">[Access websites blocked in your country, workplace, school, etc.]</p>
                                <p class="text-sm offset-bottom-sm">[Watch Netflix/Disney+/Hulu etc. shows available in another country]</p>
                                <p class="text-sm offset-bottom-sm">[Access entertainment or games not available in your country, workplace, school, etc.]</p>
                                <p class="text-sm offset-bottom-sm">[Accessing entertainment or games available in your home country when travelling]</p>
                            </td>
                            <td class="table-col-2">
                                <p class="text-sm">Green / Yes</p>
                            </td>
                            <td class="table-col-6">
                                <p class="text-sm" v-html="getExplanation('UNBLOCKING, CIRCUMVENTION')"></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-col-3">
                                <p class="text-sm offset-bottom-sm">[Hide your IP address when peer-to-peer downloading]</p>
                            </td>
                            <td class="table-col-2">
                                <p class="text-sm">Green / Yes</p>
                            </td>
                            <td class="table-col-6">
                                <p class="text-sm" v-html="getExplanation('IP MASKING')"></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-col-3">
                                <p class="text-sm offset-bottom-sm">[Hide your geographic location]</p>
                            </td>
                            <td class="table-col-2">
                                <p class="text-sm">Red / No</p>
                            </td>
                            <td class="table-col-6">
                                <p class="text-sm" v-html="getExplanation('MOBILE LOCATION')"></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-col-3">
                                <p class="text-sm offset-bottom-sm">[Hide financial transactions]</p>
                            </td>
                            <td class="table-col-2">
                                <p class="text-sm">Red / No</p>
                            </td>
                            <td class="table-col-6">
                                <p class="text-sm" v-html="getExplanation('FINANCIAL')"></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-col-3">
                                <p class="text-sm offset-bottom-sm">[Protect your data from hackers when connected at home]</p>
                                <p class="text-sm offset-bottom-sm">[Protect devices at home from information leaking, data theft and hacking]</p>
                            </td>
                            <td class="table-col-2">
                                <p class="text-sm">Red / No</p>
                            </td>
                            <td class="table-col-6">
                                <p class="text-sm" v-html="getExplanation('HOME SECURITY')"></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-col-3">
                                <p class="text-sm offset-bottom-sm">[Prevent your ISP from throttling your connection]</p>
                            </td>
                            <td class="table-col-2">
                                <p class="text-sm">Yellow / Maybe</p>
                            </td>
                            <td class="table-col-6">
                                <p class="text-sm" v-html="getExplanation('THROTTLING')"></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-col-3">
                                <p class="text-sm">[Speed up your connection for casual gaming]</p>
                            </td>
                            <td class="table-col-2">
                                <p class="text-sm">Yellow / Maybe</p>
                            </td>
                            <td class="table-col-6">
                                <p class="text-sm" v-html="getExplanation('SPEED UP GAMING')"></p>
                            </td>
                        </tr>
                        <tr>
                            <td class="table-col-3">
                                <p class="text-sm">[Protect you from DDOS attacks]</p>
                            </td>
                            <td class="table-col-2">
                                <p class="text-sm">Yellow / Maybe</p>
                            </td>
                            <td class="table-col-6">
                                <p class="text-sm" v-html="getExplanation('DDOS')"></p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p class="section-title">VPN (or lack of) recommendations</p>
            <div class="table-container">
                <table class="table offset-bottom-lg">
                    <thead>
                        <tr>
                            <th class="table-col-3">Outcome</th>
                            <th class="table-col-2">Recommendation</th>
                            <th class="table-col-7">Recommendation details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="table-col-3">
                                <p class="text-sm offset-bottom-sm">Only Yes / Maybe outcomes are from selection:</p>
                                <p class="text-sm offset-bottom-sm">[Protect your data from hackers on WiFi you don't trust]</p>
                                <p class="text-sm offset-bottom-sm">[Protect your passwords]</p>
                                <p class="text-sm">[Protect from identity theft]</p>
                            </td>
                            <td class="table-col-2">
                                <p class="text-sm">Roll your own VPN might be a better solution</p>
                            </td>
                            <td class="table-col-7">
                                <Recommendation :recommendation="getRecommendation('own-plus-reco')" />
                            </td>
                        </tr>

                        <tr>
                            <td class="table-col-3">
                                <p class="text-sm offset-bottom-sm">Any of the following selected:</p>
                                <p class="text-sm offset-bottom-sm">[Protect against government snooping]</p>
                                <p class="text-sm offset-bottom-sm">[Prevent websites from profiling you]</p>
                                <p class="text-sm offset-bottom-sm">[Achieve anonymity online]</p>
                            </td>
                            <td class="table-col-2">
                                <p class="text-sm">Tor might be a better solution</p>
                            </td>
                            <td class="table-col-7">
                                <Recommendation :recommendation="getRecommendation('tor-plus-reco')" />
                            </td>
                        </tr>

                        <tr>
                            <td class="table-col-3">
                                <p class="text-sm offset-bottom-sm">No outcomes only</p>
                            </td>
                            <td class="table-col-2">
                                <p class="text-sm">Don't use a VPN</p>
                            </td>
                            <td class="table-col-7">
                                <Recommendation :recommendation="getRecommendation('dont-use')" />
                            </td>
                        </tr>

                        <tr>
                            <td class="table-col-3">
                                <p class="text-sm offset-bottom-sm">Any other cases not covered above</p>
                            </td>
                            <td class="table-col-2">
                                <p class="text-sm">VPN use recommended, advice</p>
                            </td>
                            <td class="table-col-7">
                                <Recommendation :recommendation="getRecommendation('basic')" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { Recommendation } from '@/components';
import { explanations } from '@/content/explanations.json';
import { recommendations } from '@/content/recommendations.json';

const BODY_CLASS = 'body-height';

export default {
    name: 'Outcomes',

    components: { Recommendation },

    methods: {
        getExplanation(id) {
            const explanation = explanations.find(i => i.id == id);

            return explanation ? explanation.description : '';
        },

        getRecommendation(id) {
            const recommendation = recommendations.find(i => i.id === id);

            return recommendation || {};
        }
    },

    mounted() {
        document.body.classList.add(BODY_CLASS);
    },

    beforeDestroy() {
        document.body.classList.remove(BODY_CLASS);
    }
}
</script>

<style lang="scss" scoped>
.outcomes {
    margin: 0 auto;
    max-width: 920px;
    padding: 120px 0;

    @media screen and (max-width: $tablet) {
        width: auto;
        max-width: auto;
        padding: 80px 30px;
    }
}

.outcomes-header {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
}

.outcomes-header__title {
    font-size: 48px;
    color: $white-color;
    font-weight: bold;
    line-height: 56px;
    margin-bottom: 20px;

    @media screen and (max-width: $mobile-portrait) {
        font-size: 36px;
        line-height: 48px;
    }
}

.outcomes-header__subtitle {
    color: $white-color;
    font-size: 20px;
    line-height: 32px;
}

.outcomes-header__button {
    color: $white-color;
    margin-bottom: 20px;
}
</style>
