import AxiosClient from "./AxiosClient";
import { API } from "./api.constants";

const getMenu = () => {
    const url = API.Category;
    return AxiosClient.get(url + "/GetMenu", {});
};

const getCategoryById = (id) => {
    const url = API.Category;
    return AxiosClient.get(url + "/GetCategory/" + id, {});
};

export { getMenu, getCategoryById };
