import React from "react";
import s from "./authLink.module.css";
import Link from "next/link";

const AuthLink = () => {

    const status = "notauthenticated"
    return (
        <>
            {status==="notauthenticated" ? (<Link href={"/login"}>Login</Link>) : (
                <>
                    <Link href={"/write"}>Write</Link>
                    <span className={s.link}>Logout</span>
                </>
            )}
        </>
    )
}

export default AuthLink;