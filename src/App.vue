<template>
  <div id="app">
    <router-view></router-view>

  </div>


</template>

<script>
  export default {
    name: 'app',
    beforeCreate() {
      // if (this.$store.state.cityName == '') {
        var date = JSON.parse(document.cookie.split('=')[1] || '{}');
        this.$store.commit('setSearchInfo', date)
      // }
    }
  }
</script>

<style>
  @font-face {
    font-family: 'tuniu';
    src: url('./assets/fonts/tuniu.eot?g1e9mr');
    src: url('./assets/fonts/tuniu.eot?g1e9mr#iefix') format('embedded-opentype'), url('./assets/fonts/tuniu.ttf?g1e9mr') format('truetype'), url('./assets/fonts/tuniu.woff?g1e9mr') format('woff'), url('./assets/fonts/tuniu.svg?g1e9mr#tuniu') format('svg');
    font-weight: normal;
    font-style: normal
  }
  
  [class^="icon-"],
  [class*=" icon-"] {
    font-family: 'tuniu' !important;
    speak: none;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }
</style>
