import "../Components/OurTeam.css";

export const getBarbers = () => {
  return fetch(`http://localhost:8088/barbers`).then((res) => res.json());
};

export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
    res.json()
  );
};

export const getUsers = (currentUser) => {
  return fetch(`http://localhost:8088/users/${currentUser?.id}`).then((res) =>
    res.json()
  );
};

export const createUser = (customer) => {
  return fetch("http://localhost:8088/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  }).then((res) => res.json());
};

export const NeededBarber = ({ barber }) => {
  return (
    
    <div className="barbers">
      <div className="barber-info">
        <img className="barbers-img" src={barber?.img} />
      </div>

      <div className="card-details">
        <div className="barber-info">
          <h3 className="barber-name barber-field">{barber?.name}</h3>
        </div>

        <div className="barber-info">
          <p className="barber-bio barber-field">{barber?.bio}</p>
        </div>

        <div className="barber-info">
          <p className="barber-email barber-field">
            <a href="mailto:({barber?.email})">{barber?.email}</a>
          </p>
        </div>
      </div>
    </div>
  );
};
