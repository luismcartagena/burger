const connection = require("../config/connection");

let orm = {
    all: function (input, modelCb) {
        //does the selecting all
        let queryStr = "SELECT * FROM " + input + ";";
        connection.query(queryStr, function(err, res) {
            if (err) {
                throw err;
            }
            modelCb(res);
        })
    },
    insertOne: function (table, input, modelCb) {
        //does the inserting (yea you did) (had to)
        let queryStr = `INSERT INTO ${table} (burger_name) VALUE ('${input}')`
        
        connection.query(queryStr, function (err, res) {
            if (err) {
                throw err;
            }
            modelCb(res);
        })
    },
    updateOne: function (table, id, val, modelCb) {
        //does the updating (that's not as exciting)
        let queryStr = `UPDATE ${table} SET devoured = ${val} WHERE ${id}`

        connection.query(queryStr, function (err, res) {
            if (err) {
                throw err;
            }
            modelCb(res);
        });
    }
}

module.exports = orm;