<template>
	<view style="width: 100%;" class=" cor-4 flex flex-dc flex-ac">
		<view @tap="navOrderDetail" class=" bg-f flex flex-jc"
			style="border-radius: 24rpx; width: 700rpx; min-height: 500rpx;">
			<view class="" style="width: 650rpx;">
				<view class=" font-26 flex flex-jb flex-ac bor-b2sf0" style="height: 80rpx;">
					<view class=" flex flex-ac">
						{{ itemMsg.payExpiredTime }}
						<view class="font-16 box-border"
							style=" border-radius: 6rpx; border: 2rpx solid #ffaa00; color: #ffaa00; margin-left: 10rpx;padding: 4rpx 6rpx;">
							{{ t('orderList.orderListCom.storeDelivery') }}
						</view>
					</view>

					<view class="">
						{{ orderStateArr[itemMsg.orderState] }}
					</view>
				</view>

				<view class="order-grid" style="margin-top: 24rpx;">
					<view v-for="(item, index) in itemMsg.goodsList" :key="index" v-show="index < 4"
						class="order-grid-item ">
						<image style="width: 100%;height: 100%;" :src="item.goodsInfo.coverImage" mode=""></image>
					</view>
				</view>

				<view class="bor-b2sf0" style="margin-top: 24rpx;">
					<view class=" flex flex-jb font-28 flex-ac" style="height: 60rpx;">
						<view class="cor-8">
							{{ t('orderList.orderListCom.orderID') }}
						</view>
						<view>
							{{ itemMsg.orderNumber }}
						</view>
					</view>

					<view class=" flex flex-jb font-28 flex-ac" style="height: 60rpx;">
						<view class="cor-8">
							{{ t('orderList.orderListCom.deliveryTime') }}
						</view>
						<view>
							{{ itemMsg.deliveryTime }}
						</view>
					</view>

					<view class=" cor-8 font-28" style="text-align: right; height: 60rpx;line-height: 60rpx;">
						{{ t('orderList.orderListCom.number') }}:{{ getAllNumber() }}
						{{ t('orderList.orderListCom.realPay') }}: <text class="cor-r font-B">{{ t('money') }}{{
							(itemMsg.amount / 100).toFixed(2) }}</text>
					</view>
				</view>

				<view class=" flex flex-drr font-26 flex-ac" style="padding: 20rpx 0;">
					<view class="flex font-26">
						<view @tap.stop="cancelOrder" v-if="itemMsg.orderState === 0" class="flex flex-ac bor-box mar-l16"
							style=" border: 2rpx solid #ddd; height: 60rpx; padding: 0 18rpx;border-radius: 8rpx;">
							{{ t('orderList.orderListCom.button.cancelOrder') }}
						</view>
						<view @tap.stop="refundShowFn" v-if="itemMsg.orderState === 1"
							class="flex flex-ac bor-box mar-l16"
							style=" border: 2rpx solid #ddd; height: 60rpx; padding: 0 18rpx;border-radius: 8rpx;">
							{{ t('orderList.orderListCom.button.comeAgain') }}
						</view>
						<view v-if="itemMsg.orderState === 0" class="flex flex-ac cor-f mar-l16"
							style=" background: var(--cor-g); height: 60rpx; padding: 0 18rpx;border-radius: 8rpx;">
							{{ t('orderList.orderListCom.button.goPay') }}
						</view>

					</view>
				</view>
			</view>
		</view>

		<!-- 退款原因 -->
		<up-picker :show="refundShow" :columns="refundColumns" keyName="label" valueName="value"
			@confirm="refundConfirm" @cancel="cancelRefund"></up-picker>

	</view>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { post } from '@/utils/request'
const { t, tm } = useI18n()

const props = defineProps({
	itemMsg: {
		type: Object,
		default: {}
	}
})
const orderStateArr = ref(tm('orderDetail.status'))
console.log(orderStateArr)
function navOrderDetail() {
	uni.navigateTo({
		url: "/pages/self/orderDetail?list=1&orderId=" + props.itemMsg.orderId
	})
}

function getAllNumber() {
	return props.itemMsg.goodsList.reduce((sum, item) => sum + item.goodsInfo.orderQuantity, 0);
}

const defineEmits = defineEmits(['tableHide','tableShow'])
function cancelOrder() {
	console.log(props.itemMsg)
	uni.showModal({
		title: t('tips.prompt'),
		content: t('tips.cancelOrder'),
		success: async (res) => {
			if (res.confirm) {
				console.log('用户点击确定');
				let params = {
					orderId: props.itemMsg.orderId,
					userId: uni.getStorageSync('userInfo').userId
				}
				let res = await post('/order/cancel', params)
				if (res.code == 200) {
					props.itemMsg.orderState = 4
					uni.showToast({
						title: t('tips.cancelSuccess'),
						icon: 'none'
					})
				}
			} else if (res.cancel) {
				console.log('用户点击取消');
			}
		}
	});
}
const refundShow = ref(false)
const refundColumns = ref([tm('orderDetail.refund')])
async function refundConfirm(e) {
	defineEmits('tableShow')
	let params = {
		id: props.itemMsg.orderId,
		userId: uni.getStorageSync('userInfo').userId,
		refundCause: e.value[0]
	}
	let res = await post('/order/refund/apply', params)
	refundShow.value = false
	if (res.code == 200) {
		props.itemMsg.orderState = 8
		uni.showToast({
			title: t('tips.refundSuccess'),
			icon: 'none'
		})
	} else {
		uni.showToast({
			title: res.message,
			icon: 'none'
		})
	}
}

function refundShowFn() {
	defineEmits('tableHide')
	refundShow.value = true
}
function cancelRefund() {
	defineEmits('tableShow')
	refundShow.value = false
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