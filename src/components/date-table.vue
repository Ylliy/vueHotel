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
            {{test}}
        </div>
    </table>
</template>

<script>
    import Vue from 'vue'
    import { mapActions } from 'vuex'
    function getDayCountOfMonth(year, month) {
        if (month === 3 || month === 5 || month === 8 || month === 10) {
            return 30;
        }

        if (month === 1) {
            if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
                return 29;
            } else {
                return 28;
            }
        }

        return 31;
    };

    function getFirstDayPosition(year, month) {
        let firstDay = new Date(year, month, 1);

        return firstDay.getDay();
    }

    export default {
        // name:"date-table"
        data() {
            return {
                tableRows: [[], [], [], [], [], []]
            }
        },
        props: {
            year: {},
            month: {},
            isChinese: {
                type: Boolean,
            },
            test: '',
            minDate: {}

        },
        computed: {
            WEEk() {
                return ['日', '一', '二', '三', '四', '五', '六']
            },
            rows() {
                console.log(this.minDate);
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
                            isSelect: false
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

