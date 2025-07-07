import { ref } from "vue"
export const stop = ref(false)
// 控制是否可以滑动，在swiper 自定义滚动组件中都有使用，在他们横向滚动时 list 不能上下滚动
export const ManagerScroll = ref(true)