import React from "react"
import {Link} from "react-router-dom";
import "./SpecialSetMenuPage.scss"

class SpecialSetMenePage extends React.Component {
    componentWillMount() {
        
    }

    render() {
        return(
            <div className="special_set_menu_page">
                <div className="sp_nenu_title">
                    <h1>Hon Sushi Special Set Menu</h1>
                    <p>Choose Any 3 Items For $12.95 with Free Miso Soup</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    {/* <p onClick={() => this.props.handlePage("base")}>back</p> */}
                    <Link to="/">back</Link>
                </div>
                <div className="sp_items">
                    {/* <Appetizer /> */}

                </div>
            </div>
        );
    }
}

export default SpecialSetMenePage;