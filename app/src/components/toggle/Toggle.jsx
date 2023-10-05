'use client'
import s from "./toggle.module.css";
import Image from "next/image";
import {useContext} from "react";
import {ThemeContext} from "@/app/src/context/ThemeContext";

const Toggle = () => {

    const {theme} = useContext(ThemeContext)
    

    return (
        <div className={s.container}>
            <Image className={s.moon} src={"/moon.png"} alt={"lune"} width={12} height={12}/>
            <div className={s.ball}></div>
            <Image src={"/sun.png"} alt={"soleil"} width={14} height={14}/>
        </div>
    )
}

export default Toggle;