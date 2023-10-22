"use client"

import React from "react";
import s from "./pagination.module.css";
import {useRouter} from "next/navigation";
const Pagination = ({page}) => {

    const router = useRouter()
    return(
        <div className={s.container}>
            <button className={s.button} onClick={()=>router.push(`?page=${page - 1}`)}>Previous</button>
            <button className={s.button} onClick={()=>router.push(`?page=${page + 1}`)}>Next</button>
        </div>
    )
}
export default Pagination;