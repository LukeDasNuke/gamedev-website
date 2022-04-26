<script setup>
function toggleNavbar() {
    document.getElementById("hamburger").classList.toggle("open");
    document.getElementById("hamburger-container").classList.toggle("open");
    document.getElementById("navbar-mobile").classList.toggle("open");
}
</script>

<template>
    <div class="navbar">
        <div class="navbar-container">
            <p class="navbar-title">Gamedev</p>

            <ul>
                <li><span class="active" href="#">Home</span></li>
                <li><a href="#">Guide</a></li>
                <li><a href="#">Why</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div id="hamburger-container">
                <div id="hamburger" v-on:click="toggleNavbar">
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
            </div>
        </div>

        <div id="navbar-mobile">
            <ul>
                <li><span class="active" href="#">Home</span></li>
                <li><a href="#">Guide</a></li>
                <li><a href="#">Why</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped lang="scss">
$nav-bg-color: #111111;
$font-color: #ffffff;
$secondary-font-color: #dddddd;

@mixin md-down {
    @media (max-width: 800px) {
        @content;
    }
}

@mixin md-up {
    @media (min-width: 799px) {
        @content;
    }
}

@mixin lg-up {
    @media (min-width: 1000px) {
        @content;
    }
}

.navbar {
    font-size: 1rem;
    background-color: $nav-bg-color;
    height: 50px;
    color: $secondary-font-color;

    position: relative;

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.75);

    #navbar-mobile {
        z-index: 98;

        background-color: $nav-bg-color;
        position: fixed;

        top: 0;
        left: 0;

        width: 0;
        height: 100vh;

        display: flex;

        font-size: 1.5rem;

        align-items: center;
        justify-content: center;
        text-align: center;

        transition: width 0.3s ease;

        ul {
            display: flex;
            flex-direction: column;
            margin-left: -100vw;
        }

        @include md-down {
            &.open {
                width: 100vw;
                list-style-type: none;
                overflow-y: hidden;

                ul {
                    margin-left: 0;
                }
            }
        }

        li {
            list-style-type: none;

            .active {
                color: $font-color;
                font-weight: bold;
            }

            a {
                color: $secondary-font-color;
                text-decoration: none;

                &:hover {
                    color: $font-color;
                }
            }

            margin-top: 1rem;
            margin-bottom: 1rem;
        }
    }

    .navbar-container {
        height: 100%;

        margin-left: 2rem;
        margin-right: 2rem;

        @include lg-up {
            margin-left: 5rem;
            margin-right: 5rem;
        }

        display: flex;
        flex-direction: row;
        align-items: center;

        @include md-down {
            ul,
            li {
                display: none;
            }
        }

        ul {
            width: 100%;
            height: 100%;

            display: flex;
            flex-direction: row;
            align-items: center;
        }

        li {
            list-style-type: none;
            margin-left: 1rem;
            margin-right: 1rem;

            .active {
                font-weight: bold;
            }

            a {
                color: $secondary-font-color;
                text-decoration: none;

                &:hover {
                    color: $font-color;
                }
            }
        }
    }

    .navbar-title {
        font-size: 1.6rem;
        font-weight: bold;
        margin-right: 3rem;
    }

    #hamburger-container {
        display: none;
        justify-content: end;
        flex: 1;

        z-index: 99;

        @include md-down {
            display: flex;

            &.open{
                position: fixed;
                top: 12.5px;
                right: 32px;
                overflow-y: hidden;
            }
        }

        #hamburger {

            width: 30px;
            height: 26.25px;
            position: relative;
            transform: rotate(0deg);
            transition: 0.5s ease-in-out;
            cursor: pointer;

            span {
                display: block;
                position: absolute;
                height: 5px;
                width: 100%;
                background: $secondary-font-color;
                border-radius: 5px;
                opacity: 1;
                left: 0;
                transform: rotate(0deg);
                transition: 0.25s ease-in-out;

                &:nth-child(1) {
                    top: 0px;
                }
                &:nth-child(2) {
                    top: 9px;
                }
                &:nth-child(3) {
                    top: 9px;
                }
                &:nth-child(4) {
                    top: 18px;
                }
            }

            &.open span {
                &:nth-child(1) {
                    top: 18px;
                    width: 0%;
                    left: 50%;
                }

                &:nth-child(2) {
                    transform: rotate(45deg);
                }

                &:nth-child(3) {
                    transform: rotate(-45deg);
                }

                &:nth-child(4) {
                    top: 18px;
                    width: 0%;
                    left: 50%;
                }
            }
        }
    }
}
</style>
