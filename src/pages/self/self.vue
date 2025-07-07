<template>
	<statusHeight></statusHeight>
	<view style="" class="flex flex-dc flex-ac">
		<view class="flex flex-ac" style="width: 750rpx;height: 300rpx;background: #21b5a6;">
			<view class="flex flex-ac" style="">
				<image class=" bor-50-" style="margin-left: 30rpx;margin-right: 20rpx; width: 125rpx;height: 125rpx;" src="/src/static/img/per0.png" mode="scaleToFill" />
				<view class="cor-f font-34 font-w7">点击登录用户</view>
			</view>
		</view>
		<view class=" bg-f" style="margin-bottom: 24rpx; box-sizing: border-box; padding: 30rpx 20rpx; width: 700rpx; margin-top: 24rpx;height: 300rpx;border-radius: 10rpx;">
			<view class="font-34 font-w6 cor-4">
				我的订单
			</view>
			<view class=" flex flex-jb" style="margin-top: 40rpx;">
				<view @tap="goOrderList" v-for="item,index in orderButtonArr" :key="index" class="flex flex-ac flex-jc flex-dc" style="width: 142rpx;height: 142rpx;">
					<image
					class=""
						style="width: 62rpx;height: 62rpx;"
						:src='item.imgSrc'
						mode="scaleToFill"
					/>
					<view class="font-24 cor-4" style=" margin-top: 12rpx;">{{item.text}}</view>
				</view>
			</view>
		</view>
		<view class="" style="font-size: 30rpx;color: #444; font-weight: 700; margin: 20rpx;">
			<text style="color: #999;font-weight: 500;">—</text> 猜你喜欢 <text style="color: #999;font-weight: 500;">—</text>
		</view>
		<imageFlow></imageFlow>
	</view>
</template>

<script setup>
import {ref,reactive} from 'vue'
import statusHeight from '@/components/statusHeight.vue'
import imageFlow from "@/components/imageFlow.vue"
import nullMsg from "@/components/nullMsg.vue"
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const orderButtonArr =ref([
	{
		text:'待付款',
		imgSrc:'/static/img/DM_20250619215903_001.png'
	},
	{
		text:'进行中',
		imgSrc:'/static/img/DM_20250619215903_002.png'
	},
	{
		text:'待评价',
		imgSrc:'/static/img/DM_20250619215903_003.png'
	},
	{
		text:'退货/售后',
		imgSrc:'/static/img/DM_20250619215903_004.png'
	},
	{
		text:'收货地址',
		imgSrc:'/static/img/DM_20250619215903_005.png'
	},
])

function goOrderList(){
	uni.navigateTo({
		url:'/pages/self/orderList'
	})
}
</script>

<style></style>
