// .vitepress/theme/index.ts
import DefaultTheme from 'vitepress/theme'
import PostList from './components/PostList.vue'
import CategoryList from './components/CategoryList.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('PostList', PostList)
    app.component('CategoryList', CategoryList)
  }
}