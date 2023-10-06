import React from "react";
import s from "./categorylist.module.css";
import Link from "next/link";
import Image from "next/image";
const CategoryList = () => {
    return(
        <div className={s.container}>
            <h1>Popular Categories</h1>
            <div className={s.categories}>
                <Link href={"/bolg?cat=style"} className={`${s.category} ${s.style}`}>
                    <Image src={"/lifestyle.png"} alt={"illustration style"} width={32} height={32} className={s.image}></Image>
                    Style
                </Link>
                <Link href={"/bolg?cat=fashion"} className={`${s.category} ${s.fashion}`}>
                    <Image src={"/style.png"} alt={"illustration style"} width={32} height={32} className={s.image}></Image>
                    Fashion
                </Link>
                <Link href={"/bolg?cat=culture"} className={`${s.category} ${s.culture}`}>
                    <Image src={"/culture.png"} alt={"illustration style"} width={32} height={32} className={s.image}></Image>
                    Culture
                </Link>
                <Link href={"/bolg?cat=food"} className={`${s.category} ${s.food}`}>
                    <Image src={"/food.png"} alt={"illustration style"} width={32} height={32} className={s.image}></Image>
                   Food
                </Link>
                <Link href={"/bolg?cat=travel"} className={`${s.category} ${s.travel}`}>
                    <Image src={"/travel.png"} alt={"illustration style"} width={32} height={32} className={s.image}></Image>
                    Travel
                </Link>
                <Link href={"/bolg?cat=programming"} className={`${s.category} ${s.programming}`}>
                    <Image src={"/programming.png"} alt={"illustration style"} width={32} height={32} className={s.image}></Image>
                    Programming
                </Link>
            </div>
        </div>
    )
}
export default CategoryList;