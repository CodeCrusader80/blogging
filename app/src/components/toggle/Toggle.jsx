import React from "react";
import s from "./toggle.module.css";
import Image from "next/image";

const Toggle = () => {
    return (
        <div className={s.container}>
            <Image src={"/moon.png"} alt={"lune"} width={14} height={14}/>
            <div className={s.ball}></div>
            <Image src={"/sun.png"} alt={"soleil"} width={14} height={14}/>
        </div>
    )
}

export default Toggle;