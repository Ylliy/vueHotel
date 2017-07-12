<template>
    <div class="home">
        <div class="top-tabs">
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
                    <router-link to="/city" tag="span" class="dest">
    
                        <em>目的地</em>
    
                        <div class="">{{city}}</div>
                        <i class="icon-arrow"></i>
                    </router-link>
                    <span class="position">
                        <i class="icon-trip"></i>
                        <p>我的位置</p>
                    </span>
    
                </li>
    
                <router-link to="/datePick" tag="li" class="date">
                    <div class="date-label">
                        <em>日期</em>
                    </div>
                    <div class="in-out-date">
                        <div class="check-date">
                            <div class="check-in">
                                <span>7月11日</span>
                                <em>入住</em>
                            </div>
                            <div class="check-out">
                                <span>7月11日</span>
                                <em>离店</em>
                            </div>
                        </div>
                        <div class="total-night">共1晚</div>
                    </div>
                    <i class="icon-arrow"></i>
    
                </router-link>
    
                <router-link to="/keywords" tag="li" class="keywords">
                    <p class="show">关键字/位置/品牌/酒店名</p>
                    <i class="icon-arrow"></i>
                    <span class="remove hide">
                        <i class="icon-close"></i>
                    </span>
                </router-link>
    
                <li class="star-level">
                    <p class="show">价格/星级</p>
                    <i class="icon-arrow"></i>
                    <span class="remove hide">
                        <i class="icon-close"></i>
                    </span>
                </li>
    
            </ul>
            <a class="search-btn">查询</a>
        </div>
        <div class="bottom-link clearfix">
            <div class="order-link link-item">
                <a href="javascript:;">
                    <span>
                        <label></label> 我的订单</span>
                </a>
            </div>
            <div class="coupon-link link-item">
                <a href="javascript:;">
                    <span>
                        <label></label> 我的优惠券</span>
                </a>
            </div>
        </div>
    
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
    // .home {
    //     .top-tabs {
    //         width: 100%;
    //         height: 41px;
    //     }
    //     .tab-exchange {
    //         float: left;
    //         width: 50%;
    //         text-align: center;
    //         background-color: #fff;
    //         padding: 7px 0;
    //     }
    //     .tab-exchange a {
    //         display: block;
    //         color: #666;
    //         font-size: 16px;
    //         position: relative;
    //         padding-right: 10px;
    //         padding: 5px 0;
    //         line-height: 1.5rem;
    //     }
    //     .country-hotel {
    //         color: #33BD61;
    //         border-bottom: 2px solid #33BD61;
    //     }
    //     .global-hotel a {
    //         border-left: 1px solid #ddd;
    //         border-width: 0 0 0 1px;
    //         border-style: solid;
    //         -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;
    //         border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;
    //     }
    //     .tab-exchange.active a {
    //         color: #33bd61;
    //     }
    //     .clearfix:after {
    //         content: "";
    //         display: block;
    //         clear: both;
    //     }
    //     .search-areas {
    //         background-color: #fff;
    //         margin-top: 10px;
    //         width: 100%;
    //         border-width: 0 0 1px 0;
    //         border-style: solid;
    //         -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;
    //         border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;
    //     }
    //     .search-areas li {
    //         margin: 0 10px;
    //         overflow: hidden;
    //         border-width: 0 0 1px 0;
    //         border-style: solid;
    //         -webkit-border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;
    //         border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;
    //         color: #999;
    //     }
    //     .dest {
    //         height: 52px;
    //         display: block;
    //         line-height: 52px;
    //         font-size: 12px;
    //         color: #999;
    //         position: relative;
    //         margin-right: 79px;
    //     }
    //     .dest div {
    //         position: absolute;
    //         top: 50%;
    //         left: 46px;
    //         width: 100%;
    //         transform: translateY(-50%);
    //         font-size: 18px;
    //         color: #000;
    //     }
    //     i.icon-arrow {
    //         position: absolute;
    //         right: 0;
    //         top: 50%;
    //         margin-top: -6px;
    //         color: #d4d4d4;
    //     }
    //     span.position {
    //         float: right;
    //         display: inline-block;
    //         font-size: 12px;
    //         text-align: center;
    //         color: #33BD61;
    //         line-height: 15px;
    //         margin-top: 8px;
    //     }
    //     i.icon-position {
    //         font-size: 24px;
    //     }
    // }
    .top-tabs {
        display: flex;
        text-align: center;
        justify-content: flex-start;
        height: 41px;
        font-size: 16px;
        background: #fff;
        align-items: center;
    }
    
    .top-tabs:after {
        content: '';
        display: block;
        width: 1px;
        order: 2;
        height: 24px; // background: #f0f0f0;
        background-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7);
    }
    
    .country-hotel {
        flex-basis: 50%;
        height: 39px;
        order: 1;
    }
    
    .global-hotel {
        flex-basis: 50%;
        height: 39px;
        order: 3;
    }
    
    .tab-exchange {
        line-height: 41px;
    }
    
    .tab-exchange.active {
        border-bottom: 2px solid #58c97e;
    }
    
    .tab-exchange a {
        color: #666;
        width: 100%;
        display: block;
        height: 100%;
    }
    
    
    
    .tab-exchange.active a {
        color: #33bd61;
    }
    
    .search-areas .remove {
    
        font-size: 22px;
        padding-left: 20px;
        height: 53px;
        line-height: 53px;
        border: none;
        color: #33BD61;
    }
    
    
    .search-areas ul {
        padding: 0 10px;
    }
    
    .search-areas ul li {
        border-bottom: 1px solid;
        border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;
    }
    
    .search-areas {
        margin-top: 10px;
        background: #fff;
        border-bottom: 1px solid;
        border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;
    }
    
    .location {
        height: 52px;
        display: flex;
        border-bottom: 1px solid;
        border-image: url(data:image/gif;base64,R0lGODlhBQAFAIABAN3d3f///yH5BAEAAAEALAAAAAAFAAUAAAIHhB9pGatnCgA7) 2 stretch;
    }
    
    
    span.position {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        color: #33BD61;
        text-align: center;
        align-items: center;
        align-content: center;
        font-size: 12px;
    }
    
    span.dest {
        flex-grow: 10;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    
    span.dest div {
        flex-grow: 1;
        font-size: 18px;
    }
    
    span.dest em {
        margin-right: 10px;
        font-size: 12px;
        color: #999;
    }
    
    i.icon-arrow {
        color: #999;
    }
    
    
    i.icon-trip {
        font-size: 24px;
        text-align: center;
        margin-top: 5px;
    }
    
    
    
    .date {
        height: 80px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
    .in-out-date {
        flex-grow: 1;
        display: flex;
        align-items: center;
    }
    
    .date em {
        font-size: 12px;
        color: #999;
    }
    
    .date-label {
        flex-basis: 12%;
    }
    
    .in-out-date {
        height: 80px;
    }
    
    .check-in,
    .check-out {
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        color: #333;
    }
    
    
    
    .check-date {
        margin-right: 9.8%;
    }
    
    .check-date em {
        margin-left: 12px;
        vertical-align: middle;
    }
    
    .total-day {
        font-size: 18px;
        color: #333;
    }
    
    .total-night {
        font-size: 18px;
        color: #333;
    }
    
    
    li.keywords,
    .star-level {
        height: 52px;
        display: flex;
        align-items: center;
        align-content: center;
    }
    
    p.show {
        font-size: 18px;
        color: #999;
        flex-grow: 1;
        height: 52px;
        line-height: 52px;
    }
    
    a.search-btn {
        margin: 10px;
        background-color: #FCA542;
        color: #fff;
        display: block;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 18px;
        border-radius: 3px;
    }
</style>