"use client"

import React from "react";
import s from "./pagination.module.css";
import {useRouter} from "next/navigation";
const Pagination = ({page, hasPrev, hasNext}) => {

    const router = useRouter()
    return(
        <div className={s.container}>
            <button
                className={s.button}
                onClick={()=>router.push(`?page=${page - 1}`)}
                disabled={!hasPrev}
            >Previous</button>
            <button
                className={s.button}
                onClick={()=>router.push(`?page=${page + 1}`)}
                disabled={!hasNext}
            >Next</button>
        </div>
    )
}
export default Pagination;