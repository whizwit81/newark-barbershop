import"./ShopHours.css"

export const ShopHours = () => {
    return (
        <div className="shopHours-container internal-container">
            <h1>

                <span>Newark Barber Shop</span>
            </h1>
            
            <div className="about-us">
                <h2>About us</h2>
                <p>Established in 1957, Newark Barber Shop has been a 
                    cornerstone of the community, offering expert grooming services with a commitment to tradition and excellence. With skilled barbers trained in the art of classic techniques, we provide precision haircuts, traditional shaves, and personalized grooming experiences.
                     Beyond our craftsmanship, we foster a welcoming environment where clients of all generations come together, creating a sense of camaraderie and belonging. As stewards of our legacy, we uphold the highest standards of quality and professionalism, ensuring that every visit to Newark Barber Shop is an experience to cherish.</p>
            </div>
            <div>Monday - Closed
                Tuesday - 7am to 6pm
                Wednesday - 7am to 6pm
                Thursday - 7am to 6pm
                Friday - 7am to 6pm
                Saturday - 8am to 4pm
            </div>
            <div>
                
                <iframe className="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.810456816851!2d-75.76511892399134!3d39.67647810036078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c7abd4bfbaf465%3A0x1256d747e7464618!2s241%20S%20Main%20St%2C%20Newark%2C%20DE%2019711!5e0!3m2!1sen!2sus!4v1711657195001!5m2!1sen!2sus" 
                    >

                </iframe>
            </div>

            <div>
                Address: 241 S Main st, Newark, DE 19711
            </div>

        </div>
    )
}