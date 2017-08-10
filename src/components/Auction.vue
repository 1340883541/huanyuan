<template>
	<div>
		<div class="top">
			<div class="left">
				<i class="iconfont icon-home1"></i>
				<input type="text" name="" placeholder="请输入拍品名称" class="inp">
			</div>
			<em class="iconfont icon-fenleidaohanglan" @click.prevent="Goodes"></em>
			<ul class="more">
				<li><router-link to="#">人气拍品</router-link></li>
				<li><router-link to="/new" @click.prevent="handelNew">最新上架</router-link></li>
				<li><router-link to="Recommend">个性推荐</router-link></li>
				<li><router-link to="End">即将截拍</router-link></li>
			</ul>
		</div>

		<div class="goods" v-for="item in items">
			<div class="wares" @click.prevent="details">
				<img :src="item.picture" alt="">
				<p class="name">{{item.name}}</p>
				<p class="zong">
					<i class="pri">{{item.price}}</i>
					<span class="bid">{{item.bid}}</span>
				</p>
			</div>
			
		</div>
		<Footer></Footer>
	</div>
	
</template>


<script>
	const Footer = r =>require.ensure([],()=> r(require('@/components/Footer.vue')),'Footer');
	export default{
		data(){
			return{
				// items:[]
				items:[
						{
							picture:'../../static/imgs/img/auc.jpg',
							name:'【精选】西亚桶珠老蜡手串',
							price:'￥0',
							bid:'出价'
						},{
							picture:'../../static/imgs/img/auc.jpg',
							name:'【精选】西亚桶珠老蜡手串',
							price:'￥0',
							bid:'出价'
						},{
							picture:'../../static/imgs/img/auc.jpg',
							name:'【精选】西亚桶珠老蜡手串',
							price:'￥0',
							bid:'出价'
						},{
							picture:'../../static/imgs/img/auc.jpg',
							name:'【精选】西亚桶珠老蜡手串',
							price:'￥0',
							bid:'出价'
						},{
							picture:'../../static/imgs/img/auc.jpg',
							name:'【精选】西亚桶珠老蜡手串',
							price:'￥0',
							bid:'出价'
						},{
							picture:'../../static/imgs/img/auc.jpg',
							name:'【精选】西亚桶珠老蜡手串',
							price:'￥0',
							bid:'出价'
						}
				]
				
				}
			},			
		components:{
			Footer
		},
		methods:{
			Goodes(){
				this.$router.push('/Goodes')
			},
			details(){
				this.$router.push('/Details')
			},
			handelNew(){
				this.$router.push('/New')
			}
		},
		mounted(){
			
		},
		created(){
			// var _this=this;
			// $.get("Auction",function(data){
			// 	_this.items=data.items;

			// })
		}	
	}
</script>


<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	em,i{
		font-style: normal
	}
	.top{
		height:2.42rem;
		width: 10.8rem;
		margin: auto;
		position: fixed;
		background: #fff;
	}
	.top .left{
		margin-left: .44rem;
		margin-top:.22rem; 
		display: inline-block;
		float: left;
		width: 8.87rem;
		height: .9rem;
		line-height: 0.9rem;
		border: 1px solid #f3f3f3;
		border-radius: .3rem;
		color: #f3f3f3;
	}
	.top .left .icon-home1{
		margin-left: .2rem
	}
	.top .left .inp{
		border: none;
		font-size: 14px;
		margin-left: .3rem;
	}
	.top .icon-fenleidaohanglan{
		margin-left: .47rem;
		font-size: 18px;
		line-height: 1.33rem

	}
	.top .more{
		height: 1.1rem;
		line-height: 1.2rem;
		display: flex;
		justify-content: space-around
	}
	.top .more li{
		float: left;
		color: #878787;
		font-size: 16px
	}
	.goods{
		width: 9.91rem;
		margin: auto;
		/* margin-bottom: 1.5rem */

	   /* margin-top:2.24rem */
	}
	.goods .wares{
		height: 8.20rem;
		float: left;


	}
	.goods .wares img{
		width: 4.84rem;
		height:6.02rem ;
		margin-top: 2.24rem;	
	}
	.goods .wares .name{
		margin-top: .3rem;
		font-size: 14px;
	}
	.goods .wares .zong{
		height: 1.12rem;
		line-height: 1.12rem
	}
	.goods .wares .zong .pri{
		color: #b81c22;
	}
	.goods .wares .zong .bid{
		display: inline-block;
		width: 1.3rem;
		height: .75rem;
		border: 1px solid #b81c22;
		border-radius: .8rem;
		margin-left: 2.8rem;
		text-align: center;
		line-height: .75rem;
		color:#b81c22 ;
	}
	.router-link-active{
		/* color: #c8a77a; */
		/* text-decoration: underline */
	}
	a{
		color:#878787 ;
	}


</style>