import React from "react";
import "./Order.scss";
// import SkipTheDishsesLogo from "../../img/SkipLogo.png"
// import doordashLogo from "../../img/doordashLogo.png"
// import UberEatsLogo from "../../img/UberEatsLogo.png"
// import FantuanLogo from "../../img/FantuanLogo.png"

import orderCampList from "./orderCampList";
import OrderComp from "./OrderComp"

class Order extends React.Component {
    render() {
        return(
            <section id="order" className="order_container">
                <h1>Order</h1>
                <div className="order_list">
                    {orderCampList.map((orderCampInfo, index) => {
                        return(
                            <OrderComp image={orderCampInfo.image} name={orderCampInfo.name} key={index} />
                        );
                        
                    })}
                </div>
            </section>
        );
    }
}

export default Order;