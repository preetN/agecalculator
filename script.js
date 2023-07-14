function displayage() {
  var monthelm = document.getElementById("month");
  var yearelm = document.getElementById("year");
  var dateelm = document.getElementById("day");
  var d = dateelm.value;
  var m = monthelm.value;
  var y = yearelm.value;
  var date = new Date();
  var date_year = date.getFullYear().toString();
  var date_month = date.getMonth() + 1;
  var date_date = date.getDate();
  resetError(
    dateelm,
    document.getElementById("day_label"),
    document.getElementById("day_error")
  );
  resetError(
    monthelm,
    document.getElementById("month_label"),
    document.getElementById("month_error")
  );
  resetError(
    yearelm,
    document.getElementById("year_label"),
    document.getElementById("year_error")
  );
  var isValidPast = [0, 0, 0];
  if (d === "" && m === "" && y === "") {
    errordisplay(yearelm, document.getElementById("year_label"));
    errordisplay(dateelm, document.getElementById("day_label"));
    errordisplay(monthelm, document.getElementById("month_label"));
    document.getElementById("month_error").innerHTML = "The field is required";
    document.getElementById("day_error").innerHTML = "The field is required";
    document.getElementById("year_error").innerHTML = "The field is required";
  } else if (!(validDate(d) && validMonth(m))) {
    errordisplay(monthelm, document.getElementById("month_label"));
    document.getElementById("month_error").innerHTML = "Must be a valid month";
    errordisplay(yearelm, document.getElementById("year_label"));
    errormessage1(document.getElementById("year_error"));
    errordisplay(dateelm, document.getElementById("day_label"));
    document.getElementById("day_error").innerHTML = "Must be a valid date";
  } else {
    if (Ispast(y, date_year) === "past") {
      display(date_date, date_month, date_year, d, m, y);
    } else if (Ispast(y, date_year) === "current") {
      alert("hun likh code");
    } else {
      errordisplay(yearelm, document.getElementById("year_label"));
      errormessage1(document.getElementById("year_error"));
    }
  }
}
const resetError = (border_elm, clr_elm, msg_elm) => {
  border_elm.style.border = "1px solid hsl(0, 0%, 86%)";
  clr_elm.style.color = "  hsl(0, 1%, 44%)";
  msg_elm.innerHTML = " ";
};
const errordisplay = (elm1, elm2) => {
  elm1.style.border = "1px solid red";
  elm2.style.color = "red";
};
const errormessage1 = (elm) => {
  elm.innerHTML = "Must be in the past";
};
const validDate = (date) => {
  if (date >= 1 && date <= 31) return true;
};
const Ispast = (enteredval, todayvalue) => {
  if (enteredval < todayvalue) return "past";
  else if (enteredval === todayvalue) return "current";
  else return "future";
};
const validMonth = (month) => {
  if (month >= 1 && month <= 12) return true;
};

const checkMonthdays = (month, date) => {
  var month_30 = ["2", "4", "6", "9", "11"];
  if (month_30.includes(month) && date <= "30") {
    return true;
  } else if (!month_30.includes(month) && date <= "31") {
    return true;
  } else {
    return false;
  }
};
const display = (date_date, date_month, date_year, d, m, y) => {
  const arr = [2, 4, 6, 9, 11];
  let y_num = eval(date_year - y);
  let m_num = eval(date_month - m);
  let d_num = eval(date_date - d);
  if (m_num < 0) {
    m_num = m_num + 12;
    y_num = y_num - 1;
  }
  if (d_num < 0) {
    if (arr.includes(m)) {
      d_num = d_num + 30;
    } else {
      d_num = d_num + 31;
    }
    m_num = m_num - 1;
  }

  document.getElementById("day_num").innerHTML = d_num;
  document.getElementById("month_num").innerHTML = m_num;
  document.getElementById("year_num").innerHTML = y_num;
};
