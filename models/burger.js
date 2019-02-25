const orm = require("../config/orm");

let thatObject = {
    allUnDev: function (controllerCb) {
        orm.all("burgers", function (res) {
            controllerCb(res);
        })
    },
    create: function (col, val, controllerCb) {
        orm.insertOne("burgers", col, val, function (res) {
            controllerCb(res);
        });
    },
    update: function (val, id, controllerCb) {
        orm.updateOne("burgers", id, val, function (res) {
            controllerCb(res);
        })
    }
}

module.exports = thatObject;