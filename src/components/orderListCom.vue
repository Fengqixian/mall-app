<template>
	<view style="width: 100%;" class=" cor-4 flex flex-dc flex-ac">
		<view @tap="navOrderDetail" class=" bg-f flex flex-jc" style="border-radius: 24rpx; width: 700rpx; min-height: 600rpx;">
			<view class="" style="width: 650rpx;">
				<view class=" font-26 flex flex-jb flex-ac bor-b2sf0" style="height: 80rpx;">
					<view class=" flex flex-ac">
						{{itemMsg.payExpiredTime}}
						<view class="font-16 box-border" style=" border-radius: 6rpx; border: 2rpx solid #ffaa00; color: #ffaa00; margin-left: 10rpx;padding: 4rpx 6rpx;">
							{{t('orderList.orderListCom.storeDelivery')}}
						</view>
					</view>
					
					<view class="">
						{{orderStateArr[itemMsg.orderState]}}
					</view>
				</view>
				
				<view class="order-grid" style="margin-top: 24rpx;">
					<view v-for="(item,index) in itemMsg.goodsList" :key="index" v-show="index<4" class="order-grid-item ">
						<image style="width: 100%;height: 100%;" :src="item.goodsInfo.coverImage" mode=""></image>
					</view>
				</view>

				<view class="bor-b2sf0" style="margin-top: 24rpx;">
					<view class=" flex flex-jb font-28 flex-ac" style="height: 60rpx;">
						<view class="cor-8">
							{{t('orderList.orderListCom.orderID')}}
						</view>
						<view>
							{{itemMsg.orderNumber}}
						</view>
					</view>

					<view class=" flex flex-jb font-28 flex-ac" style="height: 60rpx;">
						<view class="cor-8">
							{{t('orderList.orderListCom.deliveryTime')}}
						</view>
						<view>
							{{itemMsg.deliveryTime}}
						</view>
					</view>

					<view class=" cor-8 font-28" style="text-align: right; height: 60rpx;line-height: 60rpx;">
						{{t('orderList.orderListCom.number')}}:{{getAllNumber()}} {{t('orderList.orderListCom.realPay')}}: <text class="cor-r font-B">{{ t('money') }}{{ (itemMsg.amount/100).toFixed(2) }}</text>
					</view>
				</view>
				
				<view class=" flex flex-drr font-26 flex-ac" style="height: 100rpx;">
					<view class="flex font-26">
						<view class="flex flex-ac bor-box mar-l16" style=" border: 2rpx solid #ddd; height: 60rpx; padding: 0 18rpx;border-radius: 8rpx;">
							{{t('orderList.orderListCom.button.cancelOrder')}}
						</view>
						<view class="flex flex-ac bor-box mar-l16" style=" border: 2rpx solid #ddd; height: 60rpx; padding: 0 18rpx;border-radius: 8rpx;">
							{{t('orderList.orderListCom.button.comeAgain')}}
						</view>
						<view class="flex flex-ac cor-f mar-l16" style=" background: var(--cor-g); height: 60rpx; padding: 0 18rpx;border-radius: 8rpx;">
							{{t('orderList.orderListCom.button.goPay')}}
						</view>
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>
import {ref} from 'vue'
import { useI18n } from 'vue-i18n'
const { t,tm } = useI18n()

const props = defineProps({
	itemMsg:{
		type: Object,
		default:{}
	}
})
const orderStateArr=ref(tm('orderDetail.status'))
console.log(orderStateArr)
function navOrderDetail(){
	uni.navigateTo({
		url:"/pages/self/orderDetail?orderId="+props.itemMsg.orderId
	})
}

function getAllNumber(){
	return props.itemMsg.goodsList.reduce((sum, item) => sum + item.goodsInfo.orderQuantity, 0);
}
</script>

<style>
.order-grid {
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 24rpx 0;
	min-height: 160rpx;
}
.order-grid-item {
	width: 152.5rpx;
	height: 152.5rpx;
}
</style>