import axios from "axios";
import { AxiosClientConfig } from "./api.constants.js";

const AxiosClient = axios.create({
    baseURL: AxiosClientConfig.DOMAIN_API,
    headers: {
        "Content-type": AxiosClientConfig.CONTENT_TYPE,
    },
});

export default AxiosClient;
