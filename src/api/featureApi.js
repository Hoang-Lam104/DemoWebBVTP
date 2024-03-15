import AxiosClient from "./AxiosClient";
import { API } from "./api.constants";

const getFeatures = () => {
    const url = API.Feature
    return AxiosClient.get(url + '/Get', {})
}

export {getFeatures}