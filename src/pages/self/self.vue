<template>
	<!-- <statusHeight></statusHeight> -->
	<view style="" class="flex flex-dc flex-ac">
		<view class="flex flex-ac" style="width: 750rpx;height: 300rpx;background: #21b5a6;padding-top: 100rpx;">
			<view @tap="goLogin" class="flex flex-ac" style="">
				<image class=" bor-50-" style="margin-left: 30rpx;margin-right: 20rpx; width: 125rpx;height: 125rpx;"
					:src="userInfo?userInfo.avatar:'/src/static/img/per0.png'" mode="scaleToFill" />
					
				<view class="cor-f font-34 font-w7">{{userInfo?userInfo.nickname:t('self.title') }}</view>
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
		
		<view class="bg-f flex flex-dc flex-ac font-28" style="width: 700rpx;border-radius: 10rpx;padding: 20rpx 0;">
			<view @tap="goSite" class=" flex flex-ac cor-4 flex-jb" style="border-bottom: 1rpx solid #f1f1f1; height: 80rpx;width: 600rpx;">
				<view class="flex flex-ac flex-jc" style="">
					<image style="width: 50rpx;height: 50rpx;" src="/src/static/address.svg" mode=""></image>
					<view class="" style="margin-left: 16rpx;">
						{{setList[0].title}}
					</view>
				</view>
				<image style="width: 40rpx;height: 40rpx;" src="/src/static/you.png" mode=""></image>
			</view>
			<view @tap="pickerShow=true" class=" flex flex-ac cor-4 flex-jb" style="border-bottom: 1rpx solid #f1f1f1;height: 80rpx;width: 600rpx;">
				<view class="flex flex-ac flex-jc" style="">
					<image style="width: 50rpx;height: 50rpx;" src="/src/static/language.svg" mode=""></image>
					<view class="" style="margin-left: 16rpx;">
						{{setList[1].title}}
					</view>
				</view>
				<image style="width: 40rpx;height: 40rpx;" src="/src/static/you.png" mode=""></image>
			</view>
			<view @tap="callPhone" class=" flex flex-ac cor-4 flex-jb" style="border-bottom: 1rpx solid #f1f1f1;height: 80rpx;width: 600rpx;">
				<view class="flex flex-ac flex-jc" style="">
					<image style="width: 50rpx;height: 50rpx;" src="/src/static/phone_service.svg" mode=""></image>
					<view class="" style="margin-left: 16rpx;">
						{{setList[3].title}}
					</view>
				</view>
				<image style="width: 40rpx;height: 40rpx;" src="/src/static/you.png" mode=""></image>
			</view>
			<view v-if="userInfo"  @tap="goLogin" class=" flex flex-ac cor-4 flex-jb" style="border-bottom: 1rpx solid #f1f1f1;height: 80rpx;width: 600rpx;">
				<view class="flex flex-ac flex-jc" style="">
					<image style="width: 50rpx;height: 50rpx;" src="/src/static/out.svg" mode=""></image>
					<view class="" style="margin-left: 16rpx;">
						{{setList[2].title}}
					</view>
				</view>
				<image style="width: 40rpx;height: 40rpx;" src="/src/static/you.png" mode=""></image>
			</view>
		</view>
		<view class="" style="font-size: 30rpx;color: #444; font-weight: 700; margin: 20rpx;">
			<text style="color: #999;font-weight: 500;">—</text> {{ t('guessLike') }} <text
				style="color: #999;font-weight: 500;">—</text>
		</view>
		
		<imageFlow v-if="likeList.length>0" :listF="likeList" :pageGoodsNumberObj="pageGoodsNumberObj"></imageFlow>
		<up-loadmore status="nomore" :nomore-text="t('tips.nomoreText')"  style="padding-top: 50rpx;padding-bottom: 50rpx;" line />
		
		
		<up-modal :show="modalShow" :content='t("tips.loginOut")' @confirm="loginOut" @cancel="modalShow=false" showCancelButton :confirmText="t('tips.confirm')" :cancelText="t('tips.cancel')"></up-modal>
		<up-picker :show="pickerShow" keyName="title" :columns="languageArr" @confirm="confirmPicker" @cancel="pickerShow=false" @close="pickerShow=false" closeOnClickOverlay ></up-picker>
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
	const { locale } = useI18n()
	const {
		t,
		tm
	} = useI18n()
	const userInfo = ref()
	const modalShow = ref(false)
	let languageArr=ref([[{
		title:'ภาษาไทย',
		key:'th-TH',
		status:false,
	},{
		title:'English',
		key:'en',
		status:false,
	},{
		title:'简体中文',
		key:'zh-Hans',
		status:false,
	}]])
	let setList=ref([
		{
			title:'我的地址',
			imgSrc:'/static/address.svg',
			url:'/pages/cart/addressList'
		},
		{
			title:'语言设置',
			imgSrc:'/static/language.svg',
			url:'/pages/self/language'
		},
		{
			title:'联系客服',
			imgSrc:'/static/out.svg',
			url:'/pages/login/login'
		},
		{
			title:'退出登录',
			imgSrc:'/static/out.svg',
			url:'/pages/login/login'
		}
	])
	
	// 更新setList的函数
	function updateSetList() {
		const setListConfig = tm('self.setList')
		setList.value = setList.value.map((item, index) => ({
			...item,
			title: setListConfig[index]?.title || item.title
		}))
	}
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
	// 移除这行，因为它在初始化时执行，不会随语言变化
	// console.log(tm('self.orderList'))
	orderButtonArr.value.forEach((item, index) => {
		item.text = tm('self.orderList')[index].title
	})

	function goOrderList(e) {
		uni.navigateTo({
			url: '/pages/self/orderList?tabbleIndex='+e
		})
	}
	let pickerShow = ref(false)
	function confirmPicker(option){
		console.log(option)
		locale.value = option.value[0].key
		uni.setLocale(locale.value);
		uni.setStorageSync('appLanguage', locale.value)
		// 重新加载页面
		//#ifdef H5
		uni.reLaunch({
			url: '/pages/self/self' 
		});
		//#endif
		// 语言切换后，重新更新orderButtonArr的文本
		orderButtonArr.value.forEach((item, index) => {
			item.text = tm('self.orderList')[index].title
		})
		updateSetList()
		pickerShow.value =false


	}

	function goLogin() {/* 
		if(userInfo.value){
			modalShow.value = true
			return
		} */
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
		// 初始化语言相关的数据
		orderButtonArr.value.forEach((item, index) => {
			item.text = tm('self.orderList')[index].title
		})
		updateSetList()
	})
	function setBadge(arr) {
		// 设置角标
		let text = arr.reduce((sum, item) => sum + item.number, 0)
		console.log(text)
		if(text==0){return}
		uni.setTabBarBadge({
			index: 2, // tabBar 的哪一项，从左边算起，索引从0开始
			text: text.toString() // 显示的文本，超过 3 个字符则显示成 "..."
		})
	}
	const pageGoodsNumberObj = ref({})
	onShow(() => {
		getLikeList()
		let _userInfo = uni.getStorageSync('userInfo')
		userInfo.value = _userInfo
		const goodsInfoStorage = uni.getStorageSync('goodsInfo') || []
		setBadge(goodsInfoStorage)
		updateSetList()
		console.log(setList.value)
		pageGoodsNumberObj.value = uni.getStorageSync('goodsNumberObj') || {}
	})
	function goSite(){
		uni.navigateTo({
			url:"/pages/cart/addressList"
		})
	}
	function callPhone(){
		let appConfig = uni.getStorageSync('appConfig')
		let phone = appConfig?.SERVICE_TELL?.value||null
		if(!phone){
			uni.showToast({
				title:'error',
				mask:true
			})
			return
		}
	   uni.makePhoneCall({
		  phoneNumber: phone,
		  success() {
			console.log('拨打成功了');
		  },
		  fail() {
			console.log('拨打失败了');
		  }
		})
	}
</script>

<style></style>