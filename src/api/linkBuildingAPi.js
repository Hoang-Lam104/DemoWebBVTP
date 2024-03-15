import AxiosClient from "./AxiosClient";
import { API } from "./api.constants";

const getLinks = () => {
    const url = API.LinkBuilding
    return AxiosClient.get(url + '/Get', {})
}

const getLinkById = (id) => {
    const url = API.LinkBuilding
    return AxiosClient.get(url + '/Get/' + id, {})
}

export { getLinks, getLinkById }