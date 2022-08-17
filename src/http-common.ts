// @ts-ignore
import axios, {AxiosInstance} from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-type": "application/json",
    },
});


export default apiClient;