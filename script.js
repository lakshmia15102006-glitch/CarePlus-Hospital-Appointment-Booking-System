
const API_URL = "http://localhost:5000/api/appointments";

const form = document.getElementById("appointmentForm");

if (form) {
    form.addEventListener("submit", async function (event) {
        event.preventDefault();

        const appointment = {
            patientName: document.getElementById("patientName").value.trim(),
            email: document.getElementById("email").value.trim(),
            doctor: document.getElementById("doctor").value,
            date: document.getElementById("date").value,
            time: document.getElementById("time").value
        };

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(appointment)
            });

            const result = await response.json();

            if (!response.ok) {
                alert(result.message || "Booking failed. Please try again.");
                return;
            }

            // Supports common backend response formats
            const savedAppointment =
                result.appointment || result.data || result;

            const appointmentId =
                savedAppointment._id || savedAppointment.id;

            if (appointmentId) {
                alert(
                    "Appointment booked successfully!\n" +
                    "Your Appointment ID: " + appointmentId +
                    "\nPlease save this ID to cancel your appointment."
                );
            } else {
                alert(
                    result.message ||
                    "Appointment submitted, but Appointment ID was not returned."
                );
            }

            form.reset();

        } catch (error) {
            console.error("Booking error:", error);
            alert(
                "Unable to connect to the server. " +
                "Check the backend URL and server status."
            );
        }
    });
}

async function cancelAppointment() {
    const idInput = document.getElementById("cancelAppointmentId");
    const message = document.getElementById("cancelMessage");

    const id = idInput.value.trim();

    if (!id) {
        message.textContent = "Please enter your Appointment ID.";
        return;
    }

    if (!confirm("Are you sure you want to cancel this appointment?")) {
        return;
    }

    try {
        const response = await fetch(
            `${API_URL}/${encodeURIComponent(id)}`,
            { method: "DELETE" }
        );

        const result = await response.json();

        if (!response.ok) {
            message.textContent =
                result.message || "Unable to cancel appointment.";
            return;
        }

        message.textContent =
            result.message || "Appointment cancelled successfully!";

        idInput.value = "";

    } catch (error) {
        console.error("Cancellation error:", error);
        message.textContent =
            "Unable to connect to the server. Please try again.";
    }
}
