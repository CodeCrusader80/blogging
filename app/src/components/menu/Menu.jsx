import React from "react";
import s from "./menu.module.css";
import Link from "next/link";
import Image from "next/image";
const Menu = () => {
    return(
        <div className={s.container}>
            <h2>What's hot ?</h2>
            <h1>Most Popular</h1>
            <div className={s.items}>
                <Link href={"/"} className={s.item}>
                    <div className={s.imgContainer}>
                        <Image src={"/p3.png"} alt={"highly detailed female droid"} width={200} height={150}/>
                    </div>
                    <div className={s.txtContainer}>

                    </div>
                </Link>
            </div>
        </div>
    )
}
export default Menu;