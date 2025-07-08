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
	const url = ref(`http://192.168.101.7:5173/h5/src/googleMaps/index.html?lat=${lat.value}&lng=${lng.value}&lang=${lang.value}`);

	const onWebViewMessage = (e) => {
		console.log(e.detail.data[0]);
		getApp().globalData.addressInfo = e.detail.data[0]
	}
</script>

<style>

</style>
