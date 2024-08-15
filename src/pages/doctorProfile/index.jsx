import { useParams } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import { getDoctorProfile } from "../../api/doctorApi";
import { base64Image } from "../../utils";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const DoctorProfile = () => {
    const { id } = useParams();
    const [doctor, setDoctor] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        getDoctorProfile(id).then((response) => {
            setDoctor(response.data);
            setIsLoading(false);
        });
    }, [id]);

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
        <div className="profile_container">
            <div className="profile_header">
                <p>Hồ sơ bác sĩ</p>
            </div>
            <div className="profile_content">
                <img alt="" src={base64Image(doctor.Image)} />
                <div className="profile">
                    <p style={{ fontSize: "20px" }}>{doctor.Name}</p>
                    <p>{doctor.Degrees}</p>
                    <h2>Chức vụ:</h2>
                    <p>{doctor.Speciality}</p>
                    <h2>Chuyên khoa:</h2>
                    <p>{doctor.DepartmentName}</p>
                    <h2>Thành tựu:</h2>
                    <p>{doctor.Training}</p>
                    <h2>Lịch làm việc:</h2>
                    <p>{doctor.Workdays}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;
