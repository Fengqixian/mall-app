<template>
	<view style="" class="flex flex-dc flex-ac">

		<view class=" pos-r" style="width: 750rpx;margin-top: 100rpx;">
			<view class=" font-60 font-w7 pos-r z-5 " style="text-align: right; width: 236rpx;">
				登录
			</view>
			<view class=" pos-a bg-g z-1" style=" bottom: 0; width: 246rpx;height: 16rpx;">

			</view>
		</view>
		<view class=" flex flex-ac"
			style=" margin-top: 180rpx; width: 524rpx;height: 70rpx;border-bottom: 2rpx solid #ccc;">
			<input class=" font-28 flex-g h-100-" style="margin-left: 20rpx;" type="text" placeholder="请输入手机号" />
		</view>
		<view class=" flex flex-ac"
			style=" margin-top: 46rpx; width: 524rpx;height: 70rpx;border-bottom: 2rpx solid #ccc;">
			<input class=" font-28 flex-g h-100-" style="margin-left: 20rpx;" type="text" placeholder="请输入验证码" />
			<view @tap="getCode" class=" font-30 cor-4" style="white-space: nowrap;" :class="codeTimeNum!==waitTimenum?'cor-9':''">
				{{codeTimeNum===waitTimenum?'获取验证码':`重新获取(${codeTimeNum})`}} 
			</view>
		</view>
		<view class=" flex flex-ac flex-jc cor-f bg-g font-32" style="width: 640rpx;height: 112rpx;border-radius: 56rpx; margin-top: 100rpx;">
			登录
		</view>
	</view>
</template>

<script setup>
	import {ref ,reactive} from 'vue'
	import statusHeight from '@/components/statusHeight.vue'
	import imageFlow from "@/components/imageFlow.vue"
	import {
		useI18n
	} from 'vue-i18n'
	const {
		t
	} = useI18n()
	let waitTimenum = 60
	let codeTimeNum = ref(waitTimenum)
	let codeTimeStatus = null
	function getCode(){
		if(codeTimeStatus) return
		codeTimeStatus = setInterval(()=>{
			codeTimeNum.value=codeTimeNum.value>1?--codeTimeNum.value:waitTimenum
			if(codeTimeNum.value===waitTimenum){
				clearInterval(codeTimeStatus)
				codeTimeStatus=null
			}
		},1000)
	}
</script>

<style scoped>
	.cor-9{
		color: #999;
	}
</style>