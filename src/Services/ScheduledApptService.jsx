export const getAppointments = () => {
    return fetch(`http://localhost:8088/newAppt`).then((res) => res.json())
}