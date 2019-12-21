import React from "react";

class OrderComp extends React.Component {
    render() {
        return(
            <div className="order_logo">
                <img src={this.props.image} alt={this.props.name}/>
            </div>
        );
    }
}

export default OrderComp;