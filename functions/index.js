
const functions = require("firebase-functions");
const admin=require("firebase-admin");
const nodemailer =require("nodemailer");
admin.initializeApp();
require("dotenv").config();

const {SENDER_EMAIL, SENDER_PASSWORD}= process.env;
exports.sendEmailNotification=functions.firestore.document("submission/{docId}")
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
      authData.sendMail({
        from: "daoduvictor48@gmail.com",
        to: `${data.email}`,
        subject: "Your submission Info",
        text: `${data.email}`,
        html: `${data.email}`,
      // eslint-disable-next-line max-len
      }).then((res)=>console.log("successfully sent that mail")).catch(
          (err)=>console.log(err));
    });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
