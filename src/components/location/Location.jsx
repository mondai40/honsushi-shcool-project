import React from "react";
import "./Location.scss";

class Location extends React.Component {
    render() {
        return(
            <section id="location" className="location_container">
                <h1>LOCATION</h1>
                <div className="location_info">
                    <div className="location_details">
                        <h2>HON <span className="red_letter">SUSHI</span></h2>
                        <p className="address_title">Adress:</p>
                        <p className="address_info">201-4361 Kingsway, Burnaby, BC V5H 1Z9</p>
                        <p className="phne_title">Phone:</p>
                        <p className="phone_info">(604) 800-9909</p>
                        <p className="hours_title">Hours:</p>
                        <p className="hours_info">11:00 a.m. – 11 p.m.(last call: 10:45 p.m.)</p>
                    </div>
                    <div className="location_map">
                        <iframe title="honsushi_map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2605.3856725864284!2d-123.00949718431244!3d49.231176679325856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548676f67888d421%3A0xa0e679aa113a7c60!2s201-4361%20Kingsway%2C%20Burnaby%2C%20BC%20V5H%201Z9!5e0!3m2!1sen!2sca!4v1576886514192!5m2!1sen!2sca"></iframe>
                    </div>
                </div>
            </section>
        );
    }
}

export default Location;