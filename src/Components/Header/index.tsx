import React from "react";
import './Header.scss';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="header">
            <div>Logo</div>
            <div className="header_menu">
            <Link className="header_menu_span" to={'/artists'}>
                <span>Артисты</span>
            </Link>
            <Link className="header_menu_span" to={'/products'}>
                <span>Продукты</span>
            </Link>
            <Link className="header_menu_span" to={'/live'}>
                <span>Лайв шоу</span>
            </Link>
            <Link className="header_menu_span" to={'/tracks'}>
                <span>Треки</span>
            </Link>
            <Link className="header_menu_span" to={'/credits'}>
                <span>Кредиты</span>
            </Link>
            <Link className="header_menu_span" to={'/about'}>
                <span>О нас</span>
            </Link>

            </div>
        </div>
    )
}

export default Header;