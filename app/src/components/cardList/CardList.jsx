import React from "react";
import s from "./cardlist.module.css";
import Pagination from "@/app/src/components/pagination/Pagination";
const CardList = () => {
    return(
        <div className={s.container}>Navbar
        <Pagination/>
        </div>
    )
}
export default CardList;