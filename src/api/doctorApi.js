import AxiosClient from "./AxiosClient";
import { API } from "./api.constants";

const getDoctorList = () => {
    const url = API.DoctorProfile
    return AxiosClient.get(url + '/Get', {})
}

const getDoctorProfile = (id) => {
    const url = API.DoctorProfile
    return AxiosClient.get(url + '/Get/' + id, {})
}

export { getDoctorList, getDoctorProfile }