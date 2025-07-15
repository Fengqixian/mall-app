
const env = import.meta.env;
const BASE_URL = env.VITE_API+env.VITE_BASE_URL

let appLanguage = uni.getStorageSync('appLanguage')
console.log(appLanguage)
export function get(url, params) {
	let token = uni.getStorageSync('token')
	let Headers = {
		'Content-Type': 'application/x-www-form-urlencoded',
		'Authorization': token,
		"Accept-Language":appLanguage
	}
	// if (!uni.getStorageSync('token')) {
	// 	uni.clearStorageSync();
	// 	uni.reLaunch({
	// 		url: "/pages/login/login"
	// 	})
	// }

	return new Promise(function(resolve, reject) {
		uni.request({
			url: BASE_URL+url,
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
	let token = uni.getStorageSync('token')||''
	
	let Headers = {
		'Authorization': token,
		"Accept-Language":appLanguage
	}
	// if (!uni.getStorageSync('token')) {
	// 	uni.clearStorageSync();
	// 	uni.reLaunch({
	// 		url: "/pages/login/login"
	// 	})
	// }

	return new Promise(function(resolve, reject) {
		uni.request({
			url: BASE_URL+url,
			method: "POST",
			header: Headers,
			data: params,
			success: (res) => {
				console.log(res.data.code)
				if(res.data.code===401){
					loginOut()
				}else{
					
				}
				resolve(res.data)
				
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}

	function loginOut(){
		uni.removeStorageSync('token')
		uni.removeStorageSync('userInfo')
		uni.navigateTo({
			url: '/pages/login/login?back=true'
		})
	}