const baseLink = "https://api.themoviedb.org/3";
const path = "/discover/movie?certification_country=US&certification=G&sort_by=popularity.desc";
const APIKey = "&api_key=6eaabb81439b3ad146d593a4f2b7471c";
// https://api.themoviedb.org/3/discover/movie?certification_country=US&certification=G&sort_by=popularity.desc&api_key=6eaabb81439b3ad146d593a4f2b7471c

const URL = baseLink + path + APIKey;

const imgUrl = "https://image.tmdb.org/t/p/w600_and_h900_bestv2";

let container = document.getElementsByClassName("container")[0];


let selectedMovie = document.getElementsByClassName("selectedMovie")[0];

function getMovieDetails(url) {

    fetch(url).then(res => res.json()).then(data => {

        console.log(data.results);
        console.log(data.results.shift());


        const selectedMovieId = location.search.split("=")[1];

        data.results.forEach(movie => {
            const { title, id, poster_path, overview } = movie;

            if (selectedMovieId == id) {

                fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=6eaabb81439b3ad146d593a4f2b7471c`).then(res => res.json()).then(data2 => {
                    console.log(data2);
                });

                const myMovie = document.createElement("div");
                myMovie.classList = "myMovie";

                myMovie.innerHTML = `
                <img src="${imgUrl + poster_path}">
            `;

                selectedMovie.append(myMovie);


                const details = document.createElement("div");
                details.classList = "details";

                details.innerHTML = `
                <h4>${title}</h4> 
                <h5>${overview}</h5>
            `;

                selectedMovie.append(details);

            }
        });
    });

}

getMovieDetails(URL);