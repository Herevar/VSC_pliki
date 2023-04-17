const mysql = require('mysql2/promise');

const poolOf = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'todo_data',
    // decimalNumber: true ,
    namedPlaceholders: true,
    
})

module.exports = {
    poolOf,
}
