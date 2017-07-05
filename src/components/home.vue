<template>
    <div class="home">
        <div class="top-tabs clearfix">
            <router-link to="/" tag="div" class="country-hotel tab-exchange active">
                <a>国内酒店</a>
            </router-link>
            <div class="global-hotel tab-exchange ">
                <a href="https://m.tuniu.com/globalHotel" target="_blank">国际酒店</a>
            </div>
    
        </div>
    
        <div class="search-areas">
            <ul>
                <li class="location">
                    <span class="position">
                        <i class="icon-position"></i>
                        <p>我的位置</p>
                    </span>
    
                    <router-link to="/city" tag="span" class="dest">
                        <em>目的地</em>
                        <div class="">{{city}}</div>
                        <i class="icon-arrow"></i>
                    </router-link>
    
                </li>
    
                <router-link to="/date" tag="li" class="date">
                    <div>日期</div>
                </router-link>
    
                <router-link to="/city" tag="li" class="keywords">
                    <div>关键字/位置/品牌/酒店</div>
                </router-link>
            </ul>
        </div>
        <div @click="add({date:123456})">123123{{this.timeOfCID()}}</div>
        <div @click="show">show</div>
    </div>
</template>
<script>
    import { mapMutations, mapGetters, mapActions } from "vuex"
    export default {
        name: "",
        beforeCreate() {
            // console.log(this.$store);
            // console.log(this.$store.getters.timeOfCID);
            // let da = {date:"2018.6.5"}
            // this.$store.commit('changeCID',da);

            // this.$store.dispatch('changeN',{date:'action-'})
            // if (this.$store.state.cityName =='') {
            //     var date = JSON.parse(document.cookie.split('=')[1]);
            //     this.$store.commit('setSearchInfo', date)
            // }



        },
        created() {

            // this.city = this.$store.getters.getCity
        },
        data() {
            return {
                city: this.$store.getters.getCity,
                checkInDate: this.$store.getters.getCheckIn,
                checkOutDate: this.$store.getters.getCheckOut
            }

        },
        methods: {
            // add(){
            //     console.log(this);
            // },
            ...mapMutations({ add: 'changeCID' }),
            ...mapGetters(['timeOfCID']),
            ...mapActions({ add: ['changeN'] }),
            show() {
                console.log(this.$store)
            }

        },
        mounted() {

        }

    }
</script>

<style lang="scss">
    .home {
    
        .top-tabs {
            width: 100%;
            height: 41px;
        }
    
        .tab-exchange {
            float: left;
            width: 50%;
            text-align: center;
            background-color: #fff;
            padding: 7px 0;
        }
    
        .tab-exchange a {
            display: block;
            color: #666;
            font-size: 16px;
            position: relative;
            padding-right: 10px;
            padding: 5px 0;
            line-height: 1.5rem;
        }
    
        .country-hotel {
            color: #33BD61;
            border-bottom: 2px solid #33BD61;
        }
    
        .global-hotel a {
            border-left: 1px solid #ddd;
            border-width: 0 0 0 1px;
            border-style: solid;
            -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;
            border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;
        }
    
        .tab-exchange.active a {
            color: #33bd61;
        }
    
        .clearfix:after {
            content: "";
            display: block;
            clear: both;
        }
    
        .search-areas {
            background-color: #fff;
            margin-top: 10px;
            width: 100%;
            border-width: 0 0 1px 0;
            border-style: solid;
            -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;
            border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;
        }
        .search-areas li {
            margin: 0 10px;
            overflow: hidden;
            border-width: 0 0 1px 0;
            border-style: solid;
            -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;
            border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;
            color: #999;
        }
        .dest {
            height: 52px;
            display: block;
            line-height: 52px;
            font-size: 12px;
            color: #999;
            position: relative;
            margin-right: 79px;
        }
        .dest div {
            position: absolute;
            top: 50%;
            left: 46px;
            width: 100%;
            transform: translateY(-50%);
            font-size: 18px;
            color: #000;
        }
        i.icon-arrow {
            position: absolute;
            right: 0;
            top: 50%;
            margin-top: -6px;
            color: #d4d4d4;
        }
    
    
        span.position {
            float: right;
            display: inline-block;
            font-size: 12px;
            text-align: center;
            color: #33BD61;
            line-height: 15px;
            margin-top: 8px;
        }
    
        i.icon-position {
            font-size: 24px;
        }
    }
    
    
    .icon-position:before {
        content: '\e628'
    }
    
    .icon-arrow:before {
        content: '\e613'
    }
</style>