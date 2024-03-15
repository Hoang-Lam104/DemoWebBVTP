import AxiosClient from "./AxiosClient"
import { API } from "./api.constants"

const getDepartments = () => {
    const url = API.Department
    return AxiosClient.get(url + '/Get', {})
}

const getDepartmentById = (id) => {
    const url = API.Department
    return AxiosClient.get(url + '/Get/' + id, {})
}

export { getDepartments, getDepartmentById }