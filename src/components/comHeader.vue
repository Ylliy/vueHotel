<template>
    <div class="commHeader">
      <router-link to="/">back</router-link>
      <h1>{{title}}</h1>
    </div>
</template>

<script>
    export default {
        data(){
            return {

            }
        },
        props:{
            title:{}
        }
    }
</script>

<style lang="scss">
.commHeader {
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    background-color: #f4f4f4;
    height: 45px;
    border-bottom: #d4d4d4 1px solid;
    line-height: 45px;
    width: 100%;
    z-index: 10;
}

a.router-link-active {
    position:absolute;
    top:0;
    left:0;
}
.commHeader h1 {
    font-size: 14px;
}
</style>