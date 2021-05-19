let {Router} = require('express')
let router = new Router()
let registerHandle = require('../handlers/registerHandle')
let loginHanlde = require('../handlers/loginHandle')
let routerTestHandle = require('../handlers/routerTestHandle')
let addSystemMenuHanlde = require('../handlers/addSystemMenuHanlde')


// 路由拦截,采用next()放行
router.use('/api', routerTestHandle)
// 注册
router.post('/api/register', registerHandle)
// 登录
router.post('/api/login', loginHanlde)
// 添加菜单
router.post('/api/addSystemMenu', addSystemMenuHanlde)

module.exports = router