
import { useState } from "react";

function BookAppointment() {
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSuccess(true);
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "30px",
        background: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ textAlign: "center", color: "#087f8c" }}>
        Book an Appointment
      </h1>

      {success && (
        <p
          style={{
            background: "#d4edda",
            color: "#155724",
            padding: "14px",
            textAlign: "center",
            borderRadius: "6px",
          }}
        >
          Appointment booked successfully!
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          name="email"
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          style={inputStyle}
        />

        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
          style={inputStyle}
        >
          <option value="">Select Doctor</option>
          <option value="General Physician">General Physician</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Dentist">Dentist</option>
        </select>

        <input
          name="date"
          type="date"
          value={formData.date}
          onChange={handleChange}
          min={new Date().toISOString().split("T")[0]}
          required
          style={inputStyle}
        />

        <textarea
          name="message"
          placeholder="Describe your problem (optional)"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, minHeight: "90px" }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px",
            background: "#087f8c",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "6px",
  boxSizing: "border-box",
  fontSize: "15px",
};

export default BookAppointment;
