import React from "react";
import './News.scss';

const News = () => {
    return (
        <div className="news">
            <div className="news_item news_afisha">
                <button className="news_item_button"><h3>Концерты</h3></button>
             </div>
            <div className="news_item news_news">
                <button className="news_item_button"><h3>Новости</h3></button>
            </div>
            <div className="news_item news_relise">
                <button className="news_item_button"><h3>Релизы</h3></button>
            </div>
        </div>
    )
}

export default News;