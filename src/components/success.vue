<template>
  <view class="container-start">
    <view id="start"></view>
  </view>
</template>

<script module="renderScript" lang="renderjs">
import lottie from 'lottie-web'
import start from "../static/svgjson/Success.json";
export default {
    mounted() {
        this.ready()
    },
    methods: {
        ready() {
            let animation = lottie.loadAnimation({
                container: document.getElementById("start"),
                renderer: 'svg',
                loop: false, // 设置为false，不循环播放
                autoplay: true, 
                animationData: start 
            }); 
			
        }
    }
};
</script>

<style>
/* 这里可以自己定义相关的样式，这里只是做个示范，具体按照界面而定 */
.container-start {
  width: 80%;
}
#start {
  width: 100%;
}
</style>
