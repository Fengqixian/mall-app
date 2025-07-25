<template>
	<view style="width: 750rpx;min-height: 100vh;background: linear-gradient(180deg,#eb2d18, #fff,#f5f5f5);">
		<image-flow v-if="seckillList.length > 0" :listF="seckillList"></image-flow>
		<null-msg v-else></null-msg>
	</view>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import imageFlow from "@/components/imageFlow.vue"
import { post } from '../../utils/request'
import nullMsg from "@/components/nullMsg.vue"

//秒杀列表
const seckillList = ref([])
async function getSeckillList() {
	let params = {
		classId: null,
		name: null,
		page: 1,
		pageSize: 10
	}
	let res = await post('/goods/purchased/list', params)
	console.log(res)
	if (res.code == 200) {
		seckillList.value = res.data
	}
}
onLoad(() => {
	getSeckillList()
})

</script>

<style></style>
