import {
	ref,
	reactive
} from 'vue'

// 获取初始值，确保不是undefined
let initialValue = {}
try {
	initialValue = uni.getStorageSync('goodsNumberObj') || {}
} catch (error) {
	console.warn('Failed to get goodsNumberObj from storage:', error)
	initialValue = {}
}

// 确保initialValue是一个对象
if (typeof initialValue !== 'object' || initialValue === null) {
	initialValue = {}
}

export const goodsNumberObjReactive = reactive(initialValue)