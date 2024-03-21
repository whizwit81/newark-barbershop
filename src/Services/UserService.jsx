import "../Components/OurTeam.css"

export const getBarbers = () => {
    return fetch(`http://localhost:8088/barbers`).then((res) => res.json())
}

export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
      res.json()
    )
  }

  export const getUsers = (currentUser) => {
    return fetch(`http://localhost:8088/users/${currentUser?.id}`).then((res) =>
      res.json()
    )
  }

  export const createUser = (customer) => {
    return fetch("http://localhost:8088/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    }).then((res) => res.json())
  }
  
  
export const NeededBarber = ({barber}) => {
  return (
        <div className="barbers">

          <div>
            <div className="barber-info"></div>
              <img className="barbers-img"src={barber?.img}/>
          </div>
          
          <div>
            <div className="barber-info"></div>
              <div>{barber?.name}</div>
          </div>

          <div>
            <div className="barber-info"></div>
              <div>{barber?.email}</div>
          </div>

          <div>
            <div className="barber-info"></div>
              <div>{barber?.bio}</div>
          </div>

        </div>

  )
}