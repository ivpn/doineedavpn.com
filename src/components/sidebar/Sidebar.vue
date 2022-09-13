<template>
    <div class="sidebar" :class="sidebarClass">
        <SidebarHeader @toggle-menu="onMobileMenuToggle" />
        <div class="sidebar__jumbotron">
            <h1 class="sidebar__heading" @click="onReset">Do I need a VPN?</h1>
            <p class="sidebar__description">Tell us what problems you want to solve, and we help you decide</p>

            <div class="mobile-menu" :class="mobileMenuClass">
                <ul class="mobile-menu__list">
                    <li class="footer-nav__item">
                        <router-link to="outcomes">Selection process explanation</router-link>
                    </li>
                    <li class="footer-nav__item">
                        <a href="https://github.com/ivpn/doineedavpn.com/issues" target="_blank">Suggest an edit or improvement on GitHub</a>
                    </li>
                </ul>
                <p class="sidebar__footer__text">We designed this tool for individual users, not companies evaluating VPN use for their workforce.</p>
                <p class="sidebar__footer__text">There are no affiliate or paid referral links on this site.</p>
                <p class="sidebar__footer__text">This site was conceived and built by <a class="sidebar__footer__link" href="https://www.ivpn.net" target="_blank">IVPN</a> to challenge aggressive marketing practices in the VPN industry.</p>
            </div>
        </div>

        <div class="sidebar__footer">
            <p class="sidebar__footer__text">We designed this tool for individual users, not companies evaluating VPN use for their workforce.</p>
            <p class="sidebar__footer__text">There are no affiliate or paid referral links on this site.</p>
            <p class="sidebar__footer__text">This site was conceived and built by <a class="sidebar__footer__link" href="https://www.ivpn.net" target="_blank">IVPN</a> to challenge aggressive marketing practices in the VPN industry.</p>
        </div>
        
        <!-- For styling purposes -->
        <div class="sidebar__overlay"></div>
        <div class="sidebar__border"></div>
    </div>
</template>

<script>
import { ACTION_TYPES } from '@/store';
import SidebarHeader from './SidebarHeader';

export default {
    name: 'SidebarComponent',

    components: { SidebarHeader },

    data: () => ({
        isMobileMenuOpened: false,
        isScrollingDown: false
    }),

    computed: {
        mobileMenuClass() {
            return { 'mobile-menu--active': this.isMobileMenuOpened };
        },

        sidebarClass() {
            return { 'sidebar--scrolling': this.isScrollingDown };
        }
    },

    methods: {
        onMobileMenuToggle(isOpened) {
            this.isMobileMenuOpened = isOpened;
            document.body.style.overflow = isOpened ? 'hidden': 'auto';
        },

        onReset() {
            this.isMobileMenuOpened = false;
            this.$store.dispatch(ACTION_TYPES.RESET_STEP);
        },

        onScroll() {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            
            this.isScrollingDown = scrollTop > 50;
        }
    },

    mounted() {
        document.addEventListener('scroll', this.onScroll);
    },

    beforeUnmount() {
        this.onMobileMenuToggle(false);
        document.removeEventListener('scroll', this.onScroll);
    }
}
</script>

<style lang="scss" scoped>
$overlay-color: rgba(13, 124, 255, 0.3);
$border-color: rgba(255, 255, 255, 0.3);
$sidebar-background: #20242E;
$sidebar-gradient: linear-gradient(0deg, rgba(32, 36, 46, 0) 0%, #20242E 25%);

.sidebar {
    position: fixed;
    top: 0;
    left: 0;
    max-width: 590px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: box-shadow .2s linear;

    @media screen and (max-width: $laptop) {
        max-width: 500px;
    }

    @media screen and (max-width: $tablet-landscape) {
        max-width: 420px;
    }

    @media screen and (max-width: $tablet) {
        position: fixed;
        top: 0;
        max-width: 100%;
        width: 100%;
        z-index: 999;
        height: auto;
        background: $sidebar-background;
    }
}

.sidebar--scrolling {
    @media screen and (max-width: $tablet) {
        box-shadow: 0px 5px 20px 0px #00000082;
    }
}

.mobile-menu {
    height: 0;
    margin: 8px 0;
    overflow: hidden;
    transition: height 0.3s linear;

    a {
        margin: 0;
    }
}

.mobile-menu__list {
    margin-bottom: 10px;
}

.mobile-menu--active {
    height: 100vh;
}

.sidebar__overlay {
    position: absolute;
    left: -50%;
    top: 0;
    width: 100%;
    height: 100%;
    filter: blur(250px);
    z-index: 1;
    background: $overlay-color;
    -webkit-backface-visibility: hidden;
    -webkit-transform-style: preserve-3d;
    -webkit-transform: translate3d(0, 0, 0);


    @media screen and (max-width: $tablet) {
        top: 0;
        left: 0;
        filter: blur(100px);
    }
}

.sidebar__jumbotron {
    z-index: 2;
    margin-left: 95px;

    @media screen and (max-width: $laptop) {
        margin-left: 45px;
    }

    @media screen and (max-width: $tablet-landscape) {
        margin-left: 25px;
    }

    @media screen and (max-width: $tablet) {
        padding: 15px 30px 0;
        margin: 0;
    }
}

.sidebar__border {
    position: absolute;
    height: 100%;
    width: 1px;
    right: 0;
    top: 0;
    background: $border-color;
    backdrop-filter: blur(4px);

    @media screen and (max-width: $tablet) {
        display: none;
    }
}

.sidebar__heading {
    font-size: 64px;
    color: $white-color;
    font-weight: bold;
    margin-bottom: 43px;
    line-height: 80px;
    cursor: pointer;
    
    @media screen and (max-width: $laptop) {
        font-size: 56px;
        line-height: 72px;
    }

    @media screen and (max-width: $tablet-landscape) {
        font-size: 52px;
        line-height: 68px;
    }

    @media screen and (max-width: $tablet) {
        font-size: 42px;
        line-height: 48px;
        margin-bottom: 24px;
    }

    @media screen and (max-width: $mobile-portrait) {
        font-size: 22px;
        line-height: 27px;
    }
}

.sidebar__description {
    color: $white-color;
    font-size: 20px;
    line-height: 36px;
    padding-right: 30px;

    @media screen and (max-width: $laptop) {
        font-size: 18px;
    }

    @media screen and (max-width: $tablet) {
        padding: 0;
        color: $white-color;
        font-size: 16px;
        line-height: 1.6;
        font-weight: 300;
        opacity: 0.5;
    }

    @media screen and (max-width: $mobile-portrait) {
        font-size: 14px;
    }
}

.sidebar__footer {
    z-index: 99;
    margin: 0 30px 20px 95px;

    @media screen and (max-width: $laptop) {
        margin-left: 45px;
    }

    @media screen and (max-width: $tablet-landscape) {
        margin-left: 25px;
    }

    @media screen and (max-width: $tablet) {
        display: none;
    }
}

.sidebar__footer__text {
    color: $white-color;
    opacity: 0.5;
    width: auto;
    font-size: 11px;
    line-height: 20px;
    display: inline-block;

    &:not(:last-child) {
        margin-bottom: 6px;
    }
}

.sidebar__footer__link {
    color: $white-color;
    display: inline-block;
    z-index: 2;
}

.mobile-menu__button {
    display: none;
    z-index: 99;
    cursor: pointer;
    border: none;
    outline: none;
    box-shadow: none;
    background: transparent;
    
    @media screen and (max-width: $mobile-portrait) {
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