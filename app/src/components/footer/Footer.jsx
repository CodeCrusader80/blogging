import React from "react";
import s from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
    return(
        <div className={s.container}>
            <div className={s.info}>
                <div className={s.logo}>
                    <Image src={"/logo.png"} alt={"logo"} width={50} height={50}></Image>
                </div>
            </div>
            <div className={s.links}></div>
        </div>
    )
}
export default Footer;