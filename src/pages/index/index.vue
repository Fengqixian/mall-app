<template>
	<statusHeight></statusHeight>
	<view class=" pos-r flex flex-dc flex-ac ov-h" style="width: 750rpx;">
		<view class="pos-a top-0 left-0 z-0" style="height: 470rpx;width: 750rpx;">
			<image v-for="(item, index) in bannerList" :key='item.id' class="pos-a trt-5" :src="item.url"
				:class="swiperIndex === index ? 'active' : 'op-0'" style="height: 470rpx;width: 750rpx;"
				mode="aspectFill"></image>

			<!-- 			<image class="pos-a trt-5" src="/src/static/img/DM_20250619214345_003.png"
				:class="swiperIndex === 1 ? 'active' : 'op-0'" style="height: 470rpx;width: 750rpx;" mode=""></image> -->
		</view>
		<view class="pos-r z-1 " style="height: 470rpx;width: 700rpx;">
			<view class="flex flex-jc flex-ac font-32 cor-f" style="font-weight: 700; height: 88rpx;">
				{{ t('home.title') }}
			</view>
			<!-- <view @tap="navWarehouse" class="flex flex-ac cor-f" style="">
				<up-icon name="map-fill" color="#fff" size="34rpx"></up-icon>
				<text class="font-30" style="margin-left: 10rpx;margin-right: 10rpx;">{{ t('home.getSite') }}</text>
				<up-icon style="position: relative;top: 2rpx;" class="" name="arrow-down-fill" color="#fff"
					size="22rpx"></up-icon>
			</view> -->
			<view @tap="navSearch(textSwiper.searchArr[swiperSearchIndex])" class="flex flex-ac flex-jb"
				style="margin-top: 20rpx; height: 88rpx;width: 100%;background-color: #fff;border-radius: 44rpx;">
				<view class="flex flex-ac" style="padding-left: 20rpx;">
					<up-icon name="search" color="#ccc" size="50rpx"></up-icon>
					<view class="" style="margin-left: 10rpx; width: 400rpx;height: 80rpx;">
						<swiper style="height: 80rpx;" :current='swiperSearchIndex' class="" autoplay circular vertical
							interval="2000" duration="1000" @change="swiperSearchChange">
							<swiper-item v-for="(item, index) in textSwiper.searchArr" :key="index">
								<text style="width: 400rpx;height: 80rpx;color: #aaa;"
									class="text-d font-28  flex flex-ac">{{ item }}</text>
							</swiper-item>
							<!-- <swiper-item>
								<text style="width: 200rpx;height: 80rpx;color: #aaa;" class=" flex flex-ac">123</text>
							</swiper-item> -->
						</swiper>
					</view>


				</view>
				<view class="trt-5 flex flex-ac flex-jc cor-f font-24"
					style=" border-radius: 31rpx; margin-right: 20rpx; width: 138rpx;height: 62rpx;"
					:style="swiperIndex === 1 ? 'background: #339966;' : 'background: #66ccff;'">
					{{ t('home.search') }}
				</view>
			</view>
			<view class="" style="width: 700rpx;height: 158rpx;margin-top: 22rpx;">
				<swiper @change="swiperChange" :current='swiperIndex' style="height: 158rpx;width: 700rpx;" class=""
					autoplay circular interval="3000" duration="1000">
					<swiper-item v-for="(item, index) in bannerList">
						<view style="height: 158rpx;width: 700rpx;" class="pos-r ov-h ">
							<image class="pos-a" style="left: -24rpx;bottom: -60rpx;width: 750rpx;height: 470rpx;"
								:src="item.url" mode="aspectFill" />
						</view>
					</swiper-item>
					<!-- 					<swiper-item>
						<view style="height: 158rpx;width: 700rpx;" class="pos-r ov-h ">
							<image class="pos-a" style="left: -25rpx;bottom: -60rpx;width: 750rpx;height: 470rpx;"
								src="/src/static/img/DM_20250619214345_003.png" mode="scaleToFill" />
						</view>
					</swiper-item> -->
				</swiper>

			</view>
		</view>

		<view class=" flex flex-dc flex-ac bg-f" style="width: 750rpx;">
			<view style="width: 700rpx; margin-top: 20rpx;height: 60rpx;border-radius: 20rpx;background: #fff8e6;"
				class="flex flex-ac ">
				<image style="width: 36rpx;height: 32rpx;margin-left: 20rpx;"
					src="/src/static/img/DM_20250619214345_007.png" mode="scaleToFill" />
				<view style="width: 560rpx;margin-left: 20rpx;height: 60rpx;" class="">
					<swiper style="width: 560rpx;height: 100%;" class="" autoplay circular interval="2000"
						duration="1000">
						<swiper-item v-for="(item, index) in textSwiper.noticeArr" :key="index">

							<view style="width: 560rpx;height: 100%; color: rgb(54, 14, 14);line-height: 60rpx;"
								class="text-d font-B  font-24">
								<u-notice-bar :text="item" icon="" fontSize="12"></u-notice-bar>
							</view>
						</swiper-item>
						<!-- <swiper-item>
							<view style="width: 560rpx;height: 100%; color: rgb(54, 14, 14);line-height: 60rpx;"
								class="text-d font-B  font-24">
								正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版正版
							</view>
						</swiper-item> -->
					</swiper>
				</view>
			</view>

			<!-- <view style="width: 700rpx;" class="aaa">
				<u-scroll-list :indicator="true" indicatorColor="#fff0f0" indicatorActiveColor="#f56c6c">
					<view v-for="(item, index) in state.classList" :key="index">
						<image :src="item.coverImage"></image>
					</view>
				</u-scroll-list>
			</view> -->

			<u-scroll-list style="width: 700rpx;height: 400rpx;" indicatorActiveColor="#09bd04" :indicatorBarWidth="50/state.classList.length*10"  class="">
				<view style="min-width: 700rpx;" class="grid-container bg-f">
					<view @tap="navClass(index)" v-for="(item, index) in state.classList" :key="item.id"
						style="width: 140rpx;min-height: 174rpx;margin: 4rpx 0;" class=" flex flex-dc flex-jc flex-ac">
						<image class="" style="width: 112rpx;min-height: 112rpx;max-height: 112rpx;"
							:src="item.coverImage" mode="scaleToFill" />
						<view class=" text-d"
							style="width: 120rpx; font-size: 26rpx;color: #444;margin-top: 10rpx;text-align: center;">
							{{ item.name }}</view>
					</view>
				</view>
			</u-scroll-list>

			<!-- <view style="width: 700rpx;height: 400rpx;overflow-x: scroll;" class="grid-container bg-f aaa">
				<view @tap="navClass(index)" v-for="(item, index) in state.classList" :key="item.id"
					style="width: 140rpx;min-height: 174rpx;margin: 4rpx 0;" class=" flex flex-dc flex-jc flex-ac">
					<image class="" style="width: 112rpx;min-height: 112rpx;max-height: 112rpx;" :src="item.coverImage"
						mode="scaleToFill" />
					<view class=" text-d"
						style="width: 120rpx; font-size: 26rpx;color: #444;margin-top: 10rpx;text-align: center;">
						{{ item.name }}</view>
				</view>
			</view> -->

		</view>
		<!-- 		<view v-if="false" style="width: 750rpx;height: 128rpx;margin-top: 26rpx;margin-bottom: 10rpx; overflow-x: scroll;" class=" flex fle-ac bg-f">
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
		</view> -->

		<view class=" flex flex-jb " style="width: 710rpx;margin: 25rpx 0 10rpx;height: 312rpx;">
			<view @tap="goSeckillList" class="flex flex-dc flex-ac bor-24 bg-f ov-h" style="width: 345rpx;">
				<view class=""
					style="height: 106rpx;background: linear-gradient(180deg,#ffe7e7,#fff);width: 300rpx;padding: 0 20rpx;">
					<view class=" font-36 cor-4 font-w7" style="line-height: 62rpx; height: 54rpx;margin-top: 8rpx;">
						{{ t('toSeckill') }}
					</view>
					<view class=" font-26 text-d" style="color: #ff6027;margin-top: 10rpx;width: 300rpx;">
						{{ t('toSeckillDesc') }}
					</view>
				</view>
				<view class=" flex flex-jb" style="width: 300rpx;margin-top: 10rpx;">
					<view v-for="(item, index) in seckillList" :key="index" class="">
						<image :src="item.goodsInfo.coverImage" style="width: 136rpx;height: 136rpx;" mode=""></image>
						<view class="cor-r font-28 font-w6" style="margin-top: 6rpx;">
							<text class="font-18">{{ item.goodsInfo.priceUnitName
							}}</text>{{ (item.goodsInfo.price / 100).toFixed(2) }}
						</view>
					</view>

				</view>
			</view>
			<view @tap="goSelectList" class="flex flex-dc flex-ac bor-24 bg-f ov-h" style="width: 345rpx;">
				<view class=""
					style="height: 106rpx;background: linear-gradient(180deg,#e5fcbd,#fff);width: 300rpx;padding: 0 20rpx;">
					<view class=" font-36 cor-4 font-w7" style="line-height: 62rpx; height: 54rpx;margin-top: 8rpx;">
						{{ t('toSelect') }}
					</view>
					<view class=" font-26 text-d" style="color: #6ccc4e;margin-top: 10rpx;width: 300rpx;">
						{{ t('toSelectDesc') }}
					</view>
				</view>
				<view class=" flex flex-jb" style="width: 300rpx;margin-top: 10rpx;">
					<view v-for="(item, index) in selectList" :key="index" class="">
						<image :src="item.goodsInfo.coverImage" style="width: 136rpx;height: 136rpx;" mode=""></image>
						<view class="cor-r font-28 font-w6" style="margin-top: 6rpx;">
							<text class="font-18">{{ item.goodsInfo.priceUnitName
							}}</text>{{ (item.goodsInfo.price / 100).toFixed(2) }}
						</view>
					</view>

				</view>
			</view>
		</view>
		<image-flow v-if="goodsList.length > 0" :listF="goodsList"></image-flow>
		<no-more-data v-if="goodsPage.isNullMsg"></no-more-data>
		<!-- <tabbar></tabbar> -->

	</view>
</template>

<script setup>
import {
	ref,
	reactive
} from 'vue'
import tabbar from "@/components/tabbar.vue"


import noMoreData from "@/components/noMoreData.vue"
import imageFlow from "@/components/imageFlow.vue"
import statusHeight from '@/components/statusHeight.vue'
import {
	useI18n
} from 'vue-i18n'
import {
	post
} from '../../utils/request'
import {
	onLoad,
	onShow,
	onPullDownRefresh,
	onReachBottom
} from '@dcloudio/uni-app'
const {
	t,
	tm
} = useI18n()
console.log(tm('home.tabble'))
const swiperIndex = ref(0)
const swiperSearchIndex = ref(0)

function swiperChange(e) {
	swiperIndex.value = e.detail.current
}

function swiperSearchChange(e) {
	swiperSearchIndex.value = e.detail.current
}


const state = reactive({
	hometabble: [],
	homeIndex: 0,
	classList: []
})
setTimeout(() => {
	state.hometabble = tm('home.tabble')
	// for (let index = 0; index < t('home.tabbleLength')-0; index++) {
	// 	let obj = {
	// 		title: t('home.tabble.' + index + '.title'),
	// 		text: t('home.tabble.' + index + '.text'),
	// 	}
	// 	state.hometabble.push(obj)
	// }
})


function changetabble(index) {
	state.homeIndex = index
}

function navSearch(name) {
	uni.navigateTo({
		url: '/pages/index/search?name=' + name
	})
}

function navWarehouse() {
	uni.navigateTo({
		url: '/pages/index/getWarehouse'
	})
}

function navClass(index) {
	uni.setStorageSync('classIndex', index + 1)
	uni.switchTab({
		url: '/pages/class/class'
	})
}



const bannerList = ref([])
async function getBannerList() {
	const res = await post('/banner/list')
	bannerList.value = res.data
	console.log(res)
}
const textSwiper = reactive({
	searchArr: [],
	noticeArr: [],
})

async function getSearchWords() {
	try {
		let res = await post('/goods/search/words')
		if (res.code === 200) {
			textSwiper.searchArr = res.data
		}
		let {value: noticeJSON} = uni.getStorageSync('appConfig')['CAROUSEL_NOTIFICATION']
		textSwiper.noticeArr = JSON.parse(noticeJSON)
	} catch (err) {
		console.log(err)
		// let time = setTimeout(()=>{
		// 	getSearchWords()
		// 	clearTimeout(time)
		// },1000)
	}
}
async function getClassList() {
	let res = await post('/goods/class/list')
	if (res.code === 200) {
		state.classList = res.data
	}
	console.log(res)
}

const goodsList = ref([])
const goodsPage = reactive({
	page: 1,
	pageSize: 10,
	isNullMsg: false
})
async function getGoodsList() {
	let params = {
		page: goodsPage.page,
		pageSize: goodsPage.pageSize,
		name: null,
		classId: null
	}
	let res = await post('/goods/list', params)
	console.log(res)
	if (res.code == 200) {
		if (res.data.length) {
			goodsList.value = [...goodsList.value, ...res.data]
		} else {
			goodsPage.isNullMsg = true
		}

	}
}
//秒杀列表
const seckillList = ref([])
async function getSeckillList() {
	let params = {
		classId: null,
		name: null,
		page: 1,
		pageSize: 2
	}
	let res = await post('/goods/purchased/list', params)
	console.log(res)
	if (res.code == 200) {
		seckillList.value = res.data
	}
}

function goSeckillList() {
	uni.navigateTo({
		url: '/pages/index/seckillList'
	})
}
//优选列表
const selectList = ref([])
async function getSelectList() {
	let params = {
		classId: null,
		name: null,
		page: 1,
		pageSize: 2
	}
	let res = await post('/goods/qualityed/list', params)
	console.log(res)
	if (res.code == 200) {
		selectList.value = res.data
	}
}

function goSelectList() {
	uni.navigateTo({
		url: '/pages/index/selectList'
	})
}
function setBadge(arr) {
	// 设置角标
	let text = arr.reduce((sum, item) => sum + item.number, 0)
	console.log(text)
	if(text==0){return}
	uni.setTabBarBadge({
		index: 2, // tabBar 的哪一项，从左边算起，索引从0开始
		text: text.toString() // 显示的文本，超过 3 个字符则显示成 "..."
	})
}
onShow(() => {
	const goodsInfoStorage = uni.getStorageSync('goodsInfo') || []
	setBadge(goodsInfoStorage)
})
onPullDownRefresh(() => {
	console.log("下拉刷新")
	getBannerList()
	getSearchWords()
	getClassList()
	getGoodsList()
	getSeckillList()
	getSelectList()
	uni.stopPullDownRefresh()

})

onReachBottom(() => {
	if (!goodsPage.isNullMsg) {
		goodsPage.page++
		getGoodsList()
	}
	console.log("上拉加载更多")
})
onLoad(() => {
	getBannerList()
	getSearchWords()
	getClassList()
	getGoodsList()
	getSeckillList()
	getSelectList()
})
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

.grid-container {
	display: grid;
	grid-template-rows: repeat(2, 1fr);
	/* 创建3行 */
	grid-auto-flow: column;
	/* 先填充列 */
	/* gap: 10px;  */
}
</style>