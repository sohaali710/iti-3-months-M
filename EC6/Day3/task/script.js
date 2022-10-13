const baseLink = "https://api.themoviedb.org/3";
const path = "/discover/movie?certification_country=US&certification=G&sort_by=popularity.desc";
const APIKey = "&api_key=6eaabb81439b3ad146d593a4f2b7471c";

const URL = baseLink + path + APIKey;

const imgUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

let container = document.getElementsByClassName("container")[0];

function getAnimeMovies(url){
    fetch(url).then(res=>res.json()).then(data=>{

    // console.log(data.results);
    data.results.shift()

    showAnimeMovies(data);

    });
};

getAnimeMovies(URL);

function showAnimeMovies(data){

    data.results.forEach((movie) => {
        const {title, id,poster_path} = movie;

        const myDiv = document.createElement("div");
        myDiv.classList = "myDiv";
        
        myDiv.innerHTML = `
            <a href="movieDetails.html?id=${id}">
                <img src="${imgUrl+ poster_path}">
                <div class="tit">
                    <h4>${title}</h4> 
                </div>
            </a>       `;
        container.append(myDiv);

    })
}
