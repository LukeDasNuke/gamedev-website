<script setup>
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
});
</script>

<template>
    <div class="card-container">
        <div class="snappy-section card">
            <img :src="'./src/assets/' + props.image" />
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
