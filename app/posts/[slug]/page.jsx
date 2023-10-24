import s from "./singlePage.module.css";
import Menu from "@/app/src/components/menu/Menu";
import Image from "next/image";
import Comments from "@/app/src/components/comments/Comments";

const getData = async (slug) => {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
        cache: "no-store",
    });

    if(!res.ok){
        throw new Error("Failed")
    }
    return res.json()
};

const SinglePage = async ({params}) => {

    const {slug} = params;
    const data = await getData(slug)
    return (
        <div className={s.container}>
            <div className={s.infoContainer}>
                <div className={s.txtContainer}>
                    <h1 className={s.title}>{data?.title}</h1>
                    <div className={s.user}>
                        {data?.user?.image && <div className={s.userImgContainer}>
                            <Image src={data.user.image} alt={""} fill className={s.userImg}/>
                        </div>}
                        <div className={s.userTxtContainer}>
                            <span className={s.username}>{data?.user.name}</span>
                            <span className={s.date}>11/10/2023</span>
                        </div>
                    </div>
                </div>
                {data?.img && <div className={s.imgContainer}>
                    <Image src={data?.img} alt={""} fill className={s.img}/>
                </div>}
            </div>
            <div className={s.content}>
                <div className={s.post}>
                    <div className={s.description} dangerouslySetInnerHTML={{__html:data?.desc}}/>
                    </div>
                    <div className={s.comment}>
                        <Comments/>
                    </div>
                </div>
                <Menu/>
            </div>
    );
};

export default SinglePage;