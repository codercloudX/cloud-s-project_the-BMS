<template>
  <div id="home">
    <alert v-if="this.$store.state.showAlert"></alert>
    <h1 class="container">用户管理系统</h1>
    <input type="text" id="" placeholder="搜索" v-model="inputValue" @blur="filterUser()">
    <table class="container"> 
      <thead>
        <th>姓名</th>
        <th>电话</th>
        <th>邮箱</th>
        <th>按钮</th>
      </thead>
      <tbody>
        <tr v-for="user in users">
          <td>{{user.name}}</td>
          <td>{{user.phone}}</td>
          <td>{{user.email}}</td>
          <td><router-link class="all-button" v-bind:to="'/home/'+user.id">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>


</template>

<script>
import axios from 'axios'
import alert from './alert'

export default {
  name:"home",
  components:{
    alert
  },
  data(){
    return {
      users:[],
      inputValue:''
    }
  },
  methods:{
    getUsers(){
      axios.get('http://localhost:3000/users')
        .then(res=>{                
           this.users=res.data;
        })            
    },
    getUsersFilterByName(value){
      axios.get('http://localhost:3000/users')
        .then(res=>{
          let u=[];
          for(let i in res.data){
            if(res.data[i].name.match(value)){
              u.push(res.data[i])
            }                      
          }
          this.users=u;       
        })  
    },
    filterUser(){
      if(!this.inputValue){
        this.getUsers();    
      }
      else{
        this.getUsersFilterByName(this.inputValue)
      }    
    }
  },
  created(){
    this.getUsers(); 
  },
}

</script>

<style>
@import url('../../assets/css/base.css');
table{
  border-collapse:collapse;
  text-align: left;
}
table th,
table td{
  border-bottom:1px solid #ccc;
  padding: 10px;
}
table tr:nth-of-type(2n-1){
  background-color: rgba(247, 247, 247);
}
table td .all-button{
  width: 30%;
  padding: 6px;
  font-size: 15px;
}
table td .all-button:hover {
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}
</style>