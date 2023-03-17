const nodeMail = require("nodemailer");

const sendMail = async(req, res) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: testAccount.user, // generated ethereal user
            pass: testAccount.pass, // generated ethereal password
        },
    });

    let info = await transporter.sendMail({
        from: '"vivek jha 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    // const sendMail = async(req, res) => {
    //     res.send("I am Sending mail");
    // };

    console.log("Message send: %s", info.messageId);
    res.json(info);
};

//smtp  a protocol
module.exports = sendMail;