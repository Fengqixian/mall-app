<template>
	<view class="flex flex-dc flex-ac ov-h bodyH" style="">
		<view v-show="tableStatus" class="" style="height: 98rpx;"></view>
		<view v-show="tableStatus" class="pos-f w-100- bg-f order-tabble-top z-5 top-0" style="height: 88rpx;">
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
			style="width: 100%;height: calc(100vh - 88rpx);" :duration="500">
			<swiper-item class="" style="height: calc(100vh - 88rpx);">
				<scroll-view class="" scroll-y="true"  @scrolltolower="getAllMoerOrderList" style="height: calc(100vh - 88rpx);">
					<nullMsg style="margin-top: 200rpx;" v-if="orderList.all.length===0"></nullMsg>
					<orderListCom v-for="(item, index) in orderList.all" :key="item.orderId+'0'" :itemMsg="item" style="margin-top: 20rpx;" @tableHide="tableHide" @tableShow="tableShow"></orderListCom>
					
					<no-more-data v-if="tabsList[0].isMoreMsg&&orderList.all.length"></no-more-data>
					<view class="" style="height: 140rpx;">

					</view>
					<!-- <view v-for="(item,index) in 40">123</view> -->
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true"  @scrolltolower="getAllMoerOrderList" style="height: calc(100vh - 88rpx);">
					<nullMsg style="margin-top: 200rpx;" v-if="orderList.waitPay.length===0"></nullMsg>
					<orderListCom v-for="(item, index) in orderList.waitPay" :key="item.orderId+'1'" :itemMsg="item" style="margin-top: 20rpx;"></orderListCom>
					<no-more-data v-if="tabsList[1].isMoreMsg&&orderList.waitPay.length"></no-more-data>
					<view class="" style="height: 140rpx;"></view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true"  @scrolltolower="getAllMoerOrderList" style="height: calc(100vh - 88rpx);">
					<nullMsg style="margin-top: 200rpx;" v-if="orderList.endPay.length===0"></nullMsg>
					<orderListCom v-for="(item, index) in orderList.endPay" :key="item.orderId+'2'" :itemMsg="item" style="margin-top: 20rpx;" @tableHide="tableHide" @tableShow="tableShow"></orderListCom>
					
					<no-more-data v-if="tabsList[2].isMoreMsg&&orderList.endPay.length"></no-more-data>
					<view class="" style="height: 140rpx;">

					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item>
				<scroll-view scroll-y="true"  @scrolltolower="getAllMoerOrderList" style="height: calc(100vh - 88rpx);">
					<nullMsg style="margin-top: 200rpx;" v-if="orderList.after.length===0"></nullMsg>
					<orderListCom v-for="(item, index) in orderList.after" :key="item.orderId+'3'" :itemMsg="item" style="margin-top: 20rpx;"></orderListCom>
					
					<no-more-data v-if="tabsList[3].isMoreMsg&&orderList.after.length"></no-more-data>
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
		onLoad, onShow
	} from '@dcloudio/uni-app';
	const {
		t,
		tm
	} = useI18n()
	import nullMsg from '@/components/nullMsg.vue'
	import noMoreData from "@/components/noMoreData.vue"
	// 创建响应式数据  
	const tabsList = reactive([{
			name: '全部',
			key:'all',
			isMoreMsg:false,
			page:1,
			pageSize:5,
		},
		{
			name: '待付款',
			key:'waitPay',
			isMoreMsg:false,
			page:1,
			pageSize:5,
		},
		{
			name: '进行中',
			key:'endPay',
			isMoreMsg:false,
			page:1,
			pageSize:5,
		},
		{
			name: '待评价',
			key:'after',
			isMoreMsg:false,
			page:1,
			pageSize:5,
		},
	]);
	tabsList.forEach((item, index) => {
		item.name = tm('orderList.tabble')[index]
	})
	const tabsCurrent = ref(0)

	function changeTabs(item, index) {
		tabsCurrent.value = index
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
			orderStates: orderState,
			page: tabsList[myIndex].page,
			pageSize: tabsList[myIndex].pageSize,
			userId: uni.getStorageSync('userInfo').userId
		}
		if(tabsList[myIndex].isMoreMsg){
			tabsList[myIndex].page--
			return
		}
		let res = await post('/order/list', params)
		if (res.code == 200) {
			if(res.data.length){
				orderList[tabsList[myIndex].key]=[...orderList[tabsList[myIndex].key],...res.data]
			}else{
				tabsList[myIndex].isMoreMsg=true
			}
			
			console.log(orderList)
		}
	}
	const tableStatus = ref(true)
	function tableHide() {
		tableStatus.value = false
	}
	function tableShow() {
		tableStatus.value = true
	}
	
	function getAllMoerOrderList(){
		tabsList[tabsCurrent.value].page++
		getOrderList()
	}

	onShow(()=>{
		if(!orderList.all.length){
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
			}).catch(()=>{
				uni.hideLoading()
			})
		}
	})
	onLoad((option) => {

		if (option.tabbleIndex) {
			tabsCurrent.value = option.tabbleIndex - 0
			// console.log(tabsCurrent.value)
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