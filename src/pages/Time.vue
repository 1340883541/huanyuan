<template>
	<div>
		<div class="start">
			<p class="top"><i class="back" @click="back">&lt;</i><em class="time">选择开拍时间</em></p>
		</div>
		<div class="Speed">
			<span class="speed">立即开拍</span>
		</div>
		<div class="Day" @click="timeee">
			<p class="day">08月02日(今天)</p>
			<div class="Timer">
				<ul class="timer">
					<li>20:00</li>
					<li>21:00</li>
					<li>22:00</li>
					<li>23:00</li>
				</ul>
			</div>

			<p class="day">08月03日(明天)</p>
			<div class="Timer">
				<ul class="timer">
					<li>10:00</li>
					<li>11:00</li>
					<li>12:00</li>
					<li>13:00</li>
					<li>14:00</li>
					<li>15:00</li>
					<li>16:00</li>
					<li>17:00</li>
					<li>18:00</li>
					<li>19:00</li>
					<li>20:00</li>
					<li>21:00</li>
					<li>22:00</li>
					<li>23:00</li>
				</ul>
			</div>
			<p class="day">08月04日(后天)</p>
			<div class="Timer">
				<ul class="timer">
					<li>10:00</li>
					<li>11:00</li>
					<li>12:00</li>
					<li>13:00</li>
					<li>14:00</li>
					<li>15:00</li>
					<li>16:00</li>
					<li>17:00</li>
					<li>18:00</li>
					<li>19:00</li>
					<li>20:00</li>
					<li>21:00</li>
					<li>22:00</li>
					<li>23:00</li>
				</ul>
			</div>		
		</div>
	</div>
</template>


<script>
	export default{
		data(){
			return{
			}
				
		},
		components:{
			
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			timeee(e){ 

				console.log($(".Day li"))
			}
		},
		mounted(){
			
		}	
	}
</script>


<style scoped>
		em,i{
			font-style:normal
		}
	.start{
		width: 10.8rem;
		height: 1.32rem;
		line-height: 1.32rem;
		border-bottom: 1px solid #f5f5f5;
		position: fixed;
		background: #fff;
	}
	.top .back{
		font-size: 30px;
		margin-left: .35rem;
		float: left;
	}
	.top .time{
		margin-left: 3.28rem;
		font-size: 18px
	}
	.Speed{
		height: 1.74rem;
		line-height: 1.74rem;
		display: inline-block;
		
		margin-top: 1.32rem
		 
	}
	.Speed .speed{
		display: inline-block;
		width:3.02rem ;
		height: 1.04rem;
		border: 1px solid #f5f5f5;
		text-align: center;
		color: #a2a2a2;
		line-height: 1.04rem;
		margin-left:.45rem ;
		border-radius: .31rem;

	}
	.Day{
		height: 3.88rem;
	}
	.Day .day{
		margin:.3rem .3rem;
		height:.29rem ;
		line-height: .29rem;
		margin-left: .44rem;
		color:#a2b0cd;
		font-size: 18px;
	}
	
	.Day .timer{
		width: 10.8rem;
		display: flex;
		justify-content: flex-start;
		flex-wrap: wrap;


		
	}
	.Day .timer li{
		margin: 0.25rem .26rem 0 .26rem;
		width:3.02rem ;
		height: 1.04rem;
		line-height: 1.04rem;
		border: 1px solid #f5f5f5;
		text-align: center;
		color: #a2a2a2;
		border-radius: .31rem;
		align-items: center;


		
	}


</style>