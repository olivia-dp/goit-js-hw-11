import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// import  from "./js/pixabay-api";
import createMarkup from "./js/render-functions";


const form = document.querySelector(".search-form");
const imgList = document.querySelector(".img-list");


form.addEventListener("submit", imgSearch);

function imgSearch (event) {
    event.preventDefault();

    const imgName = event.target.elements.imgname.value;
    console.log(imgName);
    
}