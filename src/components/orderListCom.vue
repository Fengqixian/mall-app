<template>
	<view style="width: 100%;" class="cor-4 flex flex-dc flex-ac">
		<view class=" bg-f flex flex-jc" style="border-radius: 24rpx; width: 700rpx; min-height: 600rpx;">
			<view class="" style="width: 650rpx;">
				<view class=" font-26 flex flex-jb flex-ac bor-b2sf0" style="height: 80rpx;">
					<view class=" flex flex-ac">
						2025-07-01 15:35
						<view class="font-16 box-border" style=" border-radius: 6rpx; border: 2rpx solid #ffaa00; color: #ffaa00; margin-left: 10rpx;padding: 4rpx 6rpx;">
							商家配送
						</view>
					</view>
					
					<view class="">
						已取消
					</view>
				</view>
				
				<view class="order-grid" style="margin-top: 24rpx;">
					<view v-for="item in 6" class="order-grid-item ">
						<image style="width: 100%;height: 100%;" src="/src/static/img/DM_20250619214345_012.png" mode=""></image>
					</view>
				</view>

				<view class="bor-b2sf0" style="margin-top: 24rpx;">
					<view class=" flex flex-jb font-28 flex-ac" style="height: 60rpx;">
						<view class="cor-8">
							订单ID
						</view>
						<view>
							7612
						</view>
					</view>

					<view class=" flex flex-jb font-28 flex-ac" style="height: 60rpx;">
						<view class="cor-8">
							配送时间
						</view>
						<view>
							2025-07-01 15:35
						</view>
					</view>

					<view class=" cor-8 font-28" style="text-align: right; height: 60rpx;line-height: 60rpx;">
						数量:1 实付: <text class="cor-r font-B">￥123.00</text>
					</view>
				</view>
				
				<view class=" flex flex-drr font-26 flex-ac" style="height: 100rpx;">
					<view class="flex">
						<view class="flex flex-ac bor-box mar-l16" style=" border: 2rpx solid #ddd; height: 60rpx; padding: 0 18rpx;border-radius: 8rpx;">
							取消订单
						</view>
						<view class="flex flex-ac bor-box mar-l16" style=" border: 2rpx solid #ddd; height: 60rpx; padding: 0 18rpx;border-radius: 8rpx;">
							再来一单
						</view>
						<view class="flex flex-ac cor-f mar-l16" style=" background: var(--cor-g); height: 60rpx; padding: 0 18rpx;border-radius: 8rpx;">
							去付款
						</view>
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script setup>

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