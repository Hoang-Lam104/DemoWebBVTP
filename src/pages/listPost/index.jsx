import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getPostByPage } from "../../api/listPostApi";
import { Pagination } from "antd";
import "./style.css";
import Post2 from "../../components/post2";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const PostList = () => {
    const pageSize = 5;
    const { id } = useParams();
    const [posts, setPosts] = useState([]);
    const [total, setTotal] = useState([]);
    const [pageIndex, setPageIndex] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scroll(0, 0);
        setIsLoading(true);
        getPostByPage(id, pageIndex, pageSize).then((response) => {
            setPosts(response.data.PostListViewModels);
            setTotal(response.data.TotalItem);
            setIsLoading(false);
        });
    }, [id, pageIndex]);

    const onChangePage = (page) => {
        setPageIndex(page);
    };

    if (isLoading)
        return (
            <Spin
                indicator={
                    <LoadingOutlined
                        style={{ fontSize: 80, color: "#03a45e" }}
                        spin
                    />
                }
                style={{
                    height: "75vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            />
        );

    return (
        <div className="post_list_container">
            <div className="post_list_header">
                <p>{posts.length && posts[0].CategoryName}</p>
            </div>
            <div className="post_list_content">
                <div className="post_items">
                    {posts.map((post) => {
                        return <Post2 key={post.Id} post={post} />;
                    })}
                </div>
                <Pagination
                    showSizeChanger={false}
                    defaultPageSize={pageSize}
                    current={pageIndex}
                    onChange={(page) => onChangePage(page)}
                    total={total}
                    style={{ float: "right" }}
                />
            </div>
        </div>
    );
};

export default PostList;
