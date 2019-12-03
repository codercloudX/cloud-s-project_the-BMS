<template>
  <div id="alert" class="container">
    <h5>用户信息{{text}}</h5>
    <img src="../../assets/img/close.png" alt="" @click="closeButton()">
  </div>
</template>

<script>
export default {
  name:'alert',
  computed:{
    text(){
      let text='';
      let flag = this.$route.query.flag;
      if(flag==1){
        text='添加成功'
      }else if(flag==2){
        text='修改成功'
      }else{
        text='删除成功'
      }
      return text;
    }
  },
  methods:{
    closeButton(){      
      this.$store.commit('change');
    }
  },
}
</script>

<style>
#alert{
  margin-top: 10px;
  padding: 10px 10px;
  border: 1px solid #ffff00;
  color: #8b8b01;
  background-color: #fff11a54;
  border-radius: 3px;
}
#alert h5{
  display: inline-block;
}
#alert img{
  height: 20px;
  float: right;
  margin-top: 1px;
  cursor: pointer;
}
#alert img:hover{
  transform: scale(1.2)
}

</style>