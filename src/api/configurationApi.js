import AxiosClient from "./AxiosClient.js";
import { API } from "./api.constants.js";

const getConfiguration = () => {
    const url = API.Configuration;
    return AxiosClient.get(url + "/Get", {});
};

export { getConfiguration };
