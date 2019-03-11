<template>
 <div class="fenlei-wrap">
      <div class="feilei-zhengti">
       <!--搜索输入框-->
           <div class="feilei-sousuo">
             <router-link to="/search">
              <div class="m-topSearchIpt ipt" data-reactid=".0.0.0.1.0.1">
                <div id="weishenme">
                <i class="icon" data-reactid=".0.0.0.1.0.1.0"></i>
              <span class="placeholder" data-reactid=".0.0.0.1.0.1.1">
                搜索商品, 共21906款好物
                </span></div></div>
              </router-link>

           </div>
          <!--左边列表-->
          <div class="fenlei-left">
            <div>
            <ul>  
                 <li v-for="(item,index) in fenleiList.categoryL1List" :key="index">
                   
              <router-link :to="`/fenlei/fenleilist?itemid=${item.id}`">
                   {{item.name}}
              </router-link>
                   </li> 
             
            </ul>
            </div>
          </div>
          <!--右边显示界面-->
           <router-view></router-view>
      </div>
 </div>
</template>

<script type="text/ecmascript-6">
 
import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
export default {
   mounted(){
        this.$store.dispatch('getList')

        new BScroll('.fenlei-left')
        
   },
 data() {
 return {
 
 }
 },
 computed:{
      ...mapState({
        fenleiList: state => state.Fenlei.fenleiList
      })
 },
 components: {

 }
}
</script>

<style>
#weishenme{
  margin-top: 8px;
  margin-left: 18px;
}
.fenlei-wrap{
  width: 750px;
  height: 1334px;

}
.feilei-zhengti{
  border-bottom: #9fa4a2;
}

.feilei-sousuo{
  width: 750px;
  height: 88px;
  border-bottom: 1px solid #c9c9c9;
}
.m-topSearchIpt {
  margin-top: 6px;
    position: absolute;
    top: 16px;
    left: 45px;
    align-items: center;
    width: 90%;  
    height: 56px;
    font-size: .37333rem;
    background-color: #ededed;
    border-radius: .10667rem;
}
.placeholder{
  color: #9fa4a2;
}
.m-topSearchIpt .icon {
  
      font-size: .37333rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    width: .37333rem;
    height: .37333rem;
    margin-right: .13333rem;
}
.fenlei-left{
  float: left;
  width: 162px;
  height: 1000px ;
 
}
.fenlei-left ul{
 width: 100%;
 display: flex;
 flex-direction: column;


}
.fenlei-left ul li{
 width: 100%;
 height: 50px;
 margin-top: 40px;
 font-size: 26px;
 text-align: center
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header,
menu, nav, output, ruby, section, summary,
time, mark, audio, video, input {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: normal;
  vertical-align: baseline;
}


</style>
