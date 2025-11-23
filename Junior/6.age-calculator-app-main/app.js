document.addEventListener("DOMContentLoaded", () => {
  // funcion para no sobrepasar length
  let day_input = document.getElementById("dd_input");
  let month_input = document.getElementById("mm_input");
  let year_input = document.getElementById("yy_input");

  let date_inputs = [day_input, month_input, year_input];

  for (let i = 0; i < date_inputs.length; i++) {
    date_inputs[i].addEventListener("input", function () {
      if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
      }

      if (this.value < 1) {
        this.value = "";
      }
    });
  }

  let button = document.getElementById("button");

  button.addEventListener("click", () => {
    let dayValue = parseInt(document.getElementById("dd_input").value);
    let dayValid = false;

    let monthValue = parseInt(document.getElementById("mm_input").value);
    let monthValid = false;

    let yearValue = parseInt(document.getElementById("yy_input").value);
    let yearValid = false;

    // day validation
    if (isNaN(dayValue)) {
      console.log("This field is required");

      dayValid = false;
    } else if (dayValue < 1 || dayValue > 31) {
      console.log("Must be a valid day");
      dayValid = false;
    } else {
      dayValid = true;
    }

    // month validation
    if (isNaN(monthValue)) {
      console.log("This field is required");
      monthValid = false;
    } else if (monthValue < 1 || monthValue > 12) {
      console.log("Must be a valid month");
      monthValid = false;
    } else {
      monthValid = true;
    }

    // year validation
    let date = new Date();
    let actualYear = date.getFullYear();

    if (isNaN(yearValue)) {
      console.log("This field is required");
      yearValid = false;
    } else if (monthValue < 1 || yearValue > actualYear) {
      console.log("Must be in the past");
      yearValid = false;
    } else {
      yearValid = true;
    }

    if (dayValid && monthValid && yearValid) {
      let yourdate = new Date(yearValue, monthValue - 1, dayValue);
      let yourDay = yourdate.getDate();
      let yourMonth = yourdate.getMonth();
      let yourYear = yourdate.getFullYear();

      if (yourDay != dayValue) {
        console.log("Must be a valid day");
      } else {
        console.log("la fecha esta correcta");
      }
    }
  });
});
