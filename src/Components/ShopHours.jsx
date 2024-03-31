import "./ShopHours.css";

export const ShopHours = () => {
  return (
    <div className="shopHours-container internal-container">
      <div className="newAppointment-image">
        <img
          className="welcome-image"
          src="./src/Images/NewarkBSsmall.png"
          alt="website-log"
        ></img>
      </div>

      <div className="contact">
        <p className="phone-number">Phone number: 302-555-9988</p>
        <p>Address: 241 S Main st, Newark, DE 19711</p>
      </div>

      <div className="about-us">
        <div className="hours">
          <h2>Hours</h2>
          <p>
            Monday - Closed <br />
            Tuesday - 7am to 6pm <br />
            Wednesday - 7am to 6pm <br />
            Thursday - 7am to 6pm
            <br /> Friday - 7am to 6pm <br />
            Saturday - 8am to 4pm
          </p>
        </div>

        <div className="map">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.810456816851!2d-75.76511892399134!3d39.67647810036078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7abd4bfbaf465%3A0x1256d747e7464618!2s241%20S%20Main%20St%2C%20Newark%2C%20DE%2019711!5e0!3m2!1sen!2sus!4v1711657195001!5m2!1sen!2sus"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
