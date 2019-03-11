<template>
  <div>
    <div id="toulai">
    <router-link to="/shouye">
      <i class="iconfont icon-icon-test ge-fangzi"></i>
      </router-link>
      <i class="ge-logo"></i>
      <div class="ge-right">
        <router-link to="/search">
        <i class="iconfont icon-magnifier ge-jingzi"></i>
        </router-link>
        <router-link to="/gouwuche">
        <i class="iconfont icon-tuya_huabanfuben ge-gouwu"></i>
        </router-link>
      </div>
    </div>
    <!-- 头部以下所有页面 -->
    <div v-if="tiaoma" >
      <div class="nav">
        <!-- 网易logo大图-->
        <div class="logowrap">
          <img
            src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png"
            data-reactid=".0.1.0.1.0.0"
          >
        </div>
        <!-- 登录等各个选项 -->
        <div class="navfooter">
          <!-- 手机号码登录-->
          <div class="ge-shouji" @click="tiaoba">
            <i class="iconfont icon-shouji hahaha"></i>
            <span>手机号码登录</span>
          </div>

          <!-- 邮箱账号登录-->
          <div class="ge-youxiang">
            <i class="iconfont icon-youxiang xixixi"></i>
            <span>邮箱账号登录</span>
          </div>
          <!-- 手机号快捷注册-->
          <div class="ge-jihao">
            <span class="zhuce">手机号快速注册</span>
            <div id="woyoudu">
              <i class="iconfont icon-youjiantou"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
          <div id="buxiele">我实在写不动样式了啊啊啊啊啊啊啊啊啊啊  </div>  
  

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      tiaoma:1,
     
    };
  },
    methods:{
       tiaoba(){
           this.tiaoma = !this.tiaoma;
       }
    },
  components: {}
};
</script>

<style>
#toulai {
  padding: 10px 20px;
}
#toulai i {
  font-size: 56px;
}
#toulai .ge-logo {
  position: absolute;
  top: 30px;
  left: 310px;
  width: 2.04rem;
  height: 0.53333rem;
  background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png);
  display: inline-block;
  text-align: center;
  background-size: cover;
  background-position: center;
}
#toulai .ge-right {
  float: right;
}
#toulai .ge-right .ge-jingzi {
  margin-right: 25px;
}
.nav {
  height: 700px;
  width: 750px;
}
.logowrap {
  width: 750px;
  height: 410px;

  text-align: center;
}
.logowrap img {
  width: 3.57333rem;
  height: 1.2rem;
  margin: 21% -100%;
}
.navfooter {
  width: 750px;
  height: 300px;
  position: relative;
}
.navfooter .ge-shouji {
  position: relative;
  width: 670px;
  height: 94px;
  color: #fff;
  vertical-align: middle;
  border: 2px solid #b4282d;
  background-color: #b4282d;
  text-align: center;
  margin-left: 40px;
  line-height: 94px;
}
.navfooter .ge-shouji .hahaha {
  position: absolute;
  top: 2px;
  left: 200px;
}

.navfooter .ge-shouji span {
  font-size: 26px;
}

.navfooter .ge-youxiang {
  position: relative;
  width: 670px;
  height: 94px;
  color: #fff;
  vertical-align: middle;
  border: 2px solid #b4282d;

  text-align: center;
  margin-left: 40px;
  line-height: 94px;
  margin-top: 30px;
}
.navfooter .ge-youxiang .xixixi {
  color: #b4282d;
  position: absolute;
  top: 2px;
  left: 200px;
}
.navfooter .ge-youxiang span {
  font-size: 26px;
  color: #b4282d;
}
.navfooter .ge-jihao {
  width: 300px;
  height: 100px;
  position: absolute;
  top: 261px;
  left: 250px;
}
.navfooter .ge-jihao .zhuce {
  font-size: 26px;
}
#woyoudu {
  position: absolute;
  right: 74px;
  top: -7px;
}
#buxiele{
  font-size: 88px;
}
</style>
