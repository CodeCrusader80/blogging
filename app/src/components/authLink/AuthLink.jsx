"use client"

import React, {useState} from "react";
import s from "./authLink.module.css";
import Link from "next/link";
import {signOut} from "next-auth/react";

const AuthLink = () => {

    const [open, setOpen] = useState(false)

    const status = "notauthenticated"
    return (
        <>
            {status==="authenticated" ? (<Link href={"/login"} className={s.link}>Login</Link>) : (
                <>
                    <Link href={"/write"} className={s.link}>Write</Link>
                    <span className={s.link} onClick={signOut}>Logout</span>
                </>
            )}
            <div className={s.burger} onClick={() => setOpen(!open)}>
                <div className={s.line}></div>
                <div className={s.line}></div>
                <div className={s.line}></div>
            </div>
            {open && (
                <div className={s.rMenu}>
                    <Link href={"/"}>Home</Link>
                    <Link href={"/"}>About</Link>
                    <Link href={"/"}>Contact</Link>
                    {status==="notauthenticated" ? (<Link href={"/login"}>Login</Link>) : (
                        <>
                            <Link href={"/write"}>Write</Link>
                            <span className={s.link}>Logout</span>
                        </>
                    )}
                </div>
            )}
        </>
    )
}

export default AuthLink;