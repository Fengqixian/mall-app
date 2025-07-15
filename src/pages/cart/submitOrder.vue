<template>
	<view class=" flex flex-dc flex-ac" style="">
		<view class=" flex flex-jc bg-f" style="margin-top: 30rpx; border-radius: 24rpx; width: 700rpx;height: 160rpx;">
			<view class="flex flex-ac flex-jb" style="width: 650rpx;">
				<image class="" style="width: 38rpx;height: 46rpx;" src="/src/static/img/DM_20250619215740_001.png"
					mode=""></image>
				<view @tap='goaDdressList' class="font-B cor-4 font-30 flex flex-dc flex-jc"
					style="width: calc(650rpx - 38rpx - 44rpx - 40rpx);height: 120rpx;">
					{{ t('submitOrder.address') }}

				</view>
				<view v-if="false" class=" flex flex-dc flex-jc"
					style="width: calc(650rpx - 38rpx - 44rpx - 40rpx);height: 120rpx;">
					<view class=" font-26 cor-4 text-2d" style="line-height: 36rpx;">
						<view class="bor-box font-22 cor-g"
							style="background: rgba(33, 204, 91,.1); border: 2rpx solid rgb(33, 204, 91); display: inline-block; margin-right: 8rpx; border-radius: 4rpx; padding: 0 6rpx; white-space: nowrap;height: 32rpx;line-height: 32rpx;">
							标签
						</view>
						地址地址地址地址地址地址地址地址地址
					</view>
					<view class=" font-26 cor-8" style="margin-top: 12rpx;">
						李 123434546465
					</view>
				</view>
				<up-icon style="display: inline-block;" name="arrow-right" color="#444" size="44rpx"></up-icon>
			</view>
		</view>

		<view class=" flex flex-jc bg-f"
			style="margin-top: 24rpx; border-radius: 24rpx; width: 700rpx;min-height: 160rpx;">
			<view class="flex flex-dc" style="width: 650rpx;">
				<view class="bor-box flex flex-ac cor-4 font-26 bor-b2sf0" style="height: 88rpx;">
					<image style="width: 30rpx;height: 30rpx;" src="/src/static/img/DM_20250619214345_030.jpg" mode="">
					</image>
					<view class=" text-d mar-l10" style="max-width: 300rpx;">店铺名称店铺名</view>
				</view>

				<view class="cor-4 flex flex-jb font-26 flex-ac" style="height: 80rpx;">
					<view class=" font-B">
						{{ t('submitOrder.delivery') }}
					</view>
					<view class="flex flex-ac">
						平台配送
						<up-icon style="display: inline-block;" name="arrow-right" color="#444" size="32rpx"></up-icon>
					</view>
				</view>
				<view class=" flex flex-jb font-26 flex-ac bor-b2sf0 bor-box" style="height: 80rpx;">
					<view class="">
						{{ t('submitOrder.time') }}
					</view>
					<view class="flex flex-ac font-B">
						次日 07:00-12:00 送达
						<up-icon style="display: inline-block;" name="arrow-right" color="#444" size="32rpx"></up-icon>
					</view>
				</view>

				<view class="">
					<view v-for="item in 3" class="" style="margin-top: 36rpx;margin-bottom: 30rpx;">
						<view class="flex " style="margin-top: 40rpx;">
							<image class="" style="width: 91rpx;height: 91rpx;border-radius: 8rpx;"
								src="/src/static/img/DM_20250619214345_011.png" mode=""></image>
							<view class="flex flex-dc flex-jb mar-l20 flex-g">
								<view class=" flex flex-jb  font-26" style="">
									<view class="">
										商品名称
									</view>
									<view class="">
										<text class="font-22">￥</text><text class="font-B">25.00</text>
									</view>
								</view>
								<view class=" font-24 cor-8">
									一包(20)
								</view>
								<view class=" font-24 cor-8">
									×1
								</view>
							</view>


						</view>
						<input type="text" class="font-26"
							style=" margin-top: 20rpx; border-radius: 8rpx; height: 50rpx;padding: 0 12rpx;background: #f5f5f5;"
							:placeholder="t('submitOrder.goodsNotes')" />
					</view>
				</view>
				<view class="" style="margin-bottom: 30rpx;">
					<view class=" flex flex-jb flex-ac font-26" style="height: 66rpx;">
						<view class="">
							{{ t('submitOrder.goodsAmount') }}
						</view>
						<view class="">
							{{t("money")}}16.00
						</view>
					</view>

					<view class=" flex flex-jb flex-ac font-26" style="height: 66rpx;">
						<view class="">
							{{ t('submitOrder.deliveryAmount') }}
						</view>
						<view class="">
							{{t("money")}}16.00
						</view>
					</view>
					<view class=" flex flex-jb flex-ac font-26" style="height: 66rpx;">
						<view class="">
							{{ t('submitOrder.notes') }}
						</view>
						<view class="flex flex-ac">
							<input type="text" class=" font-26" style="text-align: right;" :placeholder="t('submitOrder.notes')" />
							<up-icon style="display: inline-block;" name="arrow-right" color="#444"
								size="32rpx"></up-icon>

						</view>
					</view>
				</view>

			</view>
		</view>


		<view class="" style="height: 140rpx;"></view>
		<view class=" flex flex-ac flex-jc pos-f  bg-f w-100- z-10 left-0 bottom box-s8 bor-box"
			style="height: 100rpx;border-bottom: 2rpx solid #f5f5f5;">
			<view class=" flex flex-ac flex-jb" style="width: 700rpx;">

				<view class="  cor-8 font-24 flex flex-ac "
					style=" height: 88rpx; width: 300rpx; overflow-x: scroll;white-space: nowrap;">
					{{ t('submitOrder.waitPay') }}:<text class="cor-r font-22">￥</text><text class="cor-r font-28 font-B">822.00</text>
				</view>
				<view @click="" class=" font-30  bg-g cor-f flex flex-ac flex-jc"
					style="height: 88rpx;width: 240rpx; border-radius: 8rpx;">
					{{ t('submitOrder.submitOrder') }}
				</view>

			</view>

		</view>

	</view>
</template>

<script setup>
	import {
		useI18n
	} from 'vue-i18n'
	const {
		t
	} = useI18n()
	function goaDdressList() {
		uni.navigateTo({
			url: '/pages/cart/addressList'
		})
	}
</script>

<style scoped>
	.bottom {
		bottom: 0;
	}
</style>