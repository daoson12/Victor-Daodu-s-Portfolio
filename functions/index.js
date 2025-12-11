
const functions = require("firebase-functions");
const admin=require("firebase-admin");
const sgMail = require("@sendgrid/mail");
admin.initializeApp();
require("dotenv").config();

const {SENDGRID_API_KEY, SENDER_EMAIL, RECIPIENT_EMAIL}= process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

// Send email notification when new contact form is submitted
exports.sendEmailNotification=functions.firestore.document("enquiry/{docId}")
    .onCreate(async (snap, ctx)=>{
      const data=snap.data();

      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4CAF50; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Subject:</strong> ${data.subject}</p>
          </div>
          <div style="margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="background-color: #fff; padding: 15px;
              border-left: 4px solid #4CAF50; white-space: pre-wrap;">
              ${data.message}
            </p>
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="color: #888; font-size: 12px;">
            <em>Submitted at: ${new Date().toLocaleString()}</em>
          </p>
        </div>
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

      const msg = {
        to: RECIPIENT_EMAIL,
        from: SENDER_EMAIL, // Must be verified in SendGrid
        replyTo: data.email,
        subject: `Portfolio Contact: ${data.subject}`,
        text: emailText,
        html: emailHtml,
      };

      try {
        await sgMail.send(msg);
        console.log("Successfully sent contact notification email");
      } catch (error) {
        console.error("SendGrid error:", error);
        if (error.response) {
          console.error(error.response.body);
        }
      }
    });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
