const mysql=require('mysql');

const conn=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"node"
    }
);

conn.connect(
    (error)=>{
        if(error){
            console.log(error);
        }
        else{
            console.log("connection established");
        }
    }
);

module.exports.conn=conn;