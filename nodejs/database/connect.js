const mysql=require('mysql');

const con=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
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