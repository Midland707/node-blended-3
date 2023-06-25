const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: "goit_mindland@ukr.net",
    pass: "2Jjy6BX6nLwL2Goz",
  },
});

async function sendEmail(data) {
  const { userName, userEmail, userText } = data;
  const output = `
    <h1 style="color: red">
      A new holiday on russia - the day of chasing the bald
    </h1>
    <p>You have a new latter</p>
    <p>From: ${userName}</p>
    <p>Contact email is : ${userEmail}</p>
    <p style="color: blue">Text: ${userText}</p>
    <p style="color: yellow">Слава Україні !!!</p>
`;
  const info = await transporter.sendMail({
    from: "goit_mindland@ukr.net", // sender address
    to: "skyrus19en@gmail.com", // list of receivers
    subject:
      "On June 24, 2023, a new holiday 'Potato Spas' will be introduced on russia", // Subject line
    text: userText, // plain text body
    html: output, // html body
  });

  console.log("Message sent: %s", info.messageId);
  return true;
}

module.exports = sendEmail;
