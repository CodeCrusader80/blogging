import s from "./writePage.module.css";
import Image from "next/image";
import {useState} from "react";

const WritePage = () => {

    const [open, setOpen] = useState(false)
    return (
        <div className={s.container}>
           <input type={"text"} placeholder={"Title"}/>
           <div className={s.editor}>
              <button className={s.button}>
                  <Image src={"/plus-circle.svg"} alt={"add content"} width={16} height={16}/>
              </button>
               {open && <div className={s.add}>
                   <button className={s.button}>
                       <Image src={"/plus-circle.svg"} alt={"add content"} width={16} height={16}/>
                   </button>
                   <button className={s.button}>
                       <Image src={"/external.svg"} alt={"add external content"} width={16} height={16}/>
                   </button>
                   <button className={s.button}>
                       <Image src={"/video.svg"} alt={"add video"} width={16} height={16}/>
                   </button>
               </div>}
           </div>
        </div>
    )
}

export default WritePage;