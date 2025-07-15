<template>
	<view style="" class="flex flex-dc flex-ac">

		<view class=" pos-r" style="width: 750rpx;margin-top: 100rpx;">
			<view class=" font-60 font-w7 pos-r z-5 " style="text-align: right; width: 236rpx;">
				{{ t('login.login') }}
			</view>
			<view class=" pos-a bg-g z-1" style=" bottom: 0; width: 246rpx;height: 16rpx;">

			</view>
		</view>
		<view class=" flex flex-ac"
			style=" margin-top: 180rpx; width: 524rpx;height: 70rpx;border-bottom: 2rpx solid #ccc;">
			<input v-model="state.phone" class=" font-28 flex-g h-100-" style="margin-left: 20rpx;" type="number" :placeholder="t('login.phonePlaceholder')" />
		</view>
		<view class=" flex flex-ac"
			style=" margin-top: 46rpx; width: 524rpx;height: 70rpx;border-bottom: 2rpx solid #ccc;">
			<input v-model="state.code" class=" font-28 flex-g h-100-" style="margin-left: 20rpx;" type="number" :placeholder="t('login.codePlaceholder')" />
			<view @tap="getCodeTime" class=" font-30 cor-4" style="white-space: nowrap;" :class="codeTimeNum!==waitTimenum?'cor-9':''">
				{{codeTimeNum===waitTimenum?t('login.getCode'):t('login.againGet')+codeTimeNum}} 
			</view>
		</view>
		<view @tap="login" class=" flex flex-ac flex-jc cor-f bg-g font-32" style="width: 640rpx;height: 112rpx;border-radius: 56rpx; margin-top: 100rpx;">
			{{ t('login.login') }}
		</view>
	</view>
</template>

<script setup>
	import {ref ,reactive} from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	import {post} from "@/utils/request.js"
	import statusHeight from '@/components/statusHeight.vue'
	import imageFlow from "@/components/imageFlow.vue"
	import {
		useI18n
	} from 'vue-i18n'
	const {
		t
	} = useI18n()

	const state = reactive({
		phone:'18382445979',
		code:''
	})
	const back=ref(false)
	onLoad((e)=>{
		console.log(e.back)
		back.value = e.back || false
	})
	let waitTimenum = 60
	let codeTimeNum = ref(waitTimenum)
	let codeTimeStatus = null
	function getCodeTime(){
		if(codeTimeStatus) return
		getCode()
		codeTimeStatus = setInterval(()=>{
			codeTimeNum.value=codeTimeNum.value>1?--codeTimeNum.value:waitTimenum
			if(codeTimeNum.value===waitTimenum){
				clearInterval(codeTimeStatus)
				codeTimeStatus=null
			}
		},1000)
	}
	async function getCode(){
		let params={
			"area": "+86",
  			"phone": state.phone
		}
		let data = await post('/send/verification/code',params)	
		if(data.code!==200){
			uni.showToast({
				title:data.message,
				icon:'none'
			})
			codeTimeNum.value=waitTimenum
			clearInterval(codeTimeStatus)
			codeTimeStatus=null
		}
		console.log(data)
	}
	async function  login() {
		let params={
  			"phone": state.phone,
  			"code": state.code
		}
		uni.showLoading({
			title:"loading",
			mask:true
			})
		let data = await post('/login/verification/code',params)
		uni.hideLoading()
		// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiIzIiwiZXhwIjoxNzU5OTEzODMwLCJuYmYiOjE3NTIxMzc4MzAsImlhdCI6MTc1MjEzNzgzMH0.KjyhD7_LWl_pGa4x1k0r1I_V43qsRensxNLGMXf_OdY
		if(data.code === 200){
			uni.setStorageSync('token',data.data.accessToken)
			getUserInfo()
		}else{
			uni.hideLoading()
			uni.showToast({
				title:data.message,
				icon:'none'
			})
		}
	}
	async function getUserInfo(){
		let data = await post('/user')
		console.log(data)
		if(data.code==200){
			uni.setStorageSync('userInfo',data.data)
			if(back.value){
				uni.navigateBack()
			}else{
				uni.reLaunch({
					url:"/pages/self/self"
				})
			}

		}else{
			uni.hideLoading()
			uni.showToast({
				title:data.message,
				icon:'none'
			})
		}

	}
</script>

<style scoped>
	.cor-9{
		color: #999;
	}
</style>