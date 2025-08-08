import {post} from "@/utils/request.js"

module.exports = async () => ({
  /** 地图的key */
  key: 'FDLBZ-XWGRH-3ASDO-WD7WG-RY5R7-LJBFN',
  /** 主题色 */
  theme: '#FF0000',
  /** 是否展示智能填写 */
  aiInput: false,
  /** 跳转的链接 */
  navigateUrl: '/pages/cart/addressList',
  onClose: async function(data) {
	  console.log(data)
	  console.log(uni.getStorageSync('userInfo').userId)
	  let _pushParams = {
	  	  "city": data.area[1].name,
		  "country": "中国",
	  	  "detailedAddress": data.address,
	  	  "district": data.area[2].name,
	  	  "isDefault": data.default?1:0,
	  	  "province": data.area[0].name,
	  	  "receiverName": data.receiver,
	  	  "receiverPhone": data.phone
	  	}
	  let res = await post('/user/address/create',_pushParams)
	  console.log('res:', res)
  }
});