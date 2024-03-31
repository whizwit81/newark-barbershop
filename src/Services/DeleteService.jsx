export const deleteAppointment = (appointment) => {
  return fetch(`http://localhost:8088/newAppt/${appointment.id}`, {
    method: "DELETE",
  });
};
