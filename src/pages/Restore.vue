<template>
	<div>
		<div class="con">
			<div class="top">
				<p class="huan"><em class="msg">{{msg}}</em><i class="iconfont icon-xiaoxi-copy"></i></p>
			</div>
			<!-- <div class="but">
				<div class="left" v-for="item in items">
					<em class="head"></em>
					<i class="name">{{item.name}}</i>
					<img :src="item.grade" alt="">
				</div>
				<div class="rig">
					<em class="me">我是买家</em>
					<i class="ru">&gt;</i>
				</div>
			</div> -->
			<div class="banner">
					<router-link to="#"><p class="page"><i>0:00</i><em>余额</em></p></router-link>
					<router-link to="#"><p class="page"><i>{{amount}}</i><em>关注</em></p></router-link>
					<router-link to="#"><p class="page"><i>0</i><em>收藏</em></p></router-link>
					<router-link to="#"><p class="page"><i>4</i><em>足迹</em></p> </router-link>       
     		</div>
     	</div>

     	<p class="indent"><i class="me">我的订单</i><em class="all">查看全部</em></p>

 		<div class="ban">
 			<router-link to="#"><p class="pages" @click="dingdan"><i class="iconfont icon-wode-daifukuan"></i><em>待付款</em></p></router-link>
			<router-link to="#"><p class="pages"><i class="iconfont icon-daifahuo"></i><em>待发货</em></p></router-link>
			<router-link to="#"><p class="pages"><i class="iconfont icon-daifahuo01" ></i><em>待收货</em></p></router-link>
			<router-link to="#"><p class="pages"><i class="iconfont icon-daipingjia"></i><em>待评价</em></p> </router-link> 
			<router-link to="#"><p class="pages"><i class="iconfont icon-shouhou"></i><em>退款/售后</em></p> </router-link> 
 		</div>

		
		<Footer></Footer>		
	</div>
</template>

<script>
	const Footer = r =>require.ensure([],()=> r(require('@/components/Footer.vue')),'Footer');
	export default{
		created(){
			var num = localStorage.getItem("num")/1
			this.amount+=num
		},
		data(){
			return{
				msg:'还原',
				/*items:[{
					name:'yuan',
					grade:'../../static/imgs/img/grade-V1.png'
				}]*/
				amount:0
			}
		},
		components:{
			Footer
		},
		methods:{
			dingdan(){
				this.$router.push('/Indent')
			}

		},
		watch: {
		    amount: function () {
		      return this.amount
		    }
		}
	}
		
</script>


<style scoped>
	em,i{
		font-style: normal;
	}
	.con{
		height: 4.3rem;
		width: 10.8rem;
		background:#8b8381
	}
	.top{
		height: 1.4rem;
		line-height: 1.4rem
	}
	.top .msg{
		margin-left:4.92rem ;
		color: #fff;
	}
.icon-xiaoxi-copy{
	margin-left: 3.72rem;
	color: #fff;
}
/* .but{
	height: 3.03rem;
}
.but .left{
	width:4.82rem ;
	float: left;
}
.but .left .head{
	width:1.49rem ;
	height: 1.47rem;
	display: inline-block;
	border: 2px solid #ccc;
	float: left;
	border-radius: .74rem
}
.but .rig{
	width: 5.9rem;
}
.but .rig .me{
	display: inline-block;
	margin-left: 3rem
}
 */

.banner{
	height: 1.86rem;
 	font-size: 16px;
	margin-top: 1rem;
  	display: flex;
  	justify-content:space-around;
  	text-align: center;

}

.banner .page{
	height:1.86rem ;
  	display: flex;
  	flex-direction: column;
  	justify-content: space-around;
  	color: #fff;
  	font-size:14px;
}
/* .banner li{
	float: left
}
 */

.indent{
	height: 1rem;
	line-height: 1rem;
	border-bottom: 1px solid #f3f3f3;
	font-size: 14px;
	
}
.indent .me{
	margin-left: .44rem
}
.indent .all{
	margin-left: 7rem;
	color: #878787;
}
.ban{
	height: 1.98rem;
	font-size: 16px;
  	display: flex;
  	justify-content:space-around;
  	text-align: center;
}
.ban .pages{
	height:1.98rem ;
  	display: flex;
  	flex-direction: column;
  	justify-content: space-around;	
  	font-size:14px;
}
 

</style>