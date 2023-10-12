import s from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
    return (
        <div className={s.container}>
            <div className={s.imgContainer}>
                <Image src={"/p2.png"} alt={"photo of a woman in a cyberpunk universe"} width={350} height={280} className={s.image}/>
            </div>
            <div className={s.txtContainer}>
                <div className={s.detail}>
                    <span className={s.date}>09/10/2023 - </span>
                    <span className={s.cat}>Code</span>
                </div>
                <Link href={"/page"}>
                <h1 className={s.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                </Link>
                <p className={s.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque delectus, deserunt illo porro tenetur...</p>
                <Link href={"/"} className={s.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card;