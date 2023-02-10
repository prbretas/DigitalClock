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

let sourceVideos = [];
sourceVideos[0] = "https://joy1.videvo.net/videvo_files/video/free/2019-04/large_watermarked/190408_03_American_Birds19Hummingbird_05_preview.mp4";
sourceVideos[1] = "https://joy1.videvo.net/videvo_files/video/free/2014-12/large_watermarked/Waterfall_Snow_Background_HD_Footage_preview.mp4";
sourceVideos[2] = "https://joy1.videvo.net/videvo_files/video/free/video0469/large_watermarked/_import_616e6afa247184.71907613_preview.mp4";
sourceVideos[3] = "https://joy1.videvo.net/videvo_files/video/free/2015-11/large_watermarked/409020694_preview.mp4";
sourceVideos[4] = "https://joy1.videvo.net/videvo_files/video/free/2015-08/large_watermarked/PileOfLeaves_preview.mp4";
sourceVideos[5] = "https://joy1.videvo.net/videvo_files/video/free/2016-11/large_watermarked/GOPR6239_1_preview.mp4";
sourceVideos[6] = "https://joy1.videvo.net/videvo_files/video/free/video0461/large_watermarked/_import_60e0167b4c3a96.14254367_preview.mp4";
sourceVideos[7] = "https://joy1.videvo.net/videvo_files/video/free/video0455/large_watermarked/_import_609113a1be0e89.39394997_preview.mp4";
sourceVideos[8] = "https://video.motionplaces.com/motionplaces.com-0035-c040.mp4";
sourceVideos[9] = "https://joy1.videvo.net/videvo_files/video/free/2014-04/large_watermarked/Train_Timelapse_preview.mp4";
sourceVideos[10] = "https://joy1.videvo.net/videvo_files/video/free/2015-07/large_watermarked/A0425_F1502_H2_807_1105_Videvo_preview.mp4";
sourceVideos[11] = "https://joy1.videvo.net/videvo_files/video/free/2017-08/large_watermarked/170728_Berlin_B_031_preview.mp4";
sourceVideos[12] = "https://joy1.videvo.net/videvo_files/video/free/2014-12/large_watermarked/Raindrops_Videvo_preview.mp4";
sourceVideos[13] = "https://joy1.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_01B_Bali_1080p_027_preview.mp4";
sourceVideos[14] = "https://joy1.videvo.net/videvo_files/video/free/2021-04/large_watermarked/210329_01B_Bali_1080p_009_preview.mp4";
sourceVideos[15] = "https://joy1.videvo.net/videvo_files/video/free/2019-05/large_watermarked/190516_06_AZ-LAGOA-30_preview.mp4";
sourceVideos[16] = "https://joy1.videvo.net/videvo_files/video/free/2014-07/large_watermarked/Galaxy_With_Customization_preview.mp4";
sourceVideos[17] = "https://joy1.videvo.net/videvo_files/video/free/2016-05/large_watermarked/506401051_1_preview.mp4";
sourceVideos[18] = "https://joy1.videvo.net/videvo_files/video/free/2016-11/large_watermarked/Smoke_Dark_11_Videvo_preview.mp4";
sourceVideos[19] = "https://video.motionplaces.com/motionplaces.com-0025-c014.mp4";
sourceVideos[20] = "https://video.motionplaces.com/motionplaces.com-0046-c003.mp4";
sourceVideos[21] = "https://video.motionplaces.com/motionplaces.com-0048-c006.mp4";
sourceVideos[22] = "https://video.motionplaces.com/motionplaces.com-0031-c019.mp4";
sourceVideos[23] = "https://video.motionplaces.com/motionplaces.com-0049-c016.mp4";
sourceVideos[24] = "https://video.motionplaces.com/motionplaces.com-0032-c034.mp4";
sourceVideos[25] = "https://video.motionplaces.com/motionplaces.com-0028-c041.mp4";
sourceVideos[26] = "https://video.motionplaces.com/motionplaces.com-0020-c020.mp4";
sourceVideos[27] = "https://video.motionplaces.com/motionplaces.com-0017-c026.mp4";
sourceVideos[28] = "https://joy1.videvo.net/videvo_files/video/free/video0485/large_watermarked/_import_61a855b50a8bb9.21868300_preview.mp4";
sourceVideos[29] = "https://joy1.videvo.net/videvo_files/video/free/2015-08/large_watermarked/Winter_Traffic_preview.mp4";
sourceVideos[30] = "https://joy1.videvo.net/videvo_files/video/free/2017-01/large_watermarked/timelapsed_oviedo_preview.mp4";

//GERAR NUMERO ALEATORIO ENTRE MINIMO E MAXIMO
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

//CHAMANDO A FUNCAO E ATRIBUINDO A UMA VARIAVEL
let numeroAleatorio = getRandomInt(0,30)

//ALTERANDO O ATRIBUTO SRC DO ELEMENTO HTML VIDEO
let videoBackground = document.getElementById("videoBackground")
videoBackground.setAttribute('src', sourceVideos[numeroAleatorio])

//MOSTRAR NO CONSOLE NUMERO ALEATORIO GERADO
console.log("O número do video selecionado é " + numeroAleatorio)