import s from "./blogPage.module.css";
import CardList from "@/app/src/components/cardList/CardList";
import Menu from "@/app/src/components/menu/Menu";

const BlogPage = () => {
    return(
        <div className={s.container}>
            <h1 className={s.title}>Blog</h1>
            <div className={s.content}>
                <CardList/>
                <Menu/>
            </div>
        </div>
    )
}

export default BlogPage;