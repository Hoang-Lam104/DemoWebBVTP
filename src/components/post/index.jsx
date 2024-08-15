import { useNavigate } from "react-router-dom";
import { replaceImageUrl } from "../../utils";
import "./style.css";

const Post = ({ post }) => {
    const navigate = useNavigate();

    const onClickPost = (Id) => {
        navigate("/tin-tuc/" + Id);
    };

    return (
        <div className="post_item" onClick={(_) => onClickPost(post.Id)}>
            <div className="post_content">
                <img alt="" src={replaceImageUrl(post.Image)} />
                <p className="post_title">{post.TitleTran}</p>
                <p className="post_desc">{post.DescriptionTrans}</p>
            </div>
            <div className="post_footer">
                <span>{post.Author}</span>
                <span>{post.CreatedDate}</span>
                <span
                    style={{ color: "#03a45e" }}
                    onClick={(_) => onClickPost(post)}
                >
                    Xem chi tiết...
                </span>
            </div>
        </div>
    );
};

export default Post;
