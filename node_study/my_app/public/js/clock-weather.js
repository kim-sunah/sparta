const h1 = document.getElementById('h1'),
  h2 = document.getElementById('h2'),
  m1 = document.getElementById('m1'),
  m2 = document.getElementById('m2'),
  s1 = document.getElementById('s1'),
  s2 = document.getElementById('s2');
const clockAmPm = document.querySelector('.today-info__ampm');
const weatherImgComp = document.querySelector(
  '.weather-info__main-weather img'
);
const tempComp = document.querySelector('.weather-info__city-info__temp');
const cityComp = document.querySelector('.weather-info__city-info__city');
const dateComp = document.querySelector('.today-info__date');
const weatherImg = [
  '01.png',
  '02.png',
  '03.png',
  '04.png',
  '09.png',
  '10.png',
  '11.png',
  '13.png',
  '50.png',
  'default.png',
];
const money = document.querySelector("#money");

const moneyText = [
  '한 아이의 삶을',
  '바꾸는 일',
  '지금 함께해주세요',
  '기브 me 머니',
  '머니 돈줘',
  'give me money',
  '이래도 안줘?',
  '좋은곳에 쓸 기부금',
  '이게왜되조 기부함',
  '입금처는 조장 지갑'
]

const clock = {
  getClock: function () {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, 0);
    const minutes = String(now.getMinutes()).padStart(2, 0);
    const seconds = String(now.getSeconds()).padStart(2, 0);

    h1.innerText = hours.substring(0, 1);
    h2.innerText = hours.substring(1, 2);
    m1.innerText = minutes.substring(0, 1);
    m2.innerText = minutes.substring(1, 2);
    s1.innerText = seconds.substring(0, 1);
    s2.innerText = seconds.substring(1, 2);
    // money.innerText = moneyText[s2.textContent]
  },
  setDate: function () {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, 0);
    const day = String(today.getDate()).padStart(2, 0);
    const date = `${year}. ${month}. ${day}`;
    dateComp.innerText = date;
  },
};

clock.getClock();
setInterval(() => {
  clock.getClock();
}, 1000);

clock.setDate();

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const API_KEY = "6e0841167fd27ad036eeaba04e3ad39c";
  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

  fetch(api)
    .then((res) => res.json())
    .then((json) => {
      const source = weatherImg.filter(
        (i) => i.substring(0, 2) === json.weather[0].icon.substring(0, 2)
      );
      weatherImgComp.src = `img/weather/${source}`;
      tempComp.innerText = Math.round(json.main.temp) + '°C';
      cityComp.innerText = json.name;
    });
}

function onGeoError() {
  alert('날씨 정보를 불러올 수 없습니다.');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
