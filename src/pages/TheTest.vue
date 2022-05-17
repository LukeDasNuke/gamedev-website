<script setup>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import { ref, watch } from "vue";

let options = {
    simple_game_engine: 0,
    unity: 0,
    unreal: 0,
    cpp: 0,
    python: 0,
    cs_framework: 0,
};

let option_names = ["a simple game engine", "Unity", "Unreal Engine", "C++", "Python", "a C# framework"];

let result = ref("");
let text = ref("");

watch(result, async (newResult) => {
    switch (newResult) {
        case option_names[0]:
            text.value =
                "Your best bet would be a simple game engine, such as Godot Engine or Game Maker Studio. Your game scope isn't that big, so something a little bit more barebones would probably fit your needs the best!";
            break;
        case option_names[1]:
            text.value =
                "Your best bet would be Unity. It's really versatile and can be used to make practically any game you could imagine. It's also really widely used and battle tested, with games such as Rust and Firewatch being made with it.";
            break;
        case option_names[2]:
            text.value =
                "Your best bet would be Unreal Engine. It's an advanced game engine for 3D games which require great visuals, and for that it's really unmatched. The engine supports both C++ and a visual scripting language for the coding part, so if you don't feel comfortable with C++ you could use it with the visual scripting to begin with and maybe move on in the future!";
            break;
        case option_names[3]:
            text.value =
                "Your best bet would be C++. It's a great language for game development, and it's also a great language for game development when you want more control over the hardware and the inner workings of the game. All the major game engines also use C++ for their engine.";
            break;
        case option_names[4]:
            text.value =
                "Your best bet would be a game framework, such as MonoGame, LibGDX or Cocos2Dx! These are all great, battle tested game frameworks that don't require an editor but still simplify the game development process a lot, without the unneccessary bloat of the major game engines.";
            break;
    }
});

function answer(question_id, answer_id, names, values) {
    let parent = document.getElementById("q" + question_id);
    let element = parent.childNodes[answer_id + 1];

    for (let i = 1; i < parent.childNodes.length; i++) {
        if (i != answer_id + 1 && parent.childNodes[i].classList.contains("selected")) {
            parent.childNodes[i].click();
        }
    }

    if (element.classList.contains("selected")) {
        element.classList.remove("selected");
        for (let i = 0; i < names.length; i++) {
            options[names[i]] -= values[i];
            console.log(names[i] + ": " + options[names[i]]);
        }
    } else {
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
    result.value = option_names[Object.keys(options).findIndex((e) => e == best_fit[0])];
    console.log(best_fit[0]);
}
</script>

<template>
    <section class="snappy-section nav-section">
        <Navbar activeId="1" />
        <Hero title="The Test" subtitle="It's soooo testy, god damn" image="../assets/hero.webp" />
    </section>

    <section class="snappy-section first-section">
        <div class="question-section">
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
                <span class="button" v-on:click="answer(3, 0, ['cpp', 'unity', 'unreal', 'cs_framework', 'simple_game_engine'], [1, 1, 1, 1, -1])">Yes</span>
                <span class="button" v-on:click="answer(3, 1, ['unity', 'unreal', 'python', 'cs_framework'], [1, 1, 1, 1])">Kind of</span>
                <span class="button" v-on:click="answer(3, 2, ['cpp', 'simple_game_engine'], [-5, 2])">Nope</span>
            </div>

            <div class="question" id="q4">
                <p class="question-text">Is the scope of your game big?</p>
                <span class="button" v-on:click="answer(4, 0, ['unreal', 'unity'], [2, 2])">Yes</span>
                <span class="button" v-on:click="answer(4, 1, ['simple_game_engine', 'python', 'cs_framework'], [2, 2, 2])">No</span>
            </div>

            <div class="question" id="q5">
                <p class="question-text">Do you want an editor?</p>
                <span class="button" v-on:click="answer(5, 0, ['unreal', 'unity', 'simple_game_engine'], [4, 4, 4])">Yes</span>
                <span class="button" v-on:click="answer(5, 1, [], [])">I don't care</span>
                <span class="button" v-on:click="answer(5, 2, ['unreal', 'unity', 'simple_game_engine', 'cs_framework'], [-6, -6, -6, 3])">No</span>
            </div>
            <span class="button" v-on:click="evaluate">Evaluate</span>
        </div>
        <div class="evaluation-section">
            <img src="../assets/hero.webp" title="hollowknightgame.com" alt="image of the tool"/>
            <p>{{ text }}</p>
        </div>
    </section>

    <Footer class="snappy-section-end" />
</template>

<style lang="scss" scoped>
.question-section {
    margin-left: 2rem;
    margin-right: 2rem;

    background-color: #333333;
    padding: 20px;
    border-radius: 0.5rem;
}

.evaluation-section {
    margin-left: 2rem;
    margin-right: 2rem;
    img {
        width: 50vw;
        border-radius: 0.5rem;
    }

    p{
        width: 50vw;
    }
}

.first-section {
    padding-top: 32px;
    padding-bottom: 50px;
    display: flex;

    @include lg-down {
        flex-direction: column;
        margin: 4rem;

        .evaluation-section {
            margin-top: 2rem;
            img {
                width: 100%;
            }
        }
    }
}

.question {
    margin-top: 20px;
    margin-bottom: 20px;
}

.button {
    display: inline-block;
    margin: 0 auto;
    margin-right: 1rem;
    padding: 8px 10px;
    border-radius: 12px;
    background-color: $alt-bg-color;
    color: white;
    text-decoration: none;

    &:hover {
        background-color: #393939;
    }
}

.selected {
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
