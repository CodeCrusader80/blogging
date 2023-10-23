import s from "./blogPage.module.css";
import CardList from "@/app/src/components/cardList/CardList";
import Menu from "@/app/src/components/menu/Menu";

const BlogPage = ({searchParams}) => {

    const page = parseInt(searchParams.page) || 1;
    const {cat} = searchParams;

    return(
        <div className={s.container}>
            <h1 className={s.title}>{cat}</h1>
            <div className={s.content}>
                <CardList page={page} cat={cat}/>
                <Menu/>
            </div>
        </div>
    )
}

export default BlogPage;