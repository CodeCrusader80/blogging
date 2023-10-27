'use client'

import s from "./writePage.module.css";
import Image from "next/image";
import {useEffect, useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";

const WritePage = () => {

    const { status } = useSession();

    const router = useRouter();

    const [file, setFile] = useState(null);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    useEffect(() => {
        const upload = ()=> {

        }
        file && upload;
    }, [file]);

    if(status ==="loading") {
        return <div className={s.loading}>Loading...</div>
    }

    if(status === "unauthenticated") {
        router.push("/")
    }
    return (
        <div className={s.container}>
           <input type={"text"} placeholder={"Title"} className={s.input}/>
           <div className={s.editor}>
              <button className={s.button} onClick={() => setOpen(!open)}>
                  <Image src={"/plus-circle.svg"} alt={""} width={16} height={16}/>
              </button>
               {open && (
                   <div className={s.add}>
                       <input
                           type={"file"}
                           id={"image"} onChange={e=>setFile(e.target.files[0])}
                           style={{display:"none"}}
                       />
                       <button className={s.addButton}>
                           <label htmlFor={"image"}>
                               <Image src={"/image.svg"} alt={"add content"} width={16} height={16}/>
                           </label>
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