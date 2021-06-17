let companyModel = require('../model/companyModel')
let personName = require('../model/systemPersonModel')
let companyname
let errMsg

module.exports = async (request, response) => {
  errMsg = {}
  companyname = ''
  const {email, personName, password, companyId} = request.body
  const emailReg = /^[a-zA-Z0-9_]{2,16}@[a-zA-Z0-9]{2,16}\.com$/
  const personNameReg = /[\u4e00-\u9fa5]/gm
  const passwordReg = /^[a-zA-Z0-9_#]{6,16}$/

  if (!personNameReg.test(personName)) {
    errMsg.nickNameErr = '用户名输入不合法，应为中文'
  }
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
        msg: errMsg
      }
    })
    return
  }
  try {
    let companyResult = await companyModel.findOne({_id: companyId})
    companyname = companyResult.companyname
    await testInsertUserData(request, response)
  } catch (err) {
    errMsg.companynameErr = '公司校验码错误'
    response.status(200).send({
      data: null,
      meta: {
        msg: errMsg
      }
    })
  }
}

// 定义向数据库插入数据的函数
let testInsertUserData = async (request, response) => {
  const {email, personName, password} = request.body
  try {
    let finResult = await userModel.findOne({email})
    if (finResult) {
      errMsg.emailCopyErr = '邮箱已经被注册'

      response.status(200).send({
        data: null,
        meta: {
          msg: errMsg
        }
      })
    } else {
      await userModel.create({email, personName, password, companyname})
      errMsg.emailSuccessErr = '注册成功'
      response.status(200).send({
        data: null,
        meta: {
          msg: errMsg
        }
      })
    }
  } catch (err) {
    errMsg.emailDataWriteErr = '数据库连接不稳定'
    response.status(200).send({
      data: null,
      meta: {
        msg: errMsg
      }
    })
  }
}





