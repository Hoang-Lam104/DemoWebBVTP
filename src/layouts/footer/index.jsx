import "./style.scss";
import Logo from "../../assets/image/logo_vinh.png";
import { Row, Col } from "antd";

const Footer = ({ config }) => {
    const { Address, Email, Hotline, Phone } = config;
    return (
        <Row className="footer_container">
            <Col span={6}>
                <div className="footer_content">
                    <img alt="" src={Logo} />
                    <div>
                        <p
                            style={{
                                color: "#00864b",
                                margin: "10px 0",
                                fontWeight: "bold",
                                fontSize: "24px",
                            }}
                        >
                            Website chính thức của
                            <br />
                            BVĐK Thành phố Vinh
                        </p>
                        <p style={{ color: "#616161" }}>
                            Chịu Trách Nhiệm Chính:
                        </p>
                        <p style={{ color: "#616161", fontWeight: "bold" }}>
                            BS.CKII. Nguyễn Hồng Trường
                        </p>
                        <p style={{ color: "#616161", fontWeight: "bold" }}>
                            CT HĐQL - Giám Đốc Bệnh Viện
                        </p>
                    </div>
                </div>
            </Col>
            <Col span={6}>
                <div className="footer_content">
                    <p className="title">Trực lãnh đạo bệnh viện</p>
                    <p
                        style={{
                            width: "fit-content",
                            marginTop: "15px",
                            padding: "10px",
                            color: "#00864b",
                            border: "solid 2px #00864b",
                            fontWeight: "bold",
                        }}
                    >
                        0911 176 266
                    </p>
                </div>
            </Col>
            <Col span={6}>
                <div className="footer_content">
                    <p className="title">Liên kết nhanh</p>
                    <ul style={{ lineHeight: "2", marginTop: "30px" }}>
                        <li>Đăng ký khám bệnh</li>
                        <li>Giới thiệu Bệnh viện</li>
                        <li>Giới thiệu Chuyên khoa</li>
                        <li>Đội ngũ chuyên gia</li>
                        <li>Giới thiệu dịch vụ</li>
                        <li>Tin tức & Hoạt động</li>
                    </ul>
                </div>
            </Col>
            <Col span={6}>
                <div className="footer_content">
                    <p className="title">Liên hệ chúng tôi</p>
                    <div>
                        <ul
                            style={{
                                listStyleType: "none",
                                lineHeight: "1.5",
                                marginTop: "30px",
                            }}
                        >
                            <li>
                                <b>Địa chỉ:</b> {Address}
                            </li>
                            <li>
                                <b>Hotline:</b> {Hotline} | <b>Đt:</b> {Phone}{" "}
                            </li>
                            <li>
                                <b>Email:</b> {Email}
                            </li>
                        </ul>
                        <div className="nav">
                            <a
                                href="http://cms.benhvienthanhphovinh.vn/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                CMS
                            </a>
                            <a
                                href="http://internal.benhvienthanhphovinh.vn/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                INTERNAL
                            </a>
                            <a
                                href="http://patient.benhvienthanhphovinh.vn/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                PATIENT
                            </a>
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Footer;
