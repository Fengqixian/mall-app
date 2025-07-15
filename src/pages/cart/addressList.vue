<template>
	<view class=" flex flex-dc flex-ac">
		<view class=" flex flex-dc flex-ac bg-f" style="width: 750rpx;margin-top: 20rpx;">
			<view v-for="item in 3" class=" flex flex-ac flex-jb bor-b2sf0" style="height: 160rpx;width: 700rpx; ">
				<radio style="display: inline-block; transform:scale(0.7)" borderColor="#d1d1d1" activeBorderColor='#21cc5b'
					:checked="radioStatus" @tap="radioStatus=!radioStatus" color='#21cc5b'></radio>
				<view class=" flex flex-dc flex-jc" style="width: calc(650rpx - 33rpx - 64rpx);height: 130rpx;">
					<view class="flex font-26 cor-4 text-2d" style="line-height: 36rpx;">
						<view class="bor-box font-22 cor-g"
							style="background: rgba(33, 204, 91,.1); border: 2rpx solid rgb(33, 204, 91); display: inline-block; margin-right: 8rpx; border-radius: 4rpx; padding: 0 6rpx; white-space: nowrap;height: 32rpx;line-height: 32rpx;">
							标签
						</view>
						地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址地址
					</view>
					<view class=" font-26 cor-8" style="margin-top: 12rpx;">
						李 123434546465
					</view>
				</view>
				<up-icon @tap='goSetAddress' style="display: inline-block;border: 2rpx solid #999;border-radius: 10rpx;" name="edit-pen-fill" color="#999" size="44rpx"></up-icon>
			</view>
		</view>

		<view class=" flex flex-dc flex-ac" style="margin-top: 200rpx;">
			<nullMsg></nullMsg>
			<view @click="goSetAddress" class=" bor-box flex flex-ac flex-jc cor-g"
				style="margin-top: 60rpx; border: 2rpx solid var(--cor-g); width: 300rpx;height: 100rpx;border-radius: 24rpx;">
				{{ t('addressList.botton') }}
			</view>
		</view>
		
		<view class="" style="height: 140rpx;"></view>
		<view class=" w-100- pos-f bottom-0 bg-f flex flex-ac flex-jc box-s8" style="height: 100rpx;">
			<view @click="goSetAddress" class=" font-30 flex flex-ac flex-jc bg-g cor-f" style="width: 700rpx;height: 80rpx;border-radius: 10rpx;">
				{{ t('addressList.botton') }}
			</view>
		</view>
	</view>
</template>

<script setup>
	import nullMsg from "@/components/nullMsg.vue"
	import {
		useI18n
	} from 'vue-i18n'
	const {
		t
	} = useI18n()
	const radioStatus=false
	function goSetAddress(){
		uni.navigateTo({
			url:'/pages/cart/setAddress'
		})
	}
	
</script>

<style>

</style>