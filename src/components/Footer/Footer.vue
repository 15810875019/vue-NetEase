<template>
 <div>
    <footer class="footernav">
      <a href="javascript:;" @click="to('/shouye')"   class="items" :class="{on:$route.path ===('/shouye')}">
    <span>
        <i class="iconfont icon-shouye"></i>
    </span>
    <span>首页</span>
      </a>
       <a href="javascript:;" @click="to('/fenlei')" class="items" :class="{on:$route.path ===('/fenlei')}">
    <span>
        <i class="iconfont icon-ziyuan"></i>
    </span>
    <span>分类</span>
      </a>
       <a href="javascript:;"  @click="to('/shiwu')" class="items" :class="{on:$route.path ===('/shiwu')}">
    <span>
        <i class="iconfont icon-tupian"></i>
    </span>
    <span>识物</span>
      </a>
       <a href="javascript:;"  @click="to('/gouwuche')" class="items" :class="{on:$route.path ===('/gouwuche')}">
    <span>
        <i class="iconfont icon-gouwuche"></i>
    </span>
    <span>购物车</span>
      </a>
       <a href="javascript:;"  @click="to('/geren')" class="items" :class="{on:$route.path ===('/geren')}">
    <span>
        <i class="iconfont icon-gerenzhongxin"></i>
    </span>
    <span>个人</span>
      </a>
   </footer>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
  
 data() {
 return {

 }
 },

 methods:{
    to(path){
      this.$router.replace(path)
    }
 },
 components: {

 }
}
</script>

<style>

  .footernav{
 
      position: fixed;
      z-index: 100;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: #ffffff;
      width: 750px;
      height: 98px;
      display: flex;
    }
  a{
      color: #000000;
      text-decoration:none;
  }
  .items{
      display: flex;
      text-align: center;
      flex-direction: column;
      align-items: center;
      flex: 1;
      margin:5px;
      color: #999999;
      line-height: 28px;
   }
   .items span{
       font-size:20px;
       margin-top: 10px;
       
   }
   .on{
      color:red;
      
     }
     .iconfont{
         font-size: 40px;
         margin-top: 10px;
     }
</style>
