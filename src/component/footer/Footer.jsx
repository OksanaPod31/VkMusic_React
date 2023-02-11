import React from "react";
import style from './Footer.module.css';
import Foot from '../image/endvec.svg';

const Footer = () => {
    return(
        <div className={style.foot}>
            <div className={style.container}>
                <img src={Foot} />
            </div>
        </div>
    );
};
export default Footer;
