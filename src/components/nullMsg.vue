<template>
	<view class=" flex flex-dc flex-ac">
		<image style="width: 380rpx;height: 248rpx;" src="/src/static/img/DM_20250625175102_001.png" mode=""></image>
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