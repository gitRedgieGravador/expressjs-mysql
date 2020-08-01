const mysql = require('mysql');

class MySql {
    constructor(host, user, password, database) {
        this.host = host
        this.user = user
        this.password = password
        this.database = database
    }
    setDatabase(database) {
        this.database = database
        console.log("database: ", this.database)
    }
    query(statement, callback) {
        const pool = mysql.createPool({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });
        pool.getConnection(function (err, connection) {
            if (err) {
                callback({
                    error: true,
                    message: err.message,
                    data: err
                })
                return;
            }
            connection.query(statement, function (err, results) {
                connection.release();
                if (err) {
                    callback({
                        error: true,
                        message: err.message,
                        data: err
                    })
                    return;
                }
                callback({
                    error: true,
                    message: "Success",
                    data: results
                })
            });
        });
    };
}

module.exports = MySql;