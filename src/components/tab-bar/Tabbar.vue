<template>
<div id="tab-bar">
 <slot></slot>  
</div>

</template>

<script>
  export default {
    name: "Tabbar",
  }
</script>

<style scoped>

#tab-bar{
display: flex;
position: fixed;
bottom: 0;
left: 0;
right: 0;
width:100%;
background: #ccc;
height: 49px;
}

</style>