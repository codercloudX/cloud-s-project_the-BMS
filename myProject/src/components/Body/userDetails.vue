<template>
  <div id="userDetails">
    <h1 class="container">
      {{user.name}}
      <router-link class="all-button" style="background-color:orange" :to="'/home/'+user.id+'/editUser'">修改</router-link>
      <span class="all-button" style="background-color:red" @click="deleteUser(user.id)">删除</span>
    </h1>
    <ul>
      <li>
        <img src="../../assets/img/user/phonecall.png" alt="">
        <span>{{user.phone}}</span>
      </li>
      <li>
        <img src="../../assets/img/user/email.png" alt="">
        <span>{{user.email}}</span>
      </li>
    </ul>
    <ul>
      <li>
        <img src="../../assets/img/user/educational.png" alt="">
        <span>{{user.education}}</span>
      </li>
      <li>
        <img src="../../assets/img/user/school.png" alt="">
        <span>{{user.graduationschool}}</span>
      </li>
      <li>
        <img src="../../assets/img/user/profession.png" alt="">
        <span>{{user.profession}}</span>
      </li>
      <li>
        <img src="../../assets/img/user/profile.png" alt="">
        <span>{{user.profile}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name:"userDetails",
  data(){
    return {
      user:{}
    }
  },
  methods:{
    getUserDetails(id){
      axios.get('http://localhost:3000/users/'+id)
        .then(res=>{
          this.user=res.data; 
        })
    },
    deleteUser(id){
      axios.delete("http://localhost:3000/users/"+id)
        .then(res=>{
          this.$store.state.showAlert=true; 
          this.$router.push({path:'/home',
                query:{
                  flag:3
                }        
              });
        })
    }
  },
  created(){
    this.getUserDetails(this.$route.params.id);
  }
}
</script>

<style>
@import url('../../assets/css/base.css');
#userDetails h1{
  margin-top: 50px;
  border-bottom: 1px solid rgba(116, 116, 116,0.5);
}
#userDetails>h1>.all-button{
  float: right;
  margin:0.9% 1.5%;
}
#userDetails>h1>.all-button:hover{
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
#userDetails ul{
  list-style: none;
  margin: 25px 10%;
  width: 70%;
}
#userDetails li{
  border: 1px solid  rgba(116, 116, 116,0.5);
  border-radius: 4px;
  padding:0.5% 1%;
}
#userDetails img{
  width: 20px;
}

</style>