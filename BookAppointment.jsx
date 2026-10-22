```jsx
import { useState } from "react";

function BookAppointment() {
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess(true);
  }

  return (
    <div className="booking-page">
      <div className="booking-heading">
        <p>CAREPLUS HOSPITAL</p>
        <h1>Book Your Appointment</h1>
        <span>
          Schedule your visit with our healthcare specialists.
        </span>
      </div>

      <form
        className="booking-form"
        onSubmit={handleSubmit}
      >
        <label>Patient Full Name</label>
        <input
          type="text"
          placeholder="Enter your full name"
          required
        />

        <label>Email Address</label>
        <input
          type="email"
          placeholder="Enter your email"
          required
        />

        <label>Phone Number</label>
        <input
          type="tel"
          placeholder="Enter your phone number"
          required
        />

        <label>Select Doctor</label>
        <select required defaultValue="">
          <option value="" disabled>
            Choose a doctor
          </option>
          <option>Dr. Priya Sharma - Cardiologist</option>
          <option>Dr. Arun Kumar - Neurologist</option>
          <option>Dr. Meera Raj - Dermatologist</option>
          <option>Dr. Rahul Verma - Pediatrician</option>
        </select>

        <label>Appointment Date</label>
        <input type="date" required />

        <label>Appointment Time</label>
        <select required defaultValue="">
          <option value="" disabled>
            Select a time
          </option>
          <option>09:00 AM</option>
          <option>10:00 AM</option>
          <option>11:00 AM</option>
          <option>01:00 PM</option>
          <option>02:00 PM</option>
          <option>03:00 PM</option>
          <option>04:00 PM</option>
        </select>

        <label>Reason for Visit</label>
        <textarea
          placeholder="Briefly describe your reason for visiting"
          rows="3"
        />

        <button type="submit" className="book-btn">
          Book Appointment
        </button>

        {success && (
          <div
            role="status"
            style={{
              color: "green",
              backgroundColor: "#d4edda",
              padding: "15px",
              marginTop: "15px",
              borderRadius: "8px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Appointment booked successfully!
          </div>
        )}
      </form>
    </div>
  );
}

export default BookAppointment;
```