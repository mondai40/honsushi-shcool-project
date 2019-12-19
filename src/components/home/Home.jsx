import React from "react";
import "./Home.scss"
import SushiPromo from "../../video/sushi_promo.mp4"

class Home extends React.Component {
    render() {
        return(
            <section id="home" className="home_container">
                {/* <div className="video_bg"></div> */}
                <div className="video_wrap">
                    <video src={SushiPromo} autoPlay loop></video>
                </div>
                <div className="home_description">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    <div className="buttons">
                        <a href="#home" className="button check_menu_button">Check Menu</a>
                        <a href="#order" className="button order_now_button">Order Now</a>
                    </div>
                </div>
                <a href="#about" className="down_arrow_button"><span></span>Scroll</a>
            </section>
        );
    }
}

export default Home;