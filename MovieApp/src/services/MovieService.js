import axios from 'axios';
import {api} from '../constants'


class MoviesService{
    constructor(){
        this.apiUrl = "t=matrix"

        this.axios = axios.create({baseURL: "http://www.omdbapi.com"})
    }
    
    fetchMovies(callback){
        this.axios.get(`?apikey=${api.API_KEY}&t=Matrix`)
            .then((response) => {
                callback(response.data);
            })
            .catch(err => console.error(err));

    }
s

}

export default new MoviesService();