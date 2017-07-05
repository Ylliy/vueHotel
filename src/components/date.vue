<template>
  <div>
    <div v-for="ym in printYear(19)" :key="ym" class="canlendar">
  
      <div>{{transformMonth(ym.month)}}月 {{ym.year}}</div>
      <date-table :year="ym.year" :month="ym.month"></date-table>
    </div>
  </div>
</template>

<script>
  import DateTable from './date-table'

  export default {
    data() {
      return {
        nowYear() {
          return new Date().getFullYear();
        },
      }
    },

    computed: {

    },
    methods: {
      printYear( limit = 0) {
        let allMonth = []
        let i = 0;
        let year = this.nowYear();


        i = new Date().getMonth();
        let duration = i;

        for (i; i < duration + limit; i++) {
          
          let cell = {
            year,
            month: i
          }
          if (i >= 12) {
            cell.year += Math.floor(i/12);
            cell.month = i%12;
          }
          allMonth.push(cell)

        }
        console.log(allMonth)
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


<style lang="scss">
  .canlendar {
    width: 100%;
    table {
      width: 100%;
    }
  }
</style>
