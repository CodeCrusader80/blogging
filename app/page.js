import styles from './homepage.module.css'
import Link from "next/link";
import Featured from "@/app/src/components/featured/Featured";
import CategoryList from "@/app/src/components/categoryList/CategoryList";
import CardList from "@/app/src/components/cardList/CardList";
import Menu from "@/app/src/components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
      <Featured/>
      <CategoryList/>
      <div className={styles.content}>
          <CardList/>
          <Menu/>
      </div>
    </div>
  )
}
