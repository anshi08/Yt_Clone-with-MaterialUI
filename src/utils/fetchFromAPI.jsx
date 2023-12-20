import axios from "axios";

const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
    params: {
      maxResults: '50',
    },
    headers: {
      'X-RapidAPI-Key': 'c57cf769e6msh3ad30e8aa5173a6p15e7ecjsna8d07b651732',
      // 'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

async function fetchFromAPI(url) {
try {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    return data;
} catch (error) {
	console.error(error);
}
}

export default fetchFromAPI