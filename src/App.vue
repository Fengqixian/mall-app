<script>
	import {post} from "@/utils/request.js"
export default {
  onLaunch: function () {
	  //获取系统配置
	  {
		  async function getConfig(){
			  let data = await post('/system/config')
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
