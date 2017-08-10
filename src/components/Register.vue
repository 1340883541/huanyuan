<template>
	<div class="content">
		<div class="top-reg">
			<p><i @click="login">&lt;</i><em>注册</em></p>
		</div>
		<div class="_info-reg">
			<p class="info" @click="Phone"><i class="iconfont icon-head"></i><input type="text"  placeholder="手机号" id="phone"></p>
			<p class="info" @click="psd"><i class="iconfont icon-suo"></i><input type="password"  value="" placeholder="密码" id="psd"></p>
			<p class="info" @click="code"><i class="iconfont icon-identifyingcode"></i><input type=""  placeholder="图形验证码" class="code"><img id="validateCodeImg" class="mohn" src="http://www.fengbuy.com/ucenter-client/index/validateCode/"></p>
			<p class="info"><i class="iconfont icon-identifyingcode"></i><input type="captcha-img"placeholder="短信验证码" class="code"><span class="note" @click="yan">短信验证码</span></p>
			<a href="" title=""><div class="reg" @click="register">注册</div></a>
			<p class="last"><i class="iconfont icon-ok" ></i>注册即同意<a href="">《还原用户协议》</a></p>
		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return{
				timer: 60,       //默认倒数30秒
                stop : false,   //默认是停止的，但界面加载之后会变成false
                Interval:null  //setInterval的对象
			}
		},
		components:{

		},
		methods:{
			login(){
				this.$router.push("/login")
			},
			code(){
				//图片验证码
		   		$(".mohn").on("click",function(){
		   			var ran=Math.random()	
					$("#validateCodeImg").attr("src",'http://www.fengbuy.com/ucenter-client/index/validateCode/?'+ran);
				    $("#validateCode").focus();			 
			   })				
			},
			Phone(){
					$("#phone").on("blur",function(){
						var phone = $(this).val();
						var reg =  /^1[3|4|5|8][0-9]\d{8}$/;
					if(!reg.test(phone)){
						alert("手机号码有误，请重填");
						return false;
					}
				})	
			},
			psd(){
				$("#psd").on("blur",function(){
					var psd = $(this).val();
					var reg = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/;
					if(!reg.test(psd)){
						alert("密码有误");
						return false;
					}
				})
			},
			yan(){
                if(this.timer <= 0){   
                    this.timer = 60;
                }
                else{
                    this.timer--;
                }
            },
            startTimer(){
                //如果是false就开始倒计时，如果是true就停止倒计时
                if(this.stop == false) 
                {
                    this.Interval = setInterval(this.yan,1000);    
                }
                else
                {
                    clearInterval(this.Interval);
                }

                this.stop = !this.stop;
            }

		}
	}
</script>


<style scoped>
	em,i{
		font-style: normal
	}
	.content{
		width: 10.5rem;
		height: 100%;
	}
	.top-reg{
		height:1.42rem;
		line-height: 1.42rem;
		margin-left:0.4rem ;
	}
	.top-reg i{
		width: 2rem;
		font-size: 0.8rem;
		float:left;
		line-height: 1.2rem
	}
	.top-reg em{
		margin-left: 2.9rem;
		font-size: 18px;
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
	.info .note{
		display: inline-block;
		width:3.02rem;
		height: 0.96rem;
		border: 1px solid #be965b;
		border-radius: 1rem;
		line-height: 0.96rem;
		text-align: center;
		color:#be965b;
		margin-top: 0.45rem;
		margin-left: 0.7rem;

	}
	.info .mohn{
		width: 2.8rem;
		height: 1.2rem;
		margin-left: 1rem;
		background-color: #d7d7d7;
		margin-top: .2rem


	}
	.reg{
		margin:1.19rem 0 ;
		width: 7.22rem;
		height: 1.2rem;
		background-color:#bf9559;
		border-radius: 3.61rem;
		margin-left:1.8rem;
		text-align: center;
		line-height: 1.2rem;
		color: #fff;
	}
	.last{
		height: 1.52rem;
		line-height: 1.52rem;
		text-align: center;
	}
	.last a{
		color:#e6ceb4 ;
	}





	





</style>


