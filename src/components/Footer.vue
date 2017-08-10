<template>
	<div id="footer">
          <router-link to="/"><p class="page"><i class="iconfont icon-home1"></i><em>首页</em></p></router-link>
          <router-link to="/Auction"><p class="page" @click="handelAuction"><i class="iconfont icon-paimai"></i><em>拍卖</em></p></router-link>
          <router-link to="/Issue"><p class="page" @click="handelIssue"><i class="iconfont icon-fabu1"></i><em>发布</em></p></router-link>
          <router-link to="/login"><p class="page" @click="handelClick"><i class="iconfont icon-wode"></i><em>我的</em></p></router-link>        
     </div>
</template>

<script>
	export default {
  data(){
    return{
           handelAuction:"",
           handelClick:"",
           handelIssue:""
    }
  },
  methods:{
    handelClick(){
      this.$router.push("/Login")
    }
  },
  handelIssue(){
  	this.$router.push("/Issue")
  },
  handelAuction(){
    this.$router.push("/Auction")
  }
}
</script>

<style scoped>
em,i{
  font-style: normal
}
#app {

  width: 0.35rem;
}
#footer{
  position: fixed;
  font-size: 16px;
  bottom: 0;
  height:1.3rem ;
  width: 100%;
  border-top: 1px solid #ccc;
  background: #fff;
  display: flex;
  justify-content:space-around;
  text-align: center;
  z-index: 666

}

#footer .page{
  height:1.3rem ;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
a{
  text-decoration: none;
  color: #818181;
}
#footer .iconfont{
  font-size: 18px
}
.router-link-active{
	color: #c39f6d;
}
</style>