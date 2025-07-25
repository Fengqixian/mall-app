function addGoodsInfo(goodsInfo) {
	// goodsInfo.number = 1
	const _goodsInfo = {...goodsInfo,number:1,status:1,notes:''}
	const goodsInfoStorage = uni.getStorageSync('goodsInfo')||[]
	let findIndex = findIndexById(goodsInfoStorage,goodsInfo.id)
	if(findIndex == -1){
		goodsInfoStorage.push(_goodsInfo)
	}else{
		goodsInfoStorage[findIndex].number++
	}
	uni.setStorageSync('goodsInfo', goodsInfoStorage)

	uni.showToast({
		title: t('tips.addSuccess'),
		icon: 'none'
	})
}
function findIndexById(array, id) {
    return array.findIndex(item => item.id === id);
}