<script setup>

</script>

<template>
    <div class="footer">
        <h2>Gamedev website</h2>
        <ul>
            <li>Link 1</li>
            <span class="divider">|</span>
            <li>Link 2</li>
            <span class="divider">|</span>
            <li>Link 3</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    .footer{
        background-color: $alt-bg-color;
        color: $font-color;
        
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        padding: 20px 0;

        ul{
            margin-top: 15px;
            display: flex;

            li{
                list-style-type: none;
            }
        }

        .divider{
            margin: 0 15px;
        }
    }
</style>