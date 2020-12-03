import React, {useState} from 'react';
import {Calendar} from "react-calendar";

let getFormattedDate = (value) => {
  let resultFormattedDate = ""
  let notFormattedDate = {
    year: value.getFullYear(),
    month: value.getMonth() + 1,
    date: value.getDate(),
  }

  if (notFormattedDate.month < 10)
    notFormattedDate.month = '0' + notFormattedDate.month
  if (notFormattedDate.date < 10)
    notFormattedDate.date = '0' + notFormattedDate.date
  resultFormattedDate += notFormattedDate.year + '-' + notFormattedDate.month + '-' + notFormattedDate.date
  return resultFormattedDate;
}

export function CalendarBlock(props) {
  const [value, onChange] = useState(new Date());

  let chooseDate = (date) => {
    props.handleChangePage(2, getFormattedDate(date));
  }

  return (
    <div>
      <Calendar
        onChange={chooseDate}
        value={value}
        // onClickDay={chooseDate}
      />
    </div>
  );
}
