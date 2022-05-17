<script setup></script>

<template>
    <div class="footer">
        <h2>Gamedev website</h2>
        <ul>
            <li><router-link :to="{ name: 'home' }" id="nav-0">Home</router-link></li>
            <span class="divider">|</span>
            <li><router-link :to="{ name: 'the-test' }" id="nav-1">The test</router-link></li>
            <span class="divider">|</span>
            <li><router-link :to="{ name: '' }" id="nav-2">Why</router-link></li>
            <span class="divider">|</span>
            <li><router-link :to="{ name: '' }" id="nav-3">Contact</router-link></li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
a {
    color: white;
    text-decoration: none;

    &:hover {
        color: #d6d6d6;
    }
}

.footer {
    background-color: $alt-bg-color;
    color: $font-color;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;

    padding: 20px 0;

    ul {
        margin-top: 15px;
        display: flex;

        li {
            list-style-type: none;
        }
    }

    .divider {
        margin: 0 15px;
    }
}
</style>
