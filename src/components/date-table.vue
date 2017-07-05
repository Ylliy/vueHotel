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
            month: {}


        },
        computed: {
            WEEk() {
                return ['日', '一', '二', '三', '四', '五', '六']
            },
            rows() {
                let now = new Date();
                // let year = now.getFullYear();
                // let month = now.getMonth();
                let year = this.year;
                let month = this.month
                let dayCountOfMonth = getDayCountOfMonth(year, month);

                let firstDayPostion = getFirstDayPosition(year, month);

                console.log({ dayCountOfMonth, firstDayPostion });

                // firstDayPostion = (firstDayPostion === 0 ? 7 : firstDayPostion);
                let offSetDay = firstDayPostion - 1;
                let rows = [];
                for (let i = 0; i < 6; i++) {
                    let row = [];
                    for (let j = 0; j < 7; j++) {
                        let day = (i * 7) + j - offSetDay;

                        if (day < 1 || day > dayCountOfMonth) {
                            day = ''
                        }
                        // if () {
                        //     continue
                        // }
                        let cell = { text: day }


                        row.push(cell)
                    }

                    if (i == 5 && row[0].text == '') {
                        continue;
                    }




                    rows.push(row)

                }

                return rows;








                // let date = [
                //     [{ "row": 0, "column": 0, "type": "prev-month", "inRange": true, "start": false, "end": false, "text": 25, "disabled": false }, { "row": 0, "column": 1, "type": "prev-month", "inRange": true, "start": false, "end": false, "text": 26, "disabled": false }, { "row": 0, "column": 2, "type": "prev-month", "inRange": true, "start": false, "end": false, "text": 27, "disabled": false }, { "row": 0, "column": 3, "type": "prev-month", "inRange": true, "start": false, "end": false, "text": 28, "disabled": false }, { "row": 0, "column": 4, "type": "prev-month", "inRange": true, "start": false, "end": true, "text": 29, "disabled": false }, { "row": 0, "column": 5, "type": "prev-month", "inRange": false, "start": false, "end": false, "text": 30, "disabled": false }, { "row": 0, "column": 6, "type": "normal", "inRange": false, "start": false, "end": false, "text": 1, "disabled": false }],
                //     [{ "row": 1, "column": 0, "type": "normal", "inRange": false, "start": false, "end": false, "text": 2, "disabled": false }, { "row": 1, "column": 1, "type": "normal", "inRange": false, "start": false, "end": false, "text": 3, "disabled": false }, { "row": 1, "column": 2, "type": "normal", "inRange": false, "start": false, "end": false, "text": 4, "disabled": false }, { "row": 1, "column": 3, "type": "normal", "inRange": false, "start": false, "end": false, "text": 5, "disabled": false }, { "row": 1, "column": 4, "type": "normal", "inRange": false, "start": false, "end": false, "text": 6, "disabled": false }, { "row": 1, "column": 5, "type": "normal", "inRange": false, "start": false, "end": false, "text": 7, "disabled": false }, { "row": 1, "column": 6, "type": "normal", "inRange": false, "start": false, "end": false, "text": 8, "disabled": false }],
                //     [{ "row": 2, "column": 0, "type": "normal", "inRange": false, "start": false, "end": false, "text": 9, "disabled": false }, { "row": 2, "column": 1, "type": "normal", "inRange": false, "start": false, "end": false, "text": 10, "disabled": false }, { "row": 2, "column": 2, "type": "normal", "inRange": false, "start": false, "end": false, "text": 11, "disabled": false }, { "row": 2, "column": 3, "type": "normal", "inRange": false, "start": false, "end": false, "text": 12, "disabled": false }, { "row": 2, "column": 4, "type": "normal", "inRange": false, "start": false, "end": false, "text": 13, "disabled": false }, { "row": 2, "column": 5, "type": "normal", "inRange": false, "start": false, "end": false, "text": 14, "disabled": false }, { "row": 2, "column": 6, "type": "normal", "inRange": false, "start": false, "end": false, "text": 15, "disabled": false }],
                //     [{ "row": 3, "column": 0, "type": "normal", "inRange": false, "start": false, "end": false, "text": 16, "disabled": false }, { "row": 3, "column": 1, "type": "normal", "inRange": false, "start": false, "end": false, "text": 17, "disabled": false }, { "row": 3, "column": 2, "type": "normal", "inRange": false, "start": false, "end": false, "text": 18, "disabled": false }, { "row": 3, "column": 3, "type": "normal", "inRange": false, "start": false, "end": false, "text": 19, "disabled": false }, { "row": 3, "column": 4, "type": "normal", "inRange": false, "start": false, "end": false, "text": 20, "disabled": false }, { "row": 3, "column": 5, "type": "normal", "inRange": false, "start": false, "end": false, "text": 21, "disabled": false }, { "row": 3, "column": 6, "type": "normal", "inRange": false, "start": false, "end": false, "text": 22, "disabled": false }],
                //     [{ "row": 4, "column": 0, "type": "normal", "inRange": false, "start": false, "end": false, "text": 23, "disabled": false }, { "row": 4, "column": 1, "type": "normal", "inRange": false, "start": false, "end": false, "text": 24, "disabled": false }, { "row": 4, "column": 2, "type": "normal", "inRange": false, "start": false, "end": false, "text": 25, "disabled": false }, { "row": 4, "column": 3, "type": "normal", "inRange": false, "start": false, "end": false, "text": 26, "disabled": false }, { "row": 4, "column": 4, "type": "normal", "inRange": false, "start": false, "end": false, "text": 27, "disabled": false }, { "row": 4, "column": 5, "type": "normal", "inRange": false, "start": false, "end": false, "text": 28, "disabled": false }, { "row": 4, "column": 6, "type": "normal", "inRange": false, "start": false, "end": false, "text": 29, "disabled": false }],
                //     [{ "row": 5, "column": 0, "type": "normal", "inRange": false, "start": false, "end": false, "text": 30, "disabled": false }, { "row": 5, "column": 1, "type": "normal", "inRange": false, "start": false, "end": false, "text": 31, "disabled": false }, { "row": 5, "column": 2, "type": "next-month", "inRange": false, "start": false, "end": false, "text": 1, "disabled": false }, { "row": 5, "column": 3, "type": "next-month", "inRange": false, "start": false, "end": false, "text": 2, "disabled": false }, { "row": 5, "column": 4, "type": "next-month", "inRange": false, "start": false, "end": false, "text": 3, "disabled": false }, { "row": 5, "column": 5, "type": "next-month", "inRange": false, "start": false, "end": false, "text": 4, "disabled": false }, { "row": 5, "column": 6, "type": "next-month", "inRange": false, "start": false, "end": false, "text": 5, "disabled": false }]
                // ]
                // return date

            }

        },
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

