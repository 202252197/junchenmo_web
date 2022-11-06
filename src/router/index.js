import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from '@/config/router.config'

// 重复点击路由不抛异常
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const createRouter = () =>
  new Router({
    mode: 'history',
    routes: constantRouterMap
  })

// const router = createRouter()

// // 定义一个resetRouter 方法，在退出登录后或token过期后 需要重新登录时，调用即可
// export function resetRouter () {
//   const newRouter = createRouter()
//   router.matcher = newRouter.matcher
// }

export default createRouter
