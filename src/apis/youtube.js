import axios from 'axios';

const KEY = 'AIzaSyCXdM4pipBOeMm1ABV4-xIcUGxwDaeROtA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});



