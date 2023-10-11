import s from "./singlePage.module.css";
import Menu from "@/app/src/components/menu/Menu";
import Image from "next/image";

const SinglePage = () => {
    return (
        <div className={s.container}>
            <div className={s.infoContainer}>
                <div className={s.txtContainer}>
                    <h1 className={s.title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
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
                <div className={s.description}>
                    <div className={s.post}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aut culpa cupiditate dolore doloremque earum eos esse harum hic in inventore, odit quasi quidem quis quod similique veniam veritatis vero!</p>
                        <h5>Lorem ipsum dolor.</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti eligendi officia porro quia ullam! Deleniti doloribus facere neque quia quibusdam quidem quo vel veniam voluptatum. Amet atque esse ex excepturi exercitationem explicabo, impedit in numquam odit perferendis quidem repellendus tenetur.</p>
                    </div>
                </div>
                <Menu/>
            </div>
        </div>
    )
}

export default SinglePage;