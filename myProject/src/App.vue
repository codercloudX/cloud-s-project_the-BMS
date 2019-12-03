<template>
  <div id="app">
    <tab-bar>
      <router-link slot="home-nav" to="/home" class="tab-bar-nav">主页</router-link>
      <router-link slot="about-nav" to="/about" class="tab-bar-nav">关于我们</router-link>
      <router-link slot="add-nav" to="/add" class="tab-bar-nav all-button"><span>添加用户</span></router-link>
    </tab-bar> 
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from './components/TabBar/TabBar'

export default {
  name: 'App',
  components:{
    TabBar
  }
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.tab-bar-nav{
  margin-top: 25%;
  text-decoration: none;
  cursor: pointer;
  font-size:15px;
  color: rgb(116, 116, 116);
}
.tab-bar-nav:nth-of-type(1){
  margin-left: 4%;
}
.tab-bar-nav:nth-of-type(2){
  margin-left: 2%;
}
.tab-bar-nav:nth-of-type(3){
  float: right;
  margin-top: 0.3%;
  margin-right: 25%;
}

</style>
