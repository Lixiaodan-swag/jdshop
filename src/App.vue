<template>
  <div id="app">
    <router-view></router-view>
    <Tabbar>
<TabbarItem path='/home' activeColor="blue">
  <i class="iconfont icon-jingdongicon-" slot="tab-icon"></i>
    <i class="iconfont icon-yun" slot="tab-icon-active"></i>
    <div slot="tab-text">首页</div> 
</TabbarItem>
<TabbarItem path='/category' activeColor="blue">
   <i class="iconfont icon-fenlei" slot="tab-icon"></i>
       <i class="iconfont icon-yun" slot="tab-icon-active"></i>
    <div slot="tab-text">分类</div> 
</TabbarItem>
<TabbarItem path='/center' activeColor="blue">
    <i  class="iconfont icon-jifen" slot="tab-icon"></i>
        <i class="iconfont icon-yun" slot="tab-icon-active"></i>
    <div slot="tab-text">京喜</div> 
</TabbarItem>
<TabbarItem path='/car' activeColor="blue">
      <i class="iconfont icon-che" slot="tab-icon"></i>
          <i class="iconfont icon-yun" slot="tab-icon-active"></i>
    <div slot="tab-text">购物车</div> 
</TabbarItem>
<TabbarItem path='/profile' activeColor="blue">
     <i class="iconfont icon-wodedangxuan" slot="tab-icon"></i>
         <i class="iconfont icon-yun" slot="tab-icon-active"></i>
    <div slot="tab-text">我的</div> 
</TabbarItem>
  
    </Tabbar>

  </div>
</template>
<script src="../../js1/index移动端.js"></script>
<script>
import Tabbar from './components/tab-bar/Tabbar'
import TabbarItem from './components/tab-bar/Tabbar-item'
export default {
  name: 'App',
  components:{
    Tabbar,
    TabbarItem
  },
  // data(){
  //   return{
  //     path:
  //   }
  // }

}
</script>

<style>
@import "assets/css/style.css";
@import "assets/icon/iconfont.css";

</style>
