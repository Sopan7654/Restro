// server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Model for Reservation
const ReservationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  date: String,
  time: String,
});

const Reservation = mongoose.model("Reservation", ReservationSchema);

// POST route to handle reservation
app.post("/api/reservations/send", async (req, res) => {
  const { firstName, lastName, email, phone, date, time } = req.body;

  try {
    // Save reservation to the database
    const newReservation = new Reservation({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
    });

    await newReservation.save();

    // Sending email confirmation using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Reservation Confirmation",
      text: `
        Dear ${firstName} ${lastName},

        Thank you for choosing Restro for your dining experience. We're excited to confirm your reservation with us!

        Here are the details of your reservation:
        ------------------------------------------------------------
        Reservation Date: ${date}
        Reservation Time: ${time}
        Phone Number: ${phone}
        ------------------------------------------------------------

        If you have any further questions or need to modify your reservation, feel free to contact us at +917767508237 or reply to this email.

        We look forward to welcoming you and making your dining experience memorable.

        Best regards,
        Restro
        +917767508237
        [Restaurant Contact Number]
        [Your Restaurant's Website]

        P.S. If you need to cancel or change your reservation, kindly notify us at least 24 hours in advance.
      `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
        return res.status(500).json({ message: "Error sending email" });
      }
      res.status(200).json({ message: "Reservation successful! Email sent." });
    });
  } catch (error) {
    console.error("Error creating reservation:", error);
    res.status(500).json({ message: "Error creating reservation" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
