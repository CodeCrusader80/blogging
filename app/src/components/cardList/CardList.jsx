import React from "react";
import s from "./cardlist.module.css";
import Pagination from "@/app/src/components/pagination/Pagination";
import Image from "next/image";
const CardList = () => {
    return(
        <div className={s.container}>
            <h1 className={s.title}>Recent Posts</h1>
            <div className={s.posts}>
                <div className={s.post}>
                    <div className={s.imgContainer}>
                       <Image src={"/p2.png"} alt={"photo of a woman in a cyberpunk universe"} />
                    </div>
                    <div className={s.txtContainer}>
                        
                    </div>
                </div>
            </div>
        <Pagination/>
        </div>
    )
}
export default CardList;