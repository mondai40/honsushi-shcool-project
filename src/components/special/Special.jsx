import React from "react";
import "./Special.scss";
import SpecialBase from "./SpecialBase"
import SpecialSetMenuPage from "./SpecialSetMenePage"
import SpecialHappyHourPage from "./SpecialHappyHourPage"

class Special extends React.Component {
    state = {
        pageStatus: "base",
    };

    changePage = (chosenPage) => {
        this.setState({
            pageStatus: chosenPage,
        });
    }

    renderSwitch(page) {
        switch(page) {
            case "base":
                return <SpecialBase handlePage={(newPage) => this.changePage(newPage)}/>
                // break;
            case "specialSetMenu":
                return <SpecialSetMenuPage handlePage={(newPage) => this.changePage(newPage)}/>
                // break;
            case "specialHappyHour":
                return <SpecialHappyHourPage handlePage={(newPage) => this.changePage(newPage)}/>
                // break;
            default:
                return <div>404 Not Found</div>
                // break;
        }
    }

    render() {
        return(
            <section id="special" className="special_container">
                {this.renderSwitch(this.state.pageStatus)}
            </section>
        );
    }
}

export default Special;