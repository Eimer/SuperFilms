import React, {Component} from 'react';
import {FilmItem} from "./FilmItem";
import {ShowMore} from "./ShowMore";

class FilmsBlock extends Component {
  constructor(props) {
    super(props);
    this.lengthListFilms = 0;
  }


  createFilmsList = () => {
      let filmList = this.props.filmsList.map((value, i) =>
        <FilmItem
          key={i}
          image={value._embedded.show.image}
          altImage={"assets/images/error-img.svg"}
          name={value._embedded.show.name}
          premiered={value._embedded.show.premiered}
          season={value.season}
          episode={value.number}
        />
      );

    if (!this.props.fullList) {
      this.lengthListFilms = filmList.length - 5;
      return filmList.slice(0, 5)
    }
    else
      return filmList
  }

  render() {
    window.scrollTo(0, 0)
    const FilmList = this.createFilmsList();
    return (
      <div className={"films-block"}>
        {FilmList}
        <ShowMore
          changeQuantityFilms={this.props.changeQuantityFilms}
          lenthListFilms={this.lengthListFilms}
          fullList={this.props.fullList}
        />
      </div>
    );
  }
}

export default FilmsBlock;