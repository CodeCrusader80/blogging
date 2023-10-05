'use client'
import s from "./toggle.module.css";
import Image from "next/image";
import {useContext} from "react";
import {ThemeContext} from "@/app/src/context/ThemeContext";

const Toggle = () => {

    const {toggle, theme} = useContext(ThemeContext)


    return (
        <div className={s.container} onClick={toggle} style={
            theme === "dark" ? {background: "white"} : {background: "#0F172A"}
            }
        >
            <Image src={"/moon.svg"} alt={"lune"} width={14} height={14} style={{left: 5}}/>
            <div className={s.ball}
                 style=
                     {theme === "dark" ? {left:1, background:"#0F172A"} : {right:1, background:"white"}
            }>
            </div>
            <Image src={"/sun.svg"} alt={"soleil"} width={14} height={14}/>
        </div>
    )
}

export default Toggle;