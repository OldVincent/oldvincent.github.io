import {defineClientConfig} from '@vuepress/client'
import TDesign from 'tdesign-vue-next';
import {onMounted, watch} from "vue";
import {useDarkMode} from "vuepress-theme-hope/client";

export default defineClientConfig({
  layouts: {},
  enhance: (context) => {
    context.app.use(TDesign);
  },
  setup() {
    const {isDarkMode} = useDarkMode();

    onMounted(() => {
      const html = document.documentElement

      watch(isDarkMode, (value: boolean) => {
        if (value) {
          html.setAttribute('theme-mode', 'dark')
        } else {
          html.removeAttribute('theme-mode')
        }
      }, {immediate: true})
    })
  }
})