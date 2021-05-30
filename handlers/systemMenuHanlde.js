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
    res.status(500).send({
      data: null,
      meta: {
        status: 0,
        msg: e
      }
    })
  }

}
let editSystemMenuHanlde = async (req, res) => {
  let id_ = req.body._id
  let updateObj = JSON.parse(JSON.stringify(req.body))
  delete(updateObj._id)
  systemMenuSchemaModel.findByIdAndUpdate(id_, updateObj, (err, suc) => {
    if (err) {
      res.status(500).send({
        data: null,
        meta: {
          status: 0,
          msg: err
        }
      })
    } else {
      res.status(200).send({
        data: null,
        meta: {
          status: 1,
          msg: "成功"
        }
      })
    }
  })

}

let systemMenuHanlde = {}
systemMenuHanlde.addSystemMenuHanlde = addSystemMenuHanlde
systemMenuHanlde.querySystemMenuHanlde = querySystemMenuHanlde
systemMenuHanlde.editSystemMenuHanlde = editSystemMenuHanlde


module.exports = systemMenuHanlde







