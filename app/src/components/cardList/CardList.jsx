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

    const {posts, count} = await getData(page)

    const POST_PER_PAGE = 2;
    const hasPrev = POST_PER_PAGE * (page-1) > 0;
    const hasNext = POST_PER_PAGE * (page-1) + POST_PER_PAGE < count;
    return(
        <div className={s.container}>
            <h1 className={s.title}>Recent Posts</h1>
            <div className={s.posts}>
                {posts?.map((item) => (
                    <Card item={item} key={item._id}/>
                    ))}
            </div>
        <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
        </div>
    )
}
export default CardList;