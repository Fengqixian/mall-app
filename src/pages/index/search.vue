<template>
	<statusHeight></statusHeight>
	<view style="" class="flex flex-dc flex-ac">
		<view class="flex flex-dc flex-ac bg-f" style="width: 750rpx;">
			<view class=" flex flex-ac flex-jb" style="width: 700rpx;height: 88rpx;">
				<view class=" flex flex-ac"
					style="background: #f7f7f7; border: 1rpx solid var(--cor-g); width: 500rpx;height: 60rpx;border-radius: 30rpx;">
					<up-icon style="margin-left: 10rpx;" name="search" color="#21cc5b" size="50rpx"></up-icon>
					<input class="" style="width: 400rpx; margin-left: 8rpx; font-size: 26rpx;line-height: 26rpx;"
						type="text" :placeholder="t('search.placeholder')">
				</view>
				<view class=" font-30 flex flex-ac flex-jc cor-f bg-g"
					style="border-radius: 30rpx; width: 100rpx;height: 60rpx;">
					<text>{{ t('search.button') }}</text>
				</view>
			</view>
		</view>


		<view class="bg-f flex flex-dc flex-ac" style="width: 750rpx; padding-top: 20rpx;">
			<view class=" flex flex-jb flex-ac" style="width: 700rpx;">
				<view style="color: #444;text-shadow: 0 0 1.2rpx #374050;">{{ t('search.history') }}</view>
				<up-icon style="" name="trash" color="#666" size="38rpx"></up-icon>
			</view>
			<view class="flex flex-ww" style="width: 700rpx;margin-bottom: 20rpx;margin-top: 20rpx;">
				<view v-for="item in 10" class=" font-26 cor-5" style="border-radius: 8rpx; background: #f5f5f5; margin: 10rpx; padding: 6rpx 10rpx;">
					鲜肉
				</view>
			</view>
		</view>
		
		<view class="bg-f flex flex-dc flex-ac" style="width: 750rpx; padding-top: 20rpx;">
			<view class=" flex flex-jb flex-ac" style="width: 700rpx;">
				<view style="color: #444;text-shadow: 0 0 1.2rpx #374050;">{{ t('search.hot') }}</view>
				<!-- <up-icon style="" name="trash" color="#666" size="38rpx"></up-icon> -->
			</view>
			<view class="flex flex-ww" style="width: 700rpx;margin-bottom: 20rpx;margin-top: 20rpx;">
				<view v-for="item in 10" class="flex flex-ac font-26 cor-5" style="border-radius: 8rpx; background: #f5f5f5; margin: 10rpx; padding: 6rpx 10rpx;">
					<image
					style="width: 24rpx;height: 30rpx;margin-right: 6rpx;"
						src="/src/static/img/17452692336806b1f1d940b.png"
						mode="scaleToFill"
					/>
					鲜肉
				</view>
			</view>
		</view>
		<view class="" style="font-size: 30rpx;color: #444; font-weight: 700; margin: 20rpx;">
			<text style="color: #999;font-weight: 500;">—</text>  {{ t('search.hot') }} <text style="color: #999;font-weight: 500;">—</text>
		</view>
		<image-flow></image-flow>
	</view>
</template>

<script setup>
import statusHeight from '@/components/statusHeight.vue'
import imageFlow from "@/components/imageFlow.vue"
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>

<style></style>
