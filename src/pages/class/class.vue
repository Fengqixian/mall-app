<template>
	<statusHeight></statusHeight>
	<view :style="'height: calc(' + usableHeight + 'rpx - 28rpx);'" class="flex flex-dc flex-ac ">
		<view class="bg-f w-100- flex flex-jc flex-ac" style="min-height: 94rpx;">
			<view class=" flex flex-ac" @tap="navSearch(searchList[searchCearchIndex])"
				style=" box-sizing: border-box; padding: 0 16rpx; width: 700rpx;height: 64rpx;border-radius: 32rpx; background: #f5f5f5;">
				<up-icon name="search" color="#ccc" size="50rpx"></up-icon>
				<view class="" style="margin-left: 10rpx; width: 200rpx;height: 64rpx;">
					<swiper :current='searchCearchIndex' @change="searchCearchChange" style="height: 64rpx;" class=""
						autoplay circular vertical interval="2000" duration="1000">
						<swiper-item v-for="(item, index) in searchList" :key="index">
							<text style="width: 200rpx;height: 64rpx;color: #999;" class="font-26 flex flex-ac">{{ item
								}}</text>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>

		<view class=" w-100- flex bg-f ov-h flex-jb" style="">
			<scroll-view scroll-y="true" :scroll-top="leftTable.scrollTop" scroll-with-animation
				class="pos-r flex flex-dc"
				style=" box-sizing: border-box; border-right: 2rpx solid #f5f5f5; width: 180rpx;height: 100%;">
				<view v-for="(item, index) in state.classList" @tap="changeLeftTabble(index)"
					class="tst-3 pos-r font-26 flex flex-ac flex-jc cor-4 z-5 "
					:class="leftTable.current == index ? 'cor-g' : ''" style="width: 100%;height: 100rpx;">
					<text style="width: 80%;text-align: center;" class="text-d">{{ item.name }}</text>
				</view>

				<view :style="'top: ' + (100 * leftTable.current) + 'rpx;'"
					class=" tst-3 pos-a font-26 flex flex-ac flex-jc cor-4 z-1"
					style="background: #f5f5f5; width: 100%;height: 100rpx;">
					<view class=" pos-a"
						style="background: #21cc5b; border-radius: 0 5rpx 5rpx 0; left: 0; width: 8rpx;height: 60rpx;">

					</view>
					<up-icon class="pos-a right-0" name="play-right-fill" color="#21cc5b" size="36rpx"></up-icon>

				</view>
			</scroll-view>
			<view class="" style="width: 570rpx;">
				<view class=" flex flex-ac flex-drr"
					style="height: 70rpx; box-sizing: border-box; border-bottom: 2rpx solid #f5f5f5;">
					<view @tap="changeRightTabble(rightTable.current == 3 ? 4 : 3)" :class="(rightTable.current == 4|| rightTable.current == 3) ? 'cor-g' : ''"
						class=" flex flex-ac flex-jc font-26 cor-4" style="width: 134rpx;height: 68rpx;">
						{{ t('class.price') }}
						<up-icon v-show='rightTable.current == 4|| rightTable.current == 3' class="tst-3"
							:class="rightTable.current == 4 ? 'rotate-180' : 'rotate-0'" style="margin-left: 6rpx;"
							name="arrow-down-fill" color="#21cc5b" size="30rpx"></up-icon>
					</view>
					<view @tap="changeRightTabble(1)" :class="rightTable.current === 1 ? 'cor-g' : ''"
						class=" flex flex-ac flex-jc font-26 cor-4" style="width: 104rpx;height: 68rpx;">
						{{ t('class.sales') }}
					</view>
					<view @tap="changeRightTabble(0)" :class="rightTable.current === 0 ? 'cor-g' : ''"
						class=" flex flex-ac flex-jc font-26 cor-4" style="width: 104rpx;height: 68rpx;">
						{{ t('class.all') }}
					</view>
				</view>
				<scroll-view scroll-y="true" class="flex flex-dc" style="height: calc(100% - 70rpx);">
					<nullMsg v-if="state.goodsList.length === 0" style=" margin-top: 200rpx;"></nullMsg>
					<view v-for="item in state.goodsList" :key="item.id" class=" flex flex-dc"
						style="padding: 20rpx 0; min-height: 213rpx;border-bottom: 2rpx solid #f5f5f5;">
						<view class="flex flex-ac flex-jc">
							<image class="" style="width: 182rpx;height: 182rpx;"
								src="/src/static/img/DM_20250619214345_011.png" mode=""></image>
							<view class=" flex flex-dc" style="width: 340rpx; min-height: 100%; margin-left: 12rpx;">
								<view class=" cor-4 font-26 font-w7 text-d">
									{{ item.goodsInfo.name }}
								</view>
								<view class=" cor-9 font-22 text-d" style="margin-top: 8rpx;">
									{{ item.goodsInfo.desc }}
								</view>
								<view class=" cor-8 font-22 text-d" style="margin-top: 8rpx;">
									{{ item.goodsInfo.purchasedEnd.split(' ')[0] }}
								</view>
								<view class=" cor-r font-36 text-d font-w7" style="margin-top: 8rpx;">
									<text class="font-26">{{ item.goodsInfo.priceUnitName }}</text>
									{{ (item.goodsInfo.price / 100).toFixed(2) }}
								</view>
								<view class=" cor-8 font-22 text-d" style="margin-top: 8rpx;">
									{{ t('class.stock') }} {{ item.inventory.inventoryNum }}
								</view>
								<view class=" flex flex-ac flex-jb cor-8 font-22 text-d" style="margin-top: 8rpx;">
									<text>{{ t('class.self') }}</text>

									<view @tap="addGoodsInfo(item.goodsInfo)" class=" bor-50- flex flex-ac flex-jc"
										style="width: 56rpx;height: 56rpx;background: linear-gradient(160deg, rgba(33, 204, 91, 0.5), rgb(33, 204, 91));">
										<up-icon class="" name="shopping-cart" color="#fff" size="50rpx"></up-icon>
									</view>

									<!-- 									<view  class="flex flex-ac flex-jc cor-f font-28"
										style="width: 148rpx; border-radius: 27rpx; height: 56rpx;background: linear-gradient(160deg, rgba(33, 204, 91, 0.5), rgb(33, 204, 91));">
										{{ t('class.select') }}
										<up-icon class="" style="margin-left: 6rpx;" name="arrow-down" color="#fff"
											size="32rpx"></up-icon>
									</view> -->

								</view>

							</view>
						</view>
						<!-- 单规格 -->
						<!-- 						<view v-if='false' class="flex flex-dc flex-ac" style="width: 570rpx;">
							<view v-for="ite in 3" class="" style="width: 534rpx;margin-top: 20rpx;">
								<view class=" flex">
									<view class="flex flex-g">
										<view class="cor-r flex flex-ac flex-drr"
											style="width: 50%; text-align: right;">
											<text class="font-36 font-w7">5.00</text>
											<text class="font-26">￥</text>
										</view>
										<view class="font-26 flex flex-ac cor-4" style="width: 50%;margin-left: 10rpx;">
											精品
										</view>
									</view>
									<view class=" bor-50- flex flex-ac flex-jc"
										style="min-width: 56rpx;max-width: 56rpx;height: 56rpx;background: linear-gradient(160deg, rgba(33, 204, 91, 0.5), rgb(33, 204, 91));">
										
										<up-icon class="" name="shopping-cart" color="#fff" size="50rpx"></up-icon>
									</view>
								</view>
							</view>
						</view> -->

					</view>
					<view class="" style="height: 100rpx;"></view>
				</scroll-view>
			</view>

		</view>



	</view>
</template>

<script setup>
import {
	ref,
	reactive
} from 'vue'
import statusHeight from '@/components/statusHeight.vue'
import imageFlow from "@/components/imageFlow.vue"
import {
	post
} from '@/utils/request'
import nullMsg from "@/components/nullMsg.vue"
import {
	useI18n
} from 'vue-i18n'
import {
	onHide,
	onLoad,
	onShow
} from '@dcloudio/uni-app'
const {
	t
} = useI18n()
const searchCearchIndex = ref(0)
function searchCearchChange(e) {
	searchCearchIndex.value = e.detail.current
}
const tabbleIndex=ref(0)
const state = reactive({
	classList: [],
	goodsList: []
})

// 获取系统信息
const systemInfo = uni.getSystemInfoSync()

// 计算可用高度（减去状态栏、导航栏和TabBar高度）
let usableHeight = systemInfo.windowHeight * 2
console.log(usableHeight)

const leftTable = reactive({
	current: 0,
	scrollTop: 0
})

function changeLeftTabble(index) {
	leftTable.current = index
	setTimeout(() => {
		leftTable.scrollTop = (index * 50) - (usableHeight / 4 - 44)
	}, 100)

	getGoodsList(state.classList[index].id)
}
const rightTable = reactive({
	current: 0,
})

function changeRightTabble(index) {
	console.log(index)
	rightTable.current = index
	getGoodsList(state.classList[leftTable.current].id)
}

async function getGoodsList(id) {
	let params = {
		"classId": id,
		"page": 1,
		"pageSize": 10,
		sort:rightTable.current
	}
	let data = await post('/goods/list', params)
	if (data.code === 200) {
		state.goodsList = data.data
	}
	console.log(data)
}
async function getClassList() {
	let data = await post('/goods/class/list')
	if (data.code === 200) {
		state.classList = data.data
		getGoodsList(state.classList[0].id)
	}
	console.log(data)
}
const searchList = ref([])
function getSearchList() {
	let { value: searchJSON } = uni.getStorageSync('appConfig')['SEARCH_RECOMMEND_GOODS_NAME_LIST']
	try {
		searchList.value = JSON.parse(searchJSON)
	} catch (err) {
		console.log(err)
	}
}
function navSearch(name) {
	uni.navigateTo({
		url: '/pages/index/search?name=' + name
	})
}

function addGoodsInfo(goodsInfo) {
	// goodsInfo.number = 1
	const _goodsInfo = {...goodsInfo,number:1,status:1,notes:''}
	const goodsInfoStorage = uni.getStorageSync('goodsInfo')||[]
	let findIndex = findIndexById(goodsInfoStorage,goodsInfo.id)
	if(findIndex == -1){
		goodsInfoStorage.push(_goodsInfo)
	}else{
		goodsInfoStorage[findIndex].number++
	}
	uni.setStorageSync('goodsInfo', goodsInfoStorage)

	uni.showToast({
		title: t('tips.addSuccess'),
		icon: 'none'
	})
}
function findIndexById(array, id) {
    return array.findIndex(item => item.id === id);
}

onLoad(() => {
	getClassList()
	getSearchList()
})
const classIndexRef = ref(-1)
onShow(() => {
	let classIndex = uni.getStorageSync('classIndex')
	if (classIndex) {
		classIndexRef.value = classIndex - 1
		changeLeftTabble(classIndexRef.value)
	}
})
onHide(() => {
	uni.removeStorageSync('classIndex')
})
</script>

<style scoped>
.rotate-180 {
	transform: rotate(180deg);
}

.rotate-0 {
	transform: rotate(0deg);
}
</style>