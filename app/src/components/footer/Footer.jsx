import React from "react";
import s from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return(
        <div className={s.container}>
            <div className={s.info}>
                <div className={s.logo}>
                    <Image src={"/logo.png"} alt={"logo"} width={60} height={60} className={s.imgLogo}></Image>
                    <h1 className={s.logoTxt}>Blogging</h1>
                </div>
                <p className={s.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus amet consequuntur cupiditate exercitationem harum laboriosam perspiciatis praesentium sequi ut veritatis?</p>
                <div className={s.icons}>
                    <Image src={"/facebook.svg"} alt={"logo facebook"} width={18} height={18}/>
                    <Image src={"/twitter-x-logo.svg"} alt={"twitter logo"} width={18} height={18}/>
                    <Image src={"/linkedin.svg"} alt={"linkedin logo"} width={18} height={18}/>
                    <Image src={"/youtube.svg"} alt={"youtube logo"} width={18} height={18}/>
                </div>
            </div>
            <div className={s.links}>
                <div className={s.list}>
                    <span className={s.listTitle}>Links</span>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>Blog</Link>
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Contact</Link>
                </div>
                <div className={s.list}>
                    <span className={s.listTitle}>Tags</span>
                    <Link href={"/"}>Style</Link>
                    <Link href={"/"}>Fashion</Link>
                    <Link href={"/"}>Code</Link>
                    <Link href={"/"}>Travel</Link>
                </div>
                <div className={s.list}>
                    <span className={s.listTitle}>Social</span>
                    <Link href={"/"}>Facebook</Link>
                    <Link href={"/"}>LinkedIn</Link>
                    <Link href={"/"}>Twitter</Link>
                    <Link href={"/"}>YouTube</Link>
                </div>
            </div>
        </div>
    )
}
export default Footer;