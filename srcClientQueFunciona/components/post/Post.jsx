import "./post.css"
// import {Link} from "react-router-dom"

export default function Post() {
    return (
        <div className="post">
            <img src="/assets/despieceViga.jpg" alt="" className="postImg" />
            <div className="postInfo">
                <div className="postCats">
                    {/* {post.categories.map((c)=>( */}
                        <span className="postCat">category</span>
                    {/* // ))}                     */}
                </div>
                {/* <Link to={`/post/${post._id}`} className="link"> */}
                    {/*en este caso el post es singular porque así se llamó en Post.jsx */}
                    <span className="postTitle">title</span>
                {/* </Link> */}
                <hr />
                <span className="postDate">1 hour ago</span>
                {/* {new Date(post.createdAt).toDateString()} */}
            </div>
            <p className="postDesc">
                description
            </p>
        </div>
    )
}
