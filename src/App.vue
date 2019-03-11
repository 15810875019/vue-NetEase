<template>
  <div id="app">
      <router-view></router-view>
      
     <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer.vue'
export default {
 
     

  components:{
    Footer
  },
   
    
}

</script>

<style>
   
</style>
