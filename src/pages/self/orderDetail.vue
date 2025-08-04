<template>
	<view class="flex flex-dc flex-ac cor-4">
		<view class=" bg-f bor-20 ov-h flex flex-dc flex-ac mar-t24" style="width: 700rpx;min-height: 240rpx;">
			<view class=" bg-g" style="  height: 20rpx; width: 700rpx;"></view>
			<view class="bor-b2sf0 flex flex-dc flex-jc" style="width: 650rpx;min-height: 120rpx;">
				<view class=" font-32 font-B" style="margin-top: 20rpx;">
					{{ orderStateArr[orderInfo.orderState] }}
				</view>
				<view class=" font-26" style="margin-top: 18rpx;">
					{{ orderInfo.orderStateDes }}
				</view>

				<view v-if="showSuccess||orderInfo.orderState===0" class="" style="width: 650rpx;height: 920rpx;">
					<view v-if="showSuccess" class="flex flex-jc flex-ac pos-a z-5 tst-3" style="background: rgba(255, 255, 255, 0); width: 650rpx;height: 920rpx;"
					:style="showSuccess?'background: rgba(255, 255, 255, 1);':'background: rgba(255, 255, 255, 0);'">
						<success></success>
					</view>
					<view @click="ces" v-if="orderInfo.orderState===0" class=" pos-r z-1 flex flex-ac flex-jc " style="margin: 20rpx 0;">

						<!-- <up-lazy-load class="" style="width: 650rpx;height: 910rpx;"  border-radius="10" :image="orderInfo.payQrCode"
					loading-img="/src/static/imgLoading.png"
					error-img="/src/static/imgError.png"></up-lazy-load> -->

						<u-image :src="orderInfo.payQrCode" width="100%" radius="10" mode="widthFix">
							<template v-slot:loading>
								<u-loading-icon color="#999"></u-loading-icon>
							</template>
						</u-image>
						<!-- 					<image class="" @longpress="show=true" :src="orderInfo.payQrCode" style="width: 500rpx;height: 710rpx;"
						mode=""></image> -->
					</view>
				</view>
			</view>
			<view class="flex-g flex-ac flex flex-drr font-26" style="width: 650rpx;min-height: 100rpx;">
				<view class=" flex">
					<view @tap="cancelOrder" v-if="orderInfo.orderState===0" class="flex flex-ac bor-box mar-l16"
						style=" border: 2rpx solid #ddd; height: 60rpx; padding: 0 18rpx;border-radius: 8rpx;">
						{{ t("orderDetail.button.cancelOrder") }}
					</view>
					<view @tap="refundShowFn" v-if="orderInfo.orderState===1" class="flex flex-ac bor-box mar-l16"
						style=" border: 2rpx solid #ddd; height: 60rpx; padding: 0 18rpx;border-radius: 8rpx;">
						{{ t("orderDetail.button.comeAgain") }}
					</view>
					<!-- <view class="flex flex-ac cor-f mar-l16"
						style=" background: var(--cor-g); height: 60rpx; padding: 0 18rpx;border-radius: 8rpx;">
						{{ t("orderDetail.button.goPay") }}
					</view> -->
				</view>
			</view>
		</view>

		<view class="font-26 bg-f bor-20 ov-h flex flex-dc flex-ac mar-t24 w700" style="">
			<view class="w650">
				<view class=" flex flex-jb mar-t30">
					<view class="cor-8" style="min-width: 140rpx;line-height: 42rpx;">
						{{ t("orderDetail.address") }}
					</view>
					<view class="" style="text-align: right;line-height: 42rpx;">
						{{ orderInfo.country+orderInfo.province+orderInfo.city+orderInfo.district+orderInfo.detailedAddress }}
					</view>
				</view>
				<view class=" flex flex-jb mar-t30">
					<view class="cor-8" style="min-width: 140rpx;">
						{{ t("orderDetail.delivery") }}
					</view>
					<view class="" style="text-align: right;">
						{{ sendColumns[0][orderInfo.deliveryType]?.label }}
					</view>
				</view>
				<view class=" flex flex-jb mar-t30" style="margin-bottom: 30rpx;">
					<view class="cor-8" style="min-width: 140rpx;">
						{{ t("orderDetail.time") }}
					</view>
					<view class="" style="text-align: right;">
						{{ orderInfo.deliveryTime }}
					</view>
				</view>
			</view>
		</view>

		<view class="font-26 bg-f bor-20 ov-h flex flex-dc flex-ac mar-t24 w700" style="">
			<view class="w650">
				<view class=" font-28 cor-4 font-B bor-b2sf0" style="height: 72rpx;line-height: 72rpx;">
					{{ t("orderDetail.goodsList") }}
				</view>
				<view class="bor-b2sf0">
					<view v-for="item in orderInfo.goodsList" :key="item.goodsInfo.id" class=" mar-t30 flex mar-b24"
						style="min-height: 120rpx;">
						<image :src="item.goodsInfo.coverImage" style="width: 120rpx;height: 120rpx;" mode=""></image>
						<view class=" mar-l20 flex flex-dc flex-jb" style="width: calc(650rpx - 140rpx);">
							<view class=" flex font-28 font-B flex-jb">
								<view class=" text-d" style="width: 380rpx;">
									{{ item.goodsInfo.name }}
								</view>
								<view class="font-B cor-r">
									{{ t("money") }}{{ (item.goodsInfo.price*item.goodsInfo.orderQuantity/100).toFixed(2) }}
								</view>
							</view>

							<view class=" flex font-26 cor-8 flex-jb">
								{{ t("orderDetail.unitPrice") }}：{{ t("money") }}{{ (item.goodsInfo.price/100).toFixed(2) }}/{{ item.goodsInfo.unitName }}
							</view>
							<view class=" flex font-26 cor-8 flex-jb" style="margin-bottom: 10rpx;">
								{{ t("orderDetail.number") }}：{{ item.goodsInfo.orderQuantity }}
							</view>
						</view>
					</view>
				</view>

				<view class="bor-b2sf0" style="padding-bottom: 30rpx;">
					<view class=" flex flex-jb mar-t30">
						<view class="cor-8" style="min-width: 140rpx;">
							{{ t('submitOrder.goodsAmount') }}
						</view>
						<view class="font-B cor-r" style="text-align: right;">
							{{ t("money") }}{{ (orderInfo.goodsAmount/100).toFixed(2) }}
						</view>
					</view>

					<view v-if="orderInfo.discountAmount" class=" flex flex-jb mar-t30">
						<view class="cor-8" style="min-width: 140rpx;">
							{{ t('submitOrder.discountAmount') }}
						</view>
						<view class="font-B cor-r" style="text-align: right;">
							{{ t("money") }}-{{ (orderInfo.discountAmount/100).toFixed(2) }}
						</view>
					</view>

					<view class=" flex flex-jb mar-t30">
						<view class="cor-8" style="min-width: 140rpx;">
							{{ t("orderDetail.deliveryPrice") }}
						</view>
						<view class="font-B cor-r" style="text-align: right;">
							{{ t("money") }}{{ (orderInfo.deliveryFee/100).toFixed(2) }}
						</view>
					</view>

					<view class=" flex flex-jb mar-t30 flex-ac">
						<view class="cor-8" style="min-width: 140rpx;">
							{{ t('orderDetail.payAmount') }}
						</view>
						<view class="font-B cor-r font-32" style="text-align: right;">
							{{ t("money") }}{{ (orderInfo.amount/100).toFixed(2) }}
						</view>
					</view>

				</view>
			</view>
		</view>

		<view class="font-26 bg-f bor-20 ov-h flex flex-dc flex-ac mar-t24 w700" style="">
			<view class="w650">
				<view class=" font-28 cor-4 font-B bor-b2sf0" style="height: 72rpx;line-height: 72rpx;">
					{{ t("orderDetail.orderMessage") }}
				</view>
				<!-- 				<view class=" flex flex-jb mar-t30">
					<view class="cor-8" style="min-width: 140rpx;">
						{{ t("orderDetail.orderID") }}
					</view>
					<view class="" style="text-align: right;">
						{{ orderInfo.orderId }}
					</view>
				</view> -->
				<view class=" flex flex-jb mar-t30">
					<view class="cor-8" style="min-width: 140rpx;">
						{{ t("orderDetail.orderNumber") }}
					</view>
					<view class="" style="text-align: right;">
						{{ orderInfo.orderNumber }}
						<up-copy :content="orderInfo.orderNumber" style="display: inline-block;">
							<text class="aaa cor-g"
								style="margin-left: 20rpx; border-color: var(--cor-g); border-radius: 8rpx; padding: 4rpx 12rpx;">
								{{ t("copy") }}
							</text>
						</up-copy>

					</view>
				</view>
				<view class=" flex flex-jb mar-t30" style="margin-bottom: 30rpx;">
					<view class="cor-8" style="min-width: 140rpx;">
						{{ t("orderDetail.orderTime") }}
					</view>
					<view class="" style="text-align: right;">
						{{ orderInfo.createTime }}
					</view>
				</view>
			</view>
		</view>

		<view class="" style="height: 40rpx;">

		</view>


		<up-modal :show="show" @confirm="confirm" @cancel='show=false' title="提示" showCancelButton
			content='确认是否保存图片'></up-modal>
		<!-- 退款原因 -->
		<up-picker :show="refundShow" :columns="refundColumns" keyName="label" valueName="value"
			@confirm="refundConfirm" @cancel="cancelRefund"></up-picker>
	</view>
</template>

<script setup>
	import {
		ref,
		reactive
	} from 'vue'
	import {
		onShow,
		onLoad,
		onBackPress,
		onHide
	} from '@dcloudio/uni-app'
	import {
		post
	} from '@/utils/request'
	import {
		useI18n
	} from 'vue-i18n'
	import success from "@/components/success.vue"

	const {
		t,
		tm
	} = useI18n()

	const show = ref(false)
	const orderId = ref()
	const userId = uni.getStorageSync('userInfo').userId
	const orderInfo = ref({})
	async function getOrderDetail() {
		let res = await post('/order/info', {
			orderId: orderId.value - 0,
			userId: userId - 0
		})
		if (res.code === 200) {
			orderInfo.value = res.data
			
			if(res.data.orderState===0){baseInfo()}
		}
	}

	// const orderStateArr=ref([
	// 	"待支付",
	// 	"已支付",
	// 	"已发货",
	// 	"已送达",
	// 	"已取消",
	// 	"已退款",
	// 	"已过期",
	// 	"支付失败",
	// 	"退款中",
	// 	"拒绝退款"
	// ])
	const sendColumns = reactive([
		tm('submitOrder.sendArr')
	]);
	const orderStateArr = ref(tm('orderDetail.status'))
	console.log(orderStateArr)
	const confirm = () => {
		show.value = false
		saveImage()
	}

	const saveImage = (e) => {
		console.log(orderInfo.value)
		uni.downloadFile({
			url: orderInfo.value.payQrCode,
			success: (res) => {
				console.log(res)
				if (res.statusCode === 200) {
					uni.saveImageToPhotosAlbum({
						filePath: res.tempFilePath,
						success: () => {
							uni.showToast({
								title: '图片保存成功',
								icon: 'success'
							});
						},
						fail: (err) => {
							console.log(err)
							uni.showToast({
								title: '保存失败: ' + err.errMsg,
								icon: 'none'
							});
						}
					});
				}
			},
			fail: (err) => {
				uni.showToast({
					title: '下载失败: ' + err.errMsg,
					icon: 'none'
				});
			}
		});

	}

	function cancelOrder() {
		uni.showModal({
			title: t('tips.prompt'),
			content: t('tips.cancelOrder'),
			success: async (res) => {
				if (res.confirm) {
					console.log('用户点击确定');
					let params = {
						orderId: orderId.value - 0,
						userId: uni.getStorageSync('userInfo').userId
					}
					let res = await post('/order/cancel', params)
					if (res.code == 200) {
						orderInfo.value.orderState = 4
						uni.showToast({
							title: t('tips.cancelSuccess'),
							icon: 'none',
							mask: true,
							success: () => {
								uni.navigateBack()
							}
						})
					}
				} else if (res.cancel) {
					console.log('用户点击取消');
				}
			}
		});
	}

	const refundShow = ref(false)
	const refundColumns = ref([tm('orderDetail.refund')])
	async function refundConfirm(e) {
		// defineEmits('tableShow')
		let params = {
			id: orderId.value - 0,
			userId: uni.getStorageSync('userInfo').userId,
			refundCause: e.value[0]
		}
		let res = await post('/order/refund/apply', params)
		refundShow.value = false
		if (res.code == 200) {
			orderInfo.value.orderState = 8
			uni.showToast({
				title: t('tips.refundSuccess'),
				icon: 'none'
			})
		} else {
			uni.showToast({
				title: res.message,
				icon: 'none'
			})
		}
	}

	function refundShowFn() {
		// defineEmits('tableHide')
		refundShow.value = true
	}

	function cancelRefund() {
		// defineEmits('tableShow')
		refundShow.value = false
	}
	const orderListStatus = ref(false)
	const baseInfoNumber = ref(0)
	const showSuccess=ref(false)
	let postTimer=null
	async function baseInfo() {
		baseInfoNumber.value++
		console.log(baseInfoNumber.value)
		if (baseInfoNumber.value > 60) {
			return
		}
		let res = await post('/order/base/info', {
			orderId: orderId.value - 0,
			userId: uni.getStorageSync('userInfo').userId
		})
		if(res.code==200){
			if(res.data.orderState===0){
				postTimer = setTimeout(()=>{
					baseInfo()
					clearTimeout(postTimer)
				},2000)
			}else{
				showSuccess.value = true
				// setTimeout(()=>{
				// 	showSuccess.value = false
				// },1500)
				baseInfoNumber.value=60
				getOrderDetail()
			}
		}
	}
	// onHide(()=>{
	// 	clearTimeout(postTimer)
	// 	baseInfoNumber.value=60
	// 	console.log(baseInfoNumber.value)
	// })
	function ces(){
		showSuccess.value = true
		// setTimeout(()=>{
		// 	showSuccess.value = false
		// },1500)
	}
	onLoad((e) => {
		if (e.orderId) {
			orderId.value = e.orderId
		}
		if (e.list) {
			orderListStatus.value = e.list
		}
		getOrderDetail()
		
	})

	onBackPress(() => {
		clearTimeout(postTimer)
		baseInfoNumber.value=60
		console.log(baseInfoNumber.value)
		
		if (orderListStatus.value) {
			// uni.navigateBack()
		} else {
			uni.switchTab({
				url: '/pages/cart/cart'
			})
			// uni.navigateBack()
		}
		return false
	})
</script>

<style></style>