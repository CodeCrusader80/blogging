import React from "react";
import s from "./navbar.module.css";
import Image from "next/image";
const Navbar = () => {
    return(
        <div className={s.container}>
            <div className={s.social}>
                <Image src={"/facebook.svg"} alt={"facebook logo"} width={24} height={24}/>
                <Image src={"/linkedin.svg"} alt={"LinkedIn logo"} width={23} height={23}/>
                <Image src={"/twitter-x-logo.svg"} alt={"Twitter logo"} width={22} height={22}/>
                <Image src={"/youtube.svg"} alt={"facebook logo"} width={25} height={25}/>
            </div>
            <div className={s.logo}>BloGGing</div>
            <div className={s.links}>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Contact</Link>
                <Link href={"/"}>About</Link>
            </div>
        </div>
    )
}
export default Navbar;