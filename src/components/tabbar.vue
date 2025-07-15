<template>
	<view class="" style="height: 112rpx;">
		
	</view>
	<view class=" pos-f flex" style="top: 50%;right: 50%; z-index: 100;">
		<view @tap="changeLgg" class="flex flex-ac flex-jc pos-a cor-f" style="background: #09bd04; border-radius: 50%; top: 60rpx; min-width: 60rpx;height: 60rpx;">
			{{ languageIndex }}
		</view>

	</view>
</template>

<script setup>
	import {ref } from 'vue'
	import { onLoad } from '@dcloudio/uni-app'
	import { useI18n } from 'vue-i18n'
	const { locale } = useI18n()

	const props = defineProps({
		status: Number,
	})
	const languageArr = ['en', 'zh-Hans','th-TH']
	const languageIndex =ref(1) 
	const changeLgg = () => {
	    // 切换语言，这里简单在英语和中文间切换
		if(languageIndex.value <2){
			languageIndex.value++
		}else{
			languageIndex.value=0
		}
		console.log(languageArr[languageIndex.value])
		console.log(languageIndex.value,'console.log(languageIndex.value,)')
	    locale.value = languageArr[languageIndex.value]
		
		uni.setLocale(locale.value);
	    // 保存当前语言到本地存储
	    uni.setStorageSync('appLanguage', locale.value)

		    // 重新加载页面
    uni.reLaunch({
        url: '/' 
    });

	}
	
	function goNav(e){
		uni.navigateTo({
			url: e,
			animationType: 'none'
		})
	}
	const findIndexes = (arr, target) => 
    arr.reduce((acc, cur, idx) => (cur === target && acc.push(idx), acc), []);
	onLoad(()=>{
		console.log(uni.getStorageSync('appLanguage'))
		if(uni.getStorageSync('appLanguage')){
			locale.value = uni.getStorageSync('appLanguage')
			const index = findIndexes(languageArr, locale.value);
			console.log(index,'index')
			languageIndex.value = index[0]
		}
	})
</script>

<style>
</style>