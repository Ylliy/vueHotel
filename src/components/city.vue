<template>
  <div>
    <router-link to="/">back</router-link>
    <h1>选择城市</h1>
    <div @click="setNajn">设置南京</div>
  </div>
</template>

<script>

export default{
  data(){
    return {

    }
  },
  methods:{
    setNajn(){
      this.$store.commit("changeCity",'南京');
      history.go(-1)
    }
  },
  components:{

  }
}
</script>

