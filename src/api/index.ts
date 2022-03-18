//const axios = require('axios');
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios';


export const requestApi = async (
    endPoint="",
    payload = {},
    method = "POST",
    headers = {}
) => {
    
    
    const  url="https://reqres.in/api";
    let data=await axios({
        url: `${url}/${endPoint}`, //Endpoint
        method: "get", //Método
        data: payload,
        headers: headers
    });
    return data.data;
};
