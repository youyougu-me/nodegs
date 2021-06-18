let companyModel = require('../model/companyModel')
let systemPersonModel = require('../model/systemPersonModel')

module.exports = async (request, response) => {
  let {companyId, companyName} = request.body
  // 数据库错误会在这里捕捉到,而不是try
  // 查到了data会返回查到的数据,没查到data返回null,若数据库错误data返回undefined
  // 只要数据库无错误,查没查到err都为null,数据库有错误则返回错误 err判断这次查询是否成功
  companyModel.findOne({_id: companyId}, (err, data) => {
      // 数据库无错误
      if (!err) {
        if (data === null) {
          response.status(200).send({
            data: null,
            meta: {
              msg: "公司校验码不存在"
            }
          })
        }
        // 找到了
        else if (data.companyname !== companyName) {
          response.status(200).send({
            data: null,
            meta: {
              code: 0,
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
  try {
    systemPersonModel.findOne({email: email}, (err, data) => {
      // console.log(err)
      // console.log(data)
      if (data === null) {
        systemPersonModel.create({email, personName, companyId, companyName, password}, (errson, data) => {
          if (!errson) {
            response.status(200).send({
              data: null,
              meta: {
                code: 1,
                msg: "注册成功"
              }
            })
          } else {
            response.status(200).send({
              data: null,
              meta: {
                code: 0,
                msg: "注册失败"
              }
            })
          }
        })
      } else {
        response.status(200).send({
          data: null,
          meta: {
            code: 0,
            msg: "邮箱已存在"
          }
        })
      }
    })
  } catch (err) {
    response.status(500).send({
      data: null,
      meta: {
        msg: "后端服务错误"
      }
    })
  }
}

//  综上:前端.catch一定没有成功,可能是后端返回500 可能没返回
//  前端.then也不一定成功,需要判断code





