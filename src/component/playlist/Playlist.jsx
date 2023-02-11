import React from "react";
import style from './Playlist.module.css';

const Playlist = () =>{
    return(
        <div className={style.play}>
            <div className={style.container}>
                <p>Нужна авторизация для загрузки плейлиста</p>
            </div>
            <div className={style.nextbtn}><a href="#">→</a></div>
        </div>
    );
};
export default Playlist;