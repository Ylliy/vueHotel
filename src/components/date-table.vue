<template>
    <table>
        <th>
    
        </th>
        <tbody>
            <tr>
                <td v-for="w in WEEk">
                    {{w}}
                </td>
            </tr>
            <tr v-for="row in rows">
                <td v-for="data in row">
                    {{data.text}}
                    <span v-if="data.now">今天</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
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
        props: {
            year: {},
            month: {},
            isChinese: {
                type: Boolean,
            }

        },
        computed: {
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
                let rows = [];
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
                            now: false
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
            // toDay(date){
            //     console.log(date)
            //     let toDay = new Date();
            //     if (date.year === toDay.getFullYear() && date.text == toDay.date()){
            //         return true;
            //     }
            //     return false;
            // }

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
</style>

