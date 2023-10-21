'use client'
import s from "./loginPage.module.css";
import {useSession, signIn} from "next-auth/react";
import {useRouter} from "next/navigation";

const LoginPage = () => {

    const {data, status } = useSession();

    const router = useRouter();

    if(status === "loading") {
        return <div className={s.loading}>Loading...</div>
    }

    if(status === "authenticated") {
        router.push("/")
    }
    return (
        <div className={s.container}>
            <div className={s.wrapper}>
             <div className={s.socialButton} onClick={()=> signIn("google")}>Sign in with Google</div>
             <div className={s.socialButton}>Sign in with GitHub</div>
             <div className={s.socialButton}>Sign in with Facebook</div>
            </div>
        </div>
    )
}

export default LoginPage;