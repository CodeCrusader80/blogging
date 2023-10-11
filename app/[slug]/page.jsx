import s from "./singlePage.module.css";
import Menu from "@/app/src/components/menu/Menu";
import Image from "next/image";

const SinglePage = () => {
    return (
        <div className={s.container}>
            <div className={s.infoContainer}>
                <div className={s.txtContainer}></div>
                <div className={s.imgContainer}>
                    <Image src={""} alt={""} fill={true} className={s.img}/>
                </div>
            </div>
            <div className={s.content}>
                <div className={s.post}></div>
                <Menu/>
            </div>
        </div>
    )
}

export default SinglePage;