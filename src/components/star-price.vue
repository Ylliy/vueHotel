<template>
    <div v-show="showSP" class="pop-bg" @click.prevent.self="bgClick">
        <div class="star-l-cont">
            <div class="price">
                <p class="title">价格（单选）</p>
                <ul class="price-item-cont" @click="selectPrice($event,'asdasd')">
                    <!-- <li lowprice="0" highprice="0" class="p-item">不限</li>
                        <li lowprice="0" highprice="150" class="p-item">&yen;150以下</li>
                        <li lowprice="150" highprice="300" class="p-item">￥150-￥300</li>
                        <li lowprice="301" highprice="450" class="p-item">￥301-￥450</li>
                        <li lowprice="451" highprice="600" class="p-item">￥451-￥600</li>
                        <li lowprice="601" highprice="1000" class="p-item">￥601-￥1000</li>
                        <li lowprice="1001" highprice="0" class="p-item">￥1000以上</li> -->
                    <li class="p-item" v-for="ob in dataPrice" :class="getSelect(ob)">{{ob.text}}</li>
                </ul>
            </div>
            <div class="star">
                <p class="title">星级（复选）</p>
                <div class="star-item-cont">
                    <div class="s-item" star="">不限</div>
                    <div class="s-item" star="4000">二星及以下/经济</div>
                    <div class="s-item" star="6000,5000">三星/舒适</div>
                    <div class="s-item" star="8000,7000">四星/高档</div>
                    <div class="s-item" star="10000,9000">五星/豪华</div>
                </div>
    
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'star-price',
        beforeCreate() {
            window.spT = this;
        },
        data() {
            return {
                showSP: this.showStats,
                dataPrice: [
                    {
                        text: '不限',
                        lowPrice: '0',
                        highPrice: '0',
                        selected: true
                    },
                    {
                        text: '￥150以下',
                        lowPrice: '0',
                        highPrice: '150',
                        selected: false
                    },
                    {
                        text: '￥150-￥300',
                        lowPrice: '150',
                        highPrice: '300',
                        selected: false
                    },
                    {
                        text: '￥301-￥450',
                        lowPrice: '301',
                        highPrice: '450',
                        selected: false
                    },
                    {
                        text: '￥451-￥600',
                        lowPrice: '451',
                        highPrice: '600',
                        selected: false
                    },
                    {
                        text: '￥601-￥1000',
                        lowPrice: '601',
                        highPrice: '1000',
                        selected: false
                    },
                    {
                        text: '￥1000以上',
                        lowPrice: '1001',
                        highPrice: '0',
                        selected: false
                    }
                ]


            }
        },
        props: {
            showStats: {
                default: false,
            }
        },
        computed: {

        },
        methods: {
            getSelect(ob) {

                if (ob.selected)
                    return 'select'
            },
            bgClick() {
                this.$emit('cgSP', !this.showSP)
            },
            selectPrice(e, a) {
                // console.log(e, a)
                if (e.target.nodeName == 'LI'){
                    for (let ob in this.dataPrice) {
                        var data = this.dataPrice[ob]

                        if (e.target.innerText == data.text) {
                            data.selected = true;
                        }
                        else {
                            data.selected = false;
                        }

                    }

                }
            }
        },
        watch: {
            showStats(nV, oV) {
                this.showSP = nV;

            },
        }

    }
</script>
<style >
    .pop-bg {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
    }
    
    .star-l-cont {
        position: absolute;
        bottom: 0;
        background: #fff;
        padding: 0 5px 20px;
    }
    
    .price-item-cont {
        /* display: flex; */
    }
    
    .p-item {
        font-size: 12px;
        color: #666;
        display: inline-block;
        width: 25%;
        border: 1px solid #d4d4d4;
        border-right: none;
        box-sizing: border-box;
        text-align: center;
        height: 40px;
        line-height: 40px;
        margin-top: 10px;
        overflow: hidden;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    
    .price,
    .star {
        margin-top: 20px;
    }
    
    .title {
        font-size: 14px;
        color: #333;
    }
    
    .price-star li.on {
        border-color: #31A959;
        background: #33BD61;
        color: #fff;
    }
    
    .p-item.select {
        border-color: #31A959;
        background: #33BD61;
        color: #fff;
    }
</style>
