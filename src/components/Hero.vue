<script setup></script>

<template>
    <div class="hero">
        <img src="../assets/hero.webp" alt="Hero" />
        <div class="hero-content">
            <h1 class="hero-title">Gamedev</h1>
            <p class="hero-subtitle">Gamedev is so gamedev, its crazy really</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.hero {
    padding: 0;
    margin: 0;

    width: 100vw;
    height: calc(100vh - 50px);

    img {
        width: 100%;
        height: 100%;

        padding: 0;
        margin: 0;

        object-fit: cover;
    }

    .hero-content {
        position: absolute;
        top: 50%;
        left: 4%;
        transform: translate(0%, -50%);

        color: white;

        .hero-title {
            font-size: 4rem;
        }
        .hero-subtitle {
            font-size: 1.4rem;
        }
    }
}
</style>
