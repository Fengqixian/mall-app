<template>
	<view class="flow-background" style="min-height: 100vh;">
		<view class=" flex flex-ac flex-dc" style="padding-top: 300rpx;">
			<view @tap="selectLang(item)" v-for="(item,index) in languageArr" :key="item.key" class=" flex flex-jc" style="margin-bottom: 30rpx; width: 700rpx;background: rgba(255, 255, 255, .3);border-radius: 16rpx;">
				<view class=" flex flex-ac font-30 cor-4" style=" width: 650rpx;height: 88rpx;">
					<radio style="transform:scale(0.7)" borderColor="#d1d1d1" activeBorderColor='#21cc5b' :checked="item.status"
						@tap="" color='#21cc5b'></radio>
					<view class="">
						{{item.title}}
					</view>
				</view>
			</view>

			
			<view @tap="saveLang" class="cor-f flex  flex-ac flex-jc font-30 font-w6" style="background: #21cc5b; width: 200rpx;height: 80rpx; margin-top: 200rpx;border-radius: 40rpx;">
				保存
			</view>
		</view>
	</view>
</template>

<script setup>
	import {ref} from "vue"
	import { onLoad } from '@dcloudio/uni-app'
	import { useI18n } from 'vue-i18n'
	const { locale } = useI18n()
	
	// const languageArr = ['en', 'zh-Hans','th-TH']
	let languageArr=ref([{
		title:'我的语言是泰语',
		key:'th-TH',
		status:false,
	},{
		title:'我的语言是英语',
		key:'en',
		status:false,
	},{
		title:'我的语言是汉语',
		key:'zh-Hans',
		status:false,
	}])
	function selectLang(item){
		for (let it of languageArr.value) {
			it.status =false
		}
		setTimeout(()=>{
			item.status = true
		})
	}
	function saveLang(){
		let arr=[]
		for (let it of languageArr.value) {
			if(it.status){
				arr.push(it)
			}
		}
		// console.log(arr[0].key)
		// return
		if(arr.length){
			locale.value = arr[0].key
			uni.setLocale(locale.value);
			uni.setStorageSync('appLanguage', locale.value)
			// 重新加载页面
			uni.reLaunch({
				url: '/pages/index/index' 
			});
		}else{
			uni.showToast({
				title:'请选择你的语言'
			})
		}
	}
	onLoad(()=>{
		let lang = uni.getStorageSync('appLanguage')||false
		if(lang){
			// 重新加载页面
			uni.reLaunch({
				url: '/pages/index/index' 
			});
		}
	})
</script>

<style>
.flow-background {
  background: 
    linear-gradient(45deg, 
      #ff9a9e 0%, 
      #fad0c4 10%, 
      #fad0c4 20%, 
      #fbc2eb 30%, 
      #fbc2eb 40%, 
      #a6c1ee 50%, 
      #a6c1ee 60%, 
      #84fab0 70%, 
      #84fab0 80%, 
      #8fd3f4 90%, 
      #8fd3f4 100%);
  background-size: 400% 400%;
  animation: gradientFlow 15s ease infinite;
}

@keyframes gradientFlow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>