import { useEffect, useState } from "react";
import {
    Navigation,
    Pagination,
    Scrollbar,
    A11y,
    Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./style.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { getFeatures } from "../../api/featureApi";
import { getListPostById } from "../../api/listPostApi";
import Slider from "../../components/slider";
import Post from "../../components/post";
import { getDoctorList } from "../../api/doctorApi";
import { base64Image, replaceImageUrl } from "../../utils";
import { getLinks } from "../../api/linkBuildingAPi";
import { getDepartments } from "../../api/departmentApi";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [features, setFeatures] = useState([]);
    const [serviceList, setServiceList] = useState([]);
    const [newList, setNewList] = useState([]);
    const [actionList, setActionList] = useState([]);
    const [charityList, setCharityList] = useState([]);
    const [doctorList, setDoctorList] = useState([]);
    const [links, setLinks] = useState([]);
    const [departments, setDepartments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
        Promise.all([
            getFeatures(),
            getListPostById(35, 3),
            getListPostById(11, 3),
            getListPostById(9, 3),
            getListPostById(10, 3),
            getDoctorList(),
            getLinks(),
            getDepartments(),
        ]).then((response) => {
            setFeatures(response[0].data);
            setServiceList(response[1].data);
            setNewList(response[2].data);
            setActionList(response[3].data);
            setCharityList(response[4].data);
            setDoctorList(response[5].data);
            setLinks(response[6].data);
            setDepartments(response[7].data);
            setLoading(false);
        });
    }, []);

    const onClickFeature = (handler) => {
        console.log("first", handler);
    };

    const onClickDoctor = (Id) => {
        navigate("/bac-si/" + Id);
    };

    const onClickTitle = (id) => {
        navigate("/danh-sach-tin-tuc/" + id);
    };

    if (loading)
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
        <div className="container">
            <div id="slider">
                <Slider />
            </div>
            <div id="feature">
                <div className="feature_items content_section">
                    {features.map((feature) => {
                        return (
                            <div
                                className="feature_item"
                                key={feature.Id}
                                onClick={() => onClickFeature(feature.Handler)}
                            >
                                <img alt="" src={feature.Image} />
                                <p className="title">{feature.Title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div id="service">
                <div className="content_section">
                    <h2
                        className="section_title"
                        onClick={() => onClickTitle(35)}
                    >
                        Dịch vụ kỹ thuật mới
                    </h2>
                    <p className="subtitle">
                        Đặt lịch phẫu thuật cùng với các chuyên gia, bác sỹ đầu
                        ngành Việt Nam với nhiều chuyên ngành
                    </p>
                    <div className="list_post">
                        {serviceList.map((post) => {
                            return <Post key={post.Id} post={post} />;
                        })}
                    </div>
                </div>
            </div>
            <div id="department">
                <div className="content_section" style={{ color: "#f8f8f8" }}>
                    <p className="subtitle">Giới thiệu</p>
                    <h2 className="section_title" style={{ color: "#f8f8f8" }}>
                        Các chuyên khoa của bệnh viện
                    </h2>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        loop={true}
                        spaceBetween={10}
                        slidesPerView={6}
                        navigation
                        autoplay
                        style={{ marginTop: "60px" }}
                    >
                        {departments.map((item) => {
                            return (
                                <SwiperSlide
                                    key={item.Id}
                                    className="department_item"
                                >
                                    {item.Name}
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
            <div id="professor">
                <div className="content_section">
                    <h2 className="section_title">Đội ngũ chuyên gia</h2>
                    <p className="subtitle">
                        Gặp gỡ và tìm hiểu về đội ngũ chuyên gia, bác sỹ hàng
                        đầu và giàu kinh nghiệm tại Bệnh viện Đa khoa Thành phố
                        Vinh
                    </p>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        loop={true}
                        slidesPerView={4}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                        }}
                        navigation
                        style={{ marginTop: "60px" }}
                    >
                        {doctorList.map((doctor) => {
                            return (
                                <SwiperSlide
                                    key={doctor.UserId}
                                    className="pro_item"
                                    onClick={() => onClickDoctor(doctor.UserId)}
                                >
                                    <img
                                        alt=""
                                        src={base64Image(doctor.Image)}
                                    />
                                    <div className="pro_info">
                                        <p className="degree">
                                            {doctor.Degrees}
                                        </p>
                                        <p className="name">{doctor.Name}</p>
                                        <p className="speciality">
                                            {doctor.Speciality}
                                        </p>
                                        <p className="department">
                                            {doctor.DepartmentName}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
            <div id="news">
                <div className="content_section">
                    <h2 className="section_title">Tin tức và hoạt động</h2>
                    <p className="subtitle">
                        Những tin tức được cập nhật hằng ngày từ Bệnh viện Đa
                        khoa thành phố vinh
                    </p>
                    <div className="new_items">
                        <p className="title" onClick={() => onClickTitle(11)}>
                            Báo chí nói về Bệnh viện Đa khoa Thành phố Vinh
                        </p>
                        <div className="list_post">
                            {newList.map((post) => {
                                return <Post key={post.Id} post={post} />;
                            })}
                        </div>
                    </div>
                    <div className="new_items">
                        <p className="title" onClick={() => onClickTitle(9)}>
                            Hoạt động Bệnh viện
                        </p>
                        <div className="list_post">
                            {actionList.map((post) => {
                                return <Post key={post.Id} post={post} />;
                            })}
                        </div>
                    </div>
                    <div className="new_items">
                        <p className="title" onClick={() => onClickTitle(10)}>
                            Góc từ thiện
                        </p>
                        <div className="list_post">
                            {charityList.map((post) => {
                                return <Post key={post.Id} post={post} />;
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div id="subcribe">
                <div
                    className="content_section"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <h2 className="section_title">Đăng ký</h2>
                    <p className="subtitle">
                        Nhận tin tức mới nhất từ Bệnh viện Đa khoa Thành phố
                        Vinh
                    </p>
                    <div className="subcribe">
                        <input
                            type="text"
                            placeholder="Nhập địa chỉ Email của bạn"
                        />
                        <button>ĐĂNG KÝ</button>
                    </div>
                </div>
            </div>
            <div id="links">
                <div className="content_section">
                    <h2 className="section_title">Liên kết Website</h2>
                    <Swiper
                        modules={[
                            Navigation,
                            Pagination,
                            Scrollbar,
                            A11y,
                            Autoplay,
                        ]}
                        spaceBetween={10}
                        loop={true}
                        slidesPerView={4}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                        }}
                        navigation
                        autoplay
                        style={{ marginTop: "50px" }}
                    >
                        {links.map((link) => {
                            return (
                                <SwiperSlide
                                    key={link.Id}
                                    className="link_item"
                                >
                                    <a
                                        target="_blank"
                                        href={link.Url}
                                        rel="noreferrer"
                                    >
                                        <img
                                            alt=""
                                            src={replaceImageUrl(link.Image)}
                                        />
                                    </a>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Home;
