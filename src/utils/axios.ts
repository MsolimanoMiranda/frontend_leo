import axios, {AxiosInstance} from "axios";
import env from "react-dotenv";

const instance: AxiosInstance = axios.create({
    baseURL: env.API_URL_POKEMON,
    headers: {
        "Accept": 'application/json',
        "Content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
    },
});

export default instance;