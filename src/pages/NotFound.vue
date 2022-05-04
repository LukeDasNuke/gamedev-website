<script setup>
import {onMounted, ref} from "vue";

let counter = ref(20);
let color = ref("white");

onMounted(() => {
    let interval = setInterval(() => {
        if (counter.value === 0) {
            clearInterval(interval);  
            window.location.replace("https://www.youtube.com/watch?v=xvFZjo5PgG0");            
        } else {
            counter.value--;
            if(counter.value === 3) {
                color.value = "red";
            }
        }             
    }, 1000)
});
</script>


<template>
<div class="container">
    <div class="content">
        <p class="el">&#60;!DOCTYPE <span class="attrib">html</span>&#62;</p>
        <p class="el">&#60;head&#62;</p>
            <p><span class="el">&nbsp;&nbsp;&nbsp;&nbsp;&#60;title&#62;</span>404?! Seems scary...<span class="el">&#60;/title&#62;</span></p>
        <p class="el">&#60;/head&#62;</p>
        <br>
        <p class="el">&#60;body&#62;</p>
            <p class="comment">&nbsp;&nbsp;&nbsp;&nbsp;&#60;!-- This code is to be taken very seriously --&#62;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="el">&#60;h1&#62;</span>You seem to be lost...<span class="el">&#60;/h1&#62;</span></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="el">&#60;h2</span><span> <span class="attrib"> class</span><span class="reg">=</span><span class="str">"dreadful-message"</span>&#62;</span>This page you're looking for...<span class="el">&#60;/h2&#62;</span></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="el">&#60;p&#62;</span>It's taken you down a dark and dangerous path...<span class="el">&#60;/p&#62;</span></p>
            <br>
            <p class="comment">&nbsp;&nbsp;&nbsp;&nbsp;&#60;!-- Oh dear god, STOP READING!!! --&#62;</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="el">&#60;p<span> <span class="attrib"> class</span><span class="reg">=</span><span class="str">"warning"</span></span>&#62;</span>You should leave now... while you still can &#62;:)<span class="el">&#60;/p&#62;</span></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;<span class="el">&#60;a<span> <span class="attrib"> href</span><span class="reg">=</span><span class="str">"<router-link class="link" :to="{name: 'home'}">../index.html</router-link>"</span></span>&#62;</span>Time is running out... <span :style="'color: ' + color">{{counter}}s</span><span class="el">&#60;/a&#62;</span></p>
        <p class="el">&#60;/body&#62;</p>
    </div>
</div>
</template>


<style lang="scss" scoped>
    .container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
    }

    .content{
        background-color: #21272c;
        
        box-shadow: 0 0 20px rgba(39, 39, 39, 0.5);

        border-radius: 10px;
        padding: 35px;

        width: min(800px, calc(100% - 150px));
        display: flex;
        flex-direction: column;
        justify-content: center;

        font-family: $mono-font;
        font-variant-ligatures: none;

        @include lg-down{
            padding-left: 10px;
            padding-right: 10px;
        }
    }

    p{
        font-size: 1.125rem;

        @include lg-down{
            font-size: 1rem;
        }

        @include md-down{
            font-size: 0.9rem;
        }

        @include sm-down{
            font-size: 0.8rem;
        }
    }

    .el{color: #efbc3d;}
    .attrib{color: #fad985;}
    .comment{color: #b6b6b6;}
    .reg{color: #ffffff;}
    .str{color: #81b671;}

    .link{
        color: #81b671;        
        text-decoration: none;

        &:hover{
            color: #5f914f;
            text-decoration: underline;
        }
    }
</style>