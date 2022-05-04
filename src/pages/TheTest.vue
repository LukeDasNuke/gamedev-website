<script setup>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import Footer from "../components/Footer.vue";
import {onMounted} from "vue";

</script>

<template>
    <section class="snappy-section nav-section">
        <Navbar activeId="1" />
        <Hero title="The Test" subtitle="It's soooo testy, god damn" image="../assets/hero.webp"/>
    </section>

    <Footer class="snappy-section-end"/>
</template>

<style lang="scss">
.button{
    display: block;
    margin: 0 auto;
    padding: 15px 20px;
    border-radius: 12px;
    background-color: $alt-bg-color;
    color: white;
    font-size: 1.25rem;
    text-decoration: none;

    &:hover{
        background-color: #393939;
    }
}

#app {
    .nav-section{
        scroll-snap-align: start;
        height: 100vh;
    }

    .first-section{
        padding-top: 32px;

        display: flex;
        align-items: center;

        height: 100vh;
    }

    .snappy-section{
        box-sizing: border-box;
        scroll-snap-align: start;
        scroll-snap-stop: always;
    }

    .snappy-section-end{
        box-sizing: border-box;
        scroll-snap-align: end;
        scroll-snap-stop: always;
    }
}
</style>