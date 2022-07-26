import axios from "axios";
import { URL } from "./URL"

export function Get_Count(route, param) {
    const route_ = URL + route
    console.log(param)
    console.log(route_, "    ", param.$d)
    axios.post(route_, param)
        .then(response => {

        })
        .catch(error => {

            console.error(route, error);
        });

    return "ok"
}