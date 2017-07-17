<template>
    <table @click="handlerClick">
        <th>
    
        </th>
        <tbody>
            <tr class="week">
                <th v-for="w in WEEk">
                    {{w}}
                </th>
            </tr>
            <tr v-for="row in rows">
                <td v-for="cell in row" :class="getCellClass(cell)">
                    {{cell.text}}
                    <span v-if="cell.now">今天</span>
                </td>
            </tr>
        </tbody>
    
        <div>
    
        </div>
    </table>
</template>

<script>
    import Vue from 'vue'
    import { getDayCountOfMonth, getFirstDayPosition } from '../util'
    import { mapActions } from 'vuex'


    export default {
        // name:"date-table"
        beforeCreate() {
            window.tmp1 = this;
        },
        data() {
            return {
                tableRows: [[], [], [], [], [], []],

                selectDate:[],

            }
        },
        props: {
            year: {},
            month: {},

            startDate: {},
            endDate: {}

        },
        computed: {
            // getMindate() {
            //     return this.minDate;
            // },
            WEEk() {
                return ['日', '一', '二', '三', '四', '五', '六']
            },
            rows() {
                console.log('********************')
                let now = new Date();
                let year = this.year;
                let month = this.month
                let dayCountOfMonth = getDayCountOfMonth(year, month);

                let firstDayPostion = getFirstDayPosition(year, month);

                let offSetDay = firstDayPostion - 1;
                let rows = this.tableRows;
                for (let i = 0; i < 6; i++) {
                    let row = [];
                    for (let j = 0; j < 7; j++) {
                        let day = (i * 7) + j - offSetDay;
                        let disable = true;
                        if (day < 1 || day > dayCountOfMonth) {
                            day = null;
                        }
                        if ((now.getTime() - 24 * 3600 * 1000) <= new Date(year, month, day || 1).getTime() && day) {
                            disable = false;
                        }

                        let cell = {
                            year: year,
                            month,
                            text: day,
                            now: false,
                            isSelect: false,
                            disabled: false || disable,
                            startDate: false,
                            endDate: false
                        };



                        if(this.startDate == this.year + '-' + (this.month + 1) +'-'+ day){

                            cell.startDate = true ;
                            cell.isSelect = true;
                        }
                        
                        if(this.endDate == this.year + '-' + (this.month + 1) +'-'+ day){
                            cell.startDate = true ;
                            cell.isSelect = true;
                        }
                        if (now.getFullYear() === cell.year &&
                            now.getMonth() == cell.month &&
                            now.getDate() === cell.text) {
                            cell.now = true;
                        }
                        if (i == 5 && j == 0 && cell.text == null) {
                            break;
                        }
                        rows[i].push(cell)
                    }


                    // rows.push(row)

                }

                return rows;


                /*
                 *
                 *computer 内的方法在依赖未改变是不会更新,及更改rows不触发computer执行,
                 *但视图依赖getCellClass和rows,当这两个数据跟新时会触发methods变化。
                 *
                 *
                 */







            },

        },
        methods: {

            getCellClass(cell) {

                if (cell.isSelect && !cell.disabled) {
                    return ['S']
                } else {
                    return ['W']
                }

            },
            handlerClick(e, a) {

                console.log(e.target);
                let target = event.target;

                const cellIndex = target.cellIndex;
                const rowIndex = target.parentNode.rowIndex;

                const cell = this.rows[rowIndex - 1][cellIndex];

                cell.isSelect = true;
                // console.log(this.minDate instanceof Object);
                // this.$set(this.minDate, {'text':'123456789'+Math.random()});
                // this.getMindate = '123456789' + Math.random();

                if (cell.disabled) {
                    return false;
                }
                this.$emit('pick', cell);

                //提交更改到vuex
                // this.$store.commit('changeDate', {
                //     minDate: cell,
                //     maxDate: this.maxDate
                // })


                // console.log(this.minDate);
                // if ()
                // this.$store.commit('changeDate',{
                //     minDate:{
                //         year:cell.year,
                //         month:cell.month,
                //         day : cell.text
                //     },
                //     maxDate:{
                //         year:cell.year,
                //         month:cell.month,
                //         day : cell.text
                //     }
                // })
                console.log('这是table')
            }

        },
        watch: {

        }
    }
</script>


<style>
    td {
        text-align: center;
        height: 40px;
        vertical-align: middle;
        border: none;
        font-size: 1.5rem;
        color: #000;
        width: 14.3%;
        font-family: "Arial";
        background-color: #fff;
    }
    
    .week th {
        text-align: center;
        height: 24px;
        vertical-align: middle;
        background: #dfdfdf;
        font-size: 1.2rem;
        color: #666;
    }
    
    .N {
        background: #000;
    }
    
    .S {
        background: red;
    }
</style>

