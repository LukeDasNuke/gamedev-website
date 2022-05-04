<script>

</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss">
:root{
     --ti-cursor-color: #efefef;
}

* {
    margin: 0;
    padding: 0;

    scroll-snap-type: y mandatory;
}

body {
    background-color: $bg-color;
}

#app{
  font-family: $main-fonts;
  color: $font-color;
}
</style>
