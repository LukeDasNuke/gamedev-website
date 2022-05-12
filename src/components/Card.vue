<script setup>
import image1 from '../assets/firewatch-1.webp';
import image2 from '../assets/firewatch-2.webp';
import image3 from '../assets/firewatch-3.webp';

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
        default: "firewatch.webp",
    },
    id: {
        type: String,
        default: "0",
    }
});

onMounted(()=>{
    if(props.id == "0"){
        usedImage.value = image1;
    }else if(props.id == "1"){
        usedImage.value = image2;
    }else if(props.id == "2"){
        usedImage.value = image3;
    }
});
</script>

<template>
    <div class="card-container">
        <div class="snappy-section card">
            <img :src="usedImage" />
            <h2>{{ props.title }}</h2>
            <p>{{ props.subtitle }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card-container {
    height: 100vh;
    box-sizing: border-box;

    .card {
        scroll-snap-align: center;

        border-radius: 12px;

        width: 25vw;
        margin: 20px;
        background-color: $alt-bg-color;

        word-wrap: break-word;

        img {
            border-top-left-radius: 12px;
            border-top-right-radius: 12px;
            width: 100%;
        }

        h2 {
            padding: 8px 20px;
        }

        p {
            padding: 20px;
            padding-top: 0;
        }

        @include lg-down {
            width: 70vw;
        }
    }
}
</style>
