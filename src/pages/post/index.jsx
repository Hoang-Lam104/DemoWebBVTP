import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getPostById } from "../../api/listPostApi";
import './style.css'
import { getListPostById } from "../../api/listPostApi"
import Post2 from "../../components/post2";

const Post = () => {
    const { id } = useParams()
    const [post, setPost] = useState({})
    const [postList, setPostList] = useState([])

    useEffect(() => {
        getPostById(id).then(response => {
            setPost(response.data)
        })
        window.scrollTo(0, 0)
    }, [id])

    useEffect(() => {
        if (post.CategoryId) {
            getListPostById(post.CategoryId, 5).then(response => {
                setPostList(response.data)
            })
        }
    }, [post])

    return (
        <div className="post_container">
            <div className="post_header">
                <span>{post.Author}</span>
                <span style={{ float: 'right' }}>{post.CreatedDate}</span>
                <h1>{post.TitleTrans}</h1>
            </div>
            <div className="description">
                <p style={{ fontWeight: 'bold' }}>{post.DescriptionTrans}</p>
                <p style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: post?.Detail }} />
            </div>
            <div className="more_post">
                <p>Các tin khác</p>
                <div className="post_items">
                    {postList.filter(item => item.Id != id)
                        .map(item => {
                            return (
                                <Post2 key={item.Id} post={item} />
                            )
                        })}
                </div>
            </div>
        </div>
    )
}

export default Post