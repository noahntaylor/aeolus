const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

// Set up the server
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log(`Server Running!`));

// Create transporter to send email with nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.REACT_APP_EMAIL,
    pass: process.env.REACT_APP_PASSWORD,
  },
});

// Verify transporter
transporter.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send Emails!");
  }
});

// POST method to send email
router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: process.env.REACT_APP_EMAIL,
    subject: `Message to Aeolus from ${name}`,
    text: `You have a new message to Aeolus from ${name} (${email}): \n\n${message}`,
  };
  transporter.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
