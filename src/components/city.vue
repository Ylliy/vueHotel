<template>
  <div>
    <div>
      <router-link to="/">back</router-link>
      <h1>选择城市</h1>
    </div>
    <div id="citiesEl">
      <section class="hotcity-list">
        <p>热门</p>
        <ul class="city-contain">
          <li class="city-item hot-city" v-for="city in showCitylist" key="city.cityCode">{{city.cityName}}</li>
        </ul>
      </section>
  
      <section class="index-list" :class="key" v-for="items,key in showIndexCity">
        <p>{{key}}</p>
        <ul class="city-contain">
          <li class="city-item" v-for="city in items">
            {{city.cityName}}
          </li>
        </ul>
  
      </section>
    </div>
  
  </div>
</template>

<script>

  export default {
    beforeCreate() {


      if (localStorage.getItem('citylist') === null) {
        // this.$http({
        //   method: 'get',
        //   url: 'http://127.0.0.1:8081/city',
        //   // responseType: 'stream'
        // }).then((r) => {
        //   this.cityData = Object.assign({}, this.cityData, r.data.data)

        // })
        fetch('http://127.0.0.1:8081/city').then((r) => {
          return r.json();

        }).then((r) => {
          // console.log('*****', this.cityData)
          // console.log(r.data.data);
          this.cityData = Object.assign({}, this.cityData, r.data)
        })
        window.tmpxx = this;
      }
    },
    data() {
      return {
        cityData: JSON.parse(localStorage.getItem('citylist')) || {},
        indexArr: [],

      }
    },
    computed: {

      showCitylist() {
        let data = this.cityData;

        let hotCityList = this.cityData.hotCityList;

        return hotCityList;

      },
      showIndexCity() {

        let index = this.cityData.indexCityList;
        // this.cityData.indexCityList.map(function(){})
        for (var key in this.cityData.indexCityList) {
          console.log(key);
          if (this.cityData.indexCityList[key].length > 0) {
            this.indexArr.push(key);

          }
        }

        return index;
      },

    },
    methods: {



      setNajn() {
        this.$store.commit("changeCity", '南京');
        history.go(-1)
      }
    },
    watch: {
      cityData(newV, oldV) {
        console.log(newV, oldV)
      }
    },
    components: {

    }
  }
</script>


<style>
  li.city-item:after {
    content: '';
    display: block;
    height: 27px;
    width: 1px;
    position: absolute;
    top: 8px;
    border-right: 1px solid #d4d4d4;
    right: 0;
  }
  
  ul.city-contain:after {
    content: '';
    display: block;
    clear: both;
  }
  
  ul.city-contain {
    background: #fff;
  }
  
  .city-item {
    width: 20%;
    float: left;
    text-align: center;
    border-bottom: 1px solid #d4d4d4;
    box-sizing: border-box;
    position: relative;
    height: 43px;
    font-size: 14px;
    color: #666;
    line-height: 43px;
    overflow: hidden;
  }
  
  li.hot-city:nth-child(5n):after {
    border-right: none;
  }
  
  .hotcity-list p,
  .index-list p {
    background-color: #f8f8f8;
    font-size: 14px;
    color: #666;
    padding: 10px 0 10px 15px;
  }
</style>


