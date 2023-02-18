$.getJSON('data.json',(data) => {
    let movie = data.movies
    const {Poster, Title, Year, Plot, Genre} = data
    $.each(movie , (i,data) => {
        $(".card-container").append(`<div class="card"><img src="${data.Poster}" alt=""><div class="card-content"><h3 class="title">${data.Title}</h3><p class="genre">Genre : ${data.Genre}</p><p class="plot">${data.Plot}</p></div>       <div class="button"><button class="watch-card">Watch</button><button class="trailer-card">Trailer</button></div>`)
    })
})