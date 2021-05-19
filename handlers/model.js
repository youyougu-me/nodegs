let companyModel = require('../model/companyModel')


module.exports = async (req, res) => {
  const {email, username, password, companyId} = req.body
  try {
    let companyResult = await companyModel.findOne({_id: companyId})
    await testInsertUserData(req, res)
  } catch (err) {
    errMsg.companynameErr = '公司校验码错误'
    res.status(200).send({errMsg})
  }
}







