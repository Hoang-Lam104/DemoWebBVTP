import AxiosClient from "./AxiosClient";
import { API } from "./api.constants";

const getListPostById = (id, numTop) => {
    const url = API.SPAPost;
    return AxiosClient.get(
        url +
            "/GetListPost?languageCode=vi&priority=1&categoryId=" +
            id +
            "&typeMedia=1&type=1&numTop=" +
            numTop,
    );
};

const getPostById = (id) => {
    const url = API.SPAPost;
    return AxiosClient.get(url + "/Get/" + id);
};

const getPostByPage = (categoryId, pageIndex, numberInPage) => {
    const url = API.SPAPost;
    return AxiosClient.get(
        url +
            "/GetPaging?languageCode=vi&pageIndex=" +
            pageIndex +
            "&numberInPage=" +
            numberInPage +
            "&priority=1&categoryId=" +
            categoryId,
    );
};

export { getListPostById, getPostById, getPostByPage };
