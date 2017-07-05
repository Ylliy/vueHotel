<template>
  <div>
    <div v-for="ym in printYear(2017)" :key="ym" class="canlendar">
      <!--<date-table :year="2017" :month="6"></date-table>
        <date-table :year="2017" :month="7"></date-table>
        <date-table :year="2017" :month="8"></date-table>
        <date-table :year="2017" :month="9"></date-table>-->
      <div>{{transformMonth(ym.month)}}月 {{ym.year}}</div>
      <date-table :year="ym.year" :month="ym.month"></date-table>
    </div>
  </div>
</template>

<script>
  import DateTable from './date-table'

  export default {
    data() {
      return {}
    },

    computed: {




    },
    methods: {
      printYear(year) {
        let allMonth = []
        for (let i = 0; i < 12; i++) {
          let cell = {
            year,
            month: i
          }
          allMonth.push(cell)


        }

        return allMonth;

      },
      transformMonth(month) {
        let cMonth = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
        return cMonth[month]
      }
    },
    components: {
      DateTable
    }
  }
</script>