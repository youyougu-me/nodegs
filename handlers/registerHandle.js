let companyModel = require('../model/companyModel')
let systemPersonModel = require('../model/systemPersonModel')
let mongoose = require('mongoose')

module.exports = async (request, response) => {
  let {companyId, companyName} = request.body
  // 数据库错误会在这里捕捉到,而不是try
  // 没查到data返回null;数据库错误data返回undefined
  // 数据库无错误,查没查到err都为null;数据库有错误err有值
  // 避免崩溃 try一下
  let companyId2
  try {
    companyId2 = mongoose.Types.ObjectId(companyId)
  } catch (e) {
    response.status(500).send({
      data: null,
      meta: {
        msg: "公司校验码不存在"
      }
    })
    // return之后后面不会执行
    return
  }

  companyModel.findOne({_id: companyId2}, (err, data) => {
      // 数据库无错误
      if (!err) {
        if (data === null) {
          response.status(500).send({
            data: null,
            meta: {
              msg: "公司校验码不存在"
            }
          })
        }
        // 找到了
        else if (data.companyname !== companyName) {
          response.status(500).send({
            data: null,
            meta: {
              msg: "公司校验码与公司名称不对应"
            }
          })
        }
        // 成功了
        else {
          testInsertUserData(request, response)
        }
      } else {
        // 数据库有错误
        response.status(500).send({
          data: null,
          meta: {
            msg: "后端服务错误"
          }
        })
      }
    }
  )
}

// 定义向数据库插入数据的函数
let testInsertUserData = (request, response) => {
  let {companyId, companyName, personName, email, password} = request.body
  systemPersonModel.findOne({email: email}, (err, data) => {
    // 数据库无错误
    if (!err) {
      if (data === null) {
        systemPersonModel.create({email, personName, companyId, companyName, password}, (err2, data2) => {
          if (err2) {
            response.status(500).send({
              data: null,
              meta: {
                msg: "注册失败"
              }
            })
          } else {
            response.status(200).send({
              data: null,
              meta: {
                msg: "注册成功"
              }
            })
          }
        })
      } else {
        response.status(500).send({
          data: null,
          meta: {
            msg: "此邮箱已经注册过"
          }
        })
      }

    } else {
      response.status(500).send({
        data: null,
        meta: {
          msg: "后端服务错误"
        }
      })
    }
  })
}

// 一般来说,后端返回200就一定成功,500就给消息提示





