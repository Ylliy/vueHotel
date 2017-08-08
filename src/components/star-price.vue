<template>
    <div v-show="showSP" class="pop-bg" @click.prevent.self="bgClick">
        <div class="star-l-cont">
            <div class="price">
                <p class="title">价格（单选）</p>
                <div class="price-item-cont">
                    <div lowprice="0" highprice="0" class="p-item">不限</div>
                    <div lowprice="0" highprice="150" class="p-item">&yen;150以下</div>
                    <div lowprice="150" highprice="300" class="p-item">￥150-￥300</div>
                    <div lowprice="301" highprice="450" class="p-item">￥301-￥450</div>
                    <div lowprice="451" highprice="600" class="p-item">￥451-￥600</div>
                    <div lowprice="601" highprice="1000" class="p-item">￥601-￥1000</div>
                    <div lowprice="1001" highprice="0" class="p-item">￥1000以上</div>
    
                </div>
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
            bgClick() {
                this.$emit('cgSP', !this.showSP)
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
        display: flex;
    }
    
    .p-item,.s-item  {
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
    
    .p-item select,
    .s-item select{
        border-color: #31A959;
        background: #33BD61;
        color: #fff;
    }
</style>
