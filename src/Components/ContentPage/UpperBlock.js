import React, {Component} from 'react';

class UpperBlock extends Component {

  getFormattedDate = () => {
    let formattedDate = "";

    formattedDate += this.props.chosenDate.substr(8,2)
    formattedDate += ' '
    switch (this.props.chosenDate.substr(5,2)) {
      case "01":
        formattedDate += "Января"
        break;
      case "02":
        formattedDate += "Февраля"
        break;
      case "03":
        formattedDate += "Марта"
        break;
      case "04":
        formattedDate += "Апреля"
        break;
      case "05":
        formattedDate += "Мая"
        break;
      case "06":
        formattedDate += "Июня"
        break;
      case "07":
        formattedDate += "Июля"
        break;
      case "08":
        formattedDate += "Августа"
        break;
      case "09":
        formattedDate += "Сентября"
        break;
      case "10":
        formattedDate += "Октября"
        break;
      case "11":
        formattedDate += "Ноября"
        break;
      case "12":
        formattedDate += "Декабря"
        break;
    }
    formattedDate += ' '
    formattedDate += this.props.chosenDate.substr(0,4)
    return formattedDate;
  }


  render() {
    return (
      <div className={"upper-block"}>
        <span className={"date-value"}>{this.getFormattedDate()}</span>
      </div>
    );
  }
}

export default UpperBlock;