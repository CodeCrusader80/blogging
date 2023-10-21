import React from "react";
import s from "./cardlist.module.css";
import Pagination from "@/app/src/components/pagination/Pagination";
import Image from "next/image";
import Card from "@/app/src/components/card/Card";

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/posts", {
        cache: "no-store",
    });

    if(!res.ok){
        throw new Error("Failed")
    }
    return res.json()
};
const CardList = async() => {

    const data = await getData()
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