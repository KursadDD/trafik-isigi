const buton = document.getElementById("btn");
var time = 16;

buton.onclick = function () {
  var timerId = setInterval(basla, 1000);

  function basla() {
    time--;
    if (time >= 10) {
      const red = document.getElementById("red");
      red.style.backgroundColor = "red";
      red.style.color = "white";
      red.innerHTML = `${time - 10}`;
    }
    if ((time < 10) & (time >= 5)) {
      red.innerHTML = "";
      const yellow = document.getElementById("yellow");
      yellow.style.backgroundColor = "yellow";
      yellow.style.color = "blue";
      yellow.innerHTML = `${time - 5}`;
    }
    if (time < 5) {
      yellow.innerHTML = "";
      const green = document.getElementById("green");
      green.style.backgroundColor = "green";
      green.style.color = "white";
      green.innerHTML = `${time}`;
    }
    if (time <= 0) {
      green.innerHTML = "";
      clearTimeout(timerId);
    }
  }
};
