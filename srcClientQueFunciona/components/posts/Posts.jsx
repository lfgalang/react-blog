import Post from "../post/Post"
import "./posts.css"

export default function Posts() {
    return (
        <div className="posts">
            {/*lee la cantidad de posts y e imprime esa cantidad */}
            {/* {posts.map((p)=>(
                <Post post={p} />
            ))} */}
            <Post/>
            
        </div>
    )
}
