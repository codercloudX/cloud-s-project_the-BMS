<template>
  <div id="tab-bar">
    <span class="tab-bar-title">用户管理系统</span>
    <slot name="home-nav"></slot>
    <slot name="about-nav"></slot>
    <slot name="add-nav" ></slot>
  </div>
</template>

<script>
export default {
  name:'tab-bar'
}
</script>

<style>
#tab-bar{
  height: 40px;
  background-color: rgba(247, 247, 247);
  border-bottom: 1.1px solid #ccc;
}
.tab-bar-title{
  display: inline-block;
  color: rgb(116, 116, 116);
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  margin-left: 10%;
  margin-top: 6px;
}
</style>