import React from "react"
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
                    <p onClick={() => this.props.handlePage("base")}>back</p>
                </div>
                <div className="sp_items">
                    {/* <Appetizer /> */}

                </div>
            </div>
        );
    }
}

export default SpecialSetMenePage;