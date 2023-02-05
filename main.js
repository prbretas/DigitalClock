let DataAtual = document.getElementById("DataAtual");

date = new Date().toLocaleDateString();
document.getElementById("DataAtual").innerText = date;
DataAtual.style.fontWeight = "bold";
DataAtual.style.fontSize = "2rem";
DataAtual.style.color = "#FFFFFF";
DataAtual.style.fontFamily = "Gruppo, cursive";

let relogio = document.getElementById("Relogio");
relogio.style.fontFamily = "Gruppo, cursive"
relogio.style.fontWeight = "bold";
relogio.style.fontSize = "8rem";
relogio.style.color = "#FFFFFF";

setInterval(showTime, 0000);
function showTime() {
  let relogio = new Date();
  let hora = relogio.getHours();
  let min = relogio.getMinutes();
  let seg = relogio.getSeconds();

  hora = hora < 10 ? "0" + hora : hora;
  min = min < 10 ? "0" + min : min;
  seg = seg < 10 ? "0" + seg : seg;

  let currentTime = hora + ":" + min + ":" + seg;

  document.getElementById("Relogio").innerHTML = currentTime;
}
showTime();

let videoBackground = document.getElementById("videoBackground");


