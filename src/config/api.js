import axios from 'axios';
const API_URL = 'https://upb-pokedex-agb.herokuapp.com/api/v1/pokedex'

export default axios.create({
    baseURL: API_URL
});