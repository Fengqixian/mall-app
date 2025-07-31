<template>
	<statusHeight></statusHeight>
	<view style="" class="flex flex-dc flex-ac">

		<view v-if='false' class=" flex flex-dc flex-ac">
			<view class=" bg-f flex flex-ac" style="width: 750rpx;height: 88rpx;">
				<image style="width: 38rpx;height: 46rpx;margin-left: 20rpx;margin-right: 20rpx;"
					src="/src/static/img/dad8562db8b24ad0471d20e3872007b_03.png" mode=""></image>
				<view class="font-30 font-B cor-4">
					广东省广州市越秀区仓边路50号
				</view>
			</view>
			<view class=" pos-r flex flex-dc flex-ac" style="pointer-events: none;">
				<image class="" style="width: 750rpx;height: 452rpx;" src="/src/static/img/null-cart.png" mode="">
				</image>
				<view class=" pos-a cor-4 font-36 font-B" style="top: 270rpx;">
					{{ t('cart.empty') }}
				</view>
			</view>
			<view @tap="goLogin" class=" font-28 flex flex-ac flex-jc cor-f bg-g"
				style="border-radius: 33rpx; width: 160rpx;height: 66rpx;margin-top: -100rpx;margin-bottom: 100rpx;">
				<text>
					{{ t('cart.goLogin') }}</text>
			</view>

		</view>
		<view class=" z-5 bg-f" style="width: 750rpx;height: 88rpx;" :style="'top:' + (statusBarHeight * 2) + 'rpx'"></view>

		<view class=" pos-f z-5 bg-f flex flex-ac flex-jc" style="width: 750rpx;height: 88rpx;"
			:style="'top:' + (statusBarHeight * 2) + 'rpx'">
			<view class=" flex flex-jb flex-ac" style="width: 700rpx;">
				<view class="flex cor-4">
					<view class="font-B cor-g flex flex-jc pos-r font-32">

						{{ t('cart.goodsCart') }}
						<view class=" pos-a bg-g"
							style="height: 4rpx;border-radius: 2rpx; width: 60rpx; bottom: -20rpx;">

						</view>
					</view>

					<!-- 					<view class="font-B font-32" style="margin-left: 40rpx;">
						我的常购
					</view> -->
				</view>
				<view @tap="deleteSelectGoods" class="cor-8 font-30">

					{{ t('cart.delete') }}
				</view>
			</view>

		</view>

		<view class=" bg-f flex flex-jc"
			style="min-height: 300rpx; width: 700rpx; margin-top: 24rpx;border-radius: 24rpx;">
			<view class=" flex flex-dc" style="width: 650rpx;">
				<!-- <view class=" flex flex-ac bor-b2sf0" style="min-height: 100rpx;">
					<radio style="transform:scale(0.7)" borderColor="#d1d1d1" activeBorderColor='#21cc5b'
					:checked="goodsInfoObj.status===1" @tap="changeAllStatus" color='#21cc5b'></radio>
					<view style="" class=" h-100- flex flex-dc flex-jc mar-l10">
						<view class=" flex flex-ac cor-4 font-28 font-B">
							<image style="width: 30rpx;height: 30rpx;" src="/src/static/img/DM_20250619214345_030.jpg"
								mode=""></image>
							<view class=" text-d mar-l10" style="max-width: 300rpx;">店铺名称店铺名</view>
							<up-icon style="display: inline-block;" name="arrow-right" color="#444"
								size="34rpx"></up-icon>
						</view>
						<view class=" font-22 cor-4" style="margin-top: 10rpx;">
							次日 07:00-12:00 送达
						</view>
					</view>
				</view> -->
				<view style="height: 40rpx;"> </view>

				<nullMsg v-if="goodsInfoArray.length === 0" style=" margin: 100rpx 0;"></nullMsg>
				<view v-for='item in goodsInfoArray' :key='item.id' class=" flex flex-dc bor-b2sf0"
					style="min-height: 220rpx;">
					<view class="flex flex-ac " style="height: 220rpx;">
						<radio style="transform:scale(0.7)" borderColor="#d1d1d1" activeBorderColor='#21cc5b'
							:checked="item.status == 1" @tap="item.status = item.status == 1 ? 0 : 1" color='#21cc5b'></radio>
						<view class=" flex flex-ac flex-g h-100-">
							<image class="" style="width: 182rpx;height: 182rpx;" :src="item.coverImage" mode="">
							</image>
							<view class=" flex-g flex flex-dc flex-jb" style="height: 172rpx;">
								<view class=" flex flex-dc cor-4 mar-l20">
									<view class="font-30 font-B text-d " style="width: 370rpx;">
										{{ item.name }}
									</view>
									<view class="font-24 cor-8 text-2d"
										style="margin-top: 12rpx;width: 370rpx;line-height: 26rpx;">
										{{ item.desc }}
									</view>
								</view>
								<view class=" flex flex-jb flex-ac mar-l20">
									<view class="cor-r">
										<text class="font-22">{{ item.priceUnitName }}</text><text
											class="font-28 font-B">
											{{ (item.price / 100).toFixed(2) }}
										</text>
									</view>
									<view class="">
										<up-number-box class="" max="99" min="1" v-model="item.number"
											@change="numberBoxChange">
											<template #minus>
												<view class="minus">
													<up-icon name="minus" size="12"></up-icon>
												</view>
											</template>
											<template #input>
												<text style="width: 30px;text-align: center;"
													class="input ">{{ item.number }}</text>
											</template>
											<template #plus>
												<view class="plus">
													<up-icon name="plus" color="#FFFFFF" size="12"></up-icon>
												</view>
											</template>
										</up-number-box>
									</view>
								</view>
							</view>
						</view>
					</view>
					<input v-if="false" type="text" class="font-28"
						style="border-radius: 8rpx; height: 60rpx;padding: 0 12rpx;background: #f5f5f5;"
						:placeholder="t('cart.notes')" />
				</view>


				<view style="height: 40rpx;"> </view>
				<!-- <view class=" flex flex-ac flex-drr font-B font-28 cor-4" style="height: 100rpx;">
					<view @click="goOrder" class=""
						style="line-height: 60rpx; background: #21cc5b; border-radius: 0 30rpx 30rpx 0; height: 60rpx;padding: 0 20rpx;">
						{{ t('cart.goSettle') }}({{ goodsInfoObj.number }})
					</view>
					<view class=""
						style="line-height: 60rpx; background: #fef7df;border-radius: 30rpx 0 0 30rpx; height: 60rpx;padding: 0 20rpx;">
						<text class="font-20">{{ t('money') }}</text>
						{{ (goodsInfoObj.toatalPrice/100).toFixed(2) }}
					</view>
				</view> -->

			</view>
		</view>

		<view class="" style="font-size: 30rpx;color: #444; font-weight: 700; margin: 20rpx;">
			<text style="color: #999;font-weight: 500;">—</text> {{ t('guessLike') }} <text
				style="color: #999;font-weight: 500;">—</text>
		</view>
		<image-flow v-if="likeList.length > 0" :listF="likeList" @updataGoodsCart="getGoodsInfoArray"></image-flow>

		<view class="" style="height: 100rpx;"></view>
		<view class=" flex flex-ac flex-jc pos-f  bg-f w-100- z-10 left-0 bottom box-s8 bor-box"
			style="height: 100rpx;border-bottom: 2rpx solid #f5f5f5;">
			<view class=" flex flex-ac flex-jb" style="width: 700rpx;">
				<view class="flex flex-ac font-24 cor-8">
					<radio style="transform:scale(0.7);margin-left: 25rpx;" borderColor="#d1d1d1"
						activeBorderColor='#21cc5b' :checked="goodsInfoObj.status===1" @tap="changeAllStatus"
						color='#21cc5b'></radio>
					<text>{{ t('cart.allSelect') }}</text>
				</view>
				<view class="  cor-8 font-24 flex flex-ac flex-jc"
					style=" height: 88rpx; width: 300rpx; overflow-x: scroll;white-space: nowrap;">
					{{ t('cart.amountTo') }}<text class="cor-r font-22">{{ t('money') }}</text><text
						class="cor-r font-28 font-B">{{ (goodsInfoObj.toatalPrice/100).toFixed(2) }}</text>
				</view>
				<view @click="goOrder" class=" font-30  bg-g cor-f flex flex-ac flex-jc"
					style="height: 88rpx;width: 220rpx; border-radius: 8rpx;">
					{{ t('cart.settle') }}({{ goodsInfoObj.number }})
				</view>

			</view>

		</view>
	</view>
</template>

<script setup>
import statusHeight from '@/components/statusHeight.vue'
import imageFlow from "@/components/imageFlow.vue"
import nullMsg from "@/components/nullMsg.vue"
import { post } from '@/utils/request'
import {
	useI18n
} from 'vue-i18n'
const {
	t
} = useI18n()

function goLogin() {
	uni.navigateTo({
		url: '/pages/login/login'
	})
}
import {
	ref, watch
} from 'vue'
import { onShow, onLoad } from '@dcloudio/uni-app'
const goodsInfoArray = ref([])//保存本地的购物车数据
const goodsInfoObj = ref({
	toatalPrice:0,
	status:0,
	number:0
})//根据购物车数据的obj 数据

const systemInfo = uni.getSystemInfoSync();
const statusBarHeight = ref(systemInfo.statusBarHeight || 0); // 单位：px
console.log('状态栏高度:', statusBarHeight.value);
const radioStatus = ref(false)
const numberBox = ref(1)

function numberBoxChange(e) {
	console.log('当前值为: ' + numberBox.value);
}

const likeList = ref([])
async function goOrder() {
	let orderArr=[]
	if(goodsInfoObj.value.status === 0){
		// 未全选
		orderArr=goodsInfoArray.value.filter(item => item.status === 1)
	}else{
		//已全选 直接把所有数据传递过去
		orderArr=goodsInfoArray.value
	}
	if(orderArr.length === 0){
		uni.showToast({
			title: '请选择商品',
			icon: 'none'
		})
		return
	}
	let params=orderArr.map(item => {
		return {
			goodsId:item.id,
			goodsNum:item.number
		}
	})
	uni.showLoading({title: 'loading...',mask:true})
	let res=await post('/order/price',params)
	uni.hideLoading()
	console.log(res)
	if(res.code === 200){	
		uni.setStorageSync('orderArr',res.data)
		uni.navigateTo({
			url: '/pages/cart/submitOrder'
		})
	}else{
		uni.showToast({
			title: res.message,
			icon: 'none'
		})
	}
}


async function getLikeList() {
	const res = await post('/goods/search/info')
	console.log(res);
	if (res.code == 200) {
		likeList.value = []
		setTimeout(() => {
			likeList.value = res.data.list
		})
	}
}


function deleteSelectGoods() {
	uni.showModal({
		title: '提示',
		content: '确定要删除选中商品吗？',
		success: (res) => {
			if (res.confirm) {
				if(goodsInfoObj.value.status === 1){
					goodsInfoArray.value = []
					uni.setStorageSync('goodsInfo',goodsInfoArray.value)
				}else{
					goodsInfoArray.value = goodsInfoArray.value.filter(item => item.status === 0)
					uni.setStorageSync('goodsInfo',goodsInfoArray.value)
				}
				uni.showToast({
					title: '删除成功',
					icon: 'success'
				})
			}
		}
	})
	

}

watch(goodsInfoArray, (newGoodsInfo, oldGoodsInfo) => {
	console.log('user 变化了', newGoodsInfo);
	uni.setStorageSync('goodsInfo',newGoodsInfo)
	setgoodsInfoObj(newGoodsInfo)
}, { deep: true }); // 开启深度监听

function setgoodsInfoObj(newGoodsInfo){
	goodsInfoObj.value.status = newGoodsInfo.every(item => item.status === 1)-0;

	const trueItems = newGoodsInfo.filter(item => item.status === 1)
	// 计算总价
	goodsInfoObj.value.toatalPrice = trueItems.reduce((sum, item) => sum + (item.price * item.number), 0);
	// 计算总数量
	goodsInfoObj.value.number = trueItems.reduce((sum, item) => sum + item.number, 0);
}

function changeAllStatus(){
	goodsInfoObj.value.status = goodsInfoObj.value.status ? 0 : 1

	if(goodsInfoObj.value.status === 1){
		goodsInfoArray.value.forEach(item => {
			item.status = 1
		})
	}else{
		goodsInfoArray.value.forEach(item => {
			item.status = 0
		})
	}
	
}
function getGoodsInfoArray(){
	const goodsInfoStorage = uni.getStorageSync('goodsInfo') || []
	goodsInfoArray.value = goodsInfoStorage
}


onLoad(() => {
	
})

function setBadge(arr) {
	// 设置角标
	let text = arr.reduce((sum, item) => sum + item.number, 0)
	console.log(text)
	uni.setTabBarBadge({
		index: 2, // tabBar 的哪一项，从左边算起，索引从0开始
		text: text.toString() // 显示的文本，超过 3 个字符则显示成 "..."
	})
}

onShow(() => {
	getLikeList()
	getGoodsInfoArray()
	const goodsInfoStorage = uni.getStorageSync('goodsInfo') || []
	setBadge(goodsInfoStorage)
})
</script>

<style lang="scss" scoped>
.minus {
	width: 22px;
	height: 22px;
	border-width: 1px;
	border-color: #E6E6E6;
	border-radius: 11px;
	border: 2rpx solid #ddd;
	box-sizing: border-box;
	@include flex;
	justify-content: center;
	align-items: center;
}

.input {
	// padding: 0 10px;
	width: 20rpx;
}

.plus {
	width: 22px;
	height: 22px;
	background-color: #21cc5b;
	border-radius: 50%;
	/* #ifndef APP-NVUE */
	display: flex;
	/* #endif */
	justify-content: center;
	align-items: center;
}

// #ifdef H5
.bottom {
	bottom: 100rpx;
}

// #endif

// #ifdef APP-PLUS
.bottom {
	bottom: 0;
}

// #endif</style>