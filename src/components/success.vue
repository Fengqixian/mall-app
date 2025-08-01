<template>
  <view class="container-start">
    <view id="start"></view>
  </view>
</template>

<script module="renderScript" lang="renderjs">
import lottie from 'lottie-web'
import start from "@/static/svgjson/Success.json";
export default {
    mounted() {
        this.ready()
    },
    methods: {
        ready() {
            const animation = lottie.loadAnimation({
                container: document.getElementById("start"),
                renderer: 'svg',
                loop: false,
                autoplay: false, 
                animationData: start 
            }); 
			animation.play();
        }
    }
};
</script>

<style>
/* 这里可以自己定义相关的样式，这里只是做个示范，具体按照界面而定 */
.container-start {
  width: 50%;
}
#start {
  width: 100%;
}
</style>
