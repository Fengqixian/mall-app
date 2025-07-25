<template>
	<view style="width: 750rpx;min-height: 100vh;background: linear-gradient(180deg,#6ccc4e, #fff,#f5f5f5);">
		<image-flow v-if="selectList.length>0" :listF="selectList"></image-flow>
		<null-msg v-else style="padding-top: 200rpx;"></null-msg>
	</view>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import imageFlow from "@/components/imageFlow.vue"
import { post } from '../../utils/request'
import nullMsg from "@/components/nullMsg.vue"

//优选列表
const selectList = ref([])
async function getSelectList(){
	let params={
		classId:null,
		name:null,
		page:1,
		pageSize:10
	}
	let res = await post('/goods/qualityed/list',params)
	console.log(res)
	if(res.code==200){
		selectList.value = res.data
	}
}
onLoad(()=>{
	getSelectList()
})
</script>

<style>

</style>
