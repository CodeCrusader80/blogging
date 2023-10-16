'use client'

import s from "./writePage.module.css";
import Image from "next/image";
import {useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";

const WritePage = () => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    return (
        <div className={s.container}>
           <input type={"text"} placeholder={"Title"} className={s.input}/>
           <div className={s.editor}>
              <button className={s.button} onClick={() => setOpen(!open)}>
                  <Image src={"/plus-circle.svg"} alt={""} width={16} height={16}/>
              </button>
               {open && (<div className={s.add}>
                   <button className={s.addButton}>
                       <Image src={"/image.svg"} alt={"add content"} width={16} height={16}/>
                   </button>
                   <button className={s.addButton}>
                       <Image src={"/external.svg"} alt={"add external content"} width={16} height={16}/>
                   </button>
                   <button className={s.addButton}>
                       <Image src={"/video.svg"} alt={"add video"} width={16} height={16}/>
                   </button>
               </div>
               )}
               <ReactQuill theme={"bubble"} value={value} onChange={setValue} placeholder={"Tell your story..."} className={s.textArea}
               />
           </div>
            <button className={s.publish}>Publish</button>
        </div>
    )
}

export default WritePage;