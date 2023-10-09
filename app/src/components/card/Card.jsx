import s from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
    return (
        <div className={s.container}>
            <div className={s.imgContainer}>
                <Image src={"/p2.png"} alt={"photo of a woman in a cyberpunk universe"} width={300} height={250}/>
            </div>
            <div className={s.txtContainer}>
                <div className={s.detail}>
                    <span className={s.date}>09/10/2023</span>
                    <span className={s.cat}>Code</span>
                </div>
                <Link href={"/"}>
                <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet cumque delectus, deserunt illo porro tenetur...</p>
                <Link href={"/"}>Read More</Link>
            </div>
        </div>
    )
}

export default Card;