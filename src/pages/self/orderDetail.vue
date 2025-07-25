<template>
	<view class="flex flex-dc flex-ac cor-4">
		<view class=" bg-f bor-20 ov-h flex flex-dc flex-ac mar-t24" style="width: 700rpx;min-height: 240rpx;">
			<view class=" bg-g" style="  height: 20rpx; width: 700rpx;"></view>
			<view class="bor-b2sf0 flex flex-dc flex-jc" style="width: 650rpx;min-height: 120rpx;">
				<view class=" font-32 font-B" style="margin-top: 20rpx;">
					{{ tm('orderDetail.headStatus')[0].title }}
				</view>
				<view class=" font-26" style="margin-top: 18rpx;">
					{{ tm('orderDetail.headStatus')[0].desc }}
				</view>
				
				<view class="aaa flex flex-ac flex-jc" style="margin: 20rpx 0;">
					<image class="aaa" src="/src/static/img/DM_20250619214345_011.png" style="width: 400rpx;height: 400rpx;"
						mode=""></image>
				</view>
			</view>
			<view class="flex-g flex-ac flex flex-drr font-26" style="width: 650rpx;min-height: 100rpx;">
				<view class=" flex">
					<view class="flex flex-ac bor-box mar-l16"
						style=" border: 2rpx solid #ddd; height: 60rpx; padding: 0 18rpx;border-radius: 8rpx;">
						{{ t("orderDetail.button.cancelOrder") }}
					</view>
					<view class="flex flex-ac bor-box mar-l16"
						style=" border: 2rpx solid #ddd; height: 60rpx; padding: 0 18rpx;border-radius: 8rpx;">
						{{ t("orderDetail.button.comeAgain") }}
					</view>
					<view class="flex flex-ac cor-f mar-l16"
						style=" background: var(--cor-g); height: 60rpx; padding: 0 18rpx;border-radius: 8rpx;">
						{{ t("orderDetail.button.goPay") }}
					</view>
				</view>
			</view>
		</view>

		<view class="font-26 bg-f bor-20 ov-h flex flex-dc flex-ac mar-t24 w700" style="">
			<view class="w650">
				<view class=" flex flex-jb mar-t30">
					<view class="cor-8" style="min-width: 140rpx;line-height: 42rpx;">
						{{ t("orderDetail.address") }}
					</view>
					<view class="" style="text-align: right;line-height: 42rpx;">
						四川省成都市四川省成都市四川省成都市四川省成都市四川省成都市
					</view>
				</view>
				<view class=" flex flex-jb mar-t30">
					<view class="cor-8" style="min-width: 140rpx;">
						{{ t("orderDetail.delivery") }}
					</view>
					<view class="" style="text-align: right;">
						商家配送
					</view>
				</view>
				<view class=" flex flex-jb mar-t30" style="margin-bottom: 30rpx;">
					<view class="cor-8" style="min-width: 140rpx;">
						{{ t("orderDetail.time") }}
					</view>
					<view class="" style="text-align: right;">
						2025-07-10 05:00-14:00
					</view>
				</view>
			</view>
		</view>

		<view class="font-26 bg-f bor-20 ov-h flex flex-dc flex-ac mar-t24 w700" style="">
			<view class="w650">
				<view class=" font-28 cor-4 font-B bor-b2sf0" style="height: 72rpx;line-height: 72rpx;">
					{{ t("orderDetail.goodsList") }}
				</view>
				<view class="bor-b2sf0">
					<view v-for="item in 3" class=" mar-t30 flex mar-b24" style="min-height: 120rpx;">
						<image src="/src/static/img/DM_20250619214345_011.png" style="width: 120rpx;height: 120rpx;"
							mode=""></image>
						<view class=" mar-l20 flex flex-dc flex-jb" style="width: calc(650rpx - 140rpx);">
							<view class=" flex font-28 font-B flex-jb">
								<view class=" text-d" style="width: 380rpx;">
									商品名称商品名称商品名称商品名称
								</view>
								<view class="">
									{{ t("money") }}48.00
								</view>
							</view>

							<view class=" flex font-26 cor-8 flex-jb">
								{{ t("orderDetail.unitPrice") }}：{{ t("money") }}48.00/500克
							</view>
							<view class=" flex font-26 cor-8 flex-jb" style="margin-bottom: 10rpx;">
								{{ t("orderDetail.number") }}：1
							</view>
						</view>
					</view>
				</view>

				<view class="bor-b2sf0" style="padding-bottom: 30rpx;">
					<view class=" flex flex-jb mar-t30">
						<view class="cor-8" style="min-width: 140rpx;">
							{{ t("orderDetail.goodsPrice") }}
						</view>
						<view class="font-B" style="text-align: right;">
							{{ t("money") }}1234
						</view>
					</view>

					<view class=" flex flex-jb mar-t30">
						<view class="cor-8" style="min-width: 140rpx;">
							{{ t("orderDetail.deliveryPrice") }}
						</view>
						<view class="font-B" style="text-align: right;">
							{{ t("money") }}1234
						</view>
					</view>

				</view>
			</view>
		</view>

		<view class="font-26 bg-f bor-20 ov-h flex flex-dc flex-ac mar-t24 w700" style="">
			<view class="w650">
				<view class=" font-28 cor-4 font-B bor-b2sf0" style="height: 72rpx;line-height: 72rpx;">
					{{ t("orderDetail.orderMessage") }}
				</view>
				<view class=" flex flex-jb mar-t30">
					<view class="cor-8" style="min-width: 140rpx;">
						{{ t("orderDetail.orderID") }}
					</view>
					<view class="" style="text-align: right;">
						1234
					</view>
				</view>
				<view class=" flex flex-jb mar-t30">
					<view class="cor-8" style="min-width: 140rpx;">
						{{ t("orderDetail.orderNumber") }}
					</view>
					<view class="" style="text-align: right;">
						1234564646
						<up-copy content="uview-plus is great !" style="display: inline-block;">
							<text class="aaa cor-g"
								style="margin-left: 20rpx; border-color: var(--cor-g); border-radius: 8rpx; padding: 4rpx 12rpx;">
								{{ t("copy") }}
							</text>
						</up-copy>

					</view>
				</view>
				<view class=" flex flex-jb mar-t30" style="margin-bottom: 30rpx;">
					<view class="cor-8" style="min-width: 140rpx;">
						{{ t("orderDetail.orderTime") }}
					</view>
					<view class="" style="text-align: right;">
						2025-07-10 05:00-14:00
					</view>
				</view>
			</view>
		</view>

		<view class="" style="height: 40rpx;">

		</view>
	</view>
</template>

<script setup>
import {ref} from 'vue'	
import {
		onShow,
		onLoad
	} from '@dcloudio/uni-app'
	import {post} from '@/utils/request'
import {useI18n} from 'vue-i18n'

const {t, tm} = useI18n()

const orderId=ref()
const userId = uni.getStorageSync('userInfo').userId
const orderInfo = ref({})
async function getOrderDetail(){
	let res = await post('/order/info',{
		orderId:orderId.value-0,
		userId:userId-0
	})
	if(res.code===200){
		orderInfo.value = res.data
	}
}
onLoad((e)=>{
	if(e.orderId){
		orderId.value=e.orderId
	}
	getOrderDetail()
})


</script>

<style></style>