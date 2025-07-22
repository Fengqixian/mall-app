<template>
	<statusHeight></statusHeight>
	<view style="" class="flex flex-dc flex-ac">



		<view class="flex flex-dc flex-ac bg-f" style="width: 750rpx;">
			<view class=" flex flex-ac flex-jb" style="width: 700rpx;height: 88rpx;">
				<view class=" flex flex-ac"
					style="background: #f7f7f7; border: 1rpx solid var(--cor-g); width: 500rpx;height: 60rpx;border-radius: 30rpx;">
					<up-icon style="margin-left: 10rpx;" name="search" color="#21cc5b" size="50rpx"></up-icon>
					<input ref="searchInputEl" @focus="handleFocus" @blur="handleBlur" class=""
						style="width: 400rpx; margin-left: 8rpx; font-size: 26rpx;line-height: 26rpx;" type="text"
						:placeholder="t('search.placeholder')" v-model="searchParams.name">
				</view>
				<view @tap="getSearchList" class=" font-30 flex flex-ac flex-jc cor-f bg-g"
					style="border-radius: 30rpx; width: 100rpx;height: 60rpx;">
					<text>{{ t('search.button') }}</text>
				</view>
			</view>
		</view>

		<view class="flex flex-dc flex-ac" v-show="isFocus">
			<view class="bg-f flex flex-dc flex-ac" style="width: 750rpx; padding-top: 20rpx;">
				<view class=" flex flex-jb flex-ac" style="width: 700rpx;">
					<view style="color: #444;text-shadow: 0 0 1.2rpx #374050;">{{ t('search.history') }}</view>
					<up-icon style="" name="trash" color="#666" size="38rpx" @tap="clearHistory"></up-icon>
				</view>
				<view class="flex flex-ww" style="width: 700rpx;margin-bottom: 20rpx;margin-top: 20rpx;">
					<view @tap="handleHistory(item)" v-for="item in searchHistory" class=" font-26 cor-5"
						style="border-radius: 8rpx; background: #f5f5f5; margin: 10rpx; padding: 6rpx 10rpx;">
						{{ item }}
					</view>
				</view>
			</view>

			<view class="bg-f flex flex-dc flex-ac" style="width: 750rpx; padding-top: 20rpx;">
				<view class=" flex flex-jb flex-ac" style="width: 700rpx;">
					<view style="color: #444;text-shadow: 0 0 1.2rpx #374050;">{{ t('search.hot') }}</view>
					<!-- <up-icon style="" name="trash" color="#666" size="38rpx"></up-icon> -->
				</view>
				<view class="flex flex-ww" style="width: 700rpx;margin-bottom: 20rpx;margin-top: 20rpx;">
					<view @tap="handleHistory(item)" v-for="(item,index) in hotList" :key="index"  class="flex flex-ac font-26 cor-5"
						style="border-radius: 8rpx; background: #f5f5f5; margin: 10rpx; padding: 6rpx 10rpx;">
						<image style="width: 24rpx;height: 30rpx;margin-right: 6rpx;"
							src="/src/static/img/17452692336806b1f1d940b.png" mode="scaleToFill" />
						{{ item }}
					</view>
				</view>
			</view>
			<!-- <view class="" style="font-size: 30rpx;color: #444; font-weight: 700; margin: 20rpx;">
				<text style="color: #999;font-weight: 500;">—</text> {{ t('search.hot') }} <text
					style="color: #999;font-weight: 500;">—</text>
			</view> -->
		</view>

		<image-flow v-if="searchList.length > 0" :listF="searchList"></image-flow>
		<null-msg v-else  style="margin-top: 300rpx;"></null-msg>

	</view>
</template>

<script setup>
import { reactive, ref,nextTick } from 'vue'
import { onLoad, onShow } from '@dcloudio/uni-app'
import statusHeight from '@/components/statusHeight.vue'
import imageFlow from "@/components/imageFlow.vue"
import nullMsg from "@/components/nullMsg.vue"
import { useI18n } from 'vue-i18n'
import { post } from '@/utils/request'
const { t } = useI18n()
const searchParams = reactive({
	classId: null,
	name: null,
	page: 1,
	pageSize: 10
})
const searchHistory = ref([])
const searchList = ref([])
async function getSearchList() {
	isFocus.value = false
	if (searchParams.name) {
		let historyStorage = uni.getStorageSync('searchHistory') || []
		if (historyStorage.indexOf(searchParams.name) !== -1) {
			historyStorage.splice(historyStorage.indexOf(searchParams.name), 1)
			historyStorage.unshift(searchParams.name)
			searchHistory.value = historyStorage
			uni.setStorageSync('searchHistory', historyStorage)
		} else {
			if (historyStorage.length >= 10) {
				historyStorage.pop()
			}
			historyStorage.unshift(searchParams.name)
			searchHistory.value = historyStorage
			uni.setStorageSync('searchHistory', historyStorage)
		}
	}
	let res = await post('/goods/list', searchParams)
	if (res.code == 200) {
		searchList.value = res.data
	}
}
const isFocus = ref(false)
function handleFocus() {
	isFocus.value = true
}
function handleBlur() {

	setTimeout(() => {
		isFocus.value = false
	}, 100)
}
function clearHistory() {
	console.log(11111111111111)
	uni.showModal({
		title: t('tips.prompt'),
		content:  t('tips.sureClearSearch'),
		success: (res) => {
			if (res.confirm) {
				searchHistory.value = []
				uni.setStorageSync('searchHistory', [])
			}
		}
	})
}
function handleHistory(item) {
	searchParams.name = item
	getSearchList()
}

const hotList = ref([])
async function getHotList() {
	let res = await post('/goods/search/info')
	if (res.code == 200) {
		hotList.value = res.data.searchList
	}
}

const searchInputEl = ref(null)
onShow(() => {
	nextTick(() => {
		console.log(searchInputEl.value)
		searchInputEl?.value?.focus()
	})
})
onLoad(() => {
	searchHistory.value = uni.getStorageSync('searchHistory') || []
	getSearchList()
	getHotList()
})
</script>

<style></style>
