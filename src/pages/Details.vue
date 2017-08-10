<template>
	<div>
		<div class="container" v-for="item in items">
			<div class="top">
				<b @click.prevent="index" class="back">&lt;</b>
				<span :endTime="endTime" :callback="callback" :endText="endText" class="timespan" @click="countdowm"> </span>    
				<img :src="item.pic" alt="" class="img">
				<p class="names"><b>{{item.name}}</b><i class="iconfont icon-start"></i><em class="iconfont icon-fenxiang"></em></p>
				
				<p class="za">{{item.sundry}}</p>
				<p class="Pri"><i class="lead">{{item.lead}}</i><em class="price">{{item.price}}</em><b class="buy">{{item.buy}}</b><i class="Price">{{item.Price}}</i><strong class="iconfont icon-eye">{{item.watch}}</strong></p>
				<p class="bao"><i class="iconfont icon-qi"></i><b>{{item.price1}}</b><em class="iconfont icon-jia"></em><b>{{item.price2}}</b><i class="iconfont icon-bao"></i><b>{{item.price3}}</b></p>
				<p class="hui"></p>
				<div class="Text">
					<div class="seller">
						<img :src="item.portrait" alt="" class="imgs">
						<i class="name">{{item.author}}</i>
						<img :src="item.grade" alt="" class="imgss">
						<span class="letter"><i class="iconfont icon-xiaoxi-copy"></i><em class="private">{{item.private}}</em></span>
						<span class="attention"><b>{{item.add}}</b>{{item.attention}}</span>
					</div>
				</div>
		</div>
		</div>
		<div class="footer">
			<input type="number" name="" placeholder="1888" class="inp">
			<p class="bid">出价</p>
		</div>
		
	</div>
	
</template>

<script>
    export default {
        data(){
           return {
	            content: '',
	            items:[
			            {
			            	pic:"../../static/imgs/img/swr1.jpg",
			            	name:"【精选】独家设计款奇楠香囊",
			            	sundry:'杂项',
			            	lead:'领先价:',
			            	price:'￥0',
			            	buy:'/一口价：',
			            	Price:'￥3330',
			            	watch:'0',
			            	price1:'￥1888',
			            	price2:'￥288',
			            	price3:'￥0',
			            	portrait:'../../static/imgs/img/head111.jpg',
			            	author:'有意阁',
			            	grade:'../../static/imgs/img/grade-V1.png',
			            	private:'私信',
			            	add:"+",
							attention:"关注",

			            }

	            ]

	        }
        },
        props:{
            endTime:{
                type: String,
                default :''
            },
            endText:{
               type : String,
               default:'已结束'
            },
            callback : {
                type : Function,
                default :''
            }
        },
        mounted () {
          this.countdowm(this.endTime)
        },
        methods: {
           countdowm(timestamp){ 
	            var startTime = new Date("2017/8/13");
				setInterval(function () {
				var nowtime = new Date();
				var time = startTime - nowtime;
				var day = parseInt(time / 1000 / 60 / 60 / 24);
				var hour = parseInt(time / 1000 / 60 / 60 % 24);
				var minute = parseInt(time / 1000 / 60 % 60);
				var seconds = parseInt(time / 1000 % 60);
				$('.timespan').html("距离结束:"+day+"天" +hour + "时" + minute + "分" + seconds + "秒");
				}, 1000);

				if("timespan"==0){
					self.content = format;
				}					 
                else{
                  clearInterval("timespan");
                  self.content = self.endText;
           
                }
              	 callback:{
	               if(this.callback && this.callback instanceof Function){
	                     this.callback(...this);
	                 }
            	}
            },
            index(){
            	this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
	em,i{
		font-style: normal
	}
	b,strong{
		font-weight: normal
	}
	.footer{
		   position: fixed;
		  font-size: 16px;
		  bottom: 0;
		  height:1.3rem ;
		  width: 100%;
		  /* border-top: 1px solid #ccc; */
		  background: #fff;
	
		  text-align: center;
		  z-index: 666
	}
	.footer .inp{
		width: 6.82rem;
		height: 1.1rem;
		float: left;
		border-radius: 3.4rem;
		text-align: center;
		margin-left: .46rem;
		border-color: #f3f3f3
	}
	.footer .bid{
		float: left;
		width:2.64rem ;
		height:1.1rem ;
		background-color:#b30318 ;
		text-align:center ;
		color: #fff;
		margin-left: .44rem;
		line-height: 1.1rem;
		border-radius: 1.32rem
	}
	.top .back{
		position: absolute;
		z-index: 999;
		color: #Fff;
		font-size: 30px;
		margin-left: .4rem
	}
	.top .img{
		width:10.8rem;
		height: 6.5rem;
		
	}
	.top .timespan{
		position: absolute;
		margin-left:5.1rem ;
		margin-top: 5.2rem;
		display: inline-block;
		width: 5.26rem;
		height: .88rem;
		text-align: center;
		color: #fff;
		background: #000;
		opacity: .5;
		line-height: .88rem;
	}

	.names{
		height: 1.43rem;
		line-height: 1.43rem;
		margin-left: 0.67rem;
	}
	.names b{
		float: left;
	}
	.names .icon-start{
		margin-left:2.4rem ;
		font-size: 20px;
	
		float: left;

	}
	.names .icon-fenxiang{
		margin-left: .3rem;
		font-size:30px;	
	}
	.za{
		font-size: 14px;
		color: #a9a9a9;
		margin-left: .44rem
	}
	.Pri{
		width: 9.88rem;
		height: 1.76rem;
		margin-left:.47rem ;
		line-height: 1.76rem;
		border-bottom:  1px solid #f3f3f3
	}
	.Pri .lead{
		font-size: 14px;
		color: #a9a9a9;
	}
	.Pri .price{
		color: #ad0016;
		margin-left: .18rem
	}
	.Pri .buy{
		font-size: 14px;
		color: #a9a9a9;
		margin-left: .29rem
	}
	.Pri .Price{
		color: #838383;
	}

	.Pri .icon-eye{
		margin-left: 3.78rem;
		color: #838383;
	}
	.bao{
		height: 1.08rem;
		line-height: 1.08rem;
		margin-left:.46rem 
	}
	.bao .icon-jia,.bao .icon-bao{
		margin-left: .44rem
	}
	.hui{
		height: .3rem;
		background: #f3f3f3
	}
	.seller{
		height: 2rem;
		line-height: 2rem
	}
	.seller .imgs{
		overflow: hidden;
		width:1.28rem ;
		height: 1.32rem;
		margin-left: 0.53rem;
		margin-top: 0.44rem;
		float: left;
	} m,l
	.seller .name{
		margin-left: .32rem;
		float: left;
	}
	.seller .imgss{
		margin-left:.22rem 
	}
	.seller .letter{
		display: inline-block;
		width:1.82rem ;
		height: .74rem;
		border: 1px solid #7dff7c;
		line-height: .74rem;
		border-radius: 0.9rem;
		text-align: center;
		margin-left:2.48rem ;
		color: #7dff7c;

	}
.seller .attention{
		display: inline-block;
		width:1.82rem ;
		height: .74rem;
		border: 1px solid #c49c6b;
		line-height: .74rem;
		border-radius: 0.9rem;
		text-align: center;	
		color: #c49c6b;
	}
.letter	.icon-xiaoxi-copy{
	font-size: 14px
}



	






</style>


