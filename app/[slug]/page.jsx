import s from "./singlePage.module.css";
import Menu from "@/app/src/components/menu/Menu";
import Image from "next/image";

const SinglePage = () => {
    return (
        <div className={s.container}>
            <div className={s.infoContainer}>
                <div className={s.txtContainer}>
                    <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                    <div className={s.user}>
                        <div className={s.userImgContainer}>
                            <Image src={"/p2.png"} alt={""} fill className={s.userImg}/>
                        </div>
                        <div className={s.userTxtContainer}>
                            <span className={s.username}>John Doe</span>
                            <span className={s.date}>11/10/2023</span>
                        </div>
                    </div>
                </div>
                <div className={s.imgContainer}>
                    <Image src={"/p3.png"} alt={""} fill className={s.img}/>
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