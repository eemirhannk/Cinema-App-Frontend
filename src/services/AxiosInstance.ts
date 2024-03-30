import axios from "axios";

let authToken : string = localStorage.getItem("accessToken") ?? '';

const axiosInstance = axios.create({
    headers : {
        Authorization : `Bearer ${authToken}`
    }
})

export default axiosInstance