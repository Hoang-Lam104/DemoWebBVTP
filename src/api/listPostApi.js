import AxiosClient from "./AxiosClient";
import { API } from "./api.constants";

const getListPostById = (id) => {
    const url = API.SPAPost
    return AxiosClient.get(url + '/GetListPost?languageCode=vi&priority=1&categoryId=' + id + '&typeMedia=1&type=1&numTop=3')
}

export {getListPostById}