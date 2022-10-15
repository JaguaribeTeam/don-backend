import sqlite3 from 'sqlite3';

export default function CreateDB (){
    const db = new sqlite3.Database('./database/dev.db');

    //Retrieving All Rows
    db.all("SELECT EmployeeId, FirstName FROM employees", (error, rows) => {
        rows.forEach((row) => {
            console.log(row.EmployeeId + " " + row.FirstName);
        })
    });
}
