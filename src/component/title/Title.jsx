import React from "react";
import style from './Title.module.css';
import Line from '../image/logo1.svg';
import David from '../image/Group 9.svg';

const Title = () =>{
    return(
        <div className={style.tit}>
            <div className={style.container}>
                <img src={Line} className={style.lin}/>
                <img src={David}  className={style.Dav}/>
            </div>
        </div>
    );
};
export default Title;