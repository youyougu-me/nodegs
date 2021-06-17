let systemPersonModel = require('../model/systemPersonModel')
let jwt = require('jsonwebtoken')
module.exports = async (request, response) => {
  const {email, password} = request.body
  const emailReg = /^[a-zA-Z0-9_]{2,16}@[a-zA-Z0-9]{2,16}\.com$/
  const passwordReg = /^[a-zA-Z0-9_#]{6,16}$/
  const errMsg = {}
  //使用正则进行校验
  if (!emailReg.test(email)) {
    errMsg.emailErr = '邮箱输入不合法！要求邮箱用户名2-16位不包含特殊字符，邮箱主机名2-16位'
  }
  if (!passwordReg.test(password)) {
    errMsg.passwordErr = '密码输入不合法，密码应为6-16位字符不包含特殊字符'
  }
  if (JSON.stringify(errMsg) !== '{}') {
    response.status(200).send({
      data: null,
      meta: {
        msg: errMsg,
        code: 0
      }
    })
    return
  }

  try {
    let findResult = await systemPersonModel.findOne({email: email, password: password})
    if (findResult) {
      let personName = findResult.personName
      errMsg.successErr = '登录成功'
      // 登录成功生成token返回给客户端
      // 第一个参数是组,第二个参数是密匙自己谁便定义
      let token = jwt.sign({personName}, 'iamtoken')
      response.status(200).send({
        data: {
          personName: personName,
          token: token
        },
        meta: {
          msg: errMsg,
          code: 1
        }
      })


      // response.status(200).send({errMsg})
    } else {
      errMsg.loginErr = '登录失败，邮箱或密码输入错误！'
      response.status(200).send({
          data: null,
          meta: {
            msg: errMsg,
            // 1表示成功
            // 0表示失败
            code: 0
          }
        }
      )
    }
  } catch (err) {
    errMsg.networkErr = '数据库连接不稳定'
    response.status(200).send({
      data: null,
      meta: {
        msg: errMsg,
        // 1表示成功
        // 0表示失败
        code: 0
      }
    })
  }
}







