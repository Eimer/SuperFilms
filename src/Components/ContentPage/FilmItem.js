import React, {Component} from 'react';

export class FilmItem extends Component {
  render() {
    let srcImg = ""
    if (this.props.image)
      srcImg = this.props.image.medium
    else {
      srcImg = this.props.altImage
    }
    return (
      <div className={"film-item"}>
        <div className={"img-block"}>
          <img src={srcImg} alt=""/>
        </div>
        <div className={"film-info"}>
          <div>
            <span>{this.props.name}</span>
            <span>{this.props.premiered.substr(0,4)}</span>
          </div>
          <button className={"film-desc"}>
            <span>Cезон: {this.props.season}</span>
            <span>Эпизод: {this.props.episode}</span>
          </button>
        </div>
      </div>
    );
  }
}
