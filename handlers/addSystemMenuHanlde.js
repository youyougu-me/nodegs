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
        msg: 1
      }
    })
  } catch (err) {
    res.status(200).send({
      data: null,
      meta: {
        msg: err
      }
    })
  }
}







