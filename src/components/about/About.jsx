import React from "react";
import "./About.scss";
import SushiRoll from "../../img/sushi_roll.jpg"
import SushiChef from "../../img/sushi_chef.jpg"

class About extends React.Component {
    render() {
        return(
            <section id="about" className="about_container">
                <div className="about_left">
                    <img src={SushiChef} alt="sushi_chef" />
                    <img src={SushiRoll} alt="sushi_roll" />
                </div>
                <div className="about_right">
                    <h1>HON <span className="heading_sushi">SUSHI</span> is ...</h1>
                    <p>
                        Hon Sushi is a great place to enjoy lunch or dinner in Vancouver. Our menu includes a diverse selection of mouthwatering Japanese and Korean food for you to enjoy. With a wide array of rolls, noodles, tempura, appetizers, and entrees, it won’t take long for you to find your new favourite dish at Hon Sushi! We invite you to come and check out our restaurant at 4361 Kingsway and discover our exceptional meals.
                        <br /><br />
                        Not sure what to order? Feast on tasty signature rolls like the Popcorn Roll and the Las Vegas Roll. If you enjoy traditional Korean dishes, then you must try the Japchae or the GamJa Tang! Our GamJa Tang is a mouthwatering pork backbone stew with backbones, potatoes, green cabbage leaves (ugeoji), crushed perilla seeds, perilla leaves, spring onions, and garlic. We guarantee this spicy dish will take your taste buds on a magical journey with its deep and robust flavour. If that doesn’t entice you, feast on one of our many Korean-style fried chicken meals such as the Honey Garlic Soy Korean Style Fried Boneless Chicken or the Spicy Sweet Chili Korean Style Fried Boneless Chicken.
                        <br /><br />
                        Are you getting hungry now? Browse our menu to see all our amazing offers and place your favourite food for delivery or take out online from Kojima Sushi! Start ordering now!
                    </p>
                </div>
            </section>
        );
    }
}

export default About;