var nodemailer = require('nodemailer');
class EMail 
{
    constructor()
    {

        this.sender = 'karan.bhatt.bhavnagar@gmail.com';
        this.password = 'uaaz mmvm fmjg tzhn';
        this.MailSender = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
              user: this.sender,
              pass: this.password,
            },
          });
        this.MailSender.verify().then().catch(console.error);
    }
    send(receiver,subject,message)
    {
        this.MailSender.sendMail({
            from: `<${this.sender}>`, // sender address
            to: receiver, // list of receivers
            subject: subject, // Subject line
            html: message, // html body
          }).then(info => {}).catch(console.error);
    }
}
module.exports.EMail = EMail;