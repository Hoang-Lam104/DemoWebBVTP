import { useNavigate } from "react-router-dom"
import { replaceImageUrl } from "../../utils"
import './style.css'

const Post2 = ({ post }) => {
    const navigate = useNavigate()

    const onClickPost = (id) => {
        navigate('/tin-tuc/' + id)
    }

    return (
        <div key={post.Id} className="post_item2" onClick={() => onClickPost(post.Id)}>
            <img alt="" src={replaceImageUrl(post.Image)} />
            <div className="post_content">
                <p className="post_title">{post.TitleTran}</p>
                <p style={{ fontSize: '14px', fontWeight: 'lighter' }}>{post.DescriptionTrans}</p>
                <p style={{ fontSize: '12px', fontWeight: 'lighter' }}>{post.CreatedDate}</p>
            </div>
        </div>
    )
}

export default Post2