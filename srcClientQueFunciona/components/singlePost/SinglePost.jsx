// import { useEffect } from "react";
// import { useLocation } from "react-router"
// import axios from "axios"
import "./singlePost.css"


export default function SinglePost() {
    // const location = useLocation();
    // const path = location.pathname.split("/")[2];
    // // const [post, setPost] = useState({})

    // useEffect(()=>{
    //     const getPost = async () => {
    //         const res = await axios.get("/post/" + path);
    //         console.log(res)
    //     }
    //     getPost();
    // },[path])
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="/assets/cercha.jpg" alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Título del Post
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>    
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Nombre del Autor</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, inventore facere animi quo et doloribus quos labore placeat harum maiores facilis atque exercitationem rem non dolorem vitae nihil sapiente quibusdam blanditiis similique. Maxime, illum dicta fugit nostrum soluta similique deleniti voluptate at, repellendus quisquam laborum reprehenderit. Magni, non quos, nam quis asperiores consectetur quod aperiam ea vel accusamus officia inventore libero quas sed dolore quam laboriosam repellat esse veniam magnam sit vitae obcaecati eum nemo. Doloribus architecto consequatur provident fugit, at sed blanditiis deserunt cupiditate! Inventore nostrum incidunt quos neque provident dolorem temporibus minus voluptatibus illum, adipisci repellat cupiditate laudantium.</p>
            </div>
        </div>
    )
}
