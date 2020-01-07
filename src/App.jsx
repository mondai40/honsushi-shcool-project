import React from "react";
import "./css/App.scss"
import Header from "./components/Header/Header";
import Navigation from "./components/navigation/Navigation";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Special from "./components/special/Special";
import Location from "./components/location/Location";
import Order from "./components/order/Order";
import Footer from "./components/footer/Footer";

class App extends React.Component {
    render() {
        return(
            <>
                <Header />
                <Navigation />
                <Home />
                <About />
                <Special />
                <Location />
                <Order />
                <Footer />
            </>
        );
    }
}

export default App;