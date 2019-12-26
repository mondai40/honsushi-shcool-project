import React from "react";
import "./OrderComp.scss"

class OrderComp extends React.Component {
    render() {
        return(
            <div className="order_logo">
                <a href={this.props.link}><img src={this.props.image} alt={this.props.name}/></a>
            </div>
        );
    }
}

export default OrderComp;