<template>
<div class="search-baorongqi">
 <div class="search-wrap">
  <div class="search-input">
       <span class="search-anniu"></span>
      <input type="text" placeholder="早春特惠   热销箱包8折起">
      <a class="quxiao" href="/">取消</a>
  </div>
 </div>

  <div class="search-remen">
       <span>热门搜索</span>
    <!-- 热门搜索里面卖的内容  -->
    <div class="search-guanli">
      <div>按摩电器</div>
      <div>美食 3件75折</div>
      <div>美容仪器直减100元</div>
      <div>电动牙刷69元起</div>
      <div>明前龙井7.5折预售</div>
      <div>火焰润积水</div>
      <div>爆款 行李箱</div>
      <div>四件套279元起</div>
  </div>
 </div>
 </div>
</template>

<script type="text/ecmascript-6">
export default {
 data() {
 return {

 }
 },
 components: {

 }
}
</script>

<style>
.search-wrap{
    width: 680px;
    height: 87px;
    padding: 0 30px;
}
.search-input{
    width: 590px;
    height: 56px;
    margin-top: 20px;
    
    
    background-color: #ededed;
}
.search-anniu{
      
    margin-right: .21333rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: .37333rem;
    height: .37333rem;
    margin-top: -10px;
    margin-left: 8px;
}
.search-input input{
    margin-top: 8px;
    width: 520px;
    height: 50px;
    background-color:  #ededed;
    font-size:30px;
    border: 0px solid transparent;
    text-align: left;
    color: #9fa4a2;
}
.search-input .quxiao{
 position: absolute;
    top: 28px;
    right: 37px;
    font-size: .43333rem;
    color: #333;
}
.search-remen{
    width: 700px;
    height: 325px;

    margin-top: 20px;
    margin-left: 30px;
}
.search-remen span{
    font-size:30px;
     color: #9fa4a2;
}
.search-guanli div{
    margin-top: 20px;
    font-size:24px;
    height: 47px;
    line-height: 47px;
    margin-right: 30px;
    float : left;
    padding: 0 .2rem;
    margin-bottom: 15px;
    
    border: 1px solid #999;
    border-radius: 4px;
    color: #333;
}

</style>
