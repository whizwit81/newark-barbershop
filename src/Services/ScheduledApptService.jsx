export const getAppointments = () => {
    return fetch(`http://localhost:8088/newAppt`).then((res) => res.json())
}

export const updateAppointment = (appointmentId, updatedAppointment) => {
    return fetch(`http://localhost:8088/appointments/${appointmentId}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(updatedAppointment)
    })
};