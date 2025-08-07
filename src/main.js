import { createSSRApp } from "vue";
import App from "@/App.vue";
import { createI18n } from "vue-i18n";
import messages from "@/locale";
import uviewPlus from "uview-plus";
const env = import.meta.env;
console.log(env)
let language = uni.getStorageSync('appLanguage') || env.VITE_LANGUAGE
export function createApp() {
  const app = createSSRApp(App);
  const i18n = createI18n({
    legacy: false, // 推荐使用composition api
    locale: language, // 默认语言
    messages,
  });

  app.use(i18n);
  app.use(uviewPlus, uviewPlusConfig); // 挂载uview-plus
  return {
    app,
  };
}

function uviewPlusConfig() {
  return {
    option: {
      config: {
        // 修改默认单位为rpx，相当于执行 uni.$u.config.unit = 'rpx'
        unit: "rpx"
      },
    },
  };
}