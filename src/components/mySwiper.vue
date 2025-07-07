<template>
  <view class="custom-swiper">
    <view
      class="swiper-wrapper"
      :style="{ transform: `translateX(${translateX}px)`, transition: transitionStyle }"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <view class="swiper-item" v-for="(item, index) in tabPages" :key="index">
        <slot style="width: 100%; height: 100%;" :name="item.slot"></slot>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { stop,ManagerScroll } from "@/hooks/mySwiper.js"
const props = defineProps({
	current: {
		type: Number,
		default: 0,
	}, 
	list:{
		type: Array,
		default:[]
	}
})

watch(
	() => props.current, 
	(val)=>{
		currentIndex.value = val;
		goToTab(val)
	},
	{
		deep: true
	}
)

// 定义 tab 页内容
const tabPages = ref(props.list);
// 当前显示的 tab 页索引
const currentIndex = ref(props.current);
// 每个 tab 页的宽度
const itemWidth = ref(0);
// 触摸起始位置的 x 坐标
const startX = ref(0);
const startY = ref(0);
// 滑动过程中的实时偏移量
const translateX = ref(0);
// 过渡样式
const transitionStyle = ref('');
// 是否正在滑动
const isSwiping = ref(false);
// 最小滑动距离阈值
const MIN_DISTANCE = 50;
// 不让滑动
let _contorller = false
// 首次滑动控制器
let oneMoveContorller = 0

const emits = defineEmits(['change'])

onMounted(() => {
  uni.getSystemInfo({
    success: (res) => {
      itemWidth.value = res.windowWidth;
      translateX.value = -currentIndex.value * itemWidth.value;
    },
  });
});

const onTouchStart = (e) => {
  // 自定义阻止swiper默认事件
  if(stop.value) return
  startX.value = e.touches[0].pageX;
  startY.value = e.touches[0].pageY;
  isSwiping.value = true;
  oneMoveContorller = 0
  transitionStyle.value = '';
  _contorller = false
};

const onTouchMove = (e) => {
	// 自定义阻止swiper默认事件
	if(stop.value) return
	
	_contorller = true;
	if (!isSwiping.value) return;
	const currentX = e.touches[0].pageX;
	const dx = currentX - startX.value;
	const dy = e.touches[0].pageY - (e.touches[0].pageY - e.touches[0].pageY);
	// 第一张 和最后张不让滑动
	if((currentIndex.value === 0 && dx>0) || (currentIndex.value === tabPages.value.length-1 && dx<0)){
	  return
	}
  
	if(((dx > 20 || dx < -20) && startY.value - dy < 10 && startY.value - dy > -10) || oneMoveContorller){
		ManagerScroll.value = false
		oneMoveContorller = 1
		// 边界处理，并且允许弹性效果
		let newTranslateX = -currentIndex.value * itemWidth.value + dx;
		if (newTranslateX > 0) {
		  newTranslateX = newTranslateX * 0.3; // 左边界弹性效果
		} else if (newTranslateX < -(tabPages.value.length - 1) * itemWidth.value) {
		  newTranslateX = -(tabPages.value.length - 1) * itemWidth.value + (newTranslateX + (tabPages.value.length - 1) * itemWidth.value) * 0.3; // 右边界弹性效果
		}
		
		translateX.value = newTranslateX;
		_contorller = true
	} else {
		_contorller = false
		return
	}
};

const onTouchEnd = (e) => {
   ManagerScroll.value = true
  // 自定义阻止swiper默认事件
  if(stop.value) return
  if (!isSwiping.value) return;
  const currentX = e.changedTouches[0].pageX;
  const dx = currentX - startX.value;
  //  控制器为true 才可以切换
  if(_contorller){
	  transitionStyle.value = 'transform 0.3s ease';
	  if (dx > MIN_DISTANCE && currentIndex.value > 0) {
	    // 右滑切换到上一页
	    currentIndex.value--;
	  } else if (dx < -MIN_DISTANCE && currentIndex.value < tabPages.value.length - 1) {
	    // 左滑切换到下一页
	    currentIndex.value++;
	  }
	  translateX.value = -currentIndex.value * itemWidth.value;
	  isSwiping.value = false;
	  emits('change', {detail:{current:currentIndex.value}})
  }
};

const goToTab = (index) => {
  transitionStyle.value = 'transform 0.3s ease';
  currentIndex.value = index;
  translateX.value = -currentIndex.value * itemWidth.value;
};

</script>

<style scoped>
.custom-swiper {
  flex: 1;
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  height: 100%;
  /* #endif */
  position: relative;
  flex-direction: column;
}

.swiper-wrapper {
  flex: 1;
  /* #ifndef APP-PLUS-NVUE */
  display: flex;
  height: 100%;
  /* #endif */
  display: flex;
  position: relative;
  /* flex-direction: column; */
}

.swiper-item {
  width: 100%;
  flex-shrink: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.swiper-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 0 5px;
}

.dot.active {
  background-color: #007aff;
}
</style>