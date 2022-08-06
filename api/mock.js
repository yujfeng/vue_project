// mock 模拟后端返回数据接口
import Mock from 'mockjs'
import homeApi from './mockServerData/home'
import permissionApi from './mockServerData/permission'
import userApi from './mockServerData/user'

Mock.mock('/home/getData', homeApi.getStatisticalData)
Mock.mock(/user\/add/,'post',userApi.createUser)
Mock.mock(/user\/edit/,'post',userApi.updateUser)

Mock.mock(/user\/getUser/,'get',userApi.getUserList)
Mock.mock(/user\/del/,'post',userApi.deleteUser)

Mock.mock(/permission\/getMenu/,'post',permissionApi.getMenu)