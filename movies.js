const findMovies = () => {
    $(".card-container").html("")
    $.ajax ({
        url : 'http://www.omdbapi.com',
        type : 'get',
        dataType : 'json',
        data : {
            'apikey' : '22c93e30',
            's': $("#find").val()
        },
        success : function (result) {
            if (result.Response == "True") {
                let movies = result.Search
                console.log(movies)
                $.each(movies, (i,data) => {
                    $(".card-container").append(`<div class="card"><img src="${data.Poster}" alt=""><div class="card-content"><h3 class="title">${data.Title}</h3><p class="genre">${data.Year}</p><div class="button"><button class="watch-card">Watch</button><button class="trailer-card">Trailer</button></div>`)
                })
            }
            else {
                alert("Movie Not Found")
            }
        }
    })
}

$("#btn-find").on('click', () => {
    findMovies()
})
$("#find").on('keyup', (e) => {
    if (e.keyCode === 13) {
        findMovies()
    }
})


