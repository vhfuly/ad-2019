import axios from 'axios';


const Api = axios.create({baseURL:'https://amigo-api.herokuapp.com/'})


export default Api;