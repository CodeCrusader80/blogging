import React from "react";
import s from "./cardlist.module.css";
import Pagination from "@/app/src/components/pagination/Pagination";
import Image from "next/image";
import Card from "@/app/src/components/card/Card";

const getData = async (page) => {
    const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
        cache: "no-store",
    });

    if(!res.ok){
        throw new Error("Failed")
    }
    return res.json()
};
const CardList = async({page}) => {

    const data = await getData(page)
    return(
        <div className={s.container}>
            <h1 className={s.title}>Recent Posts</h1>
            <div className={s.posts}>
                {data?.map((item) => (
                    <Card item={item} key={item._id}/>
                    ))}
            </div>
        <Pagination/>
        </div>
    )
}
export default CardList;