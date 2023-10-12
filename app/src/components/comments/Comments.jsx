import s from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

const Comments = () => {
    const status = "authenticated"
    return(
        <div className={s.container}>
            <h1 className={s.title}>Comments</h1>
            {status === "authenticated" ? (
                    <div className={s.write}>
                        <textarea placeholder={"write a comment..."} className={s.input}/>
                        <button className={s.button}>Send</button>
                    </div>
            ) :
            (
                <Link href={"/login"}>Login to write a comment</Link>
            )
            }
            <div className={s.comments}>
                <div className={s.comment}>
                    <div className={s.user}>
                        <Image src={"/p2.png"} alt={"user avatar"} width={50} height={50}/>
                        <div className={s.userInfo}>
                            <span className={s.username}>John Doe</span>
                            <span className={s.date}>12/10/2023</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comments;