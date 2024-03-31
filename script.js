const form = document.getElementById("form");
const toUnit = document.getElementById("toUnit");
const fromUnit = document.getElementById("fromUnit");
const toValue = document.getElementById("toValue");
const fromValue = document.getElementById("fromValue");

const empty = document.querySelector(".empty");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   const random = Math.ceil(Math.random() * 99);
  //   const getV = random;
  //   console.log(random);

  let artihmatic = "";
  let output = "";

  const get = toUnit.value;
  const set = fromUnit.value;

  const getV = toValue.value;

  if (getV === "") {
    empty.style.visibility = "visible";
    setTimeout(() => {
      empty.style.visibility = "hidden";
    }, 2000);
  } else {

    console.log(toValue.value, fromValue.value, toUnit.value, fromUnit.value);

    if (set === get) {
      const obj = [];
      alert("select unit");
    } else if (get > set) {
      artihmatic = false;
      console.log("multiply");
    } else {
      artihmatic = true;
      console.log("division");
    }

    switch (get) {
      case "1":
        var obj = {
          2: 1000,
          3: 100000,
          4: 1000000,
        };
        output = arithmaticOpt(artihmatic, getV, obj, set);
        break;

      case "2":
        var obj = {
          1: 1000,
          3: 100,
          4: 1000,
        };
        output = arithmaticOpt(artihmatic, getV, obj, set);
        break;

      case "3":
        var obj = {
          1: 100000,
          2: 100,
          4: 10,
        };
        output = arithmaticOpt(artihmatic, getV, obj, set);
        break;

      case "4":
        var obj = {
          1: 1000000,
          2: 1000,
          3: 10,
        };
        output = arithmaticOpt(artihmatic, getV, obj, set);
        break;
    }

    console.log(output);

    function arithmaticOpt(arth, gettedValue, object, index) {
      if (arth) {
        return gettedValue * object[index];
      } else {
        return gettedValue / object[index];
      }
    }

    fromValue.placeholder = output;
  }
});


//animation

window.addEventListener('DOMContentLoaded', (e) => {
    const bodyEl = document.querySelector('.body')
    const overlay = document.querySelector('.overlay')

    setTimeout(() => {
        overlay.style.scale = 0
        overlay.style.fontSize = 0
        overlay.style.opacity = 0

    }, 2000)

    setTimeout(() => {
        bodyEl.style.scale = 1
        bodyEl.style.opacity = 1
    }, 2000)
    

})