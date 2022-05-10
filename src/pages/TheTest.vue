<script setup>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import { onMounted, ref } from "vue";
import { objectToString } from "@vue/shared";

let options = {
    simple_game_engine: 0,
    unity: 0,
    unreal: 0,
    cpp: 0,
    python: 0,
};

let option_names = [
    "A simple game engine",
    "Unity",
    "Unreal Engine",
    "C++",
    "Python"
]

let result = ref("")

function answer(question_id, answer_id, names, values) {
    let parent = document.getElementById("q" + question_id);
    let element = parent.childNodes[answer_id+1];

    for(let i = 1; i < parent.childNodes.length; i++){
        if(i != answer_id+1 && parent.childNodes[i].classList.contains("selected")){
            parent.childNodes[i].click();
        }
    }

    if(element.classList.contains("selected")){
        element.classList.remove("selected");
        for (let i = 0; i < names.length; i++) {
            options[names[i]] -= values[i];
            console.log(names[i] + ": " + options[names[i]]);
        }
    }else{
        element.classList.add("selected");
        for (let i = 0; i < names.length; i++) {
            options[names[i]] += values[i];
            console.log(names[i] + ": " + options[names[i]]);
        }
    }
}

function evaluate() {
    const getMax = (object) => {
        return Object.keys(object).filter((x) => {
            return object[x] == Math.max.apply(null, Object.values(object));
        });
    };

    let best_fit = getMax(options);
    result.value = option_names[Object.keys(options).findIndex(e => e == best_fit[0])];
    console.log(best_fit[0])
}
</script>

<template>
    <section class="snappy-section nav-section">
        <Navbar activeId="1" />
        <Hero title="The Test" subtitle="It's soooo testy, god damn" image="../assets/hero.webp" />
    </section>

    <section class="snappy-section first-section">
        <h2>Here are the questions (scari):</h2>

        <div class="question" id="q0">
            <p class="question-text">Is this your first game?</p>
            <span class="button" v-on:click="answer(0, 0, ['simple_game_engine', 'unreal', 'cpp'], [2, -2, -2])">Yes</span>
            <span class="button" v-on:click="answer(0, 1, ['simple_game_engine'], [-1])">No</span>
        </div>

        <div class="question" id="q1">
            <p class="question-text">Is your game going to be 2d or 3d?</p>
            <span class="button" v-on:click="answer(1, 0, ['unreal'], [-5])">2D</span>
            <span class="button" v-on:click="answer(1, 1, ['unity', 'unreal'], [1, 1])">3D</span>
        </div>

        <div class="question" id="q2">
            <p class="question-text">Is your game going to require photorealistic graphics?</p>
            <span class="button" v-on:click="answer(2, 0, ['unreal', 'unity', 'simple_game_engine', 'python', 'cpp'], [5, 2, -4, -6, -1])">Yes</span>
            <span class="button" v-on:click="answer(2, 1, ['unreal'], [-2])">No</span>
        </div>

        <div class="question" id="q3">
            <p class="question-text">Are you experienced with programming?</p>
            <span class="button" v-on:click="answer(3, 0, ['cpp', 'unity', 'unreal', 'simple_game_engine'], [1, 1, 1, -1])">Yes</span>
            <span class="button" v-on:click="answer(3, 1, ['unity', 'unreal', 'python'], [1, 1, 1])">Kind of</span>
            <span class="button" v-on:click="answer(3, 2, ['cpp', 'simple_game_engine'], [-5, 2])">Nope</span>
        </div>

        <div class="question" id="q4">
            <p class="question-text">Is the scope of your game big?</p>
            <span class="button" v-on:click="answer(4, 0, ['unreal', 'unity'], [2, 2])">Yes</span>
            <span class="button" v-on:click="answer(4, 1, ['simple_game_engine', 'python'], [2, 2])">No</span>
        </div>

        <div class="question" id="q5">
            <p class="question-text">Do you want an editor?</p>
            <span class="button" v-on:click="answer(5, 0, ['unreal', 'unity', 'simple_game_engine'], [4, 4, 4])">Yes</span>
            <span class="button" v-on:click="answer(5, 1, [], [])">I don't care</span>
            <span class="button" v-on:click="answer(5, 2, ['unreal', 'unity', 'simple_game_engine'], [-4, -4, -4])">No</span>
        </div>

        <span class="button" v-on:click="evaluate">Evaluate</span>
        <p>The almighty recommends: {{result}}</p>
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

.selected{
    background-color: #525252;

    &:hover {
        background-color: #656565;
    }
}

#app {
    .nav-section {
        scroll-snap-align: start;
        height: 100vh;
    }

    .first-section {
        padding-top: 32px;
        padding-bottom: 50px;
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
