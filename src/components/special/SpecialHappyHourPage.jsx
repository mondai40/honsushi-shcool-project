import React from "react"
import "./SpecialHappyHourPage.scss"

class SpecialHappyHourPage extends React.Component {
    render() {
        return(
            <div className="special_happy_hour_page">
                <h1>Hon Sushi Happy Hour</h1>
                <p>From 9 p.m. to 11 p.m., all foods and drinks are 20% off</p>
                <p onClick={() => this.props.handlePage("base")}>back</p>
            </div>
        );
    }
}

export default SpecialHappyHourPage;