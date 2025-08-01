<template>
	<view class="wrap">
		<!-- <image src="" mode=""></image> -->
		<!-- <up-button @click="clear">清空列表</up-button> -->
		<up-waterfall v-model="list" ref="uWaterfallRef">
			<template v-slot:left="{ leftList }">
				<view @tap="navDetails(item.goodsInfo.id)" class="demo-warter" v-for="(item, index) in leftList"
					:key="item.goodsInfo.id">
					<!-- 警告：微信小程序中需要hx2.8.11版本才支持在template中结合其他组件，比如下方的lazy-load组件 -->
					<!-- <up-lazy-load threshold="0" border-radius="10" :image="item.goodsInfo.coverImage"
						loading-img="/src/static/imgLoading.png" error-img="/src/static/imgError.png"
						:index="index"></up-lazy-load> -->
					<u-image :src="item.goodsInfo.coverImage" width="100%" radius="10">
						<template v-slot:loading>
							<u-loading-icon color="#999"></u-loading-icon>
						</template>
					</u-image>
					<view class="demo-title text-2d font-B">
						{{ item.goodsInfo.name }}
					</view>
					<view class="demo-title text-d" style="font-size: 22rpx; color: #888;">
						{{ item.goodsInfo.desc }}
					</view>
					<view class="demo-price">
						<text>{{ item.goodsInfo.priceUnitName }}</text>
						<text style="font-size: 36rpx;font-weight: 600;">{{ (item.goodsInfo.price / 100).toFixed(2)
							}}</text>
						<text style="color: #000;">/{{ item.goodsInfo.unitName }}</text>
					</view>
					<!-- <view class="demo-tag">
						<view class="demo-tag-owner">
							自营
						</view>
						<view class="demo-tag-text">
							放心购
						</view>
					</view> -->
					<view class="flex flex-jb flex-ac">
						<view class="demo-shop  text-d op-0" style="width: 230rpx;">
							{{ item.goodsInfo.name }}
						</view>
						<view @tap.stop="addGoodsInfo(item.goodsInfo)" class="flex flex-ac flex-jc"
							style="width: 56rpx;height: 56rpx;border-radius: 50%;background: linear-gradient(160deg, rgba(33, 204, 91, 0.5), rgb(33, 204, 91));">
							<up-icon name="shopping-cart" color="#fff" size="28"></up-icon>
						</view>
					</view>


				</view>
			</template>
			<template v-slot:right="{ rightList }">
				<view @tap="navDetails(item.goodsInfo.id)" class="demo-warter" v-for="(item, index) in rightList"
					:key="item.goodsInfo.id">
					<!-- <up-lazy-load threshold="-450" border-radius="10" :image="item.goodsInfo.coverImage"
						loading-img="/src/static/imgLoading.png" error-img="/src/static/imgError.png"
						:index="index"></up-lazy-load> -->

					<u-image :src="item.goodsInfo.coverImage" width="100%" radius="10">
						<template v-slot:loading>
							<u-loading-icon color="#999"></u-loading-icon>
						</template>
					</u-image>

					<view class="demo-title text-2d font-B">
						{{ item.goodsInfo.name }}
					</view>
					<view class="demo-title text-d" style="font-size: 22rpx; color: #888;">
						{{ item.goodsInfo.desc }}
					</view>
					<view class="demo-price">
						<text>{{ item.goodsInfo.priceUnitName }}</text>
						<text style="font-size: 36rpx;font-weight: 600;">{{ (item.goodsInfo.price / 100).toFixed(2)
							}}</text>
						<text style="color: #000;">/{{ item.goodsInfo.unitName }}</text>
					</view>
					<!-- <view class="demo-tag">
						<view class="demo-tag-owner">
							自营
						</view>
						<view class="demo-tag-text">
							放心购
						</view>
					</view> -->
					<view class="flex flex-jb flex-ac">
						<view class="demo-shop  text-d op-0" style="width: 230rpx;">
							{{ item.goodsInfo.name }}
						</view>
						<view @tap.stop="addGoodsInfo(item.goodsInfo)" class="flex flex-ac flex-jc"
							style="width: 56rpx;height: 56rpx;border-radius: 50%;background: linear-gradient(160deg, rgba(33, 204, 91, 0.5), rgb(33, 204, 91));">
							<up-icon name="shopping-cart" color="#fff" size="28"></up-icon>
						</view>
					</view>

				</view>
			</template>
		</up-waterfall>
		<!-- <up-loadmore bg-color="" :status="loadStatus" @loadmore="addRandomData"></up-loadmore> -->
	</view>
</template>

<script>
	import {
		useI18n
	} from 'vue-i18n'



	export default {
		props: {
			listF: {
				type: Array,
				default: () => []
			}
		},
		data() {
			return {
				addSuccess: '',
				loadStatus: 'loadmore',
				flowList: [],
				list: [] // 初始化为空数组
			}
		},
		watch: {
			listF: {
				handler(newVal) {
					this.list = newVal
				},
				immediate: true, // 组件初始化时也赋值一次
				deep: true // 如果 listF 里面的对象会变，建议加上
			}
		},
		onLoad() {
			this.addRandomData();
		},
		mounted() {
			let {
				t
			} = useI18n()
			console.log(t('tips.addSuccess'), 1111111111)
			this.addSuccess = t('tips.addSuccess')
		},
		onReachBottom() {
			this.loadStatus = 'loading';
			// 模拟数据加载
			setTimeout(() => {
				this.addRandomData();
				this.loadStatus = 'loadmore';
			}, 1000)
		},
		methods: {
			$t(key) {
				const {
					t
				} = useI18n()
				console.log(t(key))
				// return t(key)
			},
			setBadge(arr) {
				// 设置角标
				let text = arr.reduce((sum,item)=>sum+item.number,0)
				console.log(text)
				if(text==0){return}
				uni.setTabBarBadge({
					index: 2, // tabBar 的哪一项，从左边算起，索引从0开始
					text: text.toString() // 显示的文本，超过 3 个字符则显示成 "..."
				})
			},
			addGoodsInfo(goodsInfo) {
				// goodsInfo.number = 1
				const _goodsInfo = {
					...goodsInfo,
					number: 1,
					status: 1,
					notes: ''
				}
				const goodsInfoStorage = uni.getStorageSync('goodsInfo') || []
				let findIndex = this.findIndexById(goodsInfoStorage, goodsInfo.id)
				if (findIndex == -1) {
					goodsInfoStorage.push(_goodsInfo)
					
				} else {
					goodsInfoStorage[findIndex].number++
				}
				this.setBadge(goodsInfoStorage)
				uni.setStorageSync('goodsInfo', goodsInfoStorage)
				this.$emit('updataGoodsCart')
				uni.showToast({
					title: this.addSuccess,
					icon: 'none'
				})
			},
			findIndexById(array, id) {
				return array.findIndex(item => item.id === id);
			},
			navDetails(id) {
				uni.navigateTo({
					url: '/pages/index/goodsDetails?id=' + id
				})
			},
			addRandomData() {
				console.log(1)
				for (let i = 0; i < 10; i++) {
					let index = this.$u.random(0, this.list.length - 1);
					// 先转成字符串再转成对象，避免数组对象引用导致数据混乱
					let item = JSON.parse(JSON.stringify(this.list[index]))
					item.id = this.$u.guid();
					this.flowList.push(item);
				}
			},
			remove(id) {
				this.$refs.uWaterfallRef.remove(id);
			},
			clear() {
				this.$refs.uWaterfallRef.clear();
			}
		}
	}
</script>

<style>
	/* page不能写带scope的style标签中，否则无效 */
	page {
		background-color: rgb(240, 240, 240);
	}
</style>

<style lang="scss" scoped>
	.wrap {
		width: 730rpx;
	}

	.demo-warter {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;
	}

	.u-close {
		position: absolute;
		top: 32rpx;
		right: 32rpx;
	}

	.demo-image {
		width: 100%;
		border-radius: 4px;
	}

	.demo-title {
		font-size: 26rpx;
		margin-top: 5px;
		color: #000;
	}

	.demo-tag {
		display: flex;
		margin-top: 5px;
	}

	.demo-tag-owner {
		background-color: $up-type-error;
		color: #FFFFFF;
		display: flex;
		align-items: center;
		padding: 4rpx 14rpx;
		border-radius: 50rpx;
		font-size: 20rpx;
		line-height: 1;
	}

	.demo-tag-text {
		border: 1px solid $up-type-primary;
		color: $up-type-primary;
		margin-left: 10px;
		border-radius: 50rpx;
		line-height: 1;
		padding: 4rpx 14rpx;
		display: flex;
		align-items: center;
		border-radius: 50rpx;
		font-size: 20rpx;
	}

	.demo-price {
		font-size: 26rpx;
		color: rgb(235, 60, 57);
		margin-top: 5px;
	}

	.demo-shop {
		font-size: 22rpx;
		color: $up-tips-color;
		margin-top: 5px;
	}
</style>