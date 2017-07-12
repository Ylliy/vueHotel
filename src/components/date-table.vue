<template>
    <table @click="handlerClick">
        <th>
    
        </th>
        <tbody>
            <tr>
                <td v-for="w in WEEk">
                    {{w}}
                </td>
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
    import {getDayCountOfMonth,getFirstDayPosition} from '../util'
    import { mapActions } from 'vuex'
    

    export default {
        // name:"date-table"
        data() {
            return {
                tableRows: [[], [], [], [], [], []],
                
            }
        },
        props: {
            year: {},
            month: {},
            isChinese: {
                type: Boolean,
            },
            minDate:{},
            maxDate:{}

        },
        computed: {
            getMindate(){
                return this.minDate;
            },
            WEEk() {
                return ['日', '一', '二', '三', '四', '五', '六']
            },
            rows() {
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

                        if (day < 1 || day > dayCountOfMonth) {
                            day = null
                        }
                        let cell = {
                            year: year,
                            month,
                            text: day,
                            now: false,
                            isSelect: false,
                            disabled:false,
                        };
                        if (now.getFullYear() === cell.year &&
                            now.getMonth() == cell.month &&
                            now.getDate() === cell.text) {
                            cell.now = true;
                        }
                        row.push(cell)
                    }

                    if (i == 5 && row[0].text == null) {
                        continue;
                    }

                    rows.push(row)

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
                
                console.log('getCellClass');
                // console.log(cell.isSelect);
                if (cell.isSelect) {
                    return ['S']
                } else {
                    return ['W']
                }

            },
            handlerClick(e, a) {
                // debugger;
                console.log(e.target);
                let target = event.target;

                const cellIndex = target.cellIndex;
                const rowIndex = target.parentNode.rowIndex;

                const cell = this.rows[rowIndex - 1][cellIndex];

                cell.isSelect = true;
                console.log(  this.minDate instanceof Object);
                // this.$set(this.minDate, {'text':'123456789'+Math.random()});
                this.getMindate = '123456789'+Math.random();
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
        watch:{
            'minDate.text'(newVal){
                console.log('this is minDate::',newVal,oldVal);
            }
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
    
    .N {
        background: #000;
    }
    
    .S {
        background: red;
    }
</style>

