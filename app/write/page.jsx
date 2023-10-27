'use client'

import s from "./writePage.module.css";
import Image from "next/image";
import {useEffect, useState} from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
import {useSession} from "next-auth/react";
import {useRouter} from "next/navigation";
import {getStorage, ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {app} from "../src/utils/firebase"


const storage = getStorage(app)

const WritePage = () => {

    const { status } = useSession();

    const router = useRouter();

    const [file, setFile] = useState(null);
    const [media, setMedia] = useState("")
    const [title, setTitle] = useState("")
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");

    useEffect(() => {
        const upload = ()=> {
            const name = new Date().getTime + file.name
            const storageRef = ref(storage, name);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed', (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                switch (snapshot.state) {
                    case 'paused': console.log('Upload is paused');
                        break;
                    case 'running': console.log('Upload is running');
                        break;
                }
            },
                (error) => {},
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        setMedia(downloadURL)
                    });
                }
            );
        };
        file && upload();
    }, [file]);

    if(status ==="loading") {
        return <div className={s.loading}>Loading...</div>
    }

    if(status === "unauthenticated") {
        router.push("/")
    }

    const slugify = (str) =>
    str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/[\s -]+/g, "-")
        .replace(/^-+|-+$/g, "");

    const handleSubmit = async () => {
        const res = await fetch("/api/posts", {
            method: "POST",
            body: JSON.stringify({
                title,
                desc: value,
                img: media,
                slug: slugify(title),
            })
        })
        console.log(res)
    }

    return (
        <div className={s.container}>
           <input type={"text"} placeholder={"Title"} className={s.input} onChange={e=>setTitle(e.target.value)}/>
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
            <button className={s.publish} onClick={handleSubmit}>Publish</button>
        </div>
    )
}

export default WritePage;