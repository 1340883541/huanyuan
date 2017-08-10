
<template>
	<div class="body">
		<div class="top">
			<p class="issue"><i class="msg">{{msg}}</i><em class="iss">{{issue}}</em></p>
		</div>
		<p class="hui"></p>
		<input type="text" name="" value="拍品名称(17字以内)" class="info-name">
		<p class="hui1"></p>
		<div class=" lots">
			<div class="inp">
				<textarea name="" placeholder="拍品简介" class="lotss"></textarea>
				<p class="file" >+</p>

			</div>		
		</div>
		<p class="hui1"></p>
		<p class="classify"><i class="clf">拍品分类</i><em>*</em><i class="cls">&gt;</i></p>
		<p class="hui1"></p>
		<div class="Goods">
			<p>
				<i class="price">起拍价</i>
				<input type="number" name="" placeholder="0" class="inp1">
				<i class="cls1">元</i>
			</p>
			<p>
				<i class="bid">加价幅度</i>
				<em style="color:red;margin-left:.1rem">*</em>
				<input type="number" name="" placeholder="100" class="inp2">
				<i class="cls2">元</i>
			</p>
			<p>
				<i class="market">市场估价</i>
				<input type="number" name="" placeholder="请提供此拍品的参考价格" class="inp3">
				<i class="cls3">元</i>
			</p>
			<p>
				<i class="buy">一口价</i>
				<input type="number" name="" placeholder="出价达到或超过此价立即成交" class="inp4">
				<i class="cls4">元</i>
			</p>
			<p>
				<i class="cash">保证金</i>
				<input type="number" name="" placeholder="0" class="inp5">
				<i class="cls5">元</i>
			</p>
		</div>
		<p class="hui1"></p>
		<p class="start"><i>开拍时间</i><em @click="time">立即开拍</em></p>
		<p class="end"><i>结束时间</i><em style="color:red;margin-left:.2rem">*</em><i class="time">请选择时间</i></p>
		<Footer></Footer>
	</div>
</template>


<script>
const Footer = r =>require.ensure([],()=> r(require('@/components/Footer.vue')),'Footer');
	export default{
		data(){
			return{
				msg:"发布拍品",
				issue:"发布",
				upload: {
					    portrait:'',
						author:'',
						grade:'',
						add:"+",
						attention:"关注",
						products:[
							{
								item:'../../static/imgs/img/swr1.jpg',
								name:'【精选】西亚桶珠老蜡手串',
								price:'￥0',
								look:'36',
								count: 0
							},
							{
								item:'../../static/imgs/img/swr2.jpg',
								name:'【精选】独家设计款奇楠香囊',
								price:'￥0',
								look:"85",
								count: 0
							},
							{
								item:'../../static/imgs/img/swr3.jpg',
								name:'【精选】小叶紫檀老型佛珠',
								price:'￥0',
								look:'30',
								count: 0	
							}
						]
				},
			}			
		},
		components:{
			Footer
		},
		methods:{
			time(){
				this.$router.push("Time")
			}
		},
		mounted(){
			
		}	
	}
</script>


<style scoped>
	em,i{
		font-style: normal;
	}
	.body{
		height: 100%;
		background-color: #f3f3f3;
		margin-bottom: 1.34rem
	}

	.top{
		width: 10.8rem;
		height: 1.36rem;
		background-color: #fff;
		line-height: 1.36rem;
		position: fixed;
		top: 0;
	}
	.top .msg{
		margin-left: 4.4rem;

	}
	.top .iss{
		margin-left:3.36rem;
		font-size: 14px ;

	}
	.hui{
		height: .3rem;
		margin-top: 1.36rem
	}
	.hui1{
		height: .3rem;
	}
	.info-name{
		width: 10.8rem;
		background-color: #fff;
		height:1.42rem ;
		border:none ;
		color: #9c9c9c;	
	}
	.lots{
		height:7.58rem ;
		background-color: #fff;
	}
	.lotss{
		width: 10.7rem;
		height:4.52rem ;
		color: #9c9c9c;
		border: none;
	}
	.file{
		width:2.32rem ;
		height: 2.32rem;
		border: 1px solid #f3f3f3;
		line-height: 2.32rem;
		text-align: center;
		font-size: 100px;
		color: #f3f3f3;
		margin-left: .48rem
	}
	.classify{
		height: 1.48rem;
		background-color: #fff;
		line-height: 1.48rem;

	}
	.classify .clf{
		margin-left: .4rem;
		font-size: 14px
	}
	.classify em{
		color: red;
		margin-left: .2rem;
	}
	.classify .cls{
		font-size: 20px;
		color: #f3f3f3;
		margin-left:7.46rem 
	}
	.Goods{
		background-color: #fff;
		height: 7.36rem;
		font-size: 14px
	}
	.Goods p{
		height:1.46rem ;
		line-height: 1.46rem;
		border-bottom: 1px solid #f2f2f2;
	}
	.Goods .price,.Goods .bid,.Goods .market,.Goods .buy,.Goods .cash{
		margin-left: .4rem;
	}
	.Goods input{
		border: none;
		font-size: 12px;
		margin-left:3.3rem;
		width: 4.3rem;	
	}
	.Goods .cls1{
		margin-left: .6rem
	}
	.Goods .cls2{
		margin-left: -.3rem
	}
	.Goods .cls3{
		margin-left: .1rem
	}
	.Goods .cls4{
		margin-left: .5rem
	}
	.Goods .cls5{
		margin-left: .5rem
	}
	.start,.end{
		background-color: #fff;
		height:1.46rem ;
		line-height: 1.46rem;
		font-size: 14px;

	}
	.start{
		border-bottom: 1px solid #f2f2f2;
	}
	.start i,.end i{
		margin-left: .4rem
	}
	.start em{
		margin-left: 7rem
	}
	.end .time{
		margin-left: 6.36rem
	}



</style>


