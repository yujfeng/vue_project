import Vue from 'vue'
import App from './App.vue'
import {Button,Radio,Container,Main,Header,Aside,Menu,Submenu,MenuItem,MenuItemGroup,Dropdown,DropdownItem,DropdownMenu,Row,Col,Card,Table,Breadcrumb,BreadcrumbItem,Tag,Form,FormItem,Select,Option,Switch,DatePicker,Input,Dialog,TableColumn,Pagination,MessageBox,Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from '../router'
import '@/assets/less/index.less'

import store from '../store'
import http from 'axios'
import '../api/mock.js'


Vue.config.productionTip = false
// 注入插件
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card) 
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Switch)
Vue.use(DatePicker)
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.prototype.$http = http
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$message = Message

// 只要监听到路由跳转的时候就会触发导航守卫 监听 权限
router.beforeEach((to,from,next) =>{
  store.commit('getToken')
  const token = store.state.user.token
  if(!token && to.name !== 'login'){
    next({name:'login'})
    // 登录后再输入网站/login 登录界面的时候，应该让页面处于登录状态
    // 所以此时判断的是 token值存在的话 且用户要跳转到login界面的时候 
    // 让他跳转到home 首页 页面
  } else if(token && to.name === 'login'){
    next({ name:'home' })
  } else {
    next() 
  }
})


new Vue({
  store,
  router,
  render: h => h(App),
  // 解决登录后刷新之后白屏的状况
  created(){
    store.commit('addMenu',router)
  }
}).$mount('#app')
