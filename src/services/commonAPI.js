import axios, { Axios } from "axios";
import { baseURL } from "./baseURL";

const commonAPI=async(HTTPmethod,endpoint,responceData)=>{

    const apiMethod={
        method:HTTPmethod,
        url:baseURL+endpoint,
        data:responceData
    }


    return await axios(apiMethod).then((responce)=>{
        return responce
    }).catch((error)=>{
        return error
    })
}

export default commonAPI