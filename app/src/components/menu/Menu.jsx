import React from "react";
import s from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
const Menu = () => {
    return(
        <div className={s.container}>
            <h2 className={s.subtitle}>{"What's hot ?"}</h2>
            <h1 className={s.title}>Most Popular</h1>
            <div className={s.items}>
                <Link href={"/page"} className={s.item}>
                    <div className={s.imgContainer}>
                        <Image src={"/p3.png"} alt={"highly detailed female droid"} fill={true} className={s.img}/>
                    </div>
                    <div className={s.txtContainer}>
                        <span className={`${s.category} ${s.travel}`}>Travel</span>
                        <h3 className={s.titlePost}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </h3>
                        <div className={s.details}>
                            <span className={s.author}>John Doe </span>
                            <span className={s.date}> 09/10/2023</span>
                        </div>
                    </div>
                </Link>
                <Link href={"/page"} className={s.item}>
                    <div className={s.imgContainer}>
                        <Image src={"/p3.png"} alt={"highly detailed female droid"} fill={true} className={s.img}/>
                    </div>
                    <div className={s.txtContainer}>
                        <span className={`${s.category} ${s.style}`}>Style</span>
                        <h3 className={s.titlePost}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </h3>
                        <div className={s.details}>
                            <span className={s.author}>John Doe </span>
                            <span className={s.date}> 09/10/2023</span>
                        </div>
                    </div>
                </Link>
                <Link href={"/page"} className={s.item}>
                    <div className={s.imgContainer}>
                        <Image src={"/p3.png"} alt={"highly detailed female droid"} fill={true} className={s.img}/>
                    </div>
                    <div className={s.txtContainer}>
                        <span className={`${s.category} ${s.fashion}`}>Fashion</span>
                        <h3 className={s.titlePost}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </h3>
                        <div className={s.details}>
                            <span className={s.author}>John Doe </span>
                            <span className={s.date}> 09/10/2023</span>
                        </div>
                    </div>
                </Link>
                <Link href={"/page"} className={s.item}>
                    <div className={s.imgContainer}>
                        <Image src={"/p3.png"} alt={"highly detailed female droid"} fill={true} className={s.img}/>
                    </div>
                    <div className={s.txtContainer}>
                        <span className={`${s.category} ${s.code}`}>Code</span>
                        <h3 className={s.titlePost}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </h3>
                        <div className={s.details}>
                            <span className={s.author}>John Doe </span>
                            <span className={s.date}> 09/10/2023</span>
                        </div>
                    </div>
                </Link>
            </div>
            <h2 className={s.subtitle}>Discover by topic</h2>
            <h1 className={s.title}>Categories</h1>
            <div className={s.categoryList}>
                <Link href={"/blog?cat=style"} className={`${s.categoryItems} ${s.style}`}>Style</Link>
                <Link href={"/blog?cat=fashion"} className={`${s.categoryItems} ${s.fashion}`}>Fashion</Link>
                <Link href={"/blog?cat=culture"} className={`${s.categoryItems} ${s.culture}`}>Culture</Link>
                <Link href={"/blog?cat=food"} className={`${s.categoryItems} ${s.food}`}>Food</Link>
                <Link href={"/blog?cat=travel"} className={`${s.categoryItems} ${s.travel}`}>Travel</Link>
                <Link href={"/blog?cat=code"} className={`${s.categoryItems} ${s.code}`}>Code</Link>
            </div>
        </div>
    )
}
export default Menu;