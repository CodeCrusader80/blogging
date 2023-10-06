import React from "react";
import s from "./featured.module.css";
const Featured = () => {
    return(
        <div className={s.container}>
            <h1 className={s.title}>
                <b>Hey devs!</b> Discover our stories and creative ideas for your work.
            </h1>
            <div className={s.post}>
                <div className={s.imgContainer}>
                    
                </div>
                <div className={s.txtContainer}></div>
            </div>
        </div>
    )
}
export default Featured;