<template>
	<statusHeight></statusHeight>
	<view style="" class="flex flex-dc flex-ac">
		<view class="flex flex-ac" style="width: 750rpx;height: 300rpx;background: #21b5a6;">
			<view class="flex flex-ac" style="">
				<image class=" bor-50-" style="margin-left: 30rpx;margin-right: 20rpx; width: 125rpx;height: 125rpx;"
					:src="userInfo?userInfo.avatar:'/src/static/img/per0.png'" mode="scaleToFill" />
					
				<view @tap="goLogin" class="cor-f font-34 font-w7">{{userInfo?userInfo.nickname:t('self.title') }}</view>
			</view>
		</view>
		<view class=" bg-f"
			style="margin-bottom: 24rpx; box-sizing: border-box; padding: 30rpx 20rpx; width: 700rpx; margin-top: 24rpx;height: 300rpx;border-radius: 10rpx;">
			<view class="font-34 font-w6 cor-4">
				{{ t('self.myOrder') }}
			</view>
			<view class=" flex flex-jb" style="margin-top: 40rpx;">
				<view @tap="goOrderList(item.orderState)" v-for="item,index in orderButtonArr" :key="index"
					class="flex flex-ac flex-jc flex-dc" style="width: 142rpx;height: 142rpx;">
					<image class="" style="width: 62rpx;height: 62rpx;" :src='item.imgSrc' mode="scaleToFill" />
					<view class="font-24 cor-4" style=" margin-top: 12rpx;">{{item.text}}</view>
				</view>
			</view>
		</view>
		<view class="" style="font-size: 30rpx;color: #444; font-weight: 700; margin: 20rpx;">
			<text style="color: #999;font-weight: 500;">—</text> {{ t('guessLike') }} <text
				style="color: #999;font-weight: 500;">—</text>
		</view>
		
		<imageFlow v-if="likeList.length>0" :listF="likeList"></imageFlow>
		
		<up-modal :show="modalShow" :content='t("tips.loginOut")' @confirm="loginOut" @cancel="modalShow=false" showCancelButton :confirmText="t('tips.confirm')" :cancelText="t('tips.cancel')"></up-modal>

	</view>
</template>

<script setup>
	import {
		ref,
		reactive,
		nextTick
	} from 'vue'
	import {
		onShow,
		onLoad
	} from '@dcloudio/uni-app'
	import {post} from '@/utils/request.js'
	import statusHeight from '@/components/statusHeight.vue'
	import imageFlow from "@/components/imageFlow.vue"
	import nullMsg from "@/components/nullMsg.vue"
	import {
		useI18n
	} from 'vue-i18n'
	const {
		t,
		tm
	} = useI18n()
	const userInfo = ref()
	const modalShow = ref(false)
	const orderButtonArr = ref([
		{
			text: '全部订单',
			imgSrc: '/static/img/DM_20250619215903_005.png',
			orderState:0,
		},
		{
			text: '待支付',
			imgSrc: '/static/img/DM_20250619215903_001.png',
			orderState:1
		},
		{
			text: '已支付',
			imgSrc: '/static/img/DM_20250619215903_002.png',
			orderState:2
		},
		{
			text: '售后处理',
			imgSrc: '/static/img/DM_20250619215903_003.png',
			orderState:3
		},
		// {
		// 	text: '退货/售后',
		// 	imgSrc: '/static/img/DM_20250619215903_004.png'
		// },

	])
	orderButtonArr.value.forEach((item, index) => {
		item.text = tm('self.orderList')[index].title
	})

	function goOrderList(e) {
		uni.navigateTo({
			url: '/pages/self/orderList?tabbleIndex='+e
		})
	}


	function goLogin() {
		if(userInfo.value){
			modalShow.value = true
			return
		}
		uni.navigateTo({
			url: '/pages/login/login'
		})
	}
	function loginOut(){
		uni.removeStorageSync('token')
		uni.removeStorageSync('userInfo')
		modalShow.value =false
		uni.navigateTo({
			url: '/pages/login/login'
		})
	}

	const likeList=ref([])
	async function getLikeList(){
		const res=await post('/goods/search/info')
		console.log(res);
		if(res.code==200){
			likeList.value=[]
			setTimeout(()=>{
				likeList.value=res.data.list
			})
		}
	}
	onLoad(()=>{
		getLikeList()
	})
	function setBadge(arr) {
		// 设置角标
		let text = arr.reduce((sum, item) => sum + item.number, 0)
		console.log(text)
		uni.setTabBarBadge({
			index: 2, // tabBar 的哪一项，从左边算起，索引从0开始
			text: text.toString() // 显示的文本，超过 3 个字符则显示成 "..."
		})
	}
	onShow(() => {
		let _userInfo = uni.getStorageSync('userInfo')
		userInfo.value = _userInfo
		const goodsInfoStorage = uni.getStorageSync('goodsInfo') || []
		setBadge(goodsInfoStorage)
	})
</script>

<style></style>