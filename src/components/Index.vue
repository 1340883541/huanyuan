<template>
	<div class="big-container">
		<div class="top">
			<img src="../../static/imgs/img/top.jpg" alt="">
		</div>
		<p class="shops"><i class="xian"></i><em class="iconfont icon-fire"></em>精选店铺<i class="xian"></i></p>




		<div class="container"  v-for="item in items">
			<div class="head">
					<img :src='item.portrait' alt="" class="imgs">
					<i class="name">{{item.author}}</i>
					<img :src="item.grade" alt="" class="imgss">
					<span class="attention" @click="addattention"><b>{{item.add}}</b>{{item.attention}}</span>
			</div>	
			<div class="swiper-container">
				  <div class="swiper-wrapper">
				    <div class="swiper-slide" v-for="pro in item.products">
					    <img :src="pro.item" alt="" @click.prevent="details">
					    <div class="Pri">
					    	<p class="text">{{pro.name}}</p>
					    	<p class="pri"><i class="price">{{pro.price}}</i><i class="iconfont icon-eye">{{pro.look}}</i><em class="iconfont icon-zan"  @click="pro.count++">{{pro.count}}</em></p>
					    </div>
				    </div>
				  </div>
				  <div class="swiper-pagination"></div>
			</div>
		</div>
		<Footer></Footer>
	</div>
	
</template>


<script>
	const Footer = r =>require.ensure([],()=> r(require('@/components/Footer.vue')),'Footer');
	// const Details = r =>require.ensure([],()=> r(require('@/pages/Details .vue')),'Details ');

	export default{
		data(){
			return{
				num: 0,
				// items:[]

				items: [
					{
					    portrait:'../../static/imgs/img/head111.jpg',
						author:'有意阁',
						grade:'../../static/imgs/img/grade-V1.png',
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
								item:'../../static/imgs/img/swr3.jpg',
								name:'【精选】独家设计款奇楠香囊',
								price:'￥0',
								look:"85",
								count: 0
							},
							{
								item:'../../static/imgs/img/swr2.jpg',
								name:'【精选】小叶紫檀老型佛珠',
								price:'￥0',
								look:'30',
								count: 0	
							}
						]
					},
					{
					    portrait:'../../static/imgs/img/head111.jpg',
						author:'有意阁',
						grade:'../../static/imgs/img/grade-V1.png',
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
								item:'../../static/imgs/img/swr3.jpg',
								name:'【精选】独家设计款奇楠香囊',
								price:'￥0',
								look:"85",
								count: 0
							},
							{
								item:'../../static/imgs/img/swr2.jpg',
								name:'【精选】小叶紫檀老型佛珠',
								price:'￥0',
								look:'30',
								count: 0	
							}
						]
					}
				]
			}
		},
		methods:{
			details(){
				this.$router.push("/details");
			},
			// add(){
			// 	var pro = this.items
			// 	console.log(pro)
			// }
			addattention(){
				this.num +=1
				localStorage.setItem("num",this.num) 
				
			}
		},
		components:{
			Footer
		},
		mounted(){
			var mySwiper = new Swiper('.swiper-container', {	
				autoplay: 5000, //可选选项，自动滑动
				// pagination : '.swiper-pagination',
				direction:"horizontal",
			})
		},
		updated(){
			// console.log(this.items[0].products[0].count)
		},
		// created(){
		// 	var _this=this;
		// 	$.get("api/list",function(data){
		// 		_this.items=data.items;

		// 	})
		// }
	}
</script>


<style scoped>
	em, i{
		font-style: normal
	}
	.big-container{
		margin-bottom:2rem
	}
	.top img{
		width: 10.8rem;
		height: 4.82rem;
	}
	.shops{
		height: 1.44rem;
		line-height: 1.44rem;
		text-align: center;
		background-color: #fafafa;
		margin-top: -0.1rem
		
	}
	.xian{
		display: inline-block;
		width: 1.5rem;
		margin:.1rem;
		border: 1px solid #be9658;

	}
	.shops .iconfont{
		color:#c29959 ;
	}
	.container{
		height: 9.72rem;
		margin: 0 0 .7rem 0;

	}
	.head{
		height: 1.46rem;
		line-height: 1.46rem;
		margin: 0;
		padding: 0;
	}
	.head .imgs{
		overflow: hidden;
		width:1.28rem ;
		height: 1.32rem;
		margin-left: 0.53rem;
		margin-top: 0.44rem;
		float: left;
	}
	.head .name{
		margin-left:0.32rem;
	}
	.head .imgss{
		margin-left: .25rem;
	}
	.head .attention{
		display: inline-block;
		width:1.82rem ;
		height: .74rem;
		border: 1px solid #c49c6b;
		line-height: .74rem;
		border-radius: 0.9rem;
		text-align: center;
		margin-left:4.34rem ;
		color: #c49c6b;
	}
	.head b{
		font-size: 20px
	}
	.swiper-container{
		height: 8.25rem;
		width: 10.8rem;
	}
	.swiper-container img{
		height: 6.5rem;
		width: 10.8rem;
	}
	.Pri{
		height: 1.76rem;
	}
	.Pri .text{
		height: 1.18rem;
		line-height: 1.18rem;
		margin-left: .7rem
	}
	.Pri .pri{
		height: .58rem;
		line-height:.58rem; 
		
	}
	.Pri .price{
		margin-left: .44rem;
		color: #a50a18;

	}
	.Pri  .icon-eye{
		margin-left: 6.98rem;
		font-size: 20px
	}
	.Pri .icon-zan{
		margin-left:.5rem ;
		font-size: 20px
	}

</style>


