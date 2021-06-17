let jwt = require('jsonwebtoken')
module.exports = async (req, res, next) => {
  if (req.url === '/login' || req.url === '/register') {
    next()
    return
  }
  const token = String(req.headers.authorization)
  const personName = jwt.decode(token, 'iamtoken')
  if (token == 'undefined' || personName == null) {
    res.status(400).send({
      data: null,
      meta: {
        msg: "token无效",
        status: 400
      }
    })
    return
  }
  // 有token直接放行
  next()
}







