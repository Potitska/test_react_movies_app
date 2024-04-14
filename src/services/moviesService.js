import {apiService} from "./apiService";
import {urls} from "../config";

const moviesService = {
    getAll:()=>apiService.get(urls.movies()),
    getMovieById:(id)=>apiService.get(urls.movieById(id)),
    create:(data)=>apiService.post(urls.movies(), data),
    updateById:(id, data)=>apiService.put(urls.movieById(id), data),
    deleteById:(id)=>apiService.delete(urls.movieById(id))
}

export {
    moviesService
}