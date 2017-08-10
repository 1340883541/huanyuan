<template>
	<div>
		<p class="back" @click="bbbb">&lt;</p>
		<p>{{msg}}</p>
	</div>
</template>


<script>
	export default{
		data(){
			return{
				msg:"最新上架"
			}			
		},
		components:{
		
		},
		methods:{
			bbbb(){
				this.$router.go(-1)
			}
		},
		mounted(){
			
		}	
	}
</script>


<style scoped>
	.back{
		font-size: 30px
	}

</style>