<template>
	<statusHeight></statusHeight>
	<view style="" class="bg-f flex flex-dc flex-ac">
		<view class="" style="width: 750rpx;height: 750rpx;">
			<up-swiper height="375" circular :list="list1"></up-swiper>
		</view>

		<view class=" flex flex-ac" style="height: 80rpx; width: 700rpx;margin-top: 30rpx;">
			<view class="cor-f font-24 flex flex-ac flex-jc"
				style="border-radius: 4rpx; width: 60rpx;height: 32rpx;background: #21cc5b;">
				自营
			</view>
			<view class=" font-w7 cor-4" style="margin-left: 20rpx;">
				商品名商品名商品名
			</view>
		</view>

		<view class=" flex flex-ac cor-9 font-26" style="height: 80rpx; width: 700rpx;">
			大红色、有光泽、20CM左右、硬皮 描述
		</view>
		<view class="flex-jb flex flex-ac cor-9 font-26" style="height: 80rpx; width: 700rpx;">
			<view class="" style="color: #ea3a37;">
				<text class="font-26">￥</text>
				<text class="font-40 font-w7">5.00</text>
				<text class="font-26">/斤</text>
			</view>
			<view class="cor-9 font-26">
				销量208,库存99989
			</view>
		</view>

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
		</view>

		<view class=" flex flex-dc" style="width: 700rpx;margin-top: 10rpx;">
			<view class=" font-26 cor-4">
				<text class="cor-9" style="margin-right: 20rpx;">配送</text>
				<text>最快 次日 07:00-12:00 送达</text>
			</view>
			<view class=" font-26 cor-4 flex" style="margin-top: 40rpx;">
				<text class="cor-9" style="margin-right: 20rpx;">配送</text>
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
				<view style="" class="font-26 cor-g font-w6">
					商品详情
				</view>
				<view style="height: 4rpx;width: 40rpx;bottom: 0;" class="bg-g pos-a"> </view>
			</view>
			<view class=" flex flex-ac flex-jc pos-r" style="width: 50%;height: 88rpx;">
				<view style="" class="font-26 cor-4 font-w6">
					购买记录
				</view>
				<view style="height: 4rpx;width: 40rpx;bottom: 0;" class="bg-g pos-a"> </view>
			</view>
		</view>
		<view class="" style="width: 750rpx;background: #f5f5f5;height: 20rpx;"></view>

		<view class="" style="width: 700rpx;min-height: 700rpx;">

		</view>


		<view class="" style="width: 750rpx;height: 106rpx;"></view>
		<view class="bg-f z-20 pos-f bottom-0 flex flex-ac flex-jc" style="width: 750rpx;height: 96rpx;box-shadow: 0 0 16rpx #c3c3c3;">
			
			<view class=" flex flex-dc flex-ac flex-jc font-20 cor-6" style="width: 94rpx;height: 72rpx;">
				<up-icon style="display: inline-block;" name="home" color="#666" size="20"></up-icon>
				<text style="margin-top: 8rpx;">首页</text>
			</view>
			<view class=" flex flex-dc flex-ac flex-jc font-20 cor-6" style="width: 94rpx;height: 72rpx;">
				<up-icon style="display: inline-block;" name="phone" color="#666" size="20"></up-icon>
				<text style="margin-top: 8rpx;">客服</text>
			</view>
			<view class=" flex flex-dc flex-ac flex-jc font-20 cor-6" style="width: 94rpx;height: 72rpx;">
				<up-icon style="display: inline-block;" name="shopping-cart" color="#666" size="20"></up-icon>
				<text style="margin-top: 8rpx;">购物车</text>
			</view>
			
			<view class=" flex flex-ac flex-jc bg-g cor-f font-30" style="width: 422rpx;height: 88rpx;border-radius: 10rpx;">
				加入购物车
			</view>
			
		</view>
	</view>
</template>

<script setup>
import {
	reactive
} from "vue"
import statusHeight from '@/components/statusHeight.vue'
import imageFlow from "@/components/imageFlow.vue"
import {
	useI18n
} from 'vue-i18n'
const {
	t
} = useI18n()

const list1 = reactive([
	'https://wanxiangyouxian.oss-cn-beijing.aliyuncs.com//uploads/images/20240130/170661303665b8d92c56ab0.jpeg',
	'https://wanxiangyouxian.oss-cn-beijing.aliyuncs.com//uploads/images/20240130/170661303665b8d92c56ab0.jpeg',
]);
</script>

<style>
.lsl {
	border: 1rpx solid red;
}
</style>