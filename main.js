const money = document.querySelector(".money");
const span = document.querySelector(".money span");
const years = document.querySelector(".years");
const yearsSpan = document.querySelector(".years span");
const percent = document.querySelector(".percent");
const percentSpan = document.querySelector(".percent span");

const inputField = document.querySelector(".input-field");
const inputYear = document.querySelector(".years input");
const inputPercent = document.querySelector(".percent input");

const right = document.querySelector(".right");

inputField.addEventListener("focus", () => {
  money.classList.add("active");
  span.classList.add("active");
});
inputField.addEventListener("blur", () => {
  money.classList.remove("active");
  span.classList.remove("active");
});

inputYear.addEventListener("focus", () => {
  years.classList.add("active");
  yearsSpan.classList.add("active");
});
inputYear.addEventListener("blur", () => {
  years.classList.remove("active");
  yearsSpan.classList.remove("active");
});

inputPercent.addEventListener("focus", () => {
  percent.classList.add("active");
  percentSpan.classList.add("active");
});
inputPercent.addEventListener("blur", () => {
  percent.classList.remove("active");
  percentSpan.classList.remove("active");
});

const repaymentRadio = document.querySelector(".type .repayment");
const interestRadio = document.querySelector(".type .interest");

repaymentRadio.addEventListener("click", () => {
  repaymentRadio.classList.add("active");
  interestRadio.classList.remove("active");
});
interestRadio.addEventListener("click", () => {
  repaymentRadio.classList.remove("active");
  interestRadio.classList.add("active");
});

const button = document.querySelector("button");
button.addEventListener("click", (e) => {
  if (inputField.value === "" || isNaN(+inputField.value)) {
    document.querySelector(".mortgage").classList.add("show");
    document.querySelector(".money").classList.add("red");
    document.querySelector(".money span").classList.add("red");
  } else {
    document.querySelector(".mortgage").classList.remove("show");
    document.querySelector(".money").classList.remove("red");
    document.querySelector(".money span").classList.remove("red");
  }
  const mortgageAmount = inputField.value; // p
  if (inputYear.value === "" || isNaN(+inputYear.value)) {
    document.querySelector(".year").classList.add("show");
    document.querySelector(".years").classList.add("red");
    document.querySelector(".years span").classList.add("red");
  } else {
    document.querySelector(".year").classList.remove("show");
    document.querySelector(".years").classList.remove("red");
    document.querySelector(".years span").classList.remove("red");
  }
  const years = inputYear.value * 12; //n
  if (inputPercent.value === "" || isNaN(+inputPercent.value)) {
    document.querySelector(".percents").classList.add("show");
    document.querySelector(".percent").classList.add("red");
    document.querySelector(".percent span").classList.add("red");
  } else {
    document.querySelector(".percents").classList.remove("show");
    document.querySelector(".percent").classList.remove("red");
    document.querySelector(".percent span").classList.remove("red");
  }
  const percent = inputPercent.value / 12 / 100; //r
  if (
    document.querySelector(".type #repayment").checked == false &&
    document.querySelector(".type #interest").checked == false
  ) {
    document.querySelector(".final").classList.add("show");
  } else {
    document.querySelector(".final").classList.remove("show");
  }
  e.preventDefault();
  if (document.querySelector(".type #repayment").checked) {
    console.log("Repayment");
    const right = document.querySelector(".right");
    while (right.firstChild) {
      right.removeChild(right.firstChild);
    }

    const repayment = (mortgageAmount * percent * Math.pow(1 + percent, years)) / (Math.pow(1 + percent, years) - 1);
    const repaymentPerMonth = repayment.toFixed(2);
    const totalAmount = repayment * 12 * inputYear.value;
    const total = totalAmount.toFixed(2);

    const h3 = document.createElement("h3");
    h3.textContent = "Your results";
    right.appendChild(h3);

    const p = document.createElement("p");
    p.classList.add("first");
    p.textContent = "Your results are shown below based on the information you provided. To adjust the results, edit the form and click 'calculate repayments' again";
    right.appendChild(p);

    const table = document.createElement("div");
    table.classList.add("table");
    
    const paragraph = document.createElement("p");
    paragraph.textContent = "Your monthly repayments";
    table.appendChild(paragraph);

    const span = document.createElement("span");
    span.textContent = `£${repaymentPerMonth}`;
    table.appendChild(span);

    const hr = document.createElement("hr");
    table.appendChild(hr);

    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "Total you'll repay over the term";
    table.appendChild(paragraph2);

    const span2 = document.createElement("span");
    span2.textContent = `£${total}`;
    table.appendChild(span2);

    right.appendChild(table);
    
  } else if (document.querySelector(".type #interest").checked) {
    console.log("Interest");
    const right = document.querySelector(".right");
    while (right.firstChild) {
      right.removeChild(right.firstChild);
    }

    const repayment = mortgageAmount * percent;
    const repaymentPerMonth = repayment.toFixed(2);
    const totalAmount = repayment * 12 * inputYear.value;
    const total = totalAmount.toFixed(2);

    const h3 = document.createElement("h3");
    h3.textContent = "Your results";
    right.appendChild(h3);

    const p = document.createElement("p");
    p.classList.add("first");
    p.textContent = "Your results are shown below based on the information you provided. To adjust the results, edit the form and click 'calculate repayments' again";
    right.appendChild(p);

    const table = document.createElement("div");
    table.classList.add("table");
    
    const paragraph = document.createElement("p");
    paragraph.textContent = "Your monthly repayments";
    table.appendChild(paragraph);

    const span = document.createElement("span");
    span.textContent = `£${repaymentPerMonth}`;
    table.appendChild(span);

    const hr = document.createElement("hr");
    table.appendChild(hr);

    const paragraph2 = document.createElement("p");
    paragraph2.textContent = "Total you'll repay over the term";
    table.appendChild(paragraph2);

    const span2 = document.createElement("span");
    span2.textContent = `£${total}`;
    table.appendChild(span2);

    right.appendChild(table);
    
  }
});

const anchor = document.querySelector(".heading a");
anchor.addEventListener("click", () => {
  money.classList.remove("active");
  span.classList.remove("active");
  years.classList.remove("active");
  yearsSpan.classList.remove("active");
  percent.classList.remove("active");
  percentSpan.classList.remove("active");
  inputField.value = "";
  inputYear.value = "";
  inputPercent.value = "";
  document.querySelector(".mortgage").classList.remove("show");
  document.querySelector(".year").classList.remove("show");
  document.querySelector(".percents").classList.remove("show");
});
