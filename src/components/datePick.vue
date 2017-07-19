<template>
    <transition name="slide-right">
        <div class="datepick">
            <div>
                <router-link to="/">back</router-link>
            </div>
    
            <date></date>
        </div>
    </transition>
</template>

<script>
    import Vue from 'vue'
    import Date from './date'


    export default {
        data() {
            return {

            }
        },

        computed: {

        },
        methods: {



        },
        components: {
            Date
        }
    }
</script>


<style lang="scss">
    .datepick {
        position: absolute;
        top: 0;
        left:0;
        width: 100%
    }
    .slide-right-leave-active {
        animation: sli .5s ease;
    }
    
    @keyframes sli {
        0% {
            transform: translate(0, 0);
        }
        100% {
            display: none;
            transform: translate(100%, 0);
        }
    }
</style>
