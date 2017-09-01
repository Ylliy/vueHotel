<template>
  <div class="allcalen">
    <!--<div>
                          <router-link to="/">back</router-link>
                        </div>-->
  
    <div v-for="ym in printYear(4)" :key="ym" class="canlendar">
  
      <div class="table-header">{{transformMonth(ym.month)}}月&nbsp;&nbsp;&nbsp;&nbsp;{{ym.year}}</div>
      <date-table :year="ym.year" :month="ym.month" @pick="handlerClick" :startDate="startDate" :endDate="endDate" :limitDay="limitDay"></date-table>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import DateTable from './date-table'
  import {formateDate,compareTime,compareTimeLimit} from '../util'
  // function formateDate(date) {
  //   return date.year + '-' + (date.month + 1) + '-' + date.text
  // }

  // function compareTime(t1, t2) {
  //   let time1 = new Date(t1).getTime();
  //   let time2 = new Date(t2).getTime();

  //   return time1 >= time2;
  // }

  export default {
    beforeCreate() {

    },
    data() {
      return {
        nowYear() {
          return new Date().getFullYear();
        },
        selectDate: [this.$store.getters.getCheckIn, this.$store.getters.getCheckOut],
        startDate: '' || this.$store.getters.getCheckIn,
        endDate: '' || this.$store.getters.getCheckOut
      }
    },
    props:{
      limitDay:{}
    },

    computed: {
      // selectDate(){
      //   return [this.startDate,this.endDate]
      // }
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

      handlerClick(e, a) {
        // debugger;
        console.log('执行pic');
        console.log(e);
        if (this.selectDate.length == 0) {

          this.selectDate.push(formateDate(e));
        } else if (this.selectDate.length == 1) {
          if (compareTime(formateDate(e), this.selectDate[0])) {
            if (compareTimeLimit(this.selectDate[0],formateDate(e),this.limitDay)){
              return ;
            }
            this.selectDate.push(formateDate(e));
            this.startDate = this.selectDate[0];
            this.endDate = this.selectDate[1];

            this.$store.commit('changeDate', this.selectDate);

            setTimeout(function(){

            history.go(-1)
            },150)

          } else {
            this.selectDate.pop();
            this.selectDate.push(formateDate(e))
            this.startDate = this.selectDate[0];
          }



        } else if (this.selectDate.length == 2) {
          this.selectDate.pop();
          this.selectDate.pop();
          this.selectDate.push(formateDate(e));
          this.startDate = this.selectDate[0];
          this.endDate = this.selectDate[1];
        }
        console.log('selectDate:', this.selectDate);
        // this.startDate = e.year + '-'+(e.month + 1)+'-'+e.text;
        // if (this.minDate.year == '') {

        // Vue.set(this.minDate ,year,e.year)
        // this.minDate = e.year + '-'+e.month+'-'+e.text
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

        /*
        * 当子组件触发父组件事件如pick:handlerClick
        * 传递数据，父组件自定义事件修改父组件data里的值，
        * 父组件通过props 传递给子组件更改时，出现子组件数据没有更新（？）或渲染更新无效
        *
        *待验证是否为props单项数据流问题？？？？？？？？
        *
        */

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
    .table-header {
      text-align: center;
      height: 38px;
      line-height: 38px;
      font-size: 1.4rem;
      color: #333;
      background-color: #ededed;
    }
  }
  .allcalen {
    padding-top:45px;
  }

</style>
