import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { LoadingOutlined } from '@ant-design/icons';
import { Pagination, Spin } from 'antd';
import './style.css'
import { getPostByPage } from "../../api/listPostApi";
import Post2 from "../../components/post2";

const Departments = () => {
    const pageSize = 4
    const { id } = useParams()
    const [departments, setDepartments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [total, setTotal] = useState(0)
    const [pageIndex, setPageIndex] = useState(1)

    useEffect(() => {
        window.scroll(0, 0)
        setIsLoading(true)
        getPostByPage(id, pageIndex, pageSize).then(response => {
            setDepartments(response.data.PostListViewModels)
            setTotal(response.data.TotalItem)
            setIsLoading(false)
        })
    }, [id, pageIndex])

    const onChangePage = (page) => {
        setPageIndex(page)
    }

    if (isLoading) return (
        <Spin
            indicator={
                <LoadingOutlined
                    style={{ fontSize: 80, color: '#03a45e' }}
                    spin
                />
            }
            style={{ height: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        />
    )

    console.log(total, pageIndex);

    return (
        <div className="departments_container">
            <div className='departments_header'>
                <p>Chuyên Khoa</p>
            </div>
            <div className="departments_content">
                <div className="post_items">
                    {departments.map(post => {
                        return (
                            <Post2 key={post.Id} post={post} />
                        )
                    })}
                </div>
                <Pagination
                    showSizeChanger={false}
                    current={pageIndex}
                    defaultPageSize={pageSize}
                    total={total}
                    style={{ float: 'right' }}
                    onChange={(page) => onChangePage(page)}
                />
            </div>
        </div>
    )
}

export default Departments