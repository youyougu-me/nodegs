let companyModel = require('../model/companyModel')


module.exports = async (request, response) => {
  const {email, username, password, companyId} = request.body
  try {
    let companyResult = await companyModel.findOne({_id: companyId})
    await testInsertUserData(request, response)
  } catch (err) {
    errMsg.companynameErr = '公司校验码错误'
    response.status(200).send({errMsg})
  }
}







