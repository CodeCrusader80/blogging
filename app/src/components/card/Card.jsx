import s from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = ({key, item}) => {
    return (
        <div className={s.container} key={key}>
            <div className={s.imgContainer}>
                {item.img && <Image src={item.img} alt={"photo of a woman in a cyberpunk universe"} className={s.image}/>}
            </div>
            <div className={s.txtContainer}>
                <div className={s.detail}>
                    <span className={s.date}>{item.createAt.substring(0, 10)} - </span>
                    <span className={s.cat}>{item.catSlug}</span>
                </div>
                <Link href={`/posts/${item.slug}`}>
                <h1 className={s.title}>{item.title}</h1>
                </Link>
                <p className={s.desc}>
                    {item.desc.substring(0, 60)}
                </p>
                <Link href={`/posts/${item.slug}`} className={s.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card;