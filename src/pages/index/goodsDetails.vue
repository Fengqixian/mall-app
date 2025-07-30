<template>
	<statusHeight></statusHeight>
	<view style="" class="bg-f flex flex-dc flex-ac">
	<image @click="goBack" class="pos-f z-10" src="/src/static/Back.svg" style=" background: rgba(255, 255, 255, .8); width: 60rpx;height: 60rpx;left: 30rpx;border-radius: 50%;" :style="'top: '+(statusBarHeight*2+30)+'rpx;'" mode=""></image>
		<view class="flex flex-ac flex-jc" style="width: 750rpx;height: 750rpx;">
			<image class="pos-f " :class="{ 'myfirstClass z-10': animationStatus }" v-show="animationStatus" :src="list1[0]" style="width: 80rpx;height: 80rpx;"></image>
			<view class="" style="width: 750rpx;height: 750rpx;">
				<up-swiper height="375" circular :list="list1"></up-swiper>
			</view>
		</view>

		<view class=" flex flex-ac" style="height: 80rpx; width: 700rpx;margin-top: 30rpx;">
			<view class="cor-f font-24 flex flex-ac flex-jc"
				style="border-radius: 4rpx;padding: 0 6rpx; height: 32rpx;background: #21cc5b;line-height: 32rpx;">
				{{ t('goodsDetails.self') }}
			</view>
			<view class=" font-w7 cor-4" style="margin-left: 20rpx;">
				{{ goodsDetails.goodsInfo.name }}
			</view>
		</view>

		<view class=" flex flex-ac cor-9 font-26" style="height: 80rpx; width: 700rpx;">
			{{ goodsDetails.goodsInfo.desc }}
		</view>
		<view class="flex-jb flex flex-ac cor-9 font-26" style="height: 80rpx; width: 700rpx;">
			<view class="" style="color: #ea3a37;">
				<text class="font-26">{{ goodsDetails.goodsInfo.priceUnitName }}</text>
				<text class="font-40 font-w7">{{ (goodsDetails.goodsInfo.price / 100).toFixed(2) }}</text>
				<text class="font-26">/{{ goodsDetails.goodsInfo.unitName }}</text>
			</view>
			<view class="cor-9 font-26">
				{{ t('goodsDetails.sales') + goodsDetails.inventory?.saleNum }},{{ t('goodsDetails.stock') +
					goodsDetails.inventory?.inventoryNum }}
			</view>
		</view>
		<!-- 
		<view class=" flex flex-ww" style="width: 700rpx;">

			<view class="flex flex-dc flex-jc lsl "
				style="margin-bottom: 20rpx;margin-right: 20rpx; border: 1rpx solid #21cc5b; border-radius: 12rpx; height: 98rpx; padding: 14rpx;background: rgba(33, 204, 91, 0.1);">
				<view class="font-30 cor-g font-w7" style="">
					精品
				</view>
				<view class="font-24 cor-g" style="margin-top: 12rpx;">
					￥5.00/斤
				</view>
			</view>

			<view class="flex flex-dc flex-jc "
				style="margin-bottom: 20rpx; margin-right: 20rpx; border-radius: 12rpx; height: 98rpx; padding: 14rpx;background: #f6f6f6;">
				<view class="font-30 cor-3 font-w7" style="">
					精品
				</view>
				<view class="font-24 cor-8" style="margin-top: 12rpx;">
					￥5.00/斤
				</view>
			</view>
		</view> -->

		<view class=" flex flex-dc" style="width: 700rpx;margin-top: 10rpx;">
			<view class=" font-26 cor-4">
				<text class="cor-9" style="margin-right: 20rpx;">{{ t('goodsDetails.delivery') }}</text>
				<text>最快 次日 07:00-12:00 送达</text>
			</view>
			<view class=" font-26 cor-4 flex" style="margin-top: 40rpx;">
				<text class="cor-9" style="margin-right: 20rpx;">{{ t('goodsDetails.service') }}</text>
				<text class="flex" style="margin-right: 20rpx;">
					称重退补差价<up-icon style="display: inline-block;" name="question-circle" color="#999"
						size="14"></up-icon>
				</text>
				<text>筐押金</text>
			</view>
		</view>
		<view style="height: 40rpx;"></view>

		<view class="" style="width: 750rpx;background: #f5f5f5;height: 20rpx;"></view>
		<view class="flex" style="width: 750rpx;">
			<view class=" flex flex-ac flex-jc pos-r" style="width: 50%;height: 88rpx;">
				<view style="" class="font-26 cor-4 font-w6 tst-3" :class="{ 'cor-g': tabbleStatus == 0 }"
					@tap="tabbleStatus = 0">
					{{ t('goodsDetails.goodsDetail') }}
				</view>
				<view style="height: 4rpx;width: 40rpx;bottom: 0;" class="bg-g pos-a tst-3"
					:class="{ 'op-0': tabbleStatus !== 0 }"> </view>
			</view>
			<view class=" flex flex-ac flex-jc pos-r" style="width: 50%;height: 88rpx;">
				<view style="" class="font-26 cor-4 font-w6 tst-3" :class="{ 'cor-g': tabbleStatus == 1 }"
					@tap="tabbleStatus = 1">
					{{ t('goodsDetails.buyRecord') }}
				</view>
				<view style="height: 4rpx;width: 40rpx;bottom: 0;" class="bg-g pos-a tst-3"
					:class="{ 'op-0': tabbleStatus !== 1 }"> </view>
			</view>
		</view>
		<view class="" style="width: 750rpx;background: #f5f5f5;height: 20rpx;"></view>

		<view class="" style="width: 700rpx;min-height: 700rpx;">
			<view v-show="tabbleStatus == 0">
				<null-msg  style="margin-top: 200rpx;"></null-msg>
			</view>
			<view v-show="tabbleStatus == 1" class="">
				<view class="flex flex-ac bor-b2sf0 font-26" v-for="(item,index) in buyRecord" :key="index" style="height: 80rpx;">
					<text class="font-28 font-w6">{{ item.userName }}</text> 
					<text class="font-28 cor-6 mar-l20">购买了{{ item.quantity }}份</text> 
					<text class="font-26 cor-9 mar-l20">{{ item.purchaseTime }}</text>
				</view>
				<null-msg v-show="buyRecord.length == 0" style="margin-top: 200rpx;"></null-msg>
			</view>
		</view>


		<view class="" style="width: 750rpx;height: 106rpx;"></view>
		<view class="bg-f z-20 pos-f bottom-0 flex flex-ac flex-jc"
			style="width: 750rpx;height: 96rpx;box-shadow: 0 0 16rpx #c3c3c3;">

			<view class=" flex flex-dc flex-ac flex-jc font-20 cor-6" style="width: 94rpx;height: 72rpx;">
				<up-icon style="display: inline-block;" name="home" color="#666" size="20"></up-icon>
				<text style="margin-top: 8rpx;">{{ t('goodsDetails.home') }}</text>
			</view>
			<view class=" flex flex-dc flex-ac flex-jc font-20 cor-6" style="width: 94rpx;height: 72rpx;">
				<up-icon style="display: inline-block;" name="phone" color="#666" size="20"></up-icon>
				<text style="margin-top: 8rpx;">{{ t('goodsDetails.customerService') }}</text>
			</view>
			<view class=" flex flex-dc flex-ac flex-jc font-20 cor-6" style="width: 94rpx;height: 72rpx;">
				<up-icon style="display: inline-block;" name="shopping-cart" color="#666" size="20"></up-icon>
				<text style="margin-top: 8rpx;">{{ t('goodsDetails.shoppingCart') }}</text>
			</view>

			<view @tap="addToCart" class=" flex flex-ac flex-jc bg-g cor-f font-30"
				style="width: 422rpx;height: 88rpx;border-radius: 10rpx;">
				{{ t('goodsDetails.addToCart') }}
			</view>

		</view>
	</view>
</template>

<script setup>
import {
	reactive,
	ref
} from "vue"
import {
	onShow,
	onLoad
} from '@dcloudio/uni-app'
import { post } from '@/utils/request'
import statusHeight from '@/components/statusHeight.vue'
import imageFlow from "@/components/imageFlow.vue"
import nullMsg from "@/components/nullMsg.vue"
import {
	useI18n
} from 'vue-i18n'
const {
	t
} = useI18n()
	const systemInfo = uni.getSystemInfoSync();
	const statusBarHeight =ref(systemInfo.statusBarHeight || 0); // 单位：px
const tabbleStatus = ref(0)
const idValue = ref('')
const list1 = reactive([

]);
function goBack(){
	uni.navigateBack()
}
const goodsDetails = ref({})
async function getGoodsDetails() {
	const res = await post('/goods/info', {
		id: idValue.value - 0
	})
	if (res.code == 200) {
		goodsDetails.value = res.data
		res.data.staticResources.forEach(item => {
			list1.push(item.resourceLink)
		})
	}
}
const buyRecord = ref([])
async function getBuyRecord() {
	const res = await post('/goods/purchase/record', {
		id: idValue.value - 0
	})
	if (res.code == 200) {
		buyRecord.value = res.data
	}
}

const animationStatus = ref(false)
function addToCart() {
	animationStatus.value = true
	setTimeout(() => {
		animationStatus.value = false
	}, 550)

	addGoodsInfo(goodsDetails.value.goodsInfo)
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

onLoad((e) => {
	idValue.value = e.id
	getGoodsDetails()
	getBuyRecord()
})



</script>

<style scoped>
.lsl {
	border: 1rpx solid red;
}

.myfirstClass {
	animation: myfirst .6s infinite;
}

@keyframes myfirst {
	0% {
		top: 375rpx;
		left: 375rpx;
		opacity: 1;
	} 

	25% {
		top: 160rpx;
		left: 550rpx;
	}

	50% {
		top: 100rpx;
		left: 375rpx;
	}

	75% {
		top: 160rpx;
		left: 200rpx;
	}
	99% {
		top: 100vh;
		left: 250rpx;
		opacity: 1;
	}
	100% {
		top: 100vh;
		left: 250rpx;
		opacity: 0;
	}
}
</style>