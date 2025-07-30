<template>
	<view class="flex flex-dc flex-ac ov-h bodyH" style="">
		<view class="" style="height: 88rpx;"></view>
		<view class=" pos-f w-100- bg-f order-tabble-top z-5" style="height: 88rpx;">
			<up-tabs @click="changeTabs" class="" :current='tabsCurrent' :list="tabsList" lineWidth="14"
				lineColor="var(--cor-g)" :activeStyle="{
					color: 'var(--cor-g)',
					fontSize: '26rpx',
					transform: 'scale(1.05)'
				}" :inactiveStyle="{
					color: '#606266',
					fontSize: '26rpx',
					transform: 'scale(1)'
				}" itemStyle="padding-left: 15px; padding-right: 15px; height: 34px;width: 25%;">
			</up-tabs>
		</view>
		<swiper class=" pos-r z-1" @change="changeSwiper" :current='tabsCurrent' :acceleration="false"
			style="width: 100%;height: calc(100svh - 88rpx);" :duration="500">
			<swiper-item>
				<scroll-view scroll-y="true" style="height: calc(100svh - 88rpx);">
					<orderListCom v-for="(item, index) in orderList.all" :key="item.orderId+'0'" :itemMsg="item" style="margin-top: 20rpx;"></orderListCom>

					<view class="" style="height: 140rpx;">

					</view>
					<!-- <view v-for="(item,index) in 40">123</view> -->
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" style="height: calc(100svh - 88rpx);">
					<orderListCom v-for="(item, index) in orderList.waitPay" :key="item.orderId+'1'" :itemMsg="item" style="margin-top: 20rpx;"></orderListCom>

					<view class="" style="height: 140rpx;">

					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" style="height: calc(100svh - 88rpx);">
					<orderListCom v-for="(item, index) in orderList.endPay" :key="item.orderId+'2'" :itemMsg="item" style="margin-top: 20rpx;"></orderListCom>

					<view class="" style="height: 140rpx;">

					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true" style="height: calc(100svh - 88rpx);">
					<orderListCom v-for="(item, index) in orderList.after" :key="item.orderId+'3'" :itemMsg="item" style="margin-top: 20rpx;"></orderListCom>

					<view class="" style="height: 140rpx;">

					</view>
				</scroll-view>
			</swiper-item>
		</swiper>

	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue';
	import orderListCom from '@/components/orderListCom.vue';
	import {
		post
	} from '@/utils/request';
	import {
		useI18n
	} from 'vue-i18n'
	import {
		onLoad
	} from '@dcloudio/uni-app';
	const {
		t,
		tm
	} = useI18n()

	// 创建响应式数据  
	const tabsList = reactive([{
			name: '全部',
			key:'all'
		},
		{
			name: '待付款',
			key:'waitPay'
		},
		{
			name: '进行中',
			key:'endPay'
		},
		{
			name: '待评价',
			key:'after'
		},
	]);
	tabsList.forEach((item, index) => {
		item.name = tm('orderList.tabble')[index]
	})
	const tabsCurrent = ref(0)

	function changeTabs(item, index) {
		console.log(item)
		tabsCurrent.value = index
		console.log(tabsCurrent.value)
	}

	function changeSwiper(e) {
		tabsCurrent.value = e.detail.current
	}


	// 监听滚动事件
	// const scrollStatus =ref(false)
	// const scrolltouchStatus =ref(false)
	// let scrollTime = null
	// const inScroll = () => {
	// 	if(scrolltouchStatus.value){return}
	// 	scrollStatus.value = true
	// }
	// let scrollTouchEnd =()=>{
	// 	scrollStatus.value = false
	// }
	const orderList = reactive({
		all: [],
		waitPay: [],
		endPay: [],
		after: []
	})

	const orParams=[[],[0],[1],[5,8,9]] 
	async function getOrderList(index=undefined) {
		let orderState= index==undefined?orParams[tabsCurrent.value]:orParams[index]
		let myIndex= index==undefined?tabsCurrent.value:index
		let params = {
			orderState: orderState,
			page: 1,
			pageSize: 5,
			userId: uni.getStorageSync('userInfo').userId
		}
		let res = await post('/order/list', params)
		if (res.code == 200) {
			orderList[tabsList[myIndex].key]=res.data
			console.log(orderList)
		}
	}



	onLoad((e) => {
		let initArr =[]
		for(let i=0;i<4;i++){
			initArr.push(getOrderList(i))
		}
		uni.showLoading({
			title: 'loading...',
			mask: true
		})
		Promise.all(initArr).then(()=>{
			uni.hideLoading()
		})
		if (e.tabbleIndex) {
			tabsCurrent.value = (e.tabbleIndex - 0)
		}
	})
</script>

<style>
	.order-tabble-top {
		/* #ifdef APP-PLUS  */
		top: 0;
		/* #endif */
		/* #ifdef H5  */
		top: 88rpx;
		/* #endif */
	}

	.bodyH {

		/* #ifdef H5  */
		height: calc(100svh - 88rpx);
		/* #endif */
	}
</style>