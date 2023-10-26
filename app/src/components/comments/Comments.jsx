"use client"

import s from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
import useSWR from "swr";
import {useSession} from "next-auth/react";

const fetcher = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    if(!res.ok){
        const error = new Error(data.message);
        throw error;
    }
    return data
};

const Comments = ({postSlug}) => {
    const status = useSession()
    const {data,isLoading} = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher )
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
                {isLoading ? "loading" : data?.map((item) => (
                    <div className={s.comment} key={item._id}>
                    <div className={s.user}>
                        {item?.user?.image && <Image src={item.user.image} alt={"user avatar"} width={50} height={50} className={s.image}/>}
                        <div className={s.userInfo}>
                            <span className={s.username}>{item.username}</span>
                            <span className={s.date}>{item.createAt}</span>
                        </div>
                    </div>
                    <p className={s.com}>{item.desc}</p>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Comments;