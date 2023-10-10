import React from "react";
import s from "./pagination.module.css";
const Pagination = () => {
    return(
        <div className={s.container}>
            <button className={s.button}>Previous</button>
            <button className={s.button}>Next</button>
        </div>
    )
}
export default Pagination;