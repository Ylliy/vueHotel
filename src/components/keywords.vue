<template>
  <div>
    <router-link to="/">back</router-link>
    <h1>关键词</h1>
  
    <a ref="asda">{{a}}{{m}}</a>> {{b}} {{d()}} {{da.a}}
    <input type="text" v-on:change="cgv(this)">
  </div>
</template>

<script>
  export default {
    beforeCreate() {
      window.xxx = this;
      console.group('创建前========================')
      console.log('beforeCreate:::')
      console.log('this.$data', this.$data)
      console.log('执行d()------')
      console.log(this.d);
      console.log('执行m()------')
      console.log(this.m);
      console.groupEnd()
    },
    created() {
      console.group('创建完成========================')

      console.log('created')
      console.log('this.$data', this.$data)
      console.log('执行d()------')
      console.log(this.d());
      console.log('执行m()------')
      console.log(this.m);
      console.groupEnd()


    },
    beforeMount() {
      console.group('挂载前========================')

      console.log('beforeMount')
      console.log('this.$data', this.$data)
      console.log('执行d()------')
      console.log(this.d());
      console.log('执行m()------')
      console.log(this.m);
      console.groupEnd()
      

    },

    mounted() {
      console.group('挂载完成========================')

      console.log('mounted')
      console.log('this.$data', this.$data);
      this.ddtst()

      console.groupEnd()

    },
    beforeUpdate() {
      console.group('更新前========================')

      console.log('beforeUpdate')
      // console.log('this.$data', this.$data)
      console.groupEnd()

    },
    updated() {
      console.group('更新完成========================')

      console.log('updated')
      // console.log('this.$data', this.$data)
      console.groupEnd()

    },
    beforeDestroy() {
      console.group('摧毁前========================')

      console.log('beforeDestroy')
      console.log('this.$data', this.$data)
      console.groupEnd()


    },
    destroyed() {
      console.group('摧毁完成========================')

      console.log('destroyed')
      console.log('this.$data', this.$data)

      console.groupEnd()

    },
    data() {
      return {
        a: '123',
        b: "asdasd",
        da: {
          a: 2, c: '12312', d: 1, e: 'e', f: 'f'
        },
        ca: [],
        ea: []
      }
    },
    computed: {
      m() {
        console.log('a:::::', this.a);
        return '123'
      }
    },
    methods: {
      d() {
        return ',,,,,,,'
      },
      f() {
        console.log('ffffff')
      },
      g() {
        console.log('mmmmmm')
      },
      cgv() {

      },
      ddtst() {
        var vm = this;
        // $.ajax({
        //   url: '//127.0.0.1:8081/city',

        //   dataType: 'jsonp',
        //   success: function () {
        //     console.log('执行ddtst')

        //     // vm.ea.push([{ a: 1 }, { a: 2 }, { a: 3 }]);
        //     var m = new Array();
        //     vm.ea.push(m);
        //     console.log('ini', vm.ea)
        //   }

        // })
        this.$nextTick(function () {
          // DOM 更新了  
          console.log('执行nextTick')
        })

        console.log('oyut', vm.ea)

      }
    },
    // mounted() {
    //   this.ddtst();
    // }
  }
</script>


