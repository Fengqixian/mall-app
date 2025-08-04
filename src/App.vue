<script>
	import {post} from "@/utils/request.js"
export default {
  onLaunch: function () {
	  
	  let lang = uni.getStorageSync('appLanguage')||false
	  if(!lang){
	  	// 重新加载页面
	  	uni.reLaunch({
	  		url: '/pages/index/setLang' 
	  	});
	  }
	  
	  //获取系统配置
	  {
		  async function getConfig(){
			    uni.showLoading({
			      title: 'loading...',
			      mask: true
			    })
			  let data = await post('/system/config')
			  uni.hideLoading()
			  console.log(data)
			  if(data.code === 200){
				  uni.setStorageSync('appConfig',data.data)
			  }else{
				  uni.showToast({
				  	title:data.message,
					icon:"none"
				  })
			  }
		  }
		  
		  getConfig()
	  }
    console.log('App Launch')
  },
  onShow: function () {
    console.log('App Show')
  },
  onHide: function () {
    console.log('App Hide')
  },
  globalData: {
		addressInfo:''
    }
}
</script>

<style>
/*每个页面公共css */
@import url('@/css/all.css');
page{
  background-color: #f8f8f8;
}
</style>
