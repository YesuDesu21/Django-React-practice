//interceptor - intercept request we send to automatically add
//correct headers to avoid writing many times
import axios from "axios";
import {ACCESS_TOKEN} from "./constants";

//import anything inside env variable file
const api = axios.create({
    //url of backend server
    baseURL: import.meta.env.VITE_API_URL
});
api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem(ACCESS_TOKEN);
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error)=>{
        return Promise.reject(error)
    }
);
export default api