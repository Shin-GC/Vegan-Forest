function showShop() {
  document.querySelector('#map').style.display = 'block';
  document.querySelector('.map-list').style.display = 'block';
  $('#list-box').empty(); // 다른 지역을 누를때마다 기존 리스트 지우기
  let region = event.target.value; // 현재 이벤트가 발생한 객체의 값을 가져오기
  $.ajax({
    type: 'POST',
    url: '/data',
    data: { region: region },
    success: function (response) {
      let positions = [];
      let center_lat;
      let center_lon;
      let test = JSON.parse(response); // Json 문자열을 객체로 변환
      for (let i = 0; i < test.length; i++) {
        let name = test[i]['상호명'];
        let location = test[i]['도로명주소'];
        let latitude = test[i]['위도'];
        let longitude = test[i]['경도'];
        let img = test[i]['이미지'];
        let temp_html = `<div class="list-item"><a href="https://map.naver.com/v5/search/${name}">
                <img src="${img}" onerror="this.src=../static/img/carrot.jpg">
                <p class="shopName">상호명 : ${name}</p>
                <p class="shopAdd">도로명주소 : ${location}</p></a>
                </div>`;

        $('#list-box').append(temp_html);
        positions.push({
          content: `<div style= "width:170px; height: auto;">
                      <div style="padding:10px; text-align:center; color:#000; font-weight:bold;">${name}</div>
                      <div style=" display:block; height:100%; font-weight:600; padding:10px; text-align:center; font-size:15px"><a href="https://map.naver.com/v5/search/${name}" target="_blank">네이버 지도 보기</a></div>
                      </div>`,
          title: name,
          latlng: new kakao.maps.LatLng(latitude, longitude), //가져온 위 경도 값 넣어주기
        });
        center_lat = test[i]['위도'];
        center_lon = test[i]['경도'];
      }
      // for 문 종료

      let mapContainer = document.getElementById('map'), // 지도를 표시할 div
        mapOption = {
          center: new kakao.maps.LatLng(center_lat, center_lon), // 지도의 중심좌표
          level: 7, // 지도의 확대 레벨
        };

      let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다
      let imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png';
      for (var i = 0; i < positions.length; i++) {
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
          map: map, // 마커를 표시할 지도
          position: positions[i].latlng, // 마커의 위치
        });

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
          content: positions[i].content,
          removable: true,
          position: positions[i].latlng,
        });

        // /마커 클릭하면 인포윈도우/
        kakao.maps.event.addListener(marker, 'click', makeClickListener(map, marker, infowindow));

        // /marker click event/
        function makeClickListener(map, marker, infowindow) {
          return function () {
            infowindow.open(map, marker);
          };
        }
      }
      // for 문 종료
    },
    error: function () {
      alert('POST 실패');
    },
  });
}
