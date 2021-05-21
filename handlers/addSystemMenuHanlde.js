let systemMenuSchemaModel = require('../model/systemMenuModel')


module.exports = async (req, res) => {
  const {
    menuTitle, itemComponent, selectedIcon, menuPath, menuParentId, isBread, permissions
  } = req.body
  try {
    await systemMenuSchemaModel.create({
      menuTitle,
      itemComponent,
      selectedIcon,
      menuPath,
      menuParentId,
      isBread,
      permissions
    })
    res.status(200).send({
      data: null,
      meta: {
        status: 1,
        msg: "成功"
      }
    })
  } catch (err) {
    res.status(200).send({
      data: null,
      meta: {
        status: 0,
        msg: err
      }
    })
  }
}







