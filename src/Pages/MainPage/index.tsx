import React from "react"
import Header from "../../components/Header"
import News from "../../components/News"
import Footer from "../../components/Footer"
import './MainPage.scss';


const MainPage = () => {
    return (
        <div className="container">
        <div>
            <Header></Header>
            <News></News>
            <Footer></Footer>
        </div>
        </div>

    )
}

export default MainPage;