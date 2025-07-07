<template>
	<statusHeight></statusHeight>
	<view style="" class="flex flex-dc flex-ac">
		<image class="pos-a z-0" style=" width: 750rpx;height: calc(186rpx * 2);" src="/src/static/img/DM_20250625173727_001.png" mode=""></image>
		<view class=" z-1 pos-r" style="width: 700rpx;">
			<view class=" bg-f flex flex-ac flex-jb" style="height: 68rpx;margin-top: 25rpx;border-radius: 8rpx;">
				<view class="flex flex-ac ">
					<text style="margin-left: 20rpx; transform: skewX(-10deg);" class="font-w7 cor-g font-28">滨海仓库</text>
					<input type="text" class="" style="margin-left: 20rpx;font-size: 26rpx;" placeholder="搜索滨海仓库名称"/>
				</view>
				<view class=" font-26 flex flex-ac flex-jc cor-f bg-g"
					style="border-radius: 8rpx; width: 110rpx;height: 56rpx;margin-right: 10rpx;">
					<text>搜索</text>
				</view>
			</view>
			
			<view class="pos-r flex flex-dc flex-ac" style=" border-radius: 20rpx; margin-top: 24rpx; height: 210rpx; background: linear-gradient(90deg, rgb(0, 194, 80) 0%, rgb(3, 176, 144) 100%);">
				<view class=" flex flex-jc flex-jb" style="width: 640rpx;margin-top: 20rpx;">
					<view class="flex flex-ac">
						<view class="bg-f flex flex-ac flex-jc" style="margin-right: 14rpx; text-align: center; width: 36rpx;height: 36rpx;border-radius: 50%;">
							<up-icon style="" class="" name="map" color="#00c250"
								size="30rpx"></up-icon>
						</view>
						<view style="width: 400rpx;" class="cor-f font-28 text-d">
							获取定位查看地址是否可送达是否可送达是否可送达
						</view>
					</view>
					<view class="flex flex-ac font-24 cor-f font-w3" style="">
						重新定位
						<up-icon style="margin-left: 10rpx;" class="" name="reload" color="#fff"
						size="30rpx"></up-icon>
					</view>
				</view>
				<view class=" pos-a bg-f" style="height: 132rpx; width: 698rpx; bottom: 1rpx;border-radius: 20rpx;">
					<view class="flex flex-dc flex-jc h-100- pos-r" style="padding: 0 24rpx;">
						<up-icon style="right: 5rpx;" class="z-0 pos-a" name="home" color="#e5f9ed" size="140rpx"></up-icon>
						<view style="width: 500rpx;" class="font-32 pos-r z-1">
							当前滨海仓库:万象生鲜配送系统
						</view>
						<view style="margin-top: 20rpx;" class="pos-r z-1 flex flex-ac cor-7 font-24">
							<up-icon style="" class="" name="map" color="#777" size="30rpx"></up-icon>
							北京市通州区万达广场B座2724室 | 距您1892.15km
						</view>
					</view>
				</view>
			</view>

			<view class=" " style="margin-top: 60rpx; background-color: #f5f5f5;">
				<view style="font-size: 30rpx;margin-bottom: 40rpx;" class="cor-3 font-w7"> 其他滨海仓库</view>

				<view v-for="item in 10" class=" bg-f" style=" margin-top: 20rpx; border-radius: 20rpx; height: 174rpx;padding: 20rpx;box-sizing: border-box;">
					<view class="flex flex-jb flex-ac" style="height: 134rpx; ">
						<view class="flex h-100-">
							<image
								style="width:80rpx; height: 80rpx;border-radius: 8rpx;"
								src="/src/static/img/1728732675670a5e03ef40f.png"
								mode="scaleToFill"
							/>
							<view class=" font-24 flex flex-dc flex-jb cor-7" style="margin-left: 16rpx;">
								<view class="font-28 cor-3">万象成都分仓</view>
								<view>成都万象成都分仓一期</view>
								<view style="margin-bottom: 12rpx;">
									00:00 ~ 23:59
								</view>
							</view>
						</view>

						<view style=" width: 226rpx;height: 100rpx;border-left: 2rpx solid #f0f0f0;" class=" flex flex-dc flex-ac flex-jc ">
							<view style="color: var(--cor-g);" class="font-28">
								选择
							</view>
							<view style="margin-top: 20rpx;" class="font-24 cor-7 flex flex-ac">
							<up-icon style="" class="" name="map" color="#777" size="30rpx"></up-icon>
								距您1891.64km
							</view>
						</view>
					</view>
				</view>
			</view>
			<nullMsg></nullMsg>
		</view>
		
	</view>
</template>

<script setup>
import statusHeight from '@/components/statusHeight.vue'
import imageFlow from "@/components/imageFlow.vue"
import nullMsg from "@/components/nullMsg.vue"
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

</script>

<style></style>
