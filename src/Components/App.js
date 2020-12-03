import '../App.css';
import React, {Component} from 'react';
import StartPage from "./StartPage/StartPage";
import {ContentPage} from "./ContentPage/ContentPage";

export class App extends Component {
  constructor() {
    super();
    this.state= {
      pageIndex: 1,
      currentDate: "",
      allFilms: false
    }
  }
  componentDidMount() {
    fetch("http://api.tvmaze.com/schedule/full")
      .then((res) => {
        res.json().then((data) => {
          this.setState({
            data:data,
            pageIndex: 1
          })
        })
      }
      ).catch((err) => {
        console.log(err);
      })
  }

  handleChangePage = (pageIndex, currentDate) => {
      this.setState( {
        pageIndex: pageIndex,
        currentDate: currentDate
      })
  }

  render() {
    if (this.state.pageIndex === 1) {
      return (
          <StartPage
            handleChangePage={this.handleChangePage}
          />
      );
    }
    else {
      return (
        <ContentPage
          data={this.state.data}
          date={this.state.currentDate}
          allFilms={this.state.allFilms}
          handleChangePage={this.handleChangePage}
        />
      )
    }
  }
}

