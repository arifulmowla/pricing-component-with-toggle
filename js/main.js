document.getElementById("switch").addEventListener("click", () => {
  var CheckValue = document.getElementById("switch").checked;

  // elements
  var basic = document.getElementById("basic");
  var professional = document.getElementById("professional");
  var master = document.getElementById("master");
  console.log(basic);
  var monthlyPrice = {
    basic: 19.99,
    professional: 24.99,
    master: 39.99,
  };

  var yearlyPrice = {
    basic: 119.99,
    professional: 249.99,
    master: 399.99,
  };

  if (CheckValue == true) {
    updateValue(monthlyPrice);
  } else {
    updateValue(yearlyPrice);
  }

  function updateValue(value) {
    basic.innerHTML = value.basic;
    professional.innerHTML = value.professional;
    master.innerHTML = value.master;
  }
});
