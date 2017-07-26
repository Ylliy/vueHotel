<template>
  <div>
    <div>
      <router-link to="/">back</router-link>
      <h1>选择城市</h1>
    </div>
    <div id="citiesEl" @click="pickCity">
      <section class="hotcity-list">
        <p>热门</p>
        <ul class="city-contain">
          <li class="city-item hot-city" :class="setClass(city)" v-for="city in showCitylist" key="city.cityCode">{{city.cityName}}</li>
        </ul>
      </section>
  
      <section class="index-list" :class="key" v-for="items,key in showIndexCity">
        <p>{{key}}</p>
        <ul class="city-contain">
          <li class="city-item" v-for="city in items" :class="setClass(city)">
            {{city.cityName}}
          </li>
        </ul>
  
      </section>
  
    </div>
    <div class="rightbar">
      <ul>
        <li v-for="name,key in indexArr" key="key" @click="scrollTo" :data-targetClass="name | toClass">{{name}}</li>
      </ul>
  
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
      }
      window.tmpxx = this;
    },
    data() {
      return {
        cityData: Object.assign({}, this.cityData, JSON.parse(localStorage.getItem('citylist')) || {}),
        indexArr: ['热门'],
        test: 123,
        hasSelect: this.$store.getters.getCity
        // 对象的对象触发更改触发computer等问题

      }
    },
    computed: {

      showCitylist() {
        let context = this;
        let data = this.cityData;  
        console.log('xxxxxxxxxxxxxxxxx');
        let hotCityList = this.cityData.hotCityList;

        hotCityList.map(function (v, i, arr) {
          context.$set(arr[i], 'isSelect', false);
          if (context.hasSelect == v.cityName) {
            context.$set(arr[i], 'isSelect', true);
          }
          // console.log(context);
        })

        return hotCityList;

      },
      showIndexCity() {
        let context = this;
        let index = this.cityData.indexCityList;
        // this.cityData.indexCityList.map(function(){})
        let newData = {};
        for (var key in this.cityData.indexCityList) {
          // console.log(key);
          if (this.cityData.indexCityList[key].length > 0) {
            this.indexArr.push(key);
            newData[key] = this.cityData.indexCityList[key];
            newData[key].map(function (v, i, arr) {
              context.$set(arr[i], 'isSelect', false);
              if (context.hasSelect == v.cityName) {
                context.$set(arr[i], 'isSelect', true);
              }
              // console.log(context);
            })

          }
        }

        return newData;
      },



    },
    filters: {
      toClass(a) {

        if (a == '热门') {
          return 'hotcity-list'
        }
        return a;
      }
    },
    methods: {
      scrollTo(event) {
        console.log(event);
        let el = document.getElementsByClassName(event.target.getAttribute('data-targetClass'))[0];
        let offTop = el.offsetTop;
        window.scroll(0, offTop + 36);
      },
      pickCity(event) {
        console.log(event);
        let name = event.target.innerText;
        let key = event.target.parentElement.previousElementSibling.innerText;
        let allChildren = event.target.parentElement.children;

        let city;

        // for (let ak in allChildren) {

        //     console.log(ak);
        //   if (allChildren[ak].innerText == 'name'){
        //   }
        // }
        let pos;
        for (let i = 0; i < allChildren.length; i++) {
          if (allChildren[i].innerText == name) {
            pos = i;
          }
        }

        if (key == '热门') {
          city = this.cityData.hotCityList[pos]

        } else {
          city = this.cityData.indexCityList[key][pos]
        }

        this.$set(city, 'isSelect', true);
        this.$store.commit('changeCity', city);

        history.go(-1);




      },

      setClass(city) {
        let c = '';
        console.log("渲染class")
        if (this.hasSelect && city.cityName == this.hasSelect) {
          c += 'asd '
        }
        if (city.isSelect) {
          c += 'isS '
        }

        return c
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
  
  .rightbar {
    position: fixed;
    top: 0;
    right: 0;
    background: rgba(169, 164, 164, 0.33);
    height: 100%;
  }
  
  .rightbar ul {
    width: 34px;
    text-align: center;
  }
  
  .rightbar ul li {
    height: 27px;
    font-size: 13px;
    line-height: 27px;
  }
  
  .isS {
    background: #000;
  }
</style>


