import React, {Component} from 'react';
import Header from "../Header";
import {CalendarBlock} from "./Calendar";

function MiddleBlock () {
  return (
    <div className={"middle-block"}>
      <img src="./assets/images/tv.svg" alt="Error_img"/>
      <br/>
      <span>Для получения списка сериалов,<br/>
      пожалуйста, выберите<br/>
      необходимый месяц и день
      </span>
    </div>
  )
}

class StartPage extends Component {
  render() {
    return (
      <div className={"start-page"}>
        <Header/>
        <MiddleBlock/>
        <CalendarBlock
          handleChangePage = {this.props.handleChangePage}
        />
      </div>
    );
  }
}

export default StartPage;