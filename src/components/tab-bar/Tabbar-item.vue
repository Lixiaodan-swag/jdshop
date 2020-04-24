<template>
<div class="tab-bar-item" @click="listClick">
     <!-- @click="shopClick" -->
    <!-- <i class="iconfont icon-fenlei"></i>
    <div>分类</div>  -->
    <div v-if="!isActive"><slot name="tab-icon"></slot></div>
    <div v-else><slot name="tab-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="tab-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "Tabbar-item",
    data(){
        return{
            //isActive:true
        }

    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!=-1
        },
        activeStyle(){
            return this.isActive?{color:this.activeColor}:{}
        }

    },
    props:{
        path:String,
        activeColor:{
        type:String,
        default:'red'
        }
   
    },
    methods:{
        listClick(){
            this.$router.push(this.path)
        }
    }
    
  }
</script>

<style scoped>

.tab-bar-item{
flex: 1;
justify-content: space-around;
text-align: center;
}
.active{
    color:red
}
</style>