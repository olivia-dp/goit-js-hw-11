import imgName from "../main.js"
const API_KEY = "46809493-025d46e6636e036ef2e71f554";
const BASE_URL = "https://pixabay.com/api/";



function fetchData (imgName) {
    const params = {
        q,
        image_type: photo,
        orientation: horizontal,
        safesearch: true
        };
   return fetch(`${BASE_URL}?${params}`)
        .then(response => {
            if(!response.ok) {
                throw new Error(response.statusText)
            }

            return response.json();
        })
    }
