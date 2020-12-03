import React, {Component} from 'react';
import Header from "../Header";
import UpperBlock from "./UpperBlock";
import FilmsBlock from "./FilmsBlock";


export class ContentPage extends Component {

  backToFirstPage = () => {
    this.props.handleChangePage(1);
  }

  changeQuantityFilms = () => {
    if (!this.state.fullList) {
      this.setState({
        fullList: true
      })
    }
    else {
      this.setState({
        fullList: false
      })
    }
  }

  constructor() {
    super();
    this.state = {
      fullList: false
    }
  }
  getNeededFilms = (data) => {
    let filteredData = []
    data.map((item) => {
      if (item.airdate === this.props.date) {
        filteredData.push(item)
      }
    })
  return filteredData
  }

  render() {
    let filmsList = this.getNeededFilms(this.props.data);
    if (filmsList.length > 0) {
      return (
        <div className={"content-page"}>
          <Header/>
          <UpperBlock
            chosenDate={this.props.date}
          />
          <FilmsBlock
            data={this.props.data}
            filmsList={filmsList}
            allFilms={this.props.allFilms}
            changeQuantityFilms={this.changeQuantityFilms}
            fullList={this.state.fullList}
          />
          <button className={"back-btn"} onClick={this.backToFirstPage}>&lsaquo;</button>
        </div>
      );
    }
    else {
      return (
        <div className={"content-page"}>
          <Header/>
          <UpperBlock
            chosenDate={this.props.date}
          />
          <div className={"no-films"}>
            <img src="./assets/images/tv.svg" alt="Error_img"/>
            <span>Извините, нет премьер<br/>на на эту дату</span>
          </div>
          <button className={"back-btn"} onClick={this.backToFirstPage}>&lsaquo;</button>
        </div>
      )
    }
  }
}
