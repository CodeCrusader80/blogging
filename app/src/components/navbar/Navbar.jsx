import React from "react";
import s from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLink from "@/app/src/components/authLink/AuthLink";
import Toggle from "@/app/src/components/toggle/Toggle";
const Navbar = () => {
    return(
        <div className={s.container}>
            <div className={s.social}>
                <Image src={"/facebook.svg"} alt={"facebook logo"} width={24} height={24}/>
                <Image src={"/linkedin.svg"} alt={"LinkedIn logo"} width={23} height={23}/>
                <Image src={"/twitter-x-logo.svg"} alt={"Twitter logo"} width={22} height={22}/>
                <Image src={"/youtube.svg"} alt={"facebook logo"} width={25} height={25}/>
            </div>
            <div className={s.logo}>Blogging</div>
            <div className={s.links}>
                <Toggle/>
                <Link href={"/"}>Home</Link>
                <Link href={"/"}>Contact</Link>
                <Link href={"/"}>About</Link>
                <AuthLink/>
            </div>
        </div>
    )
}
export default Navbar;