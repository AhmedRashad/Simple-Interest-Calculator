function compute() {
  const principal = document.getElementById("principal").value;
  const rate = document.getElementById("rate").value;
  const years = document.getElementById("years").value;

  const interest = (principal * years * rate) / 100;
  const year = new Date().getFullYear() + parseInt(years);

  // check if the input is <= 0 then alert the user and focus on the input field
  if (principal <= 0) {
    alert("Enter a positive number");
    document.getElementById("principal").focus();
    return;
  }

  document.getElementById(
    "result"
  ).innerHTML = `<h5>If you deposit <mark>${principal}</mark></h5>
    <h5>at an interest rate of <mark>${rate}</mark>%</h5>
    <h5>You will receive an amount of <mark>${interest}</mark></h5>
    <h5>in the year <mark>${year}</mark></h5>`;
}

function updateRate() {
  var rateval = document.getElementById("rate").value;
  document.getElementById("rate_val").innerText = `${rateval}%`;
}
