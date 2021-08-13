const amount = document.querySelector("#input-amount");
const selectCurrency = document.querySelector("#currency");
const selectTime = document.querySelector("#switch");
const slider = document.getElementById("myRange");
const output = document.getElementById("demo");

const faizler = {
  12: {
    ayliq: {
      azn: 6.0,
      usd: 0,
    },
    muddetinsonu: {
      azn: 6.5,
      usd: 0.1,
    },
  },
  18: {
    ayliq: {
      azn: 6.5,
      usd: 0,
    },
    muddetinsonu: {
      azn: 7.0,
      usd: 0,
    },
  },
  24: {
    ayliq: {
      azn: 7.0,
      usd: 0.2,
    },
    muddetinsonu: {
      azn: 7.5,
      usd: 0.3,
    },
  },
  36: {
    ayliq: {
      azn: 7.5,
      usd: 0.4,
    },
    muddetinsonu: {
      azn: 8.0,
      usd: 0.5,
    },
  },
};


const months = Object.keys(faizler);

function Calculate() {
  let sliderValue = slider.value;
  let selectedMonth = months[sliderValue];
  let selectCurValue = selectCurrency.value;
  let selectTimeValue =  selectTime.checked?"muddetinsonu":"ayliq";
  let percent = faizler[selectedMonth][selectTimeValue][selectCurValue];
  
document.getElementById("percent").innerHTML = percent + " %";
document.getElementById("percent-year").innerHTML = ((amount.value * percent) / 100).toFixed(2) ;
document.getElementById("percent-month").innerHTML =((amount.value * percent) / 100 / 12).toFixed(2) ;
}


amount.addEventListener("input", () => {
  Calculate();
});

selectCurrency.addEventListener("change", () => {
  Calculate();
});

slider.addEventListener("input", () => {
  Calculate();
});

selectTime.addEventListener("change", () => {
  Calculate();
});

slider.addEventListener("input", (event) => {
  let value = event.target.value;
  let selectedMonth = months[value];
  output.innerHTML = selectedMonth;
});


