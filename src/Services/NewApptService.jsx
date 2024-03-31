export const createAppointment = (newAppointment) => {
  return fetch("http://localhost:8088/newAppt", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newAppointment),
  });
};
