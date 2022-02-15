class MovieTitle extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <style>
        .title-movie{
            color: blue;
        }
        h1 {
            text-align: center;
            margin: 20px;
        }
    </style>
    <div class="row title-movie">
        <div class="col m-2 title">
          <h1>Ardhi Movie DB</h1>
        </div>
    </div>
      `;
  }
}

customElements.define("movie-title", MovieTitle);
