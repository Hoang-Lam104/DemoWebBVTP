import AxiosClient from "./AxiosClient";
import { API } from "./api.constants";

const getSlider = () => {
    const url = API.Slider;
    return AxiosClient.get(url + "/Get", {});
};

export { getSlider };
