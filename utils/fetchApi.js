import axios from "axios";

export const baseurl ="https://bayut.p.rapidapi.com"

export const fetchApi = async (url) => {
    const {data} = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'a941566125mshfb22faf9f9b9df4p187ccbjsncb411a643acf'
          }
    })
    return data ;
}