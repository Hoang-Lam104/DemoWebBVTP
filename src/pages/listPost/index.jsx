import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { getPostByPage } from "../../api/listPostApi"
import { Pagination } from "antd"
import './style.css'
import Post2 from "../../components/post2"

const PostList = () => {
    const { id } = useParams()
    const [posts, setPosts] = useState([])
    const [total, setTotal] = useState([])
    const [pageIndex, setPageIndex] = useState(1)

    useEffect(() => {
        window.scroll(0, 0)
        getPostByPage(id, pageIndex, 5).then(response => {
            setPosts(response.data.PostListViewModels)
            setTotal(response.data.TotalItem)
        })
    }, [id, pageIndex])

    console.log("first", posts)

    const onChangePage = (page) => {
        setPageIndex(page)
    }

    return (
        <div className="post_list_container">
            <div className='post_list_header'>
                <p>{posts.length && posts[0].CategoryName}</p>
            </div>
            <div className="post_list_content">
                <div className="post_items">
                    {posts.map(post => {
                        return (
                            <Post2 key={post.id} post={post} />
                        )
                    })}
                </div>
                <Pagination showSizeChanger={false} current={pageIndex} onChange={(page) => onChangePage(page)} total={total} style={{ float: 'right' }} />
            </div>
        </div>
    )
}

export default PostList