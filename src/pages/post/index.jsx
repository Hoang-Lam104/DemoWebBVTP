import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getPostById } from "../../api/listPostApi";
import './style.css'
import { replaceImageUrl } from "../../utils"
import { getListPostById } from "../../api/listPostApi"

const Post = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [post, setPost] = useState({})
    const [postList, setPostList] = useState([])

    useEffect(() => {
        getPostById(id).then(response => {
            setPost(response.data)
        })
        window.scrollTo(0, 0)
    }, [id])

    useEffect(() => {
        getListPostById(post.CategoryId, 5).then(response => {
            setPostList(response.data)
        })
    }, [post.CategoryId])

    const onClickPost = (Id) => {
        navigate('/tin-tuc/' + Id)
    }

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
                            <div key={item.Id} className="post_item" onClick={() => onClickPost(item.Id)}>
                                <img alt="" src={replaceImageUrl(item.Image)} />
                                <div className="post_content">
                                    <p style={{fontSize: '20px'}}>{item.TitleTran}</p>
                                    <p style={{fontSize: '14px', fontWeight: 'lighter'}}>{item.DescriptionTrans}</p>
                                    <p style={{fontSize: '12px', fontWeight: 'lighter'}}>{item.CreatedDate}</p>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>        </div>
    )
}

export default Post