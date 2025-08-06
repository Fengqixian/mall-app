<template>
	<view class=" flex flex-dc flex-ac">
		<view class=" flex flex-dc flex-ac bg-f" style="width: 750rpx;margin-top: 20rpx;">
			<view style="width: 700rpx;" class="">
				<up-swipe-action>
					<up-swipe-action-item  @click="deleteAddress" v-model:show="item.show" :options="options1" v-for="(item,index) in addressListArray"
						:key="item.id" :name="item.id" :index="index">
						<view @tap="checkAddress(item)" class=" flex flex-ac flex-jb bor-b2sf0"
							style="height: 160rpx;width: 700rpx; box-sizing: border-box;">
							<radio style="display: inline-block; transform:scale(0.7)" borderColor="#d1d1d1"
								activeBorderColor='#21cc5b' :checked="item.status" @tap.stop="checkAddress(item)"
								color='#21cc5b'>
							</radio>
							<view class=" flex flex-dc flex-jc"
								style="width: calc(650rpx - 33rpx - 64rpx);height: 130rpx;">
								<view class="flex font-26 cor-4 text-2d" style="line-height: 36rpx;">
									<!-- <view class="bor-box font-22 cor-g"
							style="background: rgba(33, 204, 91,.1); border: 2rpx solid rgb(33, 204, 91); display: inline-block; margin-right: 8rpx; border-radius: 4rpx; padding: 0 6rpx; white-space: nowrap;height: 32rpx;line-height: 32rpx;">
							标签
						</view> -->
									{{ item.country + item.province + item.city + item.district + item.detailed_address
									}}
								</view>
								<view class=" font-26 cor-8" style="margin-top: 12rpx;">
									{{ item.receiver_name }} {{ item.receiver_phone }}
								</view>
							</view>
							<up-icon
								style=" opacity: 0; display: inline-block;border: 2rpx solid #999;border-radius: 10rpx;"
								name="edit-pen-fill" color="#999" size="44rpx"></up-icon>
						</view>
					</up-swipe-action-item>
				</up-swipe-action>
			</view>



		</view>

		<view v-if="addressListArray.length == 0" class=" flex flex-dc flex-ac" style="margin-top: 200rpx;">
			<nullMsg></nullMsg>
			<!-- <view @click="goSetAddress" class=" bor-box flex flex-ac flex-jc cor-g"
				style="margin-top: 60rpx; border: 2rpx solid var(--cor-g); width: 300rpx;height: 100rpx;border-radius: 24rpx;">
				{{ t('addressList.botton') }}
			</view> -->
		</view>

		<view class="" style="height: 140rpx;"></view>
		<view class=" w-100- pos-f bottom-0 bg-f flex flex-ac flex-jc box-s8" style="height: 100rpx;">
			<view @click="goSetAddress" class=" font-30 flex flex-ac flex-jc bg-g cor-f"
				style="width: 700rpx;height: 80rpx;border-radius: 10rpx;">
				{{ isSelectAddress ? t('addressList.sure') : t('addressList.botton') }}
			</view>
		</view>
	</view>
</template>

<script setup>
import nullMsg from "@/components/nullMsg.vue"
import {
	ref,
	reactive,
	computed
} from 'vue'
import {
	post
} from "@/utils/request.js"
import {
	onShow
} from "@dcloudio/uni-app"
import {
	useI18n
} from 'vue-i18n'
const {
	t
} = useI18n()
const radioStatus = false
const options1 = reactive([{
	text: '删除',

	style: {
		backgroundColor: '#f56c6c'
	}
}]);
function goSetAddress() {
	if (isSelectAddress.value) {
		console.log(addressListArray.value.filter(item => item.status))
		uni.setStorageSync('address', addressListArray.value.filter(item => item.status)[0])
		uni.navigateBack()
	} else {
		uni.navigateTo({
			url: '/pages/cart/setAddress'
		})
	}

}
function deleteAddress(id){
	console.log(id)
	uni.showModal({
		title: t('tips.prompt'),
		content: t('tips.deleteAddress'),
		success: async (res) => {
			if (res.confirm) {
				uni.showLoading({
					title: 'loading...',
					mask:true
				})
				let data = await post('/user/address/delete',{
					id:id.name
				})
				uni.hideLoading()
				if(data.code==200){
					let arr = addressListArray.value.filter(item => item.id !== id.name)
					console.log(arr)
					addressListArray.value=arr
				}
				// setBadge(goodsInfoArray.value)
			}
		}
	})
}


const isSelectAddress = computed(() => {
	return addressListArray.value.some(item => item.status)
})

function checkAddress(item) {

	if (item.status) {
		item.status = false
	} else {
		for (const element of addressListArray.value) {
			element.status = false
		}
		item.status = true
	}
}
const addressListArray = ref([])
async function getAddressList() {
	const res = await post('/user/address/list')
	if (res.code == 200) {
		for (const element of res.data) {
			element.status = false
			element.show = false
			addressListArray.value.push(element)
		}
	} else {
		uni.showToast({
			title: res.message,
			icon: 'none'
		})
	}
}
onShow(() => {
	addressListArray.value = []
	getAddressList()
	console.log(uni.getStorageSync('location'), 109109000000000000000)
})
</script>

<style></style>