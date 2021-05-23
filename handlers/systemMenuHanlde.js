let systemMenuSchemaModel = require('../model/systemMenuModel')


let addSystemMenuHanlde = async (req, res) => {
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

let querySystemMenuHanlde = async (req, res) => {
  try {
    let findResult = await systemMenuSchemaModel.find({})
    res.status(200).send({
      data: findResult,
      meta: {
        status: 1,
        msg: "成功"
      }
    })
  } catch (e) {
    res.status(200).send({
      data: null,
      meta: {
        status: 0,
        msg: e
      }
    })
  }

}

let systemMenuHanlde = {}
systemMenuHanlde.addSystemMenuHanlde = addSystemMenuHanlde
systemMenuHanlde.querySystemMenuHanlde = querySystemMenuHanlde


module.exports = systemMenuHanlde







