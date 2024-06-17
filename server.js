// IMPORTS
import express from "express";
import nodemailer from "nodemailer";
import "express-async-errors";
import { errorHandlerMiddleware } from "./middleware/errorHandlerMiddleware.js";
import dotenv from "dotenv";
import path from "path";

// SETUP
const app = express();
dotenv.config();

// MIDDLEWARE
app.use(express.json());

// SEND EMAIL - CONTACT US
app.post("/api/v1/contact", async (req, res) => {
  const mailOptions = req.body;
  console.log(mailOptions);
  const message = {
    from: "abinandan2018@gmail.com",
    to: "abinandan2018@gmail.com",
    subject: "Message title",
    text: "Plaintext version of the message",
    html: "<p>HTML version of the message</p>",
  };
  const transporter = nodemailer.createTransport({
    // If pooling is used then Nodemailer keeps a fixed amount of connections open and sends the next message once a connection becomes available. It is mostly useful when you have a large number of messages that you want to send in batches or your provider allows you to only use a small amount of parallel connections.
    service: "gmail",
    pool: true,
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.OAUTH_EMAIL,
      pass: process.env.OAUTH_PASSWORD,
    },
  });
  try {
    const response = await transporter.sendMail(mailOptions);
    res.status(200).json({ msg: "Your message has been sent" });
  } catch (error) {
    console.log(error);
  }
});

// FRONTEND
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

// NOT FOUND MIDDLEWARE
app.use("*", (req, res) => {
  res.status(404).send("Not Found");
});

// ERROR HANDLER MIDDLEWARE
app.use(errorHandlerMiddleware);

// SERVER
app.listen(5000, (req, res) => {
  console.log("server is listening on port 5000...");
});
