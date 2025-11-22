document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("button");

  button.addEventListener("click", () => {
    let day = parseInt(document.getElementById("dd_input").value);
    valid(day, 31, "dd_input");

    //   let month = parseInt(document.getElementById("mm_input").value);

    //   let year = parseInt(document.getElementById("yy_input").value);

    //   date_result = new Date(year, month - 1, day);
    //   console.log(date_result);

    //   console.log(date_result.getDate());
  });

  function valid(Input, Limit, Id) {
    //   range of number allowed
    if (Input < 0 || Input > Limit) {
      alert(Input);

      clearInput(Id);
    }

    // base clear input fuction
    function clearInput(Id) {
      let input_value = document.getElementById(Id);
      input_value.value = "";
    }
  }

  //   keyup para no poner menor que cero o que sobrepase
  let day_input = document.getElementById("dd_input");
  let month_input = document.getElementById("mm_input");
  let year_input = document.getElementById("yy_input");

  day_input.addEventListener("keyup", () => {
    value = parseInt(day_input.value);
    if (value > 99 || value < 0) {
      day_input.value = "";
      // <---- aqui ponle un error con tailwind
    }
  });

  month_input.addEventListener("keyup", () => {
    value = parseInt(month_input.value);
    if (value > 12 || value < 0) {
      month_input.value = "";
      // <---- aqui ponle un error con tailwind
    }
  });

  year_input.addEventListener("keyup", () => {
    value = parseInt(year_input.value);
    date = new Date();
    actual_year = date.getFullYear();

    if (value > actual_year || value < 0) {
      year_input.value = "";
      // <---- aqui ponle un error con tailwind
    }
  });
});
