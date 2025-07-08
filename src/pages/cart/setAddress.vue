<template>
	<view class=" flex flex-dc flex-ac">
		<view class=" bg-f flex flex-dc flex-ac" style="width: 750rpx;margin-top: 20rpx;">
			<view class=" flex flex-ac bor-b2sf0" style="width: 700rpx;height: 100rpx;">
				<view class=" flex flex-ac cor-8 font-28" style="width: 160rpx;height: 100rpx;">
					收货人
				</view>
				<view class="">
					<input type="text" class=" font-28" style="padding: 3rpx 6rpx;" placeholder="请输入姓名"/>
				</view>
			</view>
			<view class=" flex flex-ac bor-b2sf0" style="width: 700rpx;height: 100rpx;">
				<view class=" flex flex-ac cor-8 font-26 op-0" style="width: 160rpx;height: 100rpx;">
					占位
				</view>
				<view class="flex font-28 cor-4">
					<view class="flex flex-ac">
						<radio style="transform:scale(0.7)" borderColor="#d1d1d1" activeBorderColor='#21cc5b'
							:checked="!radioStatus" @tap="radioStatus=false" color='#21cc5b'></radio>
							女士
					</view>
					<view class="flex flex-ac" style="margin-left: 80rpx;">
						<radio style="transform:scale(0.7)" borderColor="#d1d1d1" activeBorderColor='#21cc5b'
							:checked="radioStatus" @tap="radioStatus=true" color='#21cc5b'></radio>
							先生
					</view>
				</view>
			</view>
			
			<view class=" flex flex-ac bor-b2sf0" style="width: 700rpx;height: 100rpx;">
				<view class=" flex flex-ac cor-8 font-28" style="width: 160rpx;height: 100rpx;">
					手机号
				</view>
				<view class="">
					<input type="number" class=" font-28" style="padding: 3rpx 6rpx;" placeholder="请输入手机号"/>
				</view>
			</view>
			
			<view class=" flex flex-ac bor-b2sf0" style="width: 700rpx;min-height: 100rpx;">
				<view class=" flex flex-ac cor-8 font-28" style="width: 160rpx;height: 100rpx;">
					收货地址
				</view>
				<view @click="navMap" class=" font-28 cor-4  flex-g flex flex-ac flex-jb">
					<view class="" style="width: 500rpx;padding: 20rpx 0;">
						{{addressInfo?addressInfo.address:'点击选择收货地址'}}
					</view>
					<up-icon style="display: inline-block;" name="arrow-right" color="#444" size="32rpx"></up-icon>
					
				</view>
			</view>
			
			<view class=" flex flex-ac bor-b2sf0" style="width: 700rpx;height: 100rpx;">
				<view class=" flex flex-ac cor-8 font-28" style="width: 160rpx;height: 100rpx;">
					详细地址
				</view>
				<view class="">
					<input type="text" class=" font-28" style="width: 500rpx; padding: 3rpx 6rpx;" placeholder="请输入详细地址和门牌号"/>
				</view>
			</view>
			
			<view class=" flex flex-ac bor-b2sf0" style="width: 700rpx;height: 100rpx;padding: 20rpx 0;">
				<view class=" flex flex-ac cor-8 font-28" style="max-width: 160rpx;min-width: 160rpx;height: 100rpx;">
					标签
				</view>
				<view class=" flex-g h-100- flex flex-ac flex-ww">
					<view v-for="i in 10" class="bor-box font-22 cor-g"
						style="margin-right: 20rpx; background: rgba(33, 204, 91,.1); border: 2rpx solid rgb(33, 204, 91); display: inline-block; margin-right: 8rpx; border-radius: 4rpx; padding: 0 6rpx; white-space: nowrap;height: 32rpx;line-height: 32rpx;">
						标签
					</view>
				</view>
			</view>
			
			<view class=" flex flex-ac bor-b2sf0" style="width: 700rpx;height: 100rpx;padding: 20rpx 0;">
				<view class=" flex-g h-100- flex flex-dc flex-jc">
					<view class="font-26 cor-4">
						设为默认地址
					</view>
					<view class="font-24 cor-8" style="margin-top: 12rpx;">
						每次购物时会优先定位该地址，方便您轻松购物
					</view>
				</view>
				<up-switch v-model="switchValue" size="22" activeColor="#21cc5b" @change="changeSwitchValue"></up-switch>

			</view>
		</view>
	
		<view class=" bg-g cor-f flex flex-ac flex-jc" style="width: 700rpx; margin-top: 100rpx;height: 88rpx;border-radius: 12rpx;">
			保存收货地址
		</view>
		<view class=" cor-f flex flex-ac flex-jc" style="background: #dfdfdf; width: 700rpx; margin-top: 30rpx;height: 88rpx;border-radius: 12rpx;">
			保存收货地址
		</view>
	</view>
</template>

<script setup>
	
	import {ref} from 'vue'
	import { onShow } from '@dcloudio/uni-app'
	const radioStatus = ref(false)
	
	const switchValue= ref(false)
	function changeSwitchValue(){
		
	}
	
	function navMap(){
		uni.navigateTo({
			url:'/pages/webview/webview'
		})
	}
	const addressInfo = ref()
	onShow(()=>{
		console.log(getApp().globalData.addressInfo);
		addressInfo.value = getApp().globalData.addressInfo
	})
</script>

<style>

</style>
