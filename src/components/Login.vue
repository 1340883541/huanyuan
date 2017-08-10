<template>
	<div class="content">
		<div class="top">
			<p class="left" @click.prevent="index">&lt;</p>
		</div>
		<div class="Logo">
			<img src="../../static/imgs/img/logo.jpg"  alt="">
		</div>
		<form class="_info">
			<p class="info"><i class="iconfont icon-head"></i><input type="text"  placeholder="手机号" class="phone"></p>
			<p class="info"><i class="iconfont icon-suo"></i><input type="psaaword" name="" value="" placeholder="密码" class="psd"></p>
			<p class="forget">忘记密码?</p>
			<a href="#" title="" @click.prevent="Restore"><div class="btn">登录</div></a>
			<a href="#" title="" @click.prevent="Register"><div class="new-reg">新用户？注册账号</div></a>					
		</form>	

		<div class="last">
			<p class="wei"><i class="iconfont icon-weixin2"></i>使用微信平台登录</p>		
		</div>			
	</div> 
</template>


<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			Register(){
				this.$router.push("/Register")
			},
			index(){
				this.$router.go(-1)
			},
			Restore(){
				this.$router.push('/Restore')
			}

		}
	}
		
</script>


<style scoped>
	.content{
		width: 10.5rem;
		height: 100px;
	}
	.top{
		height: 1.3rem;
		line-height: 1.3rem;
		margin-left:0.54rem;
		font-size:30px ; 
	}
	.Logo{
		height: 3.78rem;	
		line-height: 3.78rem;
	}
	.Logo img{
		height: 3.78rem;	
		line-height: 3.78rem;
		width:3.72rem ;
		margin-left: 3.54rem
		}	
	.info{
		margin-top: 0.44rem;
		margin-left:0.92rem; 
		width: 90%;
		width: 9rem;
		height: 1.42rem;	
		display: flex;
		border-bottom: 1px solid #ccc;
	}
	.info>input{
		border: none;
		font-size: 14px;
	}
	.info .iconfont{
		float: left;
		line-height: 1.42rem;
		padding:0 .2rem 0 0;          	
	}
	.forget{
		height: 0.86rem;
		margin-left:7.78rem ;
		width: 2rem;
		line-height: 0.86rem
	}
	.btn{
		margin:0.42rem 0 ;
		width: 7.22rem;
		height: 1.2rem;
		background-color:#bf9559;
		border-radius: 3.61rem;
		margin-left:1.8rem;
		text-align: center;
		line-height: 1.2rem;
		color: #fff;
	}
	.new-reg{		
		text-align: center;
		color: #000;
	}
	.last{
		height: 5.02rem;
		width: 10.4rem;
		

	}
	.wei{
		text-align: center;
		padding-top: 3.52rem;
		color: #a8a8a8;
	}
	.wei .iconfont{
		color: #3ea730;
		font-size: 30px;
	}
</style>


