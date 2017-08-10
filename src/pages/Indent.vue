<template>
	<div>
		<p class='Back'>
			<i class="back" @click="back">&lt;</i>
			<em class="ding">我的订单</em>
		</p>
		<div class="bang">
 			<router-link to="#"><i class="pages">全部</i></router-link>
			<router-link to="#"><i class="pages">待付款</i></router-link>
			<router-link to="#"><i class="pages">代发货</i></router-link>
			<router-link to="#"><i class="pages">待收货</i> </router-link> 
			<router-link to="#"><i class="pages">待评价</i> </router-link>
			<router-link to="#"><i class="pages">售后</i> </router-link> 			
 		</div>

 		<!-- <div class="All">
 			<input type="checkbox" class="inp">
 			<div class="lef">
 				<img src="http://i.vanclimg.com/140/q80/product/6/3/6/6364205/mid/6364205-1j201602031645295558.jpg" alt="">
 				<span class="xie">凡客帆布鞋 男鞋</span>
 				<span class="colo">颜色：黑色&nbsp;&nbsp; &nbsp;尺码：38</span>
 				<span class="siz"></span>	
 				<span class="iconfont icon-shanchu"></span>
 				<p class="pri">
 					<span class="price">￥198:00</span>
	 				<span class="miu">-</span>
	 				<input type="number" class="inp1">
	 				<span class="add">+</span>
 				</p>
 			</div>		
 		</div> -->
	</div>
</template>


<script>
	export default { 
  data(){
    return{
    }
  },
  methods:{
    back(){
    	this.$router.go(-1)
    }
  },
  components:{
 
  }
}
</script>


<style scoped>
	em,i{
		font-style: normal
	}
	.Back{
		height: 1.45rem;
		line-height: 1.45rem;
		border-bottom: 1px solid #f3f3f3
	}
	.Back .back{
		margin-left: .44rem;
		font-size: 30px;
		float: left;
	}
	.Back .ding{
		margin-left:3.75rem 
	}
	.bang{
		height: 1.24rem;
		line-height: 1.24rem;
		border-bottom: .3rem solid #f3f3f3;
		display: flex;
  		justify-content:space-around;
  		text-align: center;
	}
	.bang .pages{
		/* display: flex;
		justify-content: space-around */
		color: #878787;
	}
	.router-link-active{
		/* color: #c39f6d; */
		/* text-decoration: underline */
	}
	/* .All{
		width: 10.8rem;
		height: 3rem;
		line-height: 3rem;	
		position: relative
	}
	.All  .inp{
		margin-top: 10%;
		width: .6rem;
		height: .6rem;
		margin-left: .4rem;
		vertical-align: middle;
		float: left;
	}
	.All .lef{
		float: left;
		width:9rem;
		border-bottom: 1px solid #f3f3f3;
	}
	.All .lef img{
		width: 2.75rem;
		height: 2.75rem;
		margin-left: .2rem;
		float: left
	}
	.All .lef>span{
		display: block;
	}
	.All .lef .xie{
		line-height: 1rem;
		color: #4c4c4c;
		font-size: 14px
	}
	.All .lef .colo{
		color:#4c4c4c;
		line-height: .6rem;
		float: left;
		font-size: 14px
	}
	.icon-shanchu{
		line-height: .6rem;
		margin-left:8rem;
		font-size: 30px

	}
	.All .lef .pri{
		line-height: 1rem;
	}
	.All .lef .price{
		color: red;
	}
	.All .lef .miu,.All .lef .add{
		display: inline-block;
		width:.8rem;
		height: .8rem;
		background-color:#f3f3f3 ;
		text-align: center;			
	}
	.All .lef .inp1{
		width:.7rem;
		height: .7rem;
	
	}
 */



</style>