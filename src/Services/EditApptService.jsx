export const updateAppointment = (editAppointment) => {
  return fetch(`http://localhost:8088/newAppt/${editAppointment.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(editAppointment),
  });
};
