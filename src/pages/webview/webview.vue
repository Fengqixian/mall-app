<template>
	<view>
		<web-view  v-if="url !== ''" :src='url' @message="onWebViewMessage"></web-view>
		<!-- 可添加加载状态提示 -->
		<view v-else>Loading...</view>
	</view>
</template>

<script setup>
	import { onMounted, ref } from 'vue';
	
	const lat = ref(30.5722599);
	const lng = ref(104.0665099);
	const lang = ref('th');
	const url = ref('');
	const address = uni.getStorageSync('appConfig').MERCHANT_ADDRESS.value
	onMounted(() => {
		debugger
		uni.getLocation({
			type: 'wgs84',
			success: function (res) {
				lang.value =uni.getStorageSync('appLanguage').split('-')[0]
				lat.value = res.latitude
				lng.value = res.longitude
				url.value = `https://freshdala-555.com/h5/hybrid/html/home.html?address=${address}&lang=${lang.value}&lat=${lat.value}&lng=${lng.value}`
				// url.value = `http://127.0.0.1/html/home.html?address=${address}&lang=${lang.value}&lat=${lat.value}&lng=${lng.value}`
			},
			fail: function(err) {
				console.log('获取位置失败', err)
				url.value = `https://freshdala-555.com/h5/hybrid/html/home.html?address=${address}&lang=${lang.value}`
			}
		});
		
	})
	const onWebViewMessage = (e) => {
		console.log('view back', e);
		getApp().globalData.addressInfo = e.detail.data[0]
	}
</script>

<style>

</style>
