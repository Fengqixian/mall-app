<template>
	<view>
		<web-view :src='url' @message="onWebViewMessage"></web-view>
	</view>
</template>

<script setup>
	import { ref } from 'vue';
	const lat = ref(30.5722599);
	const lng = ref(104.0665099);
	const lang = ref('th');
	 lang.value =uni.getStorageSync('appLanguage').split('-')[0]
	 console.log(lang.value,'lang.value')
	const url = ref(`https://freshdala-555.com/h5/hybrid/html/home.html?lat=${lat.value}&lng=${lng.value}&lang=${lang.value}`);
	// const url = ref(`http://127.0.0.1:5501/src/hybrid/html/index.html?lat=${lat.value}&lng=${lng.value}&lang=${lang.value}`);

	const onWebViewMessage = (e) => {
		console.log(e.detail.data[0]);
		getApp().globalData.addressInfo = e.detail.data[0]
	}
</script>

<style>

</style>
