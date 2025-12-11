
const functions = require("firebase-functions");
const admin=require("firebase-admin");
const nodemailer =require("nodemailer");
admin.initializeApp();
require("dotenv").config();

const {SENDER_EMAIL, SENDER_PASSWORD, RECIPIENT_EMAIL}= process.env;

// Send email notification when new contact form is submitted
exports.sendEmailNotification=functions.firestore.document("enquiry/{docId}")
    .onCreate((snap, ctx)=>{
      const data=snap.data();
      const authData = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: SENDER_EMAIL,
          pass: SENDER_PASSWORD,
        },
      });

      const emailHtml = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message}</p>
        <hr>
        <p><em>Submitted at: ${new Date().toLocaleString()}</em></p>
      `;

      const emailText = `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

Submitted at: ${new Date().toLocaleString()}
      `;

      authData.sendMail({
        from: SENDER_EMAIL,
        to: RECIPIENT_EMAIL,
        replyTo: data.email,
        subject: `Portfolio Contact: ${data.subject}`,
        text: emailText,
        html: emailHtml,
      // eslint-disable-next-line max-len
      }).then((res)=>console.log("Successfully sent contact notification email"))
          .catch((err)=>console.log("Email error:", err));
    });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
