<template>
	<statusHeight></statusHeight>
	<view :style="'height: calc('+usableHeight+'rpx - 28rpx);'" class="flex flex-dc flex-ac ">
		<view class="bg-f w-100- flex flex-jc flex-ac" style="min-height: 94rpx;">
			<view class=" flex flex-ac"
				style=" box-sizing: border-box; padding: 0 16rpx; width: 700rpx;height: 64rpx;border-radius: 32rpx; background: #f5f5f5;">
				<up-icon name="search" color="#ccc" size="50rpx"></up-icon>
				<view class="" style="margin-left: 10rpx; width: 200rpx;height: 64rpx;">
					<swiper style="height: 64rpx;" class="" autoplay circular vertical interval="2000" duration="1000">
						<swiper-item>
							<text style="width: 200rpx;height: 64rpx;color: #999;"
								class="font-26 flex flex-ac">123</text>
						</swiper-item>
						<swiper-item>
							<text style="width: 200rpx;height: 64rpx;color: #999;"
								class="font-26 flex flex-ac">123</text>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>

		<view class=" w-100- flex bg-f ov-h flex-jb" style="">
			<scroll-view scroll-y="true" :scroll-top="leftTable.scrollTop" scroll-with-animation
				class="pos-r flex flex-dc"
				style=" box-sizing: border-box; border-right: 2rpx solid #f5f5f5; width: 180rpx;height: 100%;">
				<view v-for="(item,index) in 20" @tap="changeLeftTabble(index)"
					class="tst-3 pos-r font-26 flex flex-ac flex-jc cor-4 z-5"
					:class="leftTable.current == index?'cor-g':''" style="width: 100%;height: 100rpx;">
					<text>全部{{item}}</text>
				</view>

				<view :style="'top: '+(100*leftTable.current)+'rpx;'"
					class=" tst-3 pos-a font-26 flex flex-ac flex-jc cor-4 z-1"
					style="background: #f5f5f5; width: 100%;height: 100rpx;">
					<view class=" pos-a"
						style="background: #21cc5b; border-radius: 0 5rpx 5rpx 0; left: 0; width: 8rpx;height: 60rpx;">

					</view>
					<up-icon class="pos-a right-0" name="play-right-fill" color="#21cc5b" size="36rpx"></up-icon>

				</view>
			</scroll-view>
			<view class="" style="width: 570rpx;">
				<view class=" flex flex-ac flex-drr"
					style="height: 70rpx; box-sizing: border-box; border-bottom: 2rpx solid #f5f5f5;">
					<view @tap="changeRightTabble(rightTable.current==2?3:2)" :class="rightTable.current>=2?'cor-g':''"
						class=" flex flex-ac flex-jc font-26 cor-4" style="width: 134rpx;height: 68rpx;">
						价格
						<up-icon v-show='rightTable.current>=2' class="tst-3"
							:class="rightTable.current==2?'rotate-180':'rotate-0'" style="margin-left: 6rpx;"
							name="arrow-down-fill" color="#21cc5b" size="30rpx"></up-icon>
					</view>
					<view @tap="changeRightTabble(1)" :class="rightTable.current===1?'cor-g':''"
						class=" flex flex-ac flex-jc font-26 cor-4" style="width: 104rpx;height: 68rpx;">
						销量
					</view>
					<view @tap="changeRightTabble(0)" :class="rightTable.current===0?'cor-g':''"
						class=" flex flex-ac flex-jc font-26 cor-4" style="width: 104rpx;height: 68rpx;">
						综合
					</view>
				</view>
				<scroll-view scroll-y="true" class="flex flex-dc" style="height: calc(100% - 70rpx);">
					<view v-for="item in 20" class=" flex flex-dc"
						style="padding: 20rpx 0; min-height: 213rpx;border-bottom: 2rpx solid #f5f5f5;">
						<view class="flex flex-ac flex-jc">
							<image class="" style="width: 182rpx;height: 182rpx;"
								src="/src/static/img/DM_20250619214345_011.png" mode=""></image>
							<view class=" flex flex-dc" style="width: 340rpx; min-height: 100%; margin-left: 12rpx;">
								<view class=" cor-4 font-26 font-w7 text-d">
									新鲜大红椒 按斤
								</view>
								<view class=" cor-9 font-22 text-d" style="margin-top: 8rpx;">
									大红色、有光泽、20CM左右、硬皮
								</view>
								<view class=" cor-8 font-22 text-d" style="margin-top: 8rpx;">
									2025-04-15
								</view>
								<view class=" cor-r font-36 text-d font-w7" style="margin-top: 8rpx;">
									<text class="font-26">￥</text>00.00-00.00
								</view>
								<view class=" cor-8 font-22 text-d" style="margin-top: 8rpx;">
									库存 99999
								</view>
								<view  class=" flex flex-ac flex-jb cor-8 font-22 text-d" style="margin-top: 8rpx;">
									<text>自营</text>
									
									<view v-if='item%2==0' class=" bor-50- flex flex-ac flex-jc"
										style="width: 56rpx;height: 56rpx;background: linear-gradient(160deg, rgba(33, 204, 91, 0.5), rgb(33, 204, 91));">
										<up-icon class="" name="shopping-cart" color="#fff" size="50rpx"></up-icon>
									</view>
									
									<view v-else class="flex flex-ac flex-jc cor-f font-28"
									style="width: 148rpx; border-radius: 27rpx; height: 56rpx;background: linear-gradient(160deg, rgba(33, 204, 91, 0.5), rgb(33, 204, 91));">
										选规格
										<up-icon class="" style="margin-left: 6rpx;" name="arrow-down" color="#fff" size="32rpx"></up-icon>
									</view>
								</view>
								
							</view>
						</view>
						<view v-if='item%2!==0' class="flex flex-dc flex-ac" style="width: 570rpx;">
							<view v-for="ite in 3" class="" style="width: 534rpx;margin-top: 20rpx;">
								<view class=" flex">
									<view class="flex flex-g">
										<view class="cor-r flex flex-ac flex-drr" style="width: 50%; text-align: right;">
											<text class="font-36 font-w7">5.00</text>
											<text class="font-26">￥</text>
										</view>
										<view class="font-26 flex flex-ac cor-4" style="width: 50%;margin-left: 10rpx;">
											精品 
										</view>
									</view>
									<view class=" bor-50- flex flex-ac flex-jc"
										style="min-width: 56rpx;max-width: 56rpx;height: 56rpx;background: linear-gradient(160deg, rgba(33, 204, 91, 0.5), rgb(33, 204, 91));">
										<!-- shopping-cart -->
										<up-icon class="" name="shopping-cart" color="#fff" size="50rpx"></up-icon>
									</view>
								</view>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>

		</view>



	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import statusHeight from '@/components/statusHeight.vue'
	import imageFlow from "@/components/imageFlow.vue"
	import nullMsg from "@/components/nullMsg.vue"
	import {
		useI18n
	} from 'vue-i18n'
	const {
		t
	} = useI18n()

	// 获取系统信息
	const systemInfo = uni.getSystemInfoSync()

	// 计算可用高度（减去状态栏、导航栏和TabBar高度）
	let usableHeight = systemInfo.windowHeight * 2
	console.log(usableHeight)

	const leftTable = reactive({
		current: 0,
		scrollTop: 0
	})

	function changeLeftTabble(index) {
		leftTable.current = index
		leftTable.scrollTop = (index * 50) - (usableHeight / 4 - 44)
	}
	const rightTable = reactive({
		current: 0,
	})

	function changeRightTabble(index) {
		console.log(index)
		rightTable.current = index
	}
</script>

<style scoped>
	.rotate-180 {
		transform: rotate(180deg);
	}

	.rotate-0 {
		transform: rotate(0deg);
	}
</style>