import AppConfig from "./AppConfig";
import Cookies from "js-cookie";

const API_BASE_URL = AppConfig.API_BASE_URL;
const FetchApi = async (url, data, options = {}) => {
    try {
        console.log("My cookies", Cookies.get("jsWebToken"))
        const headers = {
            "token": Cookies.get("jsWebToken")
        }
        if (!options.isForm) {
            headers["Content-Type"] = "application/json";
        }
        const fetchOptions = {
            method: options.method ? options.method : "POST",
            headers: headers,
        };
        if ((options.method === "POST" || options.method === "PATCH") && data) {
            fetchOptions.body = options.isForm ? data : JSON.stringify(data)
        }
        const res = await fetch(API_BASE_URL + url, fetchOptions);
        if (res.status === 200) {
            const data = await res.json();
            return data
        } else {
            return res;
        }
    } catch (error) {
        return error;
    }

}
export default FetchApi;