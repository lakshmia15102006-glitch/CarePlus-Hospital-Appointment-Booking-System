
const form = document.getElementById("appointmentForm");

if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const appointment = {
            patientName: document.getElementById("patientName").value,
            email: document.getElementById("email").value,
            doctor: document.getElementById("doctor").value,
            date: document.getElementById("date").value,
            time: document.getElementById("time").value
        };

        try {
            const response = await fetch("http://localhost:5000/api/appointments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(appointment)
            });

            const result = await response.json();

            if (response.ok) {
                alert(
    "Appointment booked successfully!\n" +
    "Your Appointment ID: " + result.appointment._id +
    "\nPlease save this ID to cancel your appointment."
);
form.reset();
                form.reset();
            } else {
                alert(result.message || "Booking failed. Please try again.");
            }
        } catch (error) {
            alert("Server connect aagala. Backend running-la irukka nu check pannunga.");
        }
    });
}

async function cancelAppointment() {
    const id = document.getElementById("cancelAppointmentId").value.trim();
    const message = document.getElementById("cancelMessage");

    if (!id) {
        message.textContent = "Please enter your Appointment ID.";
        return;
    }

    if (!confirm("Are you sure you want to cancel this appointment?")) {
        return;
    }

    try {
        const response = await fetch(
            `http://localhost:5000/api/appointments/${encodeURIComponent(id)}`,
            { method: "DELETE" }
        );

        const result = await response.json();
        message.textContent = result.message;

        if (response.ok) {
            document.getElementById("cancelAppointmentId").value = "";
        }
    } catch (error) {
        message.textContent = "Unable to connect to the server.";
    }
}
