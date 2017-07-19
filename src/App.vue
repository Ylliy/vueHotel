<template>
  <div id="app" class="app">
    <router-view></router-view>
  
  </div>
</template>

<script>
import {setCookie,getCookie} from './util'
  export default {
    name: 'app',
    beforeCreate() {
      // if (this.$store.state.cityName == '') {
      let date = new Date();
      let nextDate = new Date((date.getTime() + 3600 * 24 * 1000));
      let sdate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
      let snextdate = nextDate.getFullYear() + '-' + (nextDate.getMonth() + 1) + '-' + nextDate.getDate();
      let payload = {
        checkIn: sdate,
        checkOut: snextdate
      }
      var data = JSON.parse(document.cookie.split('=')[1] || JSON.stringify(payload));
      this.$store.commit('setSearchInfo', data);

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
  .app {
    position: relative;
  }
</style>
