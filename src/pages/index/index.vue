<template>
	<statusHeight></statusHeight>
	<view class=" pos-r flex flex-dc flex-ac ov-h" style="width: 750rpx;">
		<view class="pos-a top-0 left-0 z-0" style="height: 470rpx;width: 750rpx;">
			<image class="pos-a trt-5" src="/src/static/img/DM_20250619214345_002.png"
				:class="swiperIndex === 0 ? 'active' : 'op-0'" style="height: 470rpx;width: 750rpx;" mode=""></image>
			<image class="pos-a trt-5" src="/src/static/img/DM_20250619214345_003.png"
				:class="swiperIndex === 1 ? 'active' : 'op-0'" style="height: 470rpx;width: 750rpx;" mode=""></image>
		</view>
		<view class="pos-r z-1 " style="height: 470rpx;width: 700rpx;">
			<view class="flex flex-jc flex-ac font-32 cor-f" style="font-weight: 700; height: 88rpx;">
				{{ t('home.title') }}</view>
			<view @tap="navWarehouse" class="flex flex-ac cor-f" style="">
				<up-icon name="map-fill" color="#fff" size="34rpx"></up-icon>
				<text class="font-30" style="margin-left: 10rpx;margin-right: 10rpx;">{{ t('home.getSite') }}</text>
				<up-icon style="position: relative;top: 2rpx;" class="" name="arrow-down-fill" color="#fff"
					size="22rpx"></up-icon>
			</view>
			<view @tap="navSearch" class="flex flex-ac flex-jb"
				style="margin-top: 20rpx; height: 88rpx;width: 100%;background-color: #fff;border-radius: 44rpx;">
				<view class="flex flex-ac" style="padding-left: 20rpx;">
					<up-icon name="search" color="#ccc" size="50rpx"></up-icon>
					<view class="" style="margin-left: 10rpx; width: 200rpx;height: 80rpx;">
						<swiper style="height: 80rpx;" class="" autoplay circular vertical interval="2000"
							duration="1000">
							<swiper-item>
								<text style="width: 200rpx;height: 80rpx;color: #aaa;" class=" flex flex-ac">123</text>
							</swiper-item>
							<swiper-item>
								<text style="width: 200rpx;height: 80rpx;color: #aaa;" class=" flex flex-ac">123</text>
							</swiper-item>
						</swiper>
					</view>


				</view>
				<view class="trt-5 flex flex-ac flex-jc cor-f font-24"
					style=" border-radius: 31rpx; margin-right: 20rpx; width: 138rpx;height: 62rpx;"
					:style="swiperIndex === 1 ?'background: #339966;':'background: #66ccff;'">
					{{ t('home.search') }}
				</view>
			</view>
			<view class="" style="width: 700rpx;height: 158rpx;margin-top: 22rpx;">
				<swiper @change="swiperChange" :current='swiperIndex' style="height: 158rpx;width: 700rpx;" class=""
					autoplay circular interval="3000" duration="1000">
					<swiper-item>
						<view style="height: 158rpx;width: 700rpx;" class="pos-r ov-h ">
							<image class="pos-a" style="left: -25rpx;bottom: -60rpx;width: 750rpx;height: 470rpx;"
								src="/src/static/img/DM_20250619214345_002.png" mode="scaleToFill" />
						</view>
					</swiper-item>
					<swiper-item>
						<view style="height: 158rpx;width: 700rpx;" class="pos-r ov-h ">
							<image class="pos-a" style="left: -25rpx;bottom: -60rpx;width: 750rpx;height: 470rpx;"
								src="/src/static/img/DM_20250619214345_003.png" mode="scaleToFill" />
						</view>
					</swiper-item>
				</swiper>

			</view>
		</view>

		<view class=" flex flex-dc flex-ac bg-f" style="width: 750rpx;">
			<view style="width: 700rpx; margin-top: 20rpx;height: 60rpx;border-radius: 20rpx;background: #fff8e6;"
				class="flex flex-ac ">
				<image style="width: 36rpx;height: 32rpx;margin-left: 20rpx;"
					src="/src/static/img/DM_20250619214345_007.png" mode="scaleToFill" />
				<view style="width: 560rpx;margin-left: 20rpx;height: 60rpx;" class="">
					<swiper style="width: 560rpx;height: 100%;" class="" autoplay circular vertical interval="2000"
						duration="1000">
						<swiper-item>
							<view style="width: 560rpx;height: 100%; color: rgb(54, 14, 14);line-height: 60rpx;"
								class="text-d font-B  font-24">
								正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版
							</view>
						</swiper-item>
						<swiper-item>
							<view style="width: 560rpx;height: 100%; color: rgb(54, 14, 14);line-height: 60rpx;"
								class="text-d font-B  font-24">
								正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版
							</view>
						</swiper-item>
					</swiper>
				</view>
			</view>

			<view style="width: 700rpx;height: 600rpx;overflow-x: scroll;" class="flex flex-dc flex-ww bg-f">
				<view v-for="item in 20" style="width: 20%;height: 174rpx;margin: 4rpx 0;"
					class=" flex flex-dc flex-jc flex-ac">
					<image style="width: 112rpx;height: 112rpx;" src="/src/static/img/DM_20250619214345_010.png"
						mode="scaleToFill" />
					<view style="font-size: 26rpx;color: #444;margin-top: 10rpx;">海鲜水产</view>
				</view>
			</view>
		</view>
		<view style="width: 750rpx;height: 128rpx;margin-top: 26rpx;margin-bottom: 10rpx; overflow-x: scroll;" class=" flex fle-ac bg-f">
			<view v-for="item, index in state.hometabble" :key="index"  class=" flex flex-ac">
				<view @tap="changetabble(index)" class="flex flex-dc flex-ac flex-jc"
					style="padding: 0 20rpx;white-space: nowrap;">
					<view style="font-size: 26rpx;font-weight: 700;">{{ item.title }}</view>
					<view class=""
						style="padding: 6rpx 10rpx; border-radius: 22rpx;line-height: 22rpx; font-size: 22rpx;color: #9a9ba4;margin-top: 8rpx;"
						:class="state.homeIndex === index ? 'tabbleActive' : 'tabbleNoActive'">{{ item.text }}</view>
				</view>
				<view v-if="state.hometabble.length-1!==index" style="width: 1rpx; height: 40rpx;background: #dbdbdb;" class=""></view>
			</view>

		</view>
		
		<image-flow></image-flow>
		<tabbar></tabbar>

	</view>
</template>

<script setup>
import { ref, reactive } from 'vue'
import tabbar from "@/components/tabbar.vue"
import imageFlow from "@/components/imageFlow.vue"
import statusHeight from '@/components/statusHeight.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const swiperIndex = ref(0)
function swiperChange(e) {
	swiperIndex.value = e.detail.current
}

const state = reactive({
	hometabble: [],
	homeIndex: 0
})
for (let index = 0; index < t('home.tabbleLength')-0; index++) {
	let obj = {
		title: t('home.tabble.' + index + '.title'),
		text: t('home.tabble.' + index + '.text'),
	}
	state.hometabble.push(obj)
	// state.hometabble.push(obj)
}
function changetabble(index) {
	state.homeIndex = index
}

function navSearch(){
	uni.navigateTo({
		url:'/pages/index/search'
	})
}
function navWarehouse(){
	uni.navigateTo({
		url:'/pages/index/getWarehouse'
	})
}
</script>

<style>
/* 针对 Webkit 内核浏览器（Chrome、Edge、Safari） */
::-webkit-scrollbar {
	display: none;
}

.active {
	opacity: 1;
}

.trt-5 {
	transition: opacity 0.5s;
}

.text-d {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}



.tabbleNoActive {}

.tabbleActive {
	background-color: #21cc5b;
	color: #fff !important;
}
</style>
