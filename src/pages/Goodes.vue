<template>
	<div>
		<div class="enen">
			<i class="back" @click="back">&lt;</i>
			<em class="lei">{{tili}}</em>	
		</div>
		<p class="duo">{{msg}}</p>
		<div class="list" >
			<div class="zen" v-if="show"></div>	
			<div class="pri" v-for="item in items">
				<img :src="item.picture" alt="" class="imgs">
				<p class="narrate">{{item.text}}</p>
			</div>	
		</div>		
	</div>
</template>
<script>
	export default{
		data(){
			return{
				tili:'拍品分类',
				msg:"最多只能选1项",
				items:[
					{
						picture:'../../static/imgs/img/auction1.jpg',
						text:'全部'
					},
					{
						picture:'../../static/imgs/img/auction2.jpg',
						text:'佛像'
					},
					{
						picture:'../../static/imgs/img/auction3.jpg',
						text:'法器'
					},
					{
						picture:'../../static/imgs/img/austion4.jpg',
						text:'唐卡'
					},
					{
						picture:'../../static/imgs/img/auction5.jpg',
						text:'古珠'
					},
					{
						picture:'../../static/imgs/img/auction6.jpg',
						text:'杂项'
					},
					{
						picture:'../../static/imgs/img/auction1.jpg',
						text:'其他'
					},
				]
				
			}			
		},
		components:{
			
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
		},
		mounted(){
			
		}	
	}

</script>
	

<style scoped>
	em,i{
		font-style: normal;
	}
	b{
		font-weight: normal
	}
	.enen{
		width: 10.8rem;
		height:1.38rem ;
		line-height: 1.38rem;
	}
	.enen .back{
		margin-left:.38rem ;
		font-size: 30px;
		float: left;
	}
	.enen .lei{
		margin-left: 3.72rem
	}
	.duo{
		margin-left: .44rem;
		color:#878787;
		height: 1.42rem;
		line-height: 1.42rem
	}
	.list{
		width: 9.98rem;
		margin: auto;
	}
	.list .pri {
		height:5.14rem ;
		float: left;
		margin-left: .1rem
	}

	.list .pri .imgs{
		width: 3.16rem;
		height: 3.94rem;
	}
	.list .pri .narrate{
		width: 3.16rem;
		text-align: center;
		line-height:1.24rem;
		line-height:1.24rem ;
	}

	.zen{
		width: 3.16rem;
		height: 3.94rem;
		background: #000;
		opacity: .4;
	}

</style>