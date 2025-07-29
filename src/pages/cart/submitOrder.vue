<template>
	<view class=" flex flex-dc flex-ac" style="">
		<view class=" flex flex-jc bg-f" style="margin-top: 30rpx; border-radius: 24rpx; width: 700rpx;height: 160rpx;">
			<view class="flex flex-ac flex-jb" style="width: 650rpx;">
				<image class="" style="width: 38rpx;height: 46rpx;" src="/src/static/img/DM_20250619215740_001.png"
					mode=""></image>
				<view v-if="!addressListObj.id" @tap='goAddressList' class="font-B cor-4 font-30 flex flex-dc flex-jc"
					style="width: calc(650rpx - 38rpx - 44rpx - 40rpx);height: 120rpx;">
					{{ t('submitOrder.address') }}

				</view>
				<view v-else @tap='goAddressList' class=" flex flex-dc flex-jc"
					style="width: calc(650rpx - 38rpx - 44rpx - 40rpx);height: 120rpx;">
					<view class=" font-26 cor-4 text-2d" style="line-height: 36rpx;">
						<!-- <view class="bor-box font-22 cor-g"
							style="background: rgba(33, 204, 91,.1); border: 2rpx solid rgb(33, 204, 91); display: inline-block; margin-right: 8rpx; border-radius: 4rpx; padding: 0 6rpx; white-space: nowrap;height: 32rpx;line-height: 32rpx;">
							标签
						</view> -->
						{{
							addressListObj.country + addressListObj.province + addressListObj.city + addressListObj.district + addressListObj.detailed_address
						}}
					</view>
					<view class=" font-26 cor-8" style="margin-top: 12rpx;">
						{{ addressListObj.receiver_name }} {{ addressListObj.receiver_phone }}
					</view>
				</view>
				<up-icon style="display: inline-block;" name="arrow-right" color="#444" size="44rpx"></up-icon>
			</view>
		</view>

		<view class=" flex flex-jc bg-f"
			style="margin-top: 24rpx; border-radius: 24rpx; width: 700rpx;min-height: 160rpx;">
			<view class="flex flex-dc" style="width: 650rpx;">
				<!-- <view class="bor-box flex flex-ac cor-4 font-26 bor-b2sf0" style="height: 88rpx;">
					<image style="width: 30rpx;height: 30rpx;" src="/src/static/img/DM_20250619214345_030.jpg" mode="">
					</image>
					<view class=" text-d mar-l10" style="max-width: 300rpx;">{{ MERCHANT_NAME.value }}</view>
				</view> -->


				<view class="cor-4 flex flex-jb font-26 flex-ac" style="height: 80rpx; margin-top: 20rpx;">
					<view class=" font-B">
						{{ t('submitOrder.delivery') }}
					</view>
					<view @tap="sendShow = true" class="flex flex-ac">
						{{ sendColumns[0][sendindex].label }}
						<up-icon style="display: inline-block;" name="arrow-right" color="#444" size="32rpx"></up-icon>
					</view>
				</view>
				<view v-show="sendindex === 0" class="cor-4 flex flex-jb font-26 flex-ac bor-b2sf0 bor-box"
					style="height: 80rpx;">
					<view class="font-B">
						{{ t('submitOrder.time') }}
					</view>
					<view @tap="sendTimeShow = true" class="flex flex-ac">
						{{ sendTimeStr }}
						<up-icon style="display: inline-block;" name="arrow-right" color="#444" size="32rpx"></up-icon>
					</view>
				</view>

				<view class="">
					<view v-for="item in orderArr.goodsList" :key="item.id" class="bor-b2sf0"
						style="padding-bottom: 20rpx;">
						<view class="flex " style="margin-top: 30rpx;">
							<image class="" style="width: 111rpx;height: 111rpx;border-radius: 8rpx;"
								:src="item.coverImage" mode=""></image>
							<view class="flex flex-dc flex-jb mar-l20 flex-g">
								<view class=" flex flex-jb  font-26" style="">
									<view class="">
										{{ item.descTh }}
									</view>
									<view v-if="orderArr.goodsNumMap[item.id] !== 1" class="">
										<text class="font-22">{{ item.priceUnitName }}</text><text
											class="font-B font-24">{{ (item.price / 100).toFixed(2) }}</text>
									</view>
								</view>
								<view class=" font-24 cor-8">
									{{ item.descTh }}
								</view>
								<view class="flex flex-ac flex-jb font-24 cor-8 ">
									<text>
										×{{ orderArr.goodsNumMap[item.id] }}
									</text>
									<text class="cor-r font-24 font-B">
										{{ (orderArr.goodsNumMap[item.id] * item.price / 100).toFixed(2) }}
									</text>
								</view>
							</view>


						</view>
						<input v-if="false" type="text" class="font-26"
							style=" margin-top: 20rpx; border-radius: 8rpx; height: 50rpx;padding: 0 12rpx;background: #f5f5f5;"
							:placeholder="t('submitOrder.goodsNotes')" />
					</view>
				</view>
				<view class="" style="margin-bottom: 30rpx;">
					<view class=" flex flex-jb flex-ac font-26" style="height: 66rpx;">
						<view class="">
							{{ t('submitOrder.goodsAmount') }}
						</view>
						<view class="font-B cor-r">
							{{ t("money") }}{{ (orderArr.goodsAmount / 100).toFixed(2) }}
						</view>
					</view>

					<view v-if="orderArr.discountAmount" class=" flex flex-jb flex-ac font-26 " style="height: 66rpx;">
						<view class="">
							{{ t('submitOrder.discountAmount') }}
						</view>
						<view class="cor-r font-B">
							{{ t("money") }}<text class="">-{{ (orderArr.discountAmount / 100).toFixed(2) }}</text>
						</view>
					</view>

					<view class=" flex flex-jb flex-ac font-26" style="height: 66rpx;">
						<view class="">
							{{ t('submitOrder.deliveryAmount') }}
						</view>
						<view class="font-B cor-r">
							{{ t("money") }}{{ (orderArr.deliveryFee / 100).toFixed(2) }}
						</view>
					</view>
					<view class=" flex flex-jb flex-ac font-26" style="height: 66rpx;">
						<view class="">
							{{ t('submitOrder.notes') }}
						</view>
						<view class="flex flex-ac">
							<input v-model="remark" type="text" class=" font-26" style="text-align: right;"
								:placeholder="t('submitOrder.notes')" />
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
					{{ t('submitOrder.waitPay') }}:<text class="cor-r font-22">￥</text><text
						class="cor-r font-28 font-B">{{ (orderArr.payAmount / 100).toFixed(2) }}</text>
				</view>
				<view @click="submitOrder" class=" font-30  bg-g cor-f flex flex-ac flex-jc"
					style="height: 88rpx;width: 240rpx; border-radius: 8rpx;">
					{{ t('submitOrder.submitOrder') }}
				</view>

			</view>

		</view>
		<!-- 配送方式 -->
		<up-picker :show="sendShow" :columns="sendColumns" keyName="label" valueName="value" @confirm="sendConfirm"
			@cancel="sendShow = false"></up-picker>
		<!-- 配送时间 -->
		<up-picker :show="sendTimeShow" ref="uPickerRef" :columns="sendTimeColumns" @cancel="sendTimeShow = false"
			@confirm="sendTimeConfirm" @change="sendTimeChange"></up-picker>
		<!-- 		<up-picker :show="sendTimeShow" :columns="sendTimeColumns" keyName="label" valueName="value"
			@confirm="sendTimeConfirm" @cancel="sendTimeShow = false"></up-picker> -->

	</view>
</template>

<script setup>
	import {
		onLoad
	} from '@dcloudio/uni-app'
	import {
		post
	} from '@/utils/request.js'
	import {
		ref,
		reactive
	} from 'vue'
	import {
		useI18n
	} from 'vue-i18n'
	const {
		t,
		tm
	} = useI18n()

	const remark = ref('')
	const sendShow = ref(false);
	const sendTimeShow = ref(false);
	const sendindex = ref(0)
	const sendTimeindex = ref(0)
	const sendColumns = reactive([
		tm('submitOrder.sendArr')
	]);
	
	const sendTimeStr=ref("")
	const sendTimeColumns = reactive([]);
	const sendTimeColumnData  = reactive([])
	const sendTimeConfirm = (e) => {
		console.log(e)
		sendTimeStr.value = e.value[0]+ " " +e.value[1]
		// sendTimeindex.value = e.indexs[0]
		sendTimeShow.value = false
	}
	const sendTimeChange = (e) => {

		const {
			columnIndex,
			value,
			values,
			index,
		} = e;
		
		console.log(e)
		if (columnIndex === 0) {
			sendTimeColumns[1]=sendTimeColumnData[index]
		}
	}
	const sendConfirm = (e) => {
		sendindex.value = e.indexs[0]
		sendShow.value = false
	}

	async function getTimeColumns() {
		let res = await post('/common/time/slots')
		if(res.code===200){
			let arr1 =[]
			for (let items of res.data) {
				arr1.push(items.date)
				sendTimeColumnData.push(items.timeSlots)
			}
			sendTimeColumns.push(arr1)
			sendTimeColumns.push(res.data[0].timeSlots)
			sendTimeStr.value = sendTimeColumns[0][0]+" "+sendTimeColumns[1][0]
		}
		console.log(sendTimeColumns)
		console.log(sendTimeColumnData)
	}

	function goAddressList() {
		uni.navigateTo({
			url: '/pages/cart/addressList'
		})
	}
	const addressListObj = ref({})
	async function getAddressList() {
		const res = await post('/user/address/default')
		if (res.code == 200) {
			addressListObj.value = res.data
		} else {
			uni.showToast({
				title: res.message,
				icon: 'none'
			})
		}
	}
	const orderArr = ref([])
	let langField = ref(uni.getStorageSync('appLanguage'))
	const MERCHANT_NAME = ref(uni.getStorageSync('appConfig').MERCHANT_NAME)
	console.log(MERCHANT_NAME.value)
	console.log(langField.value)
	onLoad((options) => {
		console.log(options)
		getAddressList()
		getTimeColumns()
		orderArr.value = uni.getStorageSync('orderArr')

	})


	async function submitOrder() {
		let params = {
			"addressId": addressListObj.value.id,
			"deliveryTime": sendTimeStr.value,
			"deliveryType": sendindex.value,
			"goodsList": [],
			"remark": remark.value,
			"userId": uni.getStorageSync('userInfo').userId
		}
		if(params.deliveryType===1){
			delete params.deliveryTime
		}
		for (const item of orderArr.value.goodsList) {
			params.goodsList.push({
				"goodsId": item.id,
				"goodsNum": orderArr.value.goodsNumMap[item.id]
			})
		}


		let res = await post('/order/place',params)
		if(res.code===200){
			let uniStorage = uni.getStorageSync('goodsInfo')
			// 提取 arr1 中的所有 id 值
			const idsToRemove = params.goodsList.map(item => item.goodsId);
			// 过滤掉 arr 中 id 存在于 idsToRemove 中的对象
			const filteredArr = uniStorage.filter(item => {return !idsToRemove.includes(item.id)});
			uni.setStorageSync('goodsInfo',filteredArr)

			uni.navigateTo({
				url:"/pages/self/orderDetail?orderId="+res.data.orderId
			})

		}

	}
</script>

<style scoped>
	.bottom {
		bottom: 0;
	}
</style>