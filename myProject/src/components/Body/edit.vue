<template>
  <div id="editUser">
    <h1 class="container">编辑界面</h1>
    <div class="container info-box">     
      <h4>用户信息</h4>
      <form>
        <h5>姓名</h5>
        <input type="text" placeholder="name" v-model="user.name">
        <h5>电话</h5>
        <input type="text" placeholder="phone" v-model="user.phone">
        <h5>邮箱</h5>
        <input type="text" placeholder="email" v-model="user.email">
        <h5>学历</h5>
        <input type="text" placeholder="education" v-model="user.education">
        <h5>毕业学校</h5>
        <input type="text" placeholder="graduationschool" v-model="user.graduationschool">
        <h5>职业</h5>
        <input type="text" placeholder="profession" v-model="user.profession">
        <h5>个人简介</h5>
        <textarea rows="10" v-model="user.profile"></textarea>
      </form>
      <button class="submit" @click="updateUser()">提交</button>
    </div>
  </div>
  </div>
</template>

<script>
import Axios from 'axios';
export default {
  name:'editUser',
  data(){
    return {
      user:{}
    }
  },
  methods:{
    getUser(){
      let id=this.$route.params.id;
      Axios.get('http://localhost:3000/users/'+id)
        .then(res=>{
          this.user=res.data;          
        })   
    },
    updateUser(){
      let u=this.user;
      if(!u.name||!u.email||!u.phone){
        alert('please enter the correct infomation');
      }else{
        Axios.put('http://localhost:3000/users/'+this.$route.params.id,u)  
          .then(res=>{
            this.$store.state.showAlert=true; 
            this.$router.push({
                path:'/home',
                query:{
                  flag:2
                }   
              });
          })
      }   
    }
  },
  created(){
    this.getUser();
  }
}
</script>

<style>
@import url('../../assets/css/base.css');
@import url('../../assets/css/form.css');
</style>