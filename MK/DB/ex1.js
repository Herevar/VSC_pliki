const mysql = require('mysql2/promise')

const pool = mysql.createPool({
    host : 'localhost',
    user: 'root',
    database: 'megak_2',
    decimalNumbers : true,
    namedPlaceholders : true
    }
)
const getData = async() => {
    //1
    const [courses] = await pool.execute("SELECT * FROM `courses` ")
    console.log(courses)
    //2
    const [userAndCourses] = await pool.execute("SELECT `people`.`id_person` , `people`.`name`, `people`.`surrname`, `courses`.`course_name` FROM `people` JOIN `ppl_kurs` ON `people`.`id_person`=`ppl_kurs`.`ppl_id` JOIN `courses` ON `ppl_kurs`.`Name_kursu`=`courses`.`course_name` ")
    console.log(userAndCourses)
    //3
    const {affectedRows : userUnder18} = await pool.execute("DELETE FROM `` WHERE 'age' < ? ", [wiek])[0] //w bazie danych trzeba ustawic akcje "on delete" = cascade (albo 'recznie' - pobrac wszystkie osoby ktore chcemy usunac, "usunac z tabeli posredniej i na koncu dopiero te osoby usunac" -?)

    //4 
    const {insertID} = await pool.execute("INSERT INTO `` VALUES ('?') ",[ilezmiennych])[0] //niestety to nie działa trzeba by samemu dodac wygenerowane z bilibliteki uuid()


    await pool.end()
}

getData()
