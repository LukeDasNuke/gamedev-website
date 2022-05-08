<script setup>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import { onMounted } from "vue";

let options = {
    simple_game_engine: 0,
    unity: 0,
    unreal: 0,
    cpp: 0,
    python: 0,
};

function answer(names, values) {
    for (let i = 0; i < names.length; i++) {
        options[names[i]] += values[i];
        console.log(names[i] + ": " + options[names[i]]);
    }
}

function evaluate() {
    const getMax = (object) => {
        return Object.keys(object).filter((x) => {
            return object[x] == Math.max.apply(null, Object.values(object));
        });
    };

    let best_fit = getMax(options);
    console.log(best_fit);
}
</script>

<template>
    <section class="snappy-section nav-section">
        <Navbar activeId="1" />
        <Hero title="The Test" subtitle="It's soooo testy, god damn" image="../assets/hero.webp" />
    </section>

    <section class="snappy-section first-section">
        <h2>Here are the questions (scari):</h2>

        <div class="question">
            <p class="question-text">Is this your first game?</p>
            <span class="button" v-on:click="answer(['simple_game_engine', 'unreal', 'cpp'], [2, -2, -2])">Yes</span>
            <span class="button" v-on:click="answer(['simple_game_engine'], [-1])">No</span>
        </div>

        <div class="question">
            <p class="question-text">Is your game going to be 2d or 3d?</p>
            <span class="button" v-on:click="answer(['unreal'], [-5])">2D</span>
            <span class="button" v-on:click="answer(['unity', 'unreal'], [1, 1])">3D</span>
        </div>

        <span class="button" v-on:click="evaluate">Evaluate</span>
    </section>

    <Footer class="snappy-section-end" />
</template>

<style lang="scss" scoped>
.question {
    margin-top: 20px;
    margin-bottom: 20px;
}

.button {
    display: inline-block;
    margin: 0 auto;
    padding: 8px 10px;
    border-radius: 12px;
    background-color: $alt-bg-color;
    color: white;
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
}
</style>
