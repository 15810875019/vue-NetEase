<template>
  <div class="fenlei-right">
               <div class="fenlei-img">
                   <img src="http://yanxuan.nosdn.127.net/9eb09ecd7fc58151568f4b0b616db1cf.jpg?imageView&thumbnail=0x196&quality=75" alt="">
                   </div>
               
      
               <div class="fenlei-list">
                         <ul v-if="categoryl2List">
                           <li v-for="(list,index) in categoryl2List.subCateList" :key="index">
                            <img src="http://yanxuan.nosdn.127.net/cee41a60a2d4d06426f863aea2395f19.png?imageView&amp;quality=85&amp;thumbnail=144x144" class="cateImg" data-reactid=".0.1.1.0.0.1:$categroup0.1.$subCate_0.0.0.0">
                             <span>{{list.name}}</span>
                           </li>
                            
                         </ul>
                      
               </div>
                
          </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
export default {
 


 computed: {
    ...mapState({
        fenleiList: state => state.Fenlei.fenleiList.categoryL1List
        
      }),
      
      categoryl2List(){
       if(this.fenleiList){
         
         let result =  this.fenleiList.find(item => item.id === this.$route.query.itemid *1)
         if(!result){
              return this.fenleiList
         }else{
           return result
         }

         
       }
      }
 }
}
</script>

<style>

.fenlei-right{
  margin-top: 30px;
  float: left;
  width: 550px;
 
}
.fenlei-img{
  width: 528px;
  height: 192px;
  
}
.banner{
  width: 528px;
  height: 192px;
}
.fenlei-list{
  width: 528px;
  height: 648px;

  margin-top: 60px;
}
.fenlei-list ul{
      display: flex;
      width: 528px;
      height: 400px;
     flex-wrap: wrap; 
  align-items: center;
  justify-content: space-around;
 
}
.fenlei-list ul li{
  display: flex;
  margin-top: -100px;
  width: 156px;
  flex-direction: column;
  align-items: center;
  
}
.fenlei-list ul li span{
  font-size: 26px;
  height: 30px;
}
</style>
