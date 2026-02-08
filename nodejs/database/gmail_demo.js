const e = require('../lib/gmail');
//create object of Email class 
const email = new e.EMail();
receiver = 'krishaghori2004@gmail.com,dabhiankit38@gmail.com,theeasylearn@gmail.com,baradhirak37@gmail.com';
subject = "test mail";
message = "good morning, friends how are you all.";
email.send(receiver, subject, message);