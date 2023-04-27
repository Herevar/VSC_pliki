// npm i mysql2

const mysql = require('mysql2/promise');

(async ()=> {
    
    const conn = await mysql.createConnection( {
        host: '127.0.0.1',
        user: 'root',
        database: 'megak',

    });

    //const [result] = await conn.execute("SELECT * FROM `cars`"); //destrukturyzacja [pierwszy, drugi] ; drugi element to sa jakies tam rozne elementy pol
    const result = await conn.execute("INSERT INTO `cars` VALUES ('WOT 5T56T', 'Toyota', 'Corolla', '1998-02-12' ,'oragne', '999','1998-02-12') ")
    //asd
    
    console.log(result);
})();





//wywaliłem promisy
// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'megak'
// });

// const getUsers = () => {
//  
//     const [rows, fields] = pool.query('SELECT * FROM cars');
//     // return rows;
//   }

// const users = getUsers();
// console.log(users);

