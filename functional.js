
// $(document).ready(function(){
//   // var latitude = position.coords.latitude;
//   // var longitude = position.coords.longitude;
//   console.log("js자체는 정상 구동");
//
//   getJSON("https://api.openweathermap.org/data/2.5/weather?id=busan&appid=2f9208d55a53fee47a90364a43a9ef73&units=metric", function(data){
//     var nowWeather = ${data.main.temp};
//
//     alert(`현재 기온 : ${data.main.temp}, 날씨 : ${data.weather[0].main}`);
//     $(".nowTemp").append(data.main.temp+",");
//     $(".nowWeather").append(data.weather[0].main+" 입니다.");
//   });
//
// });

// $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=busan&appid=2f9208d55a53fee47a90364a43a9ef73&units=metric", function(nowWeather){
//   alert(`현재 기온 : ${nowWeather.main.temp}, 날씨 : ${nowWeather.weather[0].main}`);
//   $(".nowTemp").append(nowWeather.main.temp+"℃,");
//   $(".nowWeather").append(nowWeather.weather[0].main+" 입니다.");
// });
//
//
// // ===== 지리정보 불러오기 (Geological API) =====
// navigator.geolocation.getCurrentPosition(function(pos) {
//     console.log(pos);
//     var latitude = pos.coords.latitude;
//     var longitude = pos.coords.longitude;
//     alert("현재 위치는 : " + latitude + ", "+ longitude);
// });
// // ==========
//
//
//
// // ===== 날씨 정보 불러오기 (Openweather API)=====
// var API_KEY = '2f9208d55a53fee47a90364a43a9ef73';
//
// function onGeoOk(position) {
//    var latitude = position.coords.latitude;
//    var longitude = position.coords.longitude;
//
//    fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`,
//    )
//       .then(response => response.json())
//       .then(data => console.log(`현재 기온 : ${data.main.temp}, 날씨 : ${data.weather[0].main}`));
// }
//
// function onGeoError() {
//    alert("지역 에러: 고객님의 위치를 찾을 수 없습니다.");
// }
//
// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
