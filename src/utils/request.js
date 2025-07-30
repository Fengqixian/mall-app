const env = import.meta.env;
const BASE_URL = env.VITE_API + env.VITE_BASE_URL

let appLanguage = uni.getStorageSync('appLanguage')
console.log(appLanguage)
export function get(url, params) {
	let token = uni.getStorageSync('token')
	let Headers = {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Authorization': token,
		"Accept-Language": appLanguage
	}
	// if (!uni.getStorageSync('token')) {
	// 	uni.clearStorageSync();
	// 	uni.reLaunch({
	// 		url: "/pages/login/login"
	// 	})
	// }

	return new Promise(function(resolve, reject) {
		uni.request({
			url: BASE_URL + url,
			method: "GET",
			header: Headers,
			data: params,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}



export function post(url, params) {
	let token = uni.getStorageSync('token') || ''

	let Headers = {
		'Authorization': token,
		"Accept-Language": appLanguage
	}
	// if (!uni.getStorageSync('token')) {
	// 	uni.clearStorageSync();
	// 	uni.reLaunch({
	// 		url: "/pages/login/login"
	// 	})
	// }

	return new Promise(function(resolve, reject) {
		uni.request({
			url: BASE_URL + url,
			method: "POST",
			header: Headers,
			data: params,
			success: (res) => {
				console.log(res.data.code)
				if (res.data.code === 401) {
					loginOut()
				} else if (res.data.code === 500) {
					uni.showToast({
						title: res.data.message,
						icon: "none"
					})
				}
				resolve(res.data)

			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}
let time = null
function loginOut() {
	if (time) {
		return
	} else {
		uni.removeStorageSync('token')
		uni.removeStorageSync('userInfo')
		uni.navigateTo({
			url: '/pages/login/login?back=true'
		})
		time = setTimeout(() => {
			clearTimeout(time)
			time = null
		}, 500)
	}

}