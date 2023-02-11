import React from "react";
import Logo1 from "../image/Group 6.svg";
import style from "./Header.module.css";


const Header = () =>{
    return(
        <header className={style.head}>
            <div className={style.container}>
            <img src={Logo1} className={style.log}/>
             <a className={style.login} href='#'>Log in</a>
            </div>
        </header>
    );
};

export default Header;
