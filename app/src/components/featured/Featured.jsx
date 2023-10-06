import React from "react";
import s from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
    return(
        <div className={s.container}>
            <h1 className={s.title}>
                <b>Hey devs!</b> Discover our stories and creative ideas for your work.
            </h1>
            <div className={s.post}>
                <div className={s.imgContainer}>
                    <Image src={"/p1.png"} alt={"illustration of a futuristic city"} height={320} width={450} className={s.image}/>
                </div>
                <div className={s.txtContainer}>
                    <h1 className={s.fPostTitle}>Lorem ipsum dolor sit amet, consectetur.</h1>
                    <p className={s.fPostDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam earum, eum molestias tenetur vel.</p>
                    <button className={s.button}>Read More</button>
                </div>
            </div>
        </div>
    )
}
export default Featured;