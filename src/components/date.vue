<template>
  <div>
    <div>
      <router-link to="/">back</router-link>
    </div>
  
    <div v-for="ym in printYear(4)" :key="ym" class="canlendar">
  
      <div>{{transformMonth(ym.month)}}月 {{ym.year}}</div>
      <date-table :year="ym.year" :month="ym.month"  @pick="handlerClick"></date-table>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
  import DateTable from './date-table'


  export default {
    data() {
      return {
        nowYear() {
          return new Date().getFullYear();
        },

        // minDate: {},
        // maxDate: {}

      }
    },

    computed: {

    },
    methods: {
      printYear(limit = 0) {
        let allMonth = []
        let i = 0;
        let year = this.nowYear();
        // this.minDate =12333

        i = new Date().getMonth();
        let duration = i;

        for (i; i < duration + limit; i++) {

          let cell = {
            year,
            month: i,
 
          }
          if (i >= 12) {
            cell.year += Math.floor(i / 12);
            cell.month = i % 12;
          }
          allMonth.push(cell)

        }
        console.log(allMonth)
        return allMonth;

      },
      transformMonth(month) {
        let cMonth = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二']
        return cMonth[month]
      },

      handlerClick(e) {
        // debugger;
        console.log('out');
        console.log(e);
        e.isSelect = true;
        
        // if (this.minDate.year == '') {

          // Vue.set(this.minDate ,year,e.year)
          this.minDate = e.year + '-'+e.month+'-'+e.text
          // this.minDate.month = e.month
          // this.minDate.day = e.text
        // }
        // if (this.minDate.year != '' && this.maxDate.year == '') {
        //   this.maxDate.year = e.year;
        //   this.maxDate.month = e.month;
        //   this.maxDate.day = e.text;
        //   console.log(this.$store.getters.allMonth);
        //   this.$store.commit('changeDate', {
        //     minDate: this.minDate,
        //     maxDate: this.maxDate
        //   })

        // }

      },

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
