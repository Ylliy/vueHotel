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
    // import Date from './date'


    export default {
        data() {
            return {
                m: '123'
            }
        },
        destroyed() {
            console.group('摧毁完成========================')

            console.log('destroyed')
            console.log('this.$data', this.$data)
            console.log(this.m)
            console.groupEnd()


        },
        created() {
            const context = this;
            setInterval(() => {
                this.$http({
                    method: 'get',
                    url: 'http://127.0.0.1:8081/city',
                    // responseType: 'stream'
                }).then((r) => {
                    console.log(r);
                    console.log(this.m)
                    

                })
            }, 1000)

        },
        computed: {

        },
        methods: {



        },
        components: {
            Date: () => import('./date')
        }
    }
</script>


<style lang="scss">
    .datepick {}
    
    .slide-right-leave-active {
        animation: sli .3s linear;
    }
    
    @keyframes sli {
        0% {
            position: absolute;
            top: 0; // left:0;
            width: 100%;
            transform: translate(0, 0);
        }
        100% {
            position: absolute;
            top: 0; // left:0;
            width: 100%;
            display: none;
            transform: translate(100%, 0);
        }
    }
</style>
