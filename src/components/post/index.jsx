import { replaceImageUrl } from '../../utils'
import './style.css'

const Post = ({ post }) => {
    const onClickPost = (post) => {

    }

    return (
        <div className="post_item" onClick={() => onClickPost(post)}>
            <div className='post_content'>
                <img alt="" src={replaceImageUrl(post.Image)} />
                <p className="post_title">{post.TitleTran}</p>
                <p className="post_desc">{post.DescriptionTrans}</p>
            </div>
            <div className="post_footer">
                <span>{post.Author}</span>
                <span>{post.CreatedDate}</span>
                <>Xem chi tiết...</>
            </div>
        </div>
    )
}

export default Post