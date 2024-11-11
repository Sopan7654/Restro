import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState(0);
  const navigate = useNavigate();
  const handleReservation = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!firstName || !lastName || !email || !phone || !date || !time) {
      toast.error("All fields are mandatory!");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/reservations/send",
        { firstName, lastName, email, phone, date, time },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Server Response:", data);
      toast.success(data.message);

      // Reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setDate("");
      setTime("");
      setPhone("");
    } catch (error) {
      console.error(
        "Error submitting reservation:",
        error.response?.data?.message || "Error"
      );
      toast.error(
        error.response?.data?.message || "Error submitting reservation"
      );
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/res.jpg" alt="res" style={{ height: "500px" }} />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button
                type="submit"
                onClick={handleReservation}
                style={{
                  backgroundColor: "#1d4ed8" /* Blue background */,
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.375rem" /* Rounded corners */,
                  border: "none",
                  cursor: "pointer",
                  transition:
                    "background-color 0.3s, transform 0.3s" /* Smooth transition */,
                }}
                onMouseOver={(e) => {
                  e.target.style.backgroundColor =
                    "#1e40af"; /* Darker blue on hover */
                  e.target.style.transform =
                    "scale(1.05)"; /* Slightly larger on hover */
                }}
                onMouseOut={(e) => {
                  e.target.style.backgroundColor =
                    "#1d4ed8"; /* Original background */
                  e.target.style.transform = "scale(1)"; /* Original size */
                }}
              >
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
