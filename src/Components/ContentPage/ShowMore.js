import React, {Component} from 'react';

export class ShowMore extends Component {
  constructor() {
    super();
    this.buttonText = ''
  }
  changeQuantityFilms = () => {
    this.props.changeQuantityFilms()
  }

  render() {
    if (!this.props.fullList)
      this.buttonText = 'Показать еще +' + this.props.lenthListFilms
    else
      this.buttonText = 'Показать основные'
    return (
      <button className={"show-more"} onClick={this.changeQuantityFilms}>
        {this.buttonText}
      </button>
    );
  }
}
