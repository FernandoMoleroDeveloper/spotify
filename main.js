const list = [
    {
        id: 0,
        author: "C.Tangana",
        title: "Me Maten",
        cover: "tangana_cover.png",
        duration: 10
    },
    {
        id: 1,
        author: "Rosalía",
        title: "Despechá",
        cover: "rosalia_cover.png",
        duration: 5
    },
    {
        id: 2,
        author: "Shakira",
        title: "Te felicito",
        cover: "shakira_cover.png",
        duration: 8
    },
    {
        id: 3,
        author: "Quevedo",
        title: "Quédate",
        cover: "quevedo_cover.png",
        duration: 12
    },
    {
        id: 4,
        author: "Bad Bunny",
        title: "Tití me preguntó",
        cover: "bad_cover.png",
        duration: 20
    }
];

const cover = document.querySelector(".music-box__cover");
const song = document.querySelector(".music-box__ref--song");
const singer = document.querySelector(".music-box__ref--singer");
const timerStart = document.querySelector(".music-box__timer--start");
const timerEnd = document.querySelector(".music-box__timer--end");
const bar = document.querySelector(".music-box__bar");
const barRep = document.querySelector(".music-box__bar--rep");
const iconShuffle = document.querySelector(".music-box__icons1-shuffle");
const iconRepeat = document.querySelector(".music-box__icons1-repeat");
const iconPrevious = document.querySelector(".music-box__icons2-previous");
const iconPlay = document.querySelector(".music-box__icons2-play");
const iconNext = document.querySelector(".music-box__icons2-next");


window.onload = function () {
    addEvento();
    changeData();
  };

  let changeData = () => {
    song.textContent = list[order].title;
    singer.textContent = list[order].author;
    cover.setAttribute( 'src',`./assets/${list[order].cover}`);
    timerEnd.textContent = (list[order].duration < 10) ? `00:0${list[order].duration}` : `00:${list[order].duration}`;
    timerStart.textContent = '00:00';
  }
  let increment = () => {
    start = start +1;
    timerStart.textContent = (start < 10) ? `00:0${start}` : `00:${start}`;
    if (start === list[order].duration){
        clearInterval(intervalo);
        start = 0;
    }
    return start;
  }
  

  let order = 0;
  let start = -1;

  let addEvento = () => {
    iconPlay.addEventListener("click", () => gestion('play'));
    iconShuffle.addEventListener("click", () => gestion('shuffle'));
    iconRepeat.addEventListener("click", () => gestion('repeat'));
    iconNext.addEventListener("click", () => gestion('next'));
    iconPrevious.addEventListener("click", () => gestion('previous'));
  }

  let intervalo;

  let gestion = (button) => {
    switch(button){
        case 'play':
            intervalo = setInterval (increment, 1000);
            break;
            case 'shuffle':
            console.log(`he pulsado ${button}`);
            break;
            case 'previous':
            order = (order === 0) ? list.length -1 : order -1;
            changeData();
            start = 0;
            break;
            case 'next':
            order = (order === list.length -1) ? 0 : order +1;
            changeData();
            start = 0;
            break;
            case 'repeat':
            console.log(`he pulsado ${button}`);
            break;
    }
  }

  
 
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
 








