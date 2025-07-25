<template>
	<view class=" flex flex-jc">
		<text style="margin-top: 30rpx;color: #999;">{{ t("nullMsg") }}</text>
	</view>
</template>

<script setup>
	import {
		useI18n
	} from 'vue-i18n'
	const {
		t
	} = useI18n()
</script>

<style>

</style>