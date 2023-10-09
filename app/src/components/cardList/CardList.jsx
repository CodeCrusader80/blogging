import React from "react";
import s from "./cardlist.module.css";
import Pagination from "@/app/src/components/pagination/Pagination";
import Image from "next/image";
import Card from "@/app/src/components/card/Card";
const CardList = () => {
    return(
        <div className={s.container}>
            <h1 className={s.title}>Recent Posts</h1>
            <div className={s.posts}>
                <div className={s.post}>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        <Pagination/>
        </div>
    )
}
export default CardList;