<script setup>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Card from "../components/Card.vue";
import Footer from "../components/Footer.vue";
import { onMounted } from "vue";

onMounted(() => {
    new TypeIt("#cta", {
        speed: 100,
        loop: true,
        nextStringDelay: 0,
        lifeLike: true,
        waitUntilVisible: true,
        startDelay: 1000,
        loopDelay: null,
        html: true,
    })
        .type('<span>Are you </span><span style="color: red;">ready?</span>', { delay: 1000 })
        .delete(null, { delay: 600 })
        .type('<span>Ready you are </span><span style="color: red;">you say?</span>', { delay: 1000 })
        .delete(null, { delay: 600 })
        .type('<span>Well, then </span><span style="color: red;">take the test.</span>', { delay: 1000 })
        .delete(null, { delay: 600 })
        .go();
});
</script>

<template>
    <section class="snappy-section nav-section">
        <Navbar activeId="0" />
        <Hero title="Gamedev" subtitle="It's soo gamedev, it's crazy really" image="../src/assets/hero.webp" id="0" />
    </section>

    <section class="snappy-section first-section">
        <div class="text-image-right">
            <div class="text">
                <p>
                    Gamedev is hard, but one of the hardest part is to actually choose what tools you want to use to develop your game. That's why this website exists! Take the test and find out what
                    tools you should use to develop your game!
                </p>
            </div>
            <div class="image" id="sussybaka">
                <img src="../assets/hollow-knight-1.webp" alt="hollow knight screenshot"/>
            </div>
        </div>
    </section>

    <section class="second-section">
        <Card
            id="0"
            title="Game engines"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image="firewatch-1.webp"
            title_attrib="playvalorant.com"
        />
        <Card
            id="1"
            title="Game frameworks"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image="firewatch-2.webp"
            title_attrib="firewatchgame.com"
        />
        <Card
            id="2"
            title="Build from scratch"
            subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            image="firewatch-3.webp"
            title_attrib="firewatchgame.com"
        />
    </section>

    <section class="snappy-section third-section">
        <h2 id="cta"></h2>
        <router-link class="button" :to="{ name: 'the-test' }">Take the test</router-link>
    </section>

    <Footer class="snappy-section-end" />
</template>

<style lang="scss" scoped>
.button {
    display: block;
    margin: 0 auto;
    padding: 15px 20px;
    border-radius: 12px;
    background-color: $alt-bg-color;
    color: white;
    font-size: 1.25rem;
    text-decoration: none;

    &:hover {
        background-color: #393939;
    }
}

#app {
    .nav-section {
        scroll-snap-align: start;
        height: 100vh;
    }

    .first-section {
        padding-top: 32px;

        display: flex;
        align-items: center;

        height: 100vh;
    }

    .snappy-section {
        box-sizing: border-box;
        scroll-snap-align: start;
        scroll-snap-stop: always;
    }

    .snappy-section-end {
        box-sizing: border-box;
        scroll-snap-align: end;
        scroll-snap-stop: always;
    }

    .text-image-right {
        display: flex;
        flex-direction: row;

        .text {
            padding: 64px 24px;
            padding-top: 0;

            padding-left: 64px;

            width: 50%;

            display: flex;
            align-items: center;
            justify-content: center;

            line-height: 2;
            font-size: 1.15rem;
        }

        .image {
            padding: 64px 24px;
            padding-right: 64px;
            padding-top: 0;
            width: 50%;

            img {
                width: 100%;
                object-fit: cover;
                border-radius: 14px;
            }
        }

        @include md-down {
            flex-direction: column-reverse;
            align-items: center;

            .text {
                text-align: center;
            }

            .image {
                width: 60vw;
                padding-bottom: 12px;
            }
        }

        @include lg-down {
            .text {
                font-size: 1rem;
                padding-left: 24px;
            }

            .image {
                padding-right: 32px;
            }
        }
    }

    .second-section {
        display: flex;
        align-items: center;
        justify-content: center;

        @include lg-down {
            flex-direction: column;
        }
    }

    .third-section {
        padding-top: 32px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 100vh;

        text-align: center;

        * {
            margin-top: 11px;
            margin-bottom: 11px;
        }

        h2 {
            font-size: 4rem;

            @include md-down {
                font-size: 3rem;
            }
        }
    }
}
</style>
