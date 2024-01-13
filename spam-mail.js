"use strict";
const nodemailer = require("nodemailer");
const prompt = require("prompt-sync")();

async function main() {
  //Configuration
  /*
  Port 587 (TLS)
  Secure: False
  --------------
  Port 465 (SSL)
  Secure: True
  */
  let transporter = nodemailer.createTransport({
    host: "your-smtp.domain.com",
    port: 587,
    secure: false,
    auth: {
      user: "your-smtp-username",
      pass: "your-smtp-password",
    },
  });

  //Gasken
  console.log("\n=[> Email Spamer <]=\nBy NuLz404\n");
  let emailnya = prompt("[+] Email Target -> ");
  let jumlah = prompt("[+] Masukan Jumlah -> ");
  let subjectnya = prompt("[+] Subject -> ");
  let pesanya = prompt("[+] Pesan -> ");
  let textnya = prompt("[+] Text -> ");
  for (var i = 1; i < jumlah; i++) {
    let info = await transporter.sendMail({
      from: '"Spammer" <no-reply@anonymous>',
      to: emailnya,
      subject: subjectnya,
      text: textnya,
      html: `<b>${pesanya}</b>`,
    });

    console.log("\n", i, "Succes\nMessage sent: %s", info.messageId);
  }
}

main().catch(console.error);
