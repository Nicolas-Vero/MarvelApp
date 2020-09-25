import axios from 'axios';


const MainAxios = axios.create({
    baseURL: 'http://gateway.marvel.com/v1/public/characters?apikey=5219c647d67dc19881d2766d0f6dd74c&hash=9e354b7b72f423cb1e4a6f69229efe05&ts=1'
   
})



export default MainAxios;

