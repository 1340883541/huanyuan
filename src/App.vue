<template>
  <div id="app">
    <router-view></router-view>
      <Footer></Footer>       
      </div>
  </div>
</template>

<script>
const Footer = r =>require.ensure([],()=> r(require('@/components/Footer.vue')),'Footer');
export default { 
  data(){
    return{
    }
  },
  methods:{
    
  },
  components:{
 
  }
}

  </script>
<style>
  a{
    text-decoration: none;
  }
</style>
