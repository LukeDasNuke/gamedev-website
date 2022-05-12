<script setup>
import image1 from '../assets/hero.webp';
import { onMounted, ref } from 'vue';
let usedImage = ref(image1);

const props = defineProps({
    title: {
        type: String,
        default: "Title",
    },
    subtitle: {
        type: String,
        default: "Subtitle",
    },
    image: {
        type: String,
        default: "hero.webp",
    },
    id: {
        type: String,
        default: "0"
    }
});

onMounted(()=>{
    if(props.id == "0"){
        usedImage.value = image1;
    }
});
</script>

<template>
    <div class="hero">
        <img :src="usedImage" alt="Hero" />
        <div class="hero-content">
            <h1 class="hero-title">{{ props.title }}</h1>
            <p class="hero-subtitle">{{ props.subtitle }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.hero {
    padding: 0;
    margin: 0;

    max-width: 100%;

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
