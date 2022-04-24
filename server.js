const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");
const app = express();
const path = require("path");

require("dotenv").config();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/", router);

// Get express to serve client app
app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(port, () => console.log(`Server Running!`));

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
router.post("/email", (req, res) => {
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
