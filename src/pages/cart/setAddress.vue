<template>
	<view class=" flex flex-dc flex-ac">
		<view class=" bg-f flex flex-dc flex-ac" style="width: 750rpx;margin-top: 20rpx;">
			<view class=" flex flex-ac bor-b2sf0" style="width: 700rpx;height: 100rpx;">
				<view class=" flex flex-ac cor-8 font-28" style="width: 160rpx;height: 100rpx;">
					{{ t('setAddress.name') }}
				</view>
				<view class="">
					<input v-model="pushParams.receiverName" type="text" class=" font-28" style="padding: 3rpx 6rpx;"
						placeholder="请输入姓名" />
				</view>
			</view>
			<!-- <view class=" flex flex-ac bor-b2sf0" style="width: 700rpx;height: 100rpx;">
				<view class=" flex flex-ac cor-8 font-26 op-0" style="width: 160rpx;height: 100rpx;">
					占位
				</view>
				<view class="flex font-28 cor-4">
					<view class="flex flex-ac">
						<radio style="transform:scale(0.7)" borderColor="#d1d1d1" activeBorderColor='#21cc5b'
							:checked="!pushParams.isDefault" @tap="radioStatus=false" color='#21cc5b'></radio>
						{{ t('setAddress.woman') }}
					</view>
					<view class="flex flex-ac" style="margin-left: 80rpx;">
						<radio style="transform:scale(0.7)" borderColor="#d1d1d1" activeBorderColor='#21cc5b'
							:checked="pushParams.isDefault" @tap="radioStatus=true" color='#21cc5b'></radio>
						{{ t('setAddress.man') }}
					</view>
				</view>
			</view> -->

			<view class=" flex flex-ac bor-b2sf0" style="width: 700rpx;height: 100rpx;">
				<view class=" flex flex-ac cor-8 font-28" style="width: 160rpx;height: 100rpx;">
					{{ t('setAddress.phone') }}
				</view>
				<view class="">
					<input v-model="pushParams.receiverPhone" type="number" class=" font-28" style="padding: 3rpx 6rpx;"
						:placeholder="t('setAddress.phonePlaceholder')" />
				</view>
			</view>

			<view class=" flex flex-ac bor-b2sf0" style="width: 700rpx;min-height: 100rpx;">
				<view class=" flex flex-ac cor-8 font-28" style="width: 160rpx;height: 100rpx;">
					{{ t('setAddress.address') }}
				</view>
				<view @click="navMap" class=" font-28 cor-4  flex-g flex flex-ac flex-jb">
					<view class="" style="width: 500rpx;padding: 20rpx 0;">
						{{addressInfo?addressInfo?.formatted_address:t('setAddress.addressPlaceholder')}}
					</view>
					<up-icon style="display: inline-block;" name="arrow-right" color="#444" size="32rpx"></up-icon>

				</view>
			</view>

			<view class=" flex flex-ac bor-b2sf0" style="width: 700rpx;height: 100rpx;">
				<view class=" flex flex-ac cor-8 font-28" style="width: 160rpx;height: 100rpx;">
					{{ t('setAddress.addressDetail') }}
				</view>
				<view class="">
					<input v-model="pushParams.detailedAddress" type="text" class=" font-28"
						style="width: 500rpx; padding: 3rpx 6rpx;"
						:placeholder="t('setAddress.addressDetailPlaceholder')" />
				</view>
			</view>

			<!-- 			<view class=" flex flex-ac bor-b2sf0" style="width: 700rpx;height: 100rpx;padding: 20rpx 0;">
				<view class=" flex flex-ac cor-8 font-28" style="max-width: 160rpx;min-width: 160rpx;height: 100rpx;">
					{{ t('setAddress.label') }}
				</view>
				<view class=" flex-g h-100- flex flex-ac flex-ww">
					<view v-for="i in 10" class="bor-box font-22 cor-g"
						style="margin-right: 20rpx; background: rgba(33, 204, 91,.1); border: 2rpx solid rgb(33, 204, 91); display: inline-block; margin-right: 8rpx; border-radius: 4rpx; padding: 0 6rpx; white-space: nowrap;height: 32rpx;line-height: 32rpx;">
						标签
					</view>
				</view>
			</view> -->

			<view class=" flex flex-ac bor-b2sf0" style="width: 700rpx;height: 100rpx;padding: 20rpx 0;">
				<view class=" flex-g h-100- flex flex-dc flex-jc">
					<view class="font-26 cor-4">
						{{ t('setAddress.default') }}
					</view>
					<view class="font-24 cor-8" style="margin-top: 12rpx;">
						{{ t('setAddress.defaultDesc') }}
					</view>
				</view>
				
				<up-switch v-model="pushParams.isDefault" size="22" activeColor="#21cc5b"
					@change="changeSwitchValue"></up-switch>

			</view>
		</view>

		<view @click="submitBtn" class=" bg-g cor-f flex flex-ac flex-jc"
			style="width: 700rpx; margin-top: 100rpx;height: 88rpx;border-radius: 12rpx;">
			{{ t('setAddress.save') }}
		</view>
		<!-- <view class=" cor-f flex flex-ac flex-jc"
			style="background: #dfdfdf; width: 700rpx; margin-top: 30rpx;height: 88rpx;border-radius: 12rpx;">
			{{ t('setAddress.delete') }}
		</view> -->
	</view>
</template>

<script setup>
	import {
		reactive,
		ref
	} from 'vue'
	import {
		onHide,
		onShow
	} from '@dcloudio/uni-app'
	
	import {post} from "@/utils/request.js"
	import {
		useI18n
	} from 'vue-i18n'
	const {
		t
	} = useI18n()


	const radioStatus = ref(false)

	const switchValue = ref(false)
	const addressInfo = ref({
		"lat": 30.57226,
		"address_components": [{
				"short_name": "2",
				"long_name": "2",
				"types": [
					"street_number"
				]
			},
			{
				"short_name": "锦悦西路",
				"long_name": "锦悦西路",
				"types": [
					"route"
				]
			},
			{
				"short_name": "武侯区",
				"long_name": "武侯区",
				"types": [
					"political",
					"sublocality",
					"sublocality_level_1"
				]
			},
			{
				"short_name": "成都市",
				"long_name": "成都市",
				"types": [
					"locality",
					"political"
				]
			},
			{
				"short_name": "四川省",
				"long_name": "四川省",
				"types": [
					"administrative_area_level_1",
					"political"
				]
			},
			{
				"short_name": "CN",
				"long_name": "中国",
				"types": [
					"country",
					"political"
				]
			},
			{
				"short_name": "610094",
				"long_name": "610094",
				"types": [
					"postal_code"
				]
			}
		],
		"lng": 104.06651,
		"formatted_address": "中国四川省成都市武侯区锦悦西路2号 邮政编码: 610094"
	})
	const pushParams = reactive({})
	function changeSwitchValue() {

	}
	// ---------------------------------------
	function initAddress(){
		let componentsLen = addressInfo.value?.address_components?.length||0
		//最后一位是邮编
		if((addressInfo.value.address_components[componentsLen-1].long_name)-0!=NaN){
			addressInfo.value.address_components.pop()
		}
		console.log(addressInfo.value.address_components);
		let componentsLenReal = addressInfo.value?.address_components.length||0
		console.log()
		addressInfo.value.formatted_address = addressInfo.value.formatted_address.split(' 邮政编码:')[0]
		const _pushParams = {
			"city": addressInfo.value.address_components[componentsLenReal-3].long_name||'',
			"country": addressInfo.value.address_components[componentsLenReal-1].long_name||'',
			"detailedAddress": pushParams.detailedAddress||'',
			"district": addressInfo.value.address_components[componentsLenReal-4].long_name||'',
			// "id": 1,
			"isDefault": Boolean(0),
			"province": addressInfo.value.address_components[componentsLenReal-2].long_name||'',
			"receiverName": pushParams.receiverName||'',
			"receiverPhone": pushParams.receiverPhone||'',
			"userId": uni.getStorageSync('userInfo').userId
		}
		for (var key in _pushParams) {
			pushParams[key]=_pushParams[key]
		}
		
	}
	initAddress()


	async function submitBtn() {
		let _pushParams = {
			...pushParams,
			isDefault:pushParams-0
		}
		let data = await post('/user/address/create',_pushParams)
		console.log(data)
		if(data.code===200){
			uni.showToast({
				title:t('tips.addSuccess'),
				icon:'none',
				mask:true
			})
			setTimeout(()=>{
				uni.navigateBack()
			},1000)
			// uni.showModal({
			// 	title:t('tips.prompt'),
			// 	content:t('tips.clickBack'),
			// 	showCancel:false,
			// 	success: (res) => {
			// 		console.log(res)
			// 	}
			// })
		}else{
			uni.showToast({
				title:data.message,
				icon:'none'
			})
		}
	}

	function navMap() {
		uni.navigateTo({
			url: '/pages/webview/webview'
		})
	}
	
	onShow(() => {
		// console.log(uni.getStorageSync('location'),109109)
		// console.log(getApp().globalData.addressInfo);
		if(getApp().globalData.addressInfo){
			addressInfo.value = getApp().globalData.addressInfo
		}else{
			addressInfo.value = uni.getStorageSync('location')
		}
		initAddress()
	})
	onHide(() => {
		getApp().globalData.addressInfo = null
		uni.removeStorageSync('location')
	})
</script>

<style>

</style>