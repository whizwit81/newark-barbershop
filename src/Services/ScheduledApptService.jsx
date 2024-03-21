export const getAppointments = () => {
    return fetch(`http://localhost:8088/newAppt`).then((res) => res.json())
}

export const getAppointmentById = (updatedAppt) => {
    return fetch(`http://localhost:8088/newAppt/${updatedAppt}`).then((res) => res.json())
}

export const updateAppointment = (appointmentId, updatedAppointment) => {
    return fetch(`http://localhost:8088/newAppt/${appointmentId.id}`, {
        method: "PUT",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(appointmentId)
    })
};