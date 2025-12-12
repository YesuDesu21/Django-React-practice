//interceptor - intercept request we send to automatically add
//correct headers to avoid writing many times
import axios from "axios";
import {ACCESS_TOKEN} from "./constants";
const apiURL = "https://95fdc41d-cac3-42a5-b6a9-20a207ee40b9-dev.e1-us-east-azure.choreoapis.dev/django-react-practice/backend/v1.0"
//import anything inside env variable file
const api = axios.create({
    //url of backend server
    baseURL: import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : apiURL,
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