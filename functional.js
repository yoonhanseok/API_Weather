

// ===== 지리정보 불러오기 (Geological API) =====
navigator.geolocation.getCurrentPosition(function(pos) {
    console.log(pos);
    var latitude = pos.coords.latitude;
    var longitude = pos.coords.longitude;
    alert("현재 위치는 : " + latitude + ", "+ longitude);
});
// ==========



// ===== 날씨 정보 불러오기 (Openweather API)=====
var API_KEY = '2f9208d55a53fee47a90364a43a9ef73';

function onGeoOk(position) {
   var latitude = position.coords.latitude;
   var longitude = position.coords.longitude;

   // console.log(`You live in ${latitude} and ${longitude}`);

   fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
   )
      .then(response => response.json())
      .then(data => console.log(`온도 : ${data.main.temp}, 날씨 : ${data.weather[0].main}`));
}

function onGeoError() {
   alert("지역 에러: 고객님의 위치를 찾을 수 없습니다.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
