const mysql=require('mysql');

const con=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        port:'3306',
        database:"frontend48"
    }
);

con.connect(
    (error)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log("connection established");
        }
    }
);

module.exports.con=con;