module.exports = async () => ({
  /** 地图的key */
  key: 'FDLBZ-XWGRH-3ASDO-WD7WG-RY5R7-LJBFN',
  /** 主题色 */
  theme: '#FF0000',
  /** 是否展示智能填写 */
  aiInput: false,
  /** 跳转的链接 */
  navigateUrl: '/pages/cart/addressList',
  onClose: function(data) {
	  console.log(data)
  }
});