<template>
	<view class="flex flex-dc flex-ac">
		<view class="" style="height: 88rpx;"></view>
		<view class=" pos-f w-100- bg-f order-tabble-top" style="height: 88rpx;">
			<up-tabs @click="changeTabs" class="" :current='tabsCurrent' :list="tabsList" lineWidth="14"
				lineColor="var(--cor-g)" :activeStyle="{
					color: 'var(--cor-g)',
					fontSize:'26rpx',
					transform: 'scale(1.05)'
				}" :inactiveStyle="{
					color: '#606266',
					fontSize:'26rpx',
					transform: 'scale(1)'
				}" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;width: 25%;">
			</up-tabs>
		</view>
		
		<swiper class="aaa" :current='tabsCurrent' style="width: 100%;height: calc(100svh - 88rpx);" :duration="500">
			<swiper-item>
				<scroll-view scroll-y="true" style="height: calc(100svh - 88rpx);">
					<orderListCom></orderListCom>
					<view v-for="(item,index) in 40">123</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" style="height: calc(100svh - 88rpx);">
					<view>110</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" style="height: calc(100svh - 88rpx);">
					<view>111</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" style="height: calc(100svh - 88rpx);">
					<view>114</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue';
	import orderListCom from '@/components/orderListCom.vue';
	// 创建响应式数据  
	const tabsList = reactive([{
			name: '全部'
		},
		{
			name: '待付款'
		},
		{
			name: '进行中'
		},
		{
			name: '待评价'
		},
	]);
	const tabsCurrent = ref(0)

	function changeTabs(item,index) {
		console.log(item)
		tabsCurrent.value = index
		console.log(tabsCurrent.value)

	}
</script>

<style>
	.order-tabble-top {
		/* #ifdef APP-PLUS  */
		top: 0;
		/* #endif */
		/* #ifdef H5  */
		top: 88rpx;
		/* #endif */
	}
</style>