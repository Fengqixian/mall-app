<template>
	<view>
		<view class=" pos-f left-0 top-0" style="background: #f5f5f5; z-index: 100; width: 750rpx;" :style="'height: '+statusBarHeight+'px;'">
			
		</view>
		<view class="" :style="'height: '+statusBarHeight+'px;'">
			
		</view>
	</view>
</template>

<script setup>
	import {ref} from 'vue'
	const systemInfo = uni.getSystemInfoSync();
	const statusBarHeight =ref(systemInfo.statusBarHeight || 0); // 单位：px
	console.log('状态栏高度:', statusBarHeight);
</script>

<style>

</style>