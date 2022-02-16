$(".search-button").on("click", () => {
  $.ajax({
    url: "https://www.omdbapi.com/?apikey=75923130&s=" + $(".input-keyword").val(),
    success: (results) => {
      const movies = results.Search;
      let cards = "";
      movies.forEach((m) => {
        cards += showCards(m);
      });
      $(".movie-container").html(cards);

      //  Ketika tombol detail di klik
      $(".modal-detail-button").on("click", () => {
        $.ajax({
          url: "http://www.omdbapi.com/?apikey=75923130&i=" + $(this).data("imdbid"),
          success: (m) => {
            const movieDetail = showModals(m);

            $(".modal-body").html(movieDetail);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responText);
    },
  });
});

const showCards = (m) => {
  return `
    <div class="card card text-center modal-lg m-auto" style="width: 15rem;">
        <img src="${m.Poster}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
            <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.imdbID}">Go somewhere</a>
        </div>
    </div>`;
};

const showModals = (m) => {
  return `
    <div class="container-fluid">
    <div class="row">
        <div class="col-md-3">
            <img src="${m.Poster}" class="img-fluid">
            </div>
            <div class="col-md">
            <ul class="list-group">
                <li class="list-group-item"><h4>${m.Title}</h4> (${m.Year})</li>
                <li class="list-group-item"><strong>Director: </strong> ${m.Director}</li>
                <li class="list-group-item"><strong>Actors: </strong> ${m.Actors}</li>
                <li class="list-group-item"><strong>Writter: </strong> ${m.Writer}</li>
                <li class="list-group-item"><strong>Plot : </strong> ${m.Plot}</li>
            </ul>
        </div>
    </div>
    </div>`;
};
