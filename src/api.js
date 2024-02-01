import axios from "axios";

const BASE_URL = "https://api.tvmaze.com";


const api = axios.create({
    baseURL: BASE_URL,
});


export const searchShows = async (query) => {
    try {
        const response = await api.get(`/search/shows?q=${query}`);
        return response.data;
    } catch (error){
        throw  error;
    }
}
