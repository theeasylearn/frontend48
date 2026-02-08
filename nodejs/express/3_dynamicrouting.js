/*
    Develope api to insert, update, delete, fetch all & particular contact

    use Get method to fetch all or particular contact

    use Post Method to insert new contact 

    use Delete method to delete existing contact 

    use Put method to delete existing contact 

    path: //http://localhost:5000/contact
*/

const express=require('express');
const bodyparser=require('body-parser');

const app=express();

app.use(express.urlencoded({extended:true}));
app.use(bodyparser.json());

let data=[

    {
        email: "john.doe@example.com",
        mobile: "9876543210",
        name: "John Doe",
        detail: "Interested in web development."
    },
    {
        email: "jane.smith@example.com",
        mobile: "9123456780",
        name: "Jane Smith",
        detail: "Looking for UI/UX design role."
    },
    {
        email: "rahul.patel@example.com",
        mobile: "8899776655",
        name: "Rahul Patel",
        detail: "Experienced in frontend technologies."
    },
    {
        email: "meera.kumar@example.com",
        mobile: "9988776655",
        name: "Meera Kumar",
        detail: "Wants to join the AI research team."
    },
    {
        email: "alex.brown@example.com",
        mobile: "9345678901",
        name: "Alex Brown",
        detail: "Full stack developer with 5 years of experience."
    },
    {
        email: "sunita.shah@example.com",
        mobile: "9090909090",
        name: "Sunita Shah",
        detail: "Recently completed cloud certification."
    },
    {
        email: "mohit.verma@example.com",
        mobile: "8888999900",
        name: "Mohit Verma",
        detail: "Interested in DevOps and CI/CD pipelines."
    },
    {
        email: "nisha.jain@example.com",
        mobile: "9012345678",
        name: "Nisha Jain",
        detail: "Strong in database and backend technologies."
    },
    {
        email: "arjun.mehta@example.com",
        mobile: "9801234567",
        name: "Arjun Mehta",
        detail: "Working on machine learning projects."
    },
    {
        email: "tara.singh@example.com",
        mobile: "9870012345",
        name: "Tara Singh",
        detail: "Looking for internship opportunities."
    }

];

//use Post Method to insert new contact 
//input : email,mobile,name,detail
//all inputs are required

app.post('/contact',(req,res)=>{

    let email=req.body.email;
    let mobile=req.body.mobile;
    let name=req.body.name;
    let detail=req.body.detail;

    let temp={
        "email":email,
        "mobile":mobile,
        "name":name,
        "detail":detail
    }

    if(email===undefined || mobile===undefined || name===undefined || detail===undefined){
        res.send('data is incomplete');
    }
    else if(email===undefined && mobile===undefined && name===undefined && detail===undefined){
        res.send('data is incomplete');
    }
    else{
        data.push(temp);
        res.send("content is added");
    }
    
});

//http://localhost:5000/contact
//fetch all contacts 

app.get('/contact',(req,res)=>{
    res.json(data);
});

//delete specific contact 
//input : email (required)

app.delete('/contact',(req,res)=>{
    let email=req.body.email;

    if(email===undefined){
        res.send("Plese share the email");
    }
    else {
        
        let isFound=false;
        let tempdata=data.filter(
            (item)=>{
                if(email!=item.email){
                    return item;
                }
                else{
                   isFound=true; 
                }
            }
        );
        if(isFound==true){
            data=tempdata;
            res.send("Contact is delete");
        }
        else{
            res.send("Contact is not found");
        }
    }
}
);

//update specific contact
//input : email, mobile, name, detail

app.put('/contact',(req,res)=>{

    let email=req.body.email;
    let mobile=req.body.mobile;
    let name=req.body.name;
    let detail=req.body.detail;

    if(email===undefined || mobile===undefined || name===undefined || detail===undefined){
        res.send("Data is incomplete");
    }
    else{
        let isFound=false;
        data.forEach((item)=>{
        if(email===item.email){
            
            item.mobile=mobile;
            item.name=name;
            item.detail=detail;
            isFound=true;
        }
        });
        if(isFound==true){
            res.send("your data is updated");
        }
        else{
            res.send("Contact is not found");
        }
        
    }
    
}

);



app.listen(5000,()=>{
    console.log("Server is ready to give response");
});